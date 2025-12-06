# PutAssessmentPackagesPositiveResponse

## Example Usage

```typescript
import { PutAssessmentPackagesPositiveResponse } from "@kombo-api/sdk/models";

let value: PutAssessmentPackagesPositiveResponse = {
  status: "success",
  data: {},
  warnings: [],
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                          | *"success"*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `data`                                                                                                                                                            | [models.PutAssessmentPackagesPositiveResponseData](../models/putassessmentpackagespositiveresponsedata.md)                                                        | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `warnings`                                                                                                                                                        | [models.PutAssessmentPackagesPositiveResponseWarning](../models/putassessmentpackagespositiveresponsewarning.md)[]                                                | :heavy_check_mark:                                                                                                                                                | These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. |