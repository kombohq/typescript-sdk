# GetAtsOffersPositiveResponseData

## Example Usage

```typescript
import { GetAtsOffersPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetAtsOffersPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
    {
      id: "76bab8LKuFtqpZ89mofCPMHX",
      remote_id: "6",
      status: "ACCEPTED",
      employment_start_date: new Date("2022-08-07T14:01:29.196Z"),
      application_id: "BAkbueBMBusj9Bg7L1Wps3AR",
      custom_fields: {},
      changed_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_deleted_at: null,
      remote_created_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_updated_at: new Date("2022-08-07T14:01:29.196Z"),
      application: {
        candidate: {
          id: "26vafvWSRmbhNcxJYqjCzuJg",
          remote_id: "32",
          first_name: "John",
          last_name: "Doe",
          email_addresses: [
            {
              email_address: "john.doe@example.com",
              type: "PRIVATE",
            },
          ],
        },
        job: {
          id: "H5daSm8e85Dmvmne3wLeCPhX",
          remote_id: "32",
          name: "Backend Engineer",
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
| `results`                                                                                                                               | [models.GetAtsOffersPositiveResponseResult](../models/getatsofferspositiveresponseresult.md)[]                                          | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |