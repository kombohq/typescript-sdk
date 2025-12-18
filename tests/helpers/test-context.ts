import { describe, beforeAll, afterAll, afterEach } from "vitest";
import nock from "nock";
import { Kombo } from "../../src/index";

export interface CapturedRequest {
  method: string;
  path: string;
  headers: Record<string, string>;
  body?: unknown;
}

export interface TestContextOptions {
  apiKey?: string;
  integrationId?: string | undefined;
}

export class TestContext {
  readonly kombo: Kombo;
  #capturedRequests: CapturedRequest[] = [];

  constructor(options?: TestContextOptions) {
    const apiKey = options?.apiKey ?? "test-api-key";
    const integrationId =
      options && "integrationId" in options
        ? options.integrationId
        : "test-integration-id";

    this.kombo = new Kombo({
      api_key: apiKey,
      integration_id: integrationId,
    });
  }

  mockEndpoint(config: {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    path: string;
    response: {
      body: unknown;
      statusCode?: number;
      headers?: Record<string, string>;
    };
    delayResponseMs?: number;
  }): void {
    const { method, path, response } = config;
    const statusCode = response.statusCode ?? 200;

    const nockInstance = nock("https://api.kombo.dev");

    // Set up the appropriate HTTP method
    let interceptor;
    switch (method) {
      case "GET":
        interceptor = nockInstance.get(path);
        break;
      case "POST":
        interceptor = nockInstance.post(path);
        break;
      case "PUT":
        interceptor = nockInstance.put(path);
        break;
      case "DELETE":
        interceptor = nockInstance.delete(path);
        break;
      case "PATCH":
        interceptor = nockInstance.patch(path);
        break;
    }

    // Accept any query parameters for GET requests
    if (method === "GET") {
      interceptor = interceptor.query(true);
    }

    // Add connection delay if specified
    if (config.delayResponseMs !== undefined) {
      interceptor = interceptor.delay(config.delayResponseMs);
    }

    // Set up the reply handler to capture request details
    const capturedRequests = this.#capturedRequests;
    interceptor.reply(function (_uri: string, requestBody: unknown) {
      const req = (this as any).req;

      const captured: CapturedRequest = {
        method: req.method || method,
        path: req.path || "",
        headers: req.headers as Record<string, string>,
      };

      // Capture body for non-GET requests
      if (method !== "GET" && requestBody) {
        captured.body = requestBody;
      }

      capturedRequests.push(captured);

      // Set Content-Type header for JSON responses (unless overridden)
      const headers: Record<string, string> = {};
      if (
        typeof response.body === "object" &&
        !response.headers?.["Content-Type"]
      ) {
        headers["Content-Type"] = "application/json";
      }

      // Merge any provided headers
      if (response.headers) {
        Object.assign(headers, response.headers);
      }

      return [statusCode, response.body, headers];
    });
  }

  getRequests(): CapturedRequest[] {
    return [...this.#capturedRequests];
  }

  getLastRequest(): CapturedRequest {
    const request = this.#capturedRequests[this.#capturedRequests.length - 1];
    if (!request) {
      throw new Error("No requests captured!");
    }

    return request;
  }

  clear(): void {
    this.#capturedRequests.length = 0;
    nock.cleanAll();
  }
}

export function describeSdkSuite(name: string, fn: () => void) {
  describe(name, () => {
    beforeAll(() => {
      nock.disableNetConnect();
    });

    afterEach(() => {
      nock.cleanAll();
    });

    afterAll(() => {
      nock.enableNetConnect();
    });

    fn();
  });
}
