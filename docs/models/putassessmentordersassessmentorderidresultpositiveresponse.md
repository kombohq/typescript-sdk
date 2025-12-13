# PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse

## Example Usage

```typescript
import { PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse } from "@kombo-api/sdk/models";

let value: PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse = {
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

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                          | *"success"*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `data`                                                                                                                                                            | [models.PutAssessmentOrdersAssessmentOrderIdResultPositiveResponseData](../models/putassessmentordersassessmentorderidresultpositiveresponsedata.md)              | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `warnings`                                                                                                                                                        | [models.PutAssessmentOrdersAssessmentOrderIdResultPositiveResponseWarning](../models/putassessmentordersassessmentorderidresultpositiveresponsewarning.md)[]      | :heavy_check_mark:                                                                                                                                                | These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. |