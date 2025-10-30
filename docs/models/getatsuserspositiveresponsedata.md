# GetAtsUsersPositiveResponseData

## Example Usage

```typescript
import { GetAtsUsersPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetAtsUsersPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
    {
      id: "26vafvWSRmbhNcxJYqjCzuJg",
      remote_id: "32",
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@kombo.dev",
      status: "ACTIVE",
      changed_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_deleted_at: null,
    },
  ],
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `next`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. |
| `results`                                                                                                                               | [models.GetAtsUsersPositiveResponseResult](../models/getatsuserspositiveresponseresult.md)[]                                            | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |