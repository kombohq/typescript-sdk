# GetAtsRejectionReasonsResponse

## Example Usage

```typescript
import { GetAtsRejectionReasonsResponse } from "@kombo-api/sdk/models/operations";

let value: GetAtsRejectionReasonsResponse = {
  result: {
    status: "success",
    data: {
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
    },
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                | [models.GetAtsRejectionReasonsPositiveResponse](../../models/getatsrejectionreasonspositiveresponse.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |