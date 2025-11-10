# PutAtsApplicationsApplicationIdStageRequest

## Example Usage

```typescript
import { PutAtsApplicationsApplicationIdStageRequest } from "@kombo-api/sdk/models/operations";

let value: PutAtsApplicationsApplicationIdStageRequest = {
  application_id: "<id>",
  body: {
    stage_id: "<id>",
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `application_id`                                                                                                          | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The Kombo ID of the application you want to move to a different stage.                                                    |
| `body`                                                                                                                    | [models.PutAtsApplicationsApplicationIdStageRequestBody](../../models/putatsapplicationsapplicationidstagerequestbody.md) | :heavy_check_mark:                                                                                                        | PUT /ats/applications/:application_id/stage Request body                                                                  |