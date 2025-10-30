# GetHrisAbsencesPositiveResponseData

## Example Usage

```typescript
import { GetHrisAbsencesPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetHrisAbsencesPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
    {
      id: "22st2Ji8XpncEYEak8mvQgQF",
      remote_id: "1348",
      employee_id: "JDdUy9kiH5APaGizFrgNmQjM",
      start_date: "2022-08-04T00:00:00Z",
      end_date: "2022-08-05T00:00:00Z",
      start_half_day: true,
      end_half_day: false,
      start_time: "13:15:00",
      end_time: "17:00:00",
      amount: 2,
      unit: "DAYS",
      status: "APPROVED",
      employee_note: "Visiting my family.",
      type_id: "xzZoKssDaMZAd62kxayzzQvD",
      changed_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_deleted_at: new Date("2022-08-07T14:01:29.196Z"),
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
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `next`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. |
| `results`                                                                                                                               | [models.GetHrisAbsencesPositiveResponseResult](../models/gethrisabsencespositiveresponseresult.md)[]                                    | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |