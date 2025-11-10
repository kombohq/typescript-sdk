# PostAtsApplicationsApplicationIdRejectRequest

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdRejectRequest } from "@kombo-api/sdk/models/operations";

let value: PostAtsApplicationsApplicationIdRejectRequest = {
  application_id: "<id>",
  body: {
    rejection_reason_id: "<id>",
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `application_id`                                                                                                              | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The Kombo ID of the application you want to reject.                                                                           |
| `body`                                                                                                                        | [models.PostAtsApplicationsApplicationIdRejectRequestBody](../../models/postatsapplicationsapplicationidrejectrequestbody.md) | :heavy_check_mark:                                                                                                            | POST /ats/applications/:application_id/reject Request body                                                                    |