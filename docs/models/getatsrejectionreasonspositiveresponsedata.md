# GetAtsRejectionReasonsPositiveResponseData

## Example Usage

```typescript
import { GetAtsRejectionReasonsPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetAtsRejectionReasonsPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
    {
      id: "76bab8LKuFtqpZ89mofCPMHX",
      remote_id: "6",
      name: "Not a fit",
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
| `results`                                                                                                                               | [models.GetAtsRejectionReasonsPositiveResponseResult](../models/getatsrejectionreasonspositiveresponseresult.md)[]                      | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |