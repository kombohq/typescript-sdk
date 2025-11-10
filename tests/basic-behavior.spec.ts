import { it, expect } from "vitest";
import { TestContext, describeSdkSuite } from "./helpers/test-context";

// TODO: test basic error handling behavior
describeSdkSuite("Basic SDK Behavior", () => {
  it("should include API key in Authorization header", async () => {
    const ctx = new TestContext({ apiKey: "my-custom-api-key" });

    ctx.mockEndpoint({
      method: "GET",
      path: "/v1/ats/jobs",
      response: {
        body: {
          status: "success",
          data: { results: [], next: null },
        },
      },
    });

    const jobs = await ctx.kombo.ats.getJobs({});
    for await (const _page of jobs) {
      break;
    }

    const request = ctx.getLastRequest();
    expect(request?.headers.authorization).toBe("Bearer my-custom-api-key");
  });

  it("should include integration ID in X-Integration-Id header when specified", async () => {
    const ctx = new TestContext({
      apiKey: "test-key",
      integrationId: "my-integration-123",
    });

    ctx.mockEndpoint({
      method: "GET",
      path: "/v1/ats/jobs",
      response: {
        body: {
          status: "success",
          data: { results: [], next: null },
        },
      },
    });

    const jobs = await ctx.kombo.ats.getJobs({});
    for await (const _page of jobs) {
      break;
    }

    const request = ctx.getLastRequest();
    expect(request?.headers["x-integration-id"]).toBe("my-integration-123");
  });

  it("should not include X-Integration-Id header when not provided", async () => {
    const ctx = new TestContext({
      apiKey: "test-key",
      integrationId: undefined,
    });

    ctx.mockEndpoint({
      method: "GET",
      path: "/v1/ats/jobs",
      response: {
        body: {
          status: "success",
          data: { results: [], next: null },
        },
      },
    });

    // TODO: shouldn't this throw an error?
    const jobs = await ctx.kombo.ats.getJobs({});
    for await (const _page of jobs) {
      break;
    }

    const request = ctx.getLastRequest();
    // When integration ID is undefined, the header is not set
    expect(request?.headers["x-integration-id"]).toBeUndefined();
  });

  it("should correctly encode comma-separated query parameters", async () => {
    const ctx = new TestContext();

    ctx.mockEndpoint({
      method: "GET",
      path: "/v1/ats/jobs",
      response: {
        body: {
          status: "success",
          data: {
            results: [],
            next: null,
          },
        },
      },
    });

    // Make the API call
    const _jobs = await ctx.kombo.ats.getJobs({
      statuses: ["OPEN", "CLOSED"],
      ids: ["CPDifhHr7izJhKHmGPkXqknC", "J7znt8TJRiwPVA7paC2iCh8u"],
    });

    // Verify and snapshot the request details
    const request = ctx.getLastRequest();
    expect(request.path).toMatchInlineSnapshot(
      `"/v1/ats/jobs?ids=CPDifhHr7izJhKHmGPkXqknC%2CJ7znt8TJRiwPVA7paC2iCh8u&statuses=OPEN%2CCLOSED&include_deleted=false&page_size=100"`
    );
  });

  it("should correctly encode boolean query parameters", async () => {
    const ctx = new TestContext();

    ctx.mockEndpoint({
      method: "GET",
      path: "/v1/ats/jobs",
      response: {
        body: {
          status: "success",
          data: { results: [], next: null },
        },
      },
    });

    // Test with boolean true
    const jobsWithDeleted = await ctx.kombo.ats.getJobs({
      include_deleted: true,
    });
    for await (const _page of jobsWithDeleted) {
      break;
    }

    const requestWithDeleted = ctx.getLastRequest();
    expect(requestWithDeleted.path).toContain("include_deleted=true");

    ctx.clear();

    ctx.mockEndpoint({
      method: "GET",
      path: "/v1/ats/jobs",
      response: {
        body: {
          status: "success",
          data: { results: [], next: null },
        },
      },
    });

    // Test with boolean false
    const jobsWithoutDeleted = await ctx.kombo.ats.getJobs({
      include_deleted: false,
    });
    for await (const _page of jobsWithoutDeleted) {
      break;
    }

    const requestWithoutDeleted = ctx.getLastRequest();
    expect(requestWithoutDeleted.path).toContain("include_deleted=false");
  });
});
