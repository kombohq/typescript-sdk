# GetAtsTagsPositiveResponseData

## Example Usage

```typescript
import { GetAtsTagsPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetAtsTagsPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
    {
      id: "26vafvWSRmbhNcxJYqjCzuJg",
      remote_id: "32",
      name: "High Potential",
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
| `results`                                                                                                                               | [models.GetAtsTagsPositiveResponseResult](../models/getatstagspositiveresponseresult.md)[]                                              | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |