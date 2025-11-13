# PostAtsApplicationsApplicationIdAttachmentsPositiveResponse

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdAttachmentsPositiveResponse } from "@kombo-api/sdk/models";

let value: PostAtsApplicationsApplicationIdAttachmentsPositiveResponse = {
  status: "success",
  data: {},
  warnings: [
    {
      message: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       | Example                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                          | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |                                                                                                                                                                   |
| `data`                                                                                                                                                            | [models.PostAtsApplicationsApplicationIdAttachmentsPositiveResponseData](../models/postatsapplicationsapplicationidattachmentspositiveresponsedata.md)            | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               | {}                                                                                                                                                                |
| `warnings`                                                                                                                                                        | [models.PostAtsApplicationsApplicationIdAttachmentsPositiveResponseWarning](../models/postatsapplicationsapplicationidattachmentspositiveresponsewarning.md)[]    | :heavy_check_mark:                                                                                                                                                | These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. |                                                                                                                                                                   |