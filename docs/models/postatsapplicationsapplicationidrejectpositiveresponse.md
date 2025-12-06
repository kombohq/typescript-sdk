# PostAtsApplicationsApplicationIdRejectPositiveResponse

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdRejectPositiveResponse } from "@kombo-api/sdk/models";

let value: PostAtsApplicationsApplicationIdRejectPositiveResponse = {
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
| `status`                                                                                                                                                          | *"success"*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |                                                                                                                                                                   |
| `data`                                                                                                                                                            | [models.PostAtsApplicationsApplicationIdRejectPositiveResponseData](../models/postatsapplicationsapplicationidrejectpositiveresponsedata.md)                      | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               | {}                                                                                                                                                                |
| `warnings`                                                                                                                                                        | [models.PostAtsApplicationsApplicationIdRejectPositiveResponseWarning](../models/postatsapplicationsapplicationidrejectpositiveresponsewarning.md)[]              | :heavy_check_mark:                                                                                                                                                | These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. |                                                                                                                                                                   |