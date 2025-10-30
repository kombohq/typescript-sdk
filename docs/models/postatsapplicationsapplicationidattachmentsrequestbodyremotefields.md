# PostAtsApplicationsApplicationIdAttachmentsRequestBodyRemoteFields

Additional fields that we will pass through to specific ATS systems.

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdAttachmentsRequestBodyRemoteFields } from "@kombo-api/sdk/models";

let value: PostAtsApplicationsApplicationIdAttachmentsRequestBodyRemoteFields =
  {};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `oracle`                                                                                                                                                 | [models.PostAtsApplicationsApplicationIdAttachmentsRequestBodyOracle](../models/postatsapplicationsapplicationidattachmentsrequestbodyoracle.md)         | :heavy_minus_sign:                                                                                                                                       | Oracle specific remote fields for the attachment.                                                                                                        |
| `greenhouse`                                                                                                                                             | [models.PostAtsApplicationsApplicationIdAttachmentsRequestBodyGreenhouse](../models/postatsapplicationsapplicationidattachmentsrequestbodygreenhouse.md) | :heavy_minus_sign:                                                                                                                                       | Fields specific to Greenhouse.                                                                                                                           |
| `workable`                                                                                                                                               | [models.PostAtsApplicationsApplicationIdAttachmentsRequestBodyWorkable](../models/postatsapplicationsapplicationidattachmentsrequestbodyworkable.md)     | :heavy_minus_sign:                                                                                                                                       | Workable specific remote fields for ATS actions.                                                                                                         |