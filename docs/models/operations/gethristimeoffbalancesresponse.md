# GetHrisTimeOffBalancesResponse

## Example Usage

```typescript
import { GetHrisTimeOffBalancesResponse } from "@kombo-api/sdk/models/operations";

let value: GetHrisTimeOffBalancesResponse = {
  result: {
    status: "success",
    data: {
      next:
        "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
      results: [
        {
          id: "FuyRuk5NqP3qTcThED3ymTuE",
          remote_id: "124123",
          employee_id: "2Up4ZCvq1bFVzmzXG6EWzV3j",
          type_id: "BQJaBxRCiqN46G27VTegvkEr",
          balance: 14,
          balance_unit: "DAYS",
          changed_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_deleted_at: null,
          used: 3,
          used_unit: "DAYS",
          type: {
            id: "xzZoKssDaMZAd62kxayzzQvD",
            remote_id: "91",
            name: "Vacation",
            unit: "DAYS",
            half_days_supported: true,
            exact_times_supported: false,
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

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                | [models.GetHrisTimeOffBalancesPositiveResponse](../../models/gethristimeoffbalancespositiveresponse.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |