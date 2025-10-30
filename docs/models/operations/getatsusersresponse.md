# GetAtsUsersResponse

## Example Usage

```typescript
import { GetAtsUsersResponse } from "@kombo-api/sdk/models/operations";

let value: GetAtsUsersResponse = {
  result: {
    status: "success",
    data: {
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
    },
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `result`                                                                          | [models.GetAtsUsersPositiveResponse](../../models/getatsuserspositiveresponse.md) | :heavy_check_mark:                                                                | N/A                                                                               |