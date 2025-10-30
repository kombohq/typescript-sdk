# GetHrisGroupsPositiveResponseData

## Example Usage

```typescript
import { GetHrisGroupsPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetHrisGroupsPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
    {
      id: "4B9bKBpX5tnwjiG93TAqF7ci",
      remote_id: "49",
      name: "Customer Success",
      changed_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_deleted_at: null,
      type: "TEAM",
      parent_id: "KGaJ5XaVPob8mYVfD49W4DGB",
    },
  ],
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `next`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. |
| `results`                                                                                                                               | [models.GetHrisGroupsPositiveResponseResult](../models/gethrisgroupspositiveresponseresult.md)[]                                        | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |