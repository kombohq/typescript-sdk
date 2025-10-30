# PostAtsApplicationsApplicationIdRejectRequest

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdRejectRequest } from "@kombo-api/sdk/models/operations";

let value: PostAtsApplicationsApplicationIdRejectRequest = {
  application_id: "<id>",
  post_ats_applications_application_id_reject_request_body: {
    rejection_reason_id: "<id>",
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `application_id`                                                                                                              | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The Kombo ID of the application you want to reject.                                                                           |
| `post_ats_applications_application_id_reject_request_body`                                                                    | [models.PostAtsApplicationsApplicationIdRejectRequestBody](../../models/postatsapplicationsapplicationidrejectrequestbody.md) | :heavy_check_mark:                                                                                                            | POST /ats/applications/:application_id/reject Request body                                                                    |