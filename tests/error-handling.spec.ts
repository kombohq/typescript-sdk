import { it, expect, expectTypeOf, describe } from "vitest";
import { TestContext, describeSdkSuite } from "./helpers/test-context";
import {
  KomboAtsError,
  KomboHrisError,
  KomboGeneralError,
  KomboDefaultError,
  ResponseValidationError,
} from "../src/models/errors";
import { RequestTimeoutError } from "../src/models/errors/httpclienterrors";
import {
  KomboAtsErrorCode,
  KomboHrisErrorCode,
  KomboGeneralErrorCode,
} from "../src/models";

// Test that the SDK properly throws structured KomboAtsError errors
// when the API returns error responses with the correct format.

describeSdkSuite("Error Handling", () => {
  describe("ATS endpoints", () => {
    it("returns KomboAtsError for platform rate limit errors", async () => {
      const ctx = new TestContext();

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/ats/jobs",
        response: {
          statusCode: 429,
          body: {
            status: "error",
            error: {
              code: "PLATFORM.RATE_LIMIT_EXCEEDED",
              title: "Rate limit exceeded",
              message:
                "You have exceeded the rate limit. Please try again later.",
              log_url: "https://app.kombo.dev/logs/abc123",
            },
          },
        },
      });

      try {
        for await (const _page of await ctx.kombo.ats.getJobs({})) {
          break;
        }
        expect.fail("Expected error to be thrown");
      } catch (error) {
        expect(error).toMatchInlineSnapshot(
          `[KomboAtsError: You have exceeded the rate limit. Please try again later.]`
        );
        if (!(error instanceof KomboAtsError)) {
          expect.fail("Expected error to be a KomboAtsError");
        }

        expect(error.data$).toMatchObject({
          error: {
            code: "PLATFORM.RATE_LIMIT_EXCEEDED",
            title: "Rate limit exceeded",
            message:
              "You have exceeded the rate limit. Please try again later.",
            log_url: "https://app.kombo.dev/logs/abc123",
          },
          status: "error",
        });

        expectTypeOf(error.data$).toMatchObjectType<{
          status: "error";
          error: {
            code: KomboAtsErrorCode | null;
            title: string | null;
            message: string;
            log_url: string | null;
          };
        }>();
      }
    });

    it("returns KomboAtsError for ATS-specific job closed errors", async () => {
      const ctx = new TestContext();

      ctx.mockEndpoint({
        method: "POST",
        path: "/v1/ats/jobs/test-job-id/applications",
        response: {
          statusCode: 400,
          body: {
            status: "error",
            error: {
              code: "ATS.JOB_CLOSED",
              title: "Job is closed",
              message:
                "Cannot create application for a closed job. The job must be in an open state.",
              log_url: "https://app.kombo.dev/logs/ghi789",
            },
          },
        },
      });

      try {
        await ctx.kombo.ats.createApplication({
          job_id: "test-job-id",
          body: {
            candidate: {
              first_name: "John",
              last_name: "Doe",
              email_address: "john.doe@example.com",
            },
          },
        });
        expect.fail("Expected error to be thrown");
      } catch (error) {
        expect(error).toMatchInlineSnapshot(
          `[KomboAtsError: Cannot create application for a closed job. The job must be in an open state.]`
        );
        if (!(error instanceof KomboAtsError)) {
          expect.fail("Expected error to be an KomboAtsError");
        }

        expect(error.data$).toMatchObject({
          error: {
            code: "ATS.JOB_CLOSED",
            title: "Job is closed",
            message:
              "Cannot create application for a closed job. The job must be in an open state.",
            log_url: "https://app.kombo.dev/logs/ghi789",
          },
          status: "error",
        });

        expectTypeOf(error.data$).toMatchObjectType<{
          status: "error";
          error: {
            code: KomboAtsErrorCode | null;
            title: string | null;
            message: string;
            log_url: string | null;
          };
        }>();
      }
    });
  });

  describe("HRIS endpoints", () => {
    it("returns KomboHrisError for integration permission errors", async () => {
      const ctx = new TestContext();

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/hris/employees",
        response: {
          statusCode: 403,
          body: {
            status: "error",
            error: {
              code: "INTEGRATION.PERMISSION_MISSING",
              title: "Permission missing",
              message:
                "The integration is missing required permissions to access this resource.",
              log_url: "https://app.kombo.dev/logs/hris-def456",
            },
          },
        },
      });

      try {
        for await (const _page of await ctx.kombo.hris.getEmployees({})) {
          break;
        }
        expect.fail("Expected error to be thrown");
      } catch (error) {
        expect(error).toMatchInlineSnapshot(
          `[KomboHrisError: The integration is missing required permissions to access this resource.]`
        );
        if (!(error instanceof KomboHrisError)) {
          expect.fail("Expected error to be an KomboHrisError");
        }

        expect(error.data$).toMatchObject({
          error: {
            code: "INTEGRATION.PERMISSION_MISSING",
            title: "Permission missing",
            message:
              "The integration is missing required permissions to access this resource.",
            log_url: "https://app.kombo.dev/logs/hris-def456",
          },
          status: "error",
        });

        expectTypeOf(error.data$).toMatchObjectType<{
          status: "error";
          error: {
            code: KomboHrisErrorCode | null;
            title: string | null;
            message: string;
            log_url: string | null;
          };
        }>();
      }
    });
  });

  describe("Assessment endpoints", () => {
    it("returns KomboAtsError for platform input validation errors", async () => {
      const ctx = new TestContext();

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/assessment/orders/open",
        response: {
          statusCode: 400,
          body: {
            status: "error",
            error: {
              code: "PLATFORM.INPUT_INVALID",
              title: "Input invalid",
              message: "The provided input is invalid or malformed.",
              log_url: "https://app.kombo.dev/logs/assessment-xyz",
            },
          },
        },
      });

      try {
        for await (const _page of await ctx.kombo.assessment.getOpenOrders(
          {}
        )) {
          break;
        }
        expect.fail("Expected error to be thrown");
      } catch (error) {
        // Assessment uses KomboAtsError for errors
        expect(error).toMatchInlineSnapshot(
          `[KomboAtsError: The provided input is invalid or malformed.]`
        );
        if (!(error instanceof KomboAtsError)) {
          expect.fail("Expected error to be an KomboAtsError");
        }

        expect(error.data$).toMatchObject({
          error: {
            code: "PLATFORM.INPUT_INVALID",
            title: "Input invalid",
            message: "The provided input is invalid or malformed.",
            log_url: "https://app.kombo.dev/logs/assessment-xyz",
          },
          status: "error",
        });

        expectTypeOf(error.data$).toMatchObjectType<{
          status: "error";
          error: {
            code: KomboAtsErrorCode | null;
            title: string | null;
            message: string;
            log_url: string | null;
          };
        }>();
      }
    });
  });

  describe("General endpoints", () => {
    it("returns KomboGeneralError for authentication errors", async () => {
      const ctx = new TestContext();

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/check-api-key",
        response: {
          statusCode: 401,
          body: {
            status: "error",
            error: {
              code: "PLATFORM.AUTHENTICATION_INVALID",
              title: "Authentication invalid",
              message: "The provided API key is invalid or expired.",
              log_url: "https://app.kombo.dev/logs/general-auth-123",
            },
          },
        },
      });

      try {
        await ctx.kombo.general.checkApiKey();
        expect.fail("Expected error to be thrown");
      } catch (error) {
        // General endpoints use KomboGeneralError for errors
        expect(error).toMatchInlineSnapshot(
          `[KomboGeneralError: The provided API key is invalid or expired.]`
        );
        if (!(error instanceof KomboGeneralError)) {
          expect.fail("Expected error to be an KomboGeneralError");
        }

        expect(error.data$).toMatchObject({
          error: {
            code: "PLATFORM.AUTHENTICATION_INVALID",
            title: "Authentication invalid",
            message: "The provided API key is invalid or expired.",
            log_url: "https://app.kombo.dev/logs/general-auth-123",
          },
          status: "error",
        });

        expectTypeOf(error.data$).toMatchObjectType<{
          status: "error";
          error: {
            code: KomboGeneralErrorCode | null;
            title: string | null;
            message: string;
            log_url: string | null;
          };
        }>();
      }
    });
  });
  describe("Unexpected response formats", () => {
    describe("KomboDefaultError thrown for non-JSON responses", () => {
      it("handles plain text 500 error from load balancer", async () => {
        const ctx = new TestContext();

        ctx.mockEndpoint({
          method: "GET",
          path: "/v1/ats/jobs",
          response: {
            statusCode: 500,
            body: "500 Internal Server Error",
          },
        });

        try {
          for await (const _page of await ctx.kombo.ats.getJobs({})) {
            break;
          }
          expect.fail("Expected error to be thrown");
        } catch (error) {
          if (!(error instanceof KomboDefaultError)) {
            expect.fail(
              `Expected error to be a KomboDefaultError, got ${error?.constructor?.name}`
            );
          }

          expect(error).toMatchInlineSnapshot(
            `[KomboDefaultError: Unexpected Status or Content-Type: Status 500 Content-Type "". Body: 500 Internal Server Error]`
          );
        }
      });

      it("handles plain text 502 bad gateway error", async () => {
        const ctx = new TestContext();

        ctx.mockEndpoint({
          method: "GET",
          path: "/v1/hris/employees",
          response: {
            statusCode: 502,
            body: "502 Bad Gateway",
            headers: {
              "Content-Type": "text/plain",
            },
          },
        });

        try {
          for await (const _page of await ctx.kombo.hris.getEmployees({})) {
            break;
          }
          expect.fail("Expected error to be thrown");
        } catch (error) {
          if (!(error instanceof KomboDefaultError)) {
            expect.fail(
              `Expected error to be a KomboDefaultError, got ${error?.constructor?.name}`
            );
          }

          expect(error).toMatchInlineSnapshot(
            `[KomboDefaultError: Unexpected Status or Content-Type: Status 502 Content-Type text/plain. Body: 502 Bad Gateway]`
          );
        }
      });

      it("handles HTML error page from nginx", async () => {
        const ctx = new TestContext();

        const htmlErrorPage = `<!DOCTYPE html>
<html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx/1.18.0</center>
</body>
</html>`;

        ctx.mockEndpoint({
          method: "POST",
          path: "/v1/ats/jobs/test-job-id/applications",
          response: {
            statusCode: 503,
            body: htmlErrorPage,
          },
        });

        try {
          await ctx.kombo.ats.createApplication({
            job_id: "test-job-id",
            body: {
              candidate: {
                first_name: "John",
                last_name: "Doe",
                email_address: "john.doe@example.com",
              },
            },
          });
          expect.fail("Expected error to be thrown");
        } catch (error) {
          if (!(error instanceof KomboDefaultError)) {
            expect.fail(
              `Expected error to be a KomboDefaultError, got ${error?.constructor?.name}`
            );
          }

          expect(error).toMatchInlineSnapshot(`
          [KomboDefaultError: Unexpected Status or Content-Type: Status 503 Content-Type ""
          Body: <!DOCTYPE html>
          <html>
          <head><title>503 Service Temporarily Unavailable</title></head>
          <body>
          <center><h1>503 Service Temporarily Unavailable</h1></center>
          <hr><center>nginx/1.18.0</center>
          </body>
          </html>]
        `);
        }
      });

      it("handles empty response body with error status code", async () => {
        const ctx = new TestContext();

        ctx.mockEndpoint({
          method: "GET",
          path: "/v1/check-api-key",
          response: {
            statusCode: 500,
            body: "",
          },
        });

        try {
          await ctx.kombo.general.checkApiKey();
          expect.fail("Expected error to be thrown");
        } catch (error) {
          if (!(error instanceof KomboDefaultError)) {
            expect.fail(
              `Expected error to be a KomboDefaultError, got ${error?.constructor?.name}`
            );
          }

          expect(error).toMatchInlineSnapshot(
            `[KomboDefaultError: Unexpected Status or Content-Type: Status 500 Content-Type "". Body: ""]`
          );
        }
      });

      it("handles unexpected Content-Type header", async () => {
        const ctx = new TestContext();

        // Response with unexpected Content-Type
        ctx.mockEndpoint({
          method: "GET",
          path: "/v1/ats/applications",
          response: {
            statusCode: 500,
            body: "Server error occurred",
            headers: {
              "Content-Type": "text/xml",
            },
          },
        });

        try {
          for await (const _page of await ctx.kombo.ats.getApplications({})) {
            break;
          }
          expect.fail("Expected error to be thrown");
        } catch (error) {
          if (!(error instanceof KomboDefaultError)) {
            expect.fail(
              `Expected error to be a KomboDefaultError, got ${error?.constructor?.name}`
            );
          }

          expect(error).toMatchInlineSnapshot(
            `[KomboDefaultError: Unexpected Status or Content-Type: Status 500 Content-Type text/xml. Body: Server error occurred]`
          );
        }
      });
    });

    // NOTE: Currently disabled because it seems like Speakeasy doesn't
    // correctly catch this kind of error (e.g., it doesn't bubble up and the
    // promise is never rejected)
    it.skip("handles malformed JSON response with proper Content-Type header (SyntaxError)", async () => {
      const ctx = new TestContext();

      const malformedJson = '{"status": "error", "error": {"code": "UNKNOWN"';

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/ats/applications",
        response: {
          statusCode: 500,
          body: malformedJson,
          headers: {
            "Content-Type": "application/json",
          },
        },
      });

      await expect(async () => {
        for await (const _page of await ctx.kombo.ats.getApplications({})) {
          break;
        }
      }).rejects.toThrow(SyntaxError);
    });

    it("handles unexpected JSON structure in error response (ResponseValidationError)", async () => {
      const ctx = new TestContext();

      // Valid JSON but unexpected structure (not matching Kombo error format)
      const unexpectedJson = {
        errorCode: "500",
        errorMessage: "Internal server error",
        timestamp: "2024-01-01T00:00:00Z",
      };

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/ats/jobs",
        response: {
          statusCode: 500,
          body: unexpectedJson,
        },
      });

      try {
        for await (const _page of await ctx.kombo.ats.getJobs({})) {
          break;
        }
        expect.fail("Expected error to be thrown");
      } catch (error) {
        // Valid JSON but unexpected structure triggers ResponseValidationError
        if (!(error instanceof ResponseValidationError)) {
          expect.fail(
            `Expected error to be a ResponseValidationError, got ${error?.constructor?.name}`
          );
        }

        expect(error).toMatchInlineSnapshot(
          `[ResponseValidationError: Response validation failed]`
        );
      }
    });
  });

  describe("HTTP client errors", () => {
    it("handles request timeout", async () => {
      const ctx = new TestContext();

      // Mock endpoint but delay the connection to exceed SDK timeout
      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/ats/jobs",
        response: {
          statusCode: 200,
          body: { data: [] },
        },
        delayResponseMs: 500,
      });

      try {
        // Use a short timeout for this test
        for await (const _page of await ctx.kombo.ats.getJobs(
          {},
          { timeout_ms: 100 }
        )) {
          break;
        }
        expect.fail("Expected error to be thrown");
      } catch (error) {
        // With real timers and delayed connection, we should get RequestTimeoutError
        if (!(error instanceof RequestTimeoutError)) {
          expect.fail(
            `Expected error to be a RequestTimeoutError, got ${error?.constructor?.name}`
          );
        }

        expect(error).toMatchInlineSnapshot(
          `[RequestTimeoutError: Request timed out: TimeoutError: The operation was aborted due to timeout]`
        );
      }
    });
  });
});
