# GetHrisPerformanceReviewsResponse

## Example Usage

```typescript
import { GetHrisPerformanceReviewsResponse } from "@kombo-api/sdk/models/operations";

let value: GetHrisPerformanceReviewsResponse = {
  result: {
    status: "success",
    data: {
      next:
        "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
      results: [
        {
          id: "4B9bKBpX5tnwjiG93TAqF7ci",
          remote_id: "1",
          type: "MANAGER",
          summary_comment: "Good job this year! Let's keep it up for 2024!",
          summary_rating: {
            type: "SINGLE_SELECT",
            ordered_options: [
              "Needs improvement",
              "Below expectations",
              "Meets expectations",
              "Exceeds expectations",
              "Exceptional",
            ],
            value: "Exceeds expectations",
          },
          changed_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_deleted_at: null,
          reviewee: {
            id: "26vafvWSRmbhNcxJYqjCzuJg",
            remote_id: "32",
            first_name: "John",
            last_name: "Doe",
            display_full_name: "John Doe",
            work_email: "john.doe@acme.com",
            remote_deleted_at: null,
          },
          reviewer: {
            id: "4EeSSSd9Fr8iiW9mPKmjEVWK",
            remote_id: "1024",
            first_name: "Peter",
            last_name: "Doe",
            display_full_name: "Peter Doe",
            work_email: "peter.doe@acme.com",
            remote_deleted_at: null,
          },
          review_cycle: {
            id: "4B9bKBpX5tnwjiG93TAqF7ci",
            remote_id: "1",
            name: "2025 Annual Performance Review Cycle",
            review_period_start_date: new Date("2025-01-01T00:00:00Z"),
            changed_at: new Date("2022-08-07T14:01:29.196Z"),
            remote_deleted_at: null,
          },
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                      | [models.GetHrisPerformanceReviewsPositiveResponse](../../models/gethrisperformancereviewspositiveresponse.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |