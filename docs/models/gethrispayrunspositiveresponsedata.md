# GetHrisPayRunsPositiveResponseData

## Example Usage

```typescript
import { GetHrisPayRunsPositiveResponseData } from "@kombo-api/sdk/models";
import { RFCDate } from "@kombo-api/sdk/types";

let value: GetHrisPayRunsPositiveResponseData = {
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
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `next`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. |
| `results`                                                                                                                               | [models.GetHrisPayRunsPositiveResponseResult](../models/gethrispayrunspositiveresponseresult.md)[]                                      | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |