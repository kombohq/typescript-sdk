# GetHrisEmployeeDocumentCategoriesResponse

## Example Usage

```typescript
import { GetHrisEmployeeDocumentCategoriesResponse } from "@kombo-api/sdk/models/operations";

let value: GetHrisEmployeeDocumentCategoriesResponse = {
  result: {
    status: "success",
    data: {
      next:
        "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
      results: [
        {
          id: "26vafvWSRmbhNcxJYqjCzuJg",
          remote_id: "32",
          name: "Employment contract",
          changed_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_deleted_at: null,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                      | [models.GetHrisEmployeeDocumentCategoriesPositiveResponse](../../models/gethrisemployeedocumentcategoriespositiveresponse.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |