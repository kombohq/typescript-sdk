# GetHrisEmploymentsPositiveResponseData

## Example Usage

```typescript
import { GetHrisEmploymentsPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetHrisEmploymentsPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
    {
      id: "12vpXR7BeqYNWDShXRgsonnm",
      remote_id: "859",
      employee_id: "26vafvWSRmbhNcxJYqjCzuJg",
      job_title: "Social Media Marketer",
      pay_rate: 85000,
      pay_period: "YEAR",
      pay_frequency: "SEMIMONTHLY",
      employment_type: "FULL_TIME",
      pay_currency: "EUR",
      effective_date: new Date("2021-01-30T00:00:00Z"),
      changed_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_deleted_at: null,
      custom_fields: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `next`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. |
| `results`                                                                                                                               | [models.GetHrisEmploymentsPositiveResponseResult](../models/gethrisemploymentspositiveresponseresult.md)[]                              | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |