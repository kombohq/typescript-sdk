# PostAtsApplicationsApplicationIdRejectRequestBody

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdRejectRequestBody } from "@kombo-api/sdk/models";

let value: PostAtsApplicationsApplicationIdRejectRequestBody = {
  rejection_reason_id: "<id>",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rejection_reason_id`                                                                                                                              | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The Kombo ID of the rejection reason.                                                                                                              |
| `note`                                                                                                                                             | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | A optional free text rejection note. Passed through if possible.                                                                                   |
| `remote_fields`                                                                                                                                    | [models.PostAtsApplicationsApplicationIdRejectRequestBodyRemoteFields](../models/postatsapplicationsapplicationidrejectrequestbodyremotefields.md) | :heavy_minus_sign:                                                                                                                                 | Additional fields that we will pass through to specific ATS systems.                                                                               |