# GetAtsRolesResponse

## Example Usage

```typescript
import { GetAtsRolesResponse } from "@kombo-api/sdk/models/operations";

let value: GetAtsRolesResponse = {
  result: {
    status: "success",
    data: {
      next:
        "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
      results: [
        {
          id: "26vafvWSRmbhNcxJYqjCzuJg",
          remote_id: "32",
          remote_label: "Hiring Manager",
          scope: "JOB",
          unified_type: "HIRING_MANAGER",
          changed_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_deleted_at: null,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `result`                                                                          | [models.GetAtsRolesPositiveResponse](../../models/getatsrolespositiveresponse.md) | :heavy_check_mark:                                                                | N/A                                                                               |