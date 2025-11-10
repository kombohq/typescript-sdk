import { it, expect } from "vitest";
import { TestContext, describeSdkSuite } from "./helpers/test-context";

describeSdkSuite("Kombo ATS Jobs API", () => {
  it("should make correct HTTP request for getJobs", async () => {
    const ctx = new TestContext();

    // Mock the API endpoint
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
    const _jobs = await ctx.kombo.ats.getJobs({});

    // Verify and snapshot the request details
    const request = ctx.getLastRequest();
    expect(request.path).toMatchInlineSnapshot(
      `"/v1/ats/jobs?include_deleted=false&page_size=100"`
    );
  });
});
