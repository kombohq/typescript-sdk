# GetHrisPayRunsResponse

## Example Usage

```typescript
import { GetHrisPayRunsResponse } from "@kombo-api/sdk/models/operations";
import { RFCDate } from "@kombo-api/sdk/types";

let value: GetHrisPayRunsResponse = {
  result: {
    status: "success",
    data: {
      next:
        "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
      results: [
        {
          id: "HdyE3KNfcbNzXFRqwW1Wh2eP",
          remote_id: "300000092871122",
          start_date: new RFCDate("2026-01-01T00:00:00Z"),
          end_date: new RFCDate("2026-01-13T00:00:00Z"),
          legal_entity_id: "3Y6vdh2SPujGVx8oj4g8hdUu",
          changed_at: new Date("2026-01-10T12:32:01Z"),
          remote_deleted_at: null,
          totals: {
            gross_pay: {
              currency: "USD",
              value: 435300,
            },
            net_pay: {
              currency: "USD",
              value: 362300,
            },
            paid_amount: {
              currency: "USD",
              value: 306300.26,
            },
          },
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `result`                                                                                | [models.GetHrisPayRunsPositiveResponse](../../models/gethrispayrunspositiveresponse.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |