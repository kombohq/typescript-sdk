# GetHrisAbsenceTypesResponse

## Example Usage

```typescript
import { GetHrisAbsenceTypesResponse } from "@kombo-api/sdk/models/operations";

let value: GetHrisAbsenceTypesResponse = {
  result: {
    status: "success",
    data: {
      next:
        "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
      results: [
        {
          id: "xzZoKssDaMZAd62kxayzzQvD",
          remote_id: "91",
          name: "Vacation",
          unit: "DAYS",
          half_days_supported: true,
          exact_times_supported: false,
          changed_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_deleted_at: null,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `result`                                                                                          | [models.GetHrisAbsenceTypesPositiveResponse](../../models/gethrisabsencetypespositiveresponse.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |