# GetHrisPerformanceReviewCyclesResponse

## Example Usage

```typescript
import { GetHrisPerformanceReviewCyclesResponse } from "@kombo-api/sdk/models/operations";

let value: GetHrisPerformanceReviewCyclesResponse = {
  result: {
    status: "success",
    data: {
      next:
        "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
      results: [
        {
          id: "4B9bKBpX5tnwjiG93TAqF7ci",
          remote_id: "1",
          name: "2025 Annual Performance Review Cycle",
          review_period_start_date: new Date("2025-01-01T00:00:00Z"),
          changed_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_deleted_at: null,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                | [models.GetHrisPerformanceReviewCyclesPositiveResponse](../../models/gethrisperformancereviewcyclespositiveresponse.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |