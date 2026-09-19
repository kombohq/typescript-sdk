# GetAtsAttachmentsResponse

## Example Usage

```typescript
import { GetAtsAttachmentsResponse } from "@kombo-api/sdk/models/operations";

let value: GetAtsAttachmentsResponse = {
  result: {
    status: "success",
    data: {
      next:
        "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
      results: [
        {
          id: "EYJjhMQT3LtVKXnTbnRT8s6U",
          remote_id: "1001",
          candidate_id: "BTbkvY2w5ou3z3hdwuKcKzDh",
          application_id: "H5daSm8e85Dmvmne3wLeCPhX",
          type: "CV",
          file_name: "Frank Doe CV.pdf",
          content_ref: {
            type: "s3",
            bucket: "acme-kombo-attachments",
            key:
              "kombo/ats_attachments/integrations/greenhousev3:BsUP8fPMzHDo/candidates/BTbkvY2w5ou3z3hdwuKcKzDh/EYJjhMQT3LtVKXnTbnRT8s6U",
          },
          remote_created_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_updated_at: new Date("2022-08-07T14:01:29.196Z"),
          changed_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_deleted_at: null,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `result`                                                                                      | [models.GetAtsAttachmentsPositiveResponse](../../models/getatsattachmentspositiveresponse.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |