# GetAtsApplicationStagesResponse

## Example Usage

```typescript
import { GetAtsApplicationStagesResponse } from "@kombo-api/sdk/models/operations";

let value: GetAtsApplicationStagesResponse = {
  result: {
    status: "success",
    data: {
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
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                  | [models.GetAtsApplicationStagesPositiveResponse](../../models/getatsapplicationstagespositiveresponse.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |