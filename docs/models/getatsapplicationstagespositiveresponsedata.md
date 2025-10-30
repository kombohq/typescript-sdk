# GetAtsApplicationStagesPositiveResponseData

## Example Usage

```typescript
import { GetAtsApplicationStagesPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetAtsApplicationStagesPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
    {
      id: "5J7L4b48wBfffYwek9Az9pkM",
      remote_id: "32",
      name: "Initial Screening",
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
| `results`                                                                                                                               | [models.GetAtsApplicationStagesPositiveResponseResult](../models/getatsapplicationstagespositiveresponseresult.md)[]                    | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |