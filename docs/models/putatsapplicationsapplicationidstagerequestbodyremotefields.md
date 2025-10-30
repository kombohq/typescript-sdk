# PutAtsApplicationsApplicationIdStageRequestBodyRemoteFields

Additional fields that we will pass through to specific ATS systems.

## Example Usage

```typescript
import { PutAtsApplicationsApplicationIdStageRequestBodyRemoteFields } from "@kombo-api/sdk/models";

let value: PutAtsApplicationsApplicationIdStageRequestBodyRemoteFields = {};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `greenhouse`                                                                                                                               | [models.PutAtsApplicationsApplicationIdStageRequestBodyGreenhouse](../models/putatsapplicationsapplicationidstagerequestbodygreenhouse.md) | :heavy_minus_sign:                                                                                                                         | Fields specific to Greenhouse.                                                                                                             |
| `workable`                                                                                                                                 | [models.PutAtsApplicationsApplicationIdStageRequestBodyWorkable](../models/putatsapplicationsapplicationidstagerequestbodyworkable.md)     | :heavy_minus_sign:                                                                                                                         | Workable specific remote fields for ATS actions.                                                                                           |