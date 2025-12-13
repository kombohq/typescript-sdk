# PostAtsApplicationsApplicationIdResultLinksPositiveResponse

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdResultLinksPositiveResponse } from "@kombo-api/sdk/models";

let value: PostAtsApplicationsApplicationIdResultLinksPositiveResponse = {
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
| `data`                                                                                                                                                            | [models.PostAtsApplicationsApplicationIdResultLinksPositiveResponseData](../models/postatsapplicationsapplicationidresultlinkspositiveresponsedata.md)            | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               | {}                                                                                                                                                                |
| `warnings`                                                                                                                                                        | [models.PostAtsApplicationsApplicationIdResultLinksPositiveResponseWarning](../models/postatsapplicationsapplicationidresultlinkspositiveresponsewarning.md)[]    | :heavy_check_mark:                                                                                                                                                | These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. |                                                                                                                                                                   |