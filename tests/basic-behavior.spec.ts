import { it, expect, describe, beforeEach } from "vitest";
import { TestContext, describeSdkSuite } from "./helpers/test-context";
import nock from "nock";

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

  describe("Pagination Behavior", () => {
    beforeEach(() => {
      nock.cleanAll();
    });

    it("should iterate through multiple pages", async () => {
      const ctx = new TestContext();

      // Mock 3 pages of results
      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/ats/tags",
        response: {
          body: {
            status: "success",
            data: {
              results: [
                {
                  id: "tag1",
                  remote_id: null,
                  name: "Tag 1",
                  changed_at: "2024-01-01T00:00:00.000Z",
                  remote_deleted_at: null,
                },
                {
                  id: "tag2",
                  remote_id: null,
                  name: "Tag 2",
                  changed_at: "2024-01-01T00:00:00.000Z",
                  remote_deleted_at: null,
                },
              ],
              next: "cursor_page2",
            },
          },
        },
      });

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/ats/tags",
        response: {
          body: {
            status: "success",
            data: {
              results: [
                {
                  id: "tag3",
                  remote_id: null,
                  name: "Tag 3",
                  changed_at: "2024-01-01T00:00:00.000Z",
                  remote_deleted_at: null,
                },
                {
                  id: "tag4",
                  remote_id: null,
                  name: "Tag 4",
                  changed_at: "2024-01-01T00:00:00.000Z",
                  remote_deleted_at: null,
                },
              ],
              next: "cursor_page3",
            },
          },
        },
      });

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/ats/tags",
        response: {
          body: {
            status: "success",
            data: {
              results: [
                {
                  id: "tag5",
                  remote_id: null,
                  name: "Tag 5",
                  changed_at: "2024-01-01T00:00:00.000Z",
                  remote_deleted_at: null,
                },
              ],
              next: null,
            },
          },
        },
      });

      const tags = await ctx.kombo.ats.getTags({});
      const allResults: unknown[] = [];

      for await (const page of tags) {
        allResults.push(...page.result.data.results);
      }

      // Verify all 5 tags were collected
      expect(allResults).toHaveLength(5);
      expect(allResults.map((r: any) => r.id)).toEqual([
        "tag1",
        "tag2",
        "tag3",
        "tag4",
        "tag5",
      ]);

      // Verify 3 HTTP requests were made
      const requests = ctx.getRequests();
      expect(requests).toHaveLength(3);
    });

    it("should pass cursor parameter to subsequent requests", async () => {
      const ctx = new TestContext();

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/ats/tags",
        response: {
          body: {
            status: "success",
            data: {
              results: [
                {
                  id: "tag1",
                  remote_id: null,
                  name: "Tag 1",
                  changed_at: "2024-01-01T00:00:00.000Z",
                  remote_deleted_at: null,
                },
              ],
              next: "test_cursor_abc123",
            },
          },
        },
      });

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/ats/tags",
        response: {
          body: {
            status: "success",
            data: {
              results: [
                {
                  id: "tag2",
                  remote_id: null,
                  name: "Tag 2",
                  changed_at: "2024-01-01T00:00:00.000Z",
                  remote_deleted_at: null,
                },
              ],
              next: null,
            },
          },
        },
      });

      const tags = await ctx.kombo.ats.getTags({});
      for await (const _page of tags) {
        // Iterate through all pages
      }

      const requests = ctx.getRequests();
      expect(requests).toHaveLength(2);

      // First request should NOT include cursor
      expect(requests[0].path).not.toContain("cursor=");

      // Second request SHOULD include cursor
      expect(requests[1].path).toContain("cursor=test_cursor_abc123");
    });

    it("should stop pagination when next is null", async () => {
      const ctx = new TestContext();

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/ats/tags",
        response: {
          body: {
            status: "success",
            data: {
              results: [
                {
                  id: "tag1",
                  remote_id: null,
                  name: "Tag 1",
                  changed_at: "2024-01-01T00:00:00.000Z",
                  remote_deleted_at: null,
                },
                {
                  id: "tag2",
                  remote_id: null,
                  name: "Tag 2",
                  changed_at: "2024-01-01T00:00:00.000Z",
                  remote_deleted_at: null,
                },
              ],
              next: null,
            },
          },
        },
      });

      const tags = await ctx.kombo.ats.getTags({});
      const pageCount: number[] = [];

      for await (const _page of tags) {
        pageCount.push(1);
      }

      // Verify only 1 page was returned
      expect(pageCount).toHaveLength(1);

      // Verify only 1 HTTP request was made
      const requests = ctx.getRequests();
      expect(requests).toHaveLength(1);
    });

    it("should preserve query parameters across paginated requests", async () => {
      const ctx = new TestContext();

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/ats/tags",
        response: {
          body: {
            status: "success",
            data: {
              results: [
                {
                  id: "tag1",
                  remote_id: null,
                  name: "Tag 1",
                  changed_at: "2024-01-01T00:00:00.000Z",
                  remote_deleted_at: null,
                },
              ],
              next: "cursor_for_page2",
            },
          },
        },
      });

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/ats/tags",
        response: {
          body: {
            status: "success",
            data: {
              results: [
                {
                  id: "tag2",
                  remote_id: null,
                  name: "Tag 2",
                  changed_at: "2024-01-01T00:00:00.000Z",
                  remote_deleted_at: null,
                },
              ],
              next: null,
            },
          },
        },
      });

      const tags = await ctx.kombo.ats.getTags({
        ids: ["tag1"],
      });

      for await (const _page of tags) {
        // Iterate through all pages
      }

      const requests = ctx.getRequests();
      expect(requests).toHaveLength(2);

      // Both requests should include the original query parameters
      expect(requests[0].path).toContain("ids=tag1");
      expect(requests[0].path).not.toContain("cursor=");

      expect(requests[1].path).toContain("ids=tag1");
      expect(requests[1].path).toContain("cursor=cursor_for_page2");
    });

    it("should support manual pagination with next()", async () => {
      const ctx = new TestContext();

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/ats/tags",
        response: {
          body: {
            status: "success",
            data: {
              results: [
                {
                  id: "tag1",
                  remote_id: null,
                  name: "Tag 1",
                  changed_at: "2024-01-01T00:00:00.000Z",
                  remote_deleted_at: null,
                },
              ],
              next: "manual_cursor_xyz",
            },
          },
        },
      });

      ctx.mockEndpoint({
        method: "GET",
        path: "/v1/ats/tags",
        response: {
          body: {
            status: "success",
            data: {
              results: [
                {
                  id: "tag2",
                  remote_id: null,
                  name: "Tag 2",
                  changed_at: "2024-01-01T00:00:00.000Z",
                  remote_deleted_at: null,
                },
              ],
              next: null,
            },
          },
        },
      });

      const page1 = await ctx.kombo.ats.getTags({});
      
      // Verify first page was fetched
      expect(page1.result.data.results).toBeDefined();
      expect(page1.result.data.results).toHaveLength(1);

      // Manually call next()
      const page2Result = await page1.next();
      
      // Verify second page was fetched (should not be null if cursor was read correctly)
      // This will fail if cursor extraction bug exists
      expect(page2Result).not.toBeNull();
      if (page2Result) {
        expect(page2Result.result.data.results).toHaveLength(1);
        expect(page2Result.result.data.results[0].id).toBe("tag2");
      }

      // Verify 2 HTTP requests were made
      const requests = ctx.getRequests();
      expect(requests).toHaveLength(2);
      expect(requests[1].path).toContain("cursor=manual_cursor_xyz");
    });
  });
});
