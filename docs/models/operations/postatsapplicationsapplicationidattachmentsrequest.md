# PostAtsApplicationsApplicationIdAttachmentsRequest

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdAttachmentsRequest } from "@kombo-api/sdk/models/operations";

let value: PostAtsApplicationsApplicationIdAttachmentsRequest = {
  application_id: "<id>",
  body: {
    attachment: {
      name: "<value>",
      type: "COVER_LETTER",
    },
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `application_id`                                                                                                                        | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | POST /ats/applications/:application_id/attachments Parameter                                                                            |
| `body`                                                                                                                                  | [models.PostAtsApplicationsApplicationIdAttachmentsRequestBody](../../models/postatsapplicationsapplicationidattachmentsrequestbody.md) | :heavy_check_mark:                                                                                                                      | POST /ats/applications/:application_id/attachments Request body                                                                         |