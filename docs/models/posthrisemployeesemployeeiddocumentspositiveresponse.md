# PostHrisEmployeesEmployeeIdDocumentsPositiveResponse

## Example Usage

```typescript
import { PostHrisEmployeesEmployeeIdDocumentsPositiveResponse } from "@kombo-api/sdk/models";

let value: PostHrisEmployeesEmployeeIdDocumentsPositiveResponse = {
  status: "success",
  data: {},
  warnings: [],
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                          | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `data`                                                                                                                                                            | [models.PostHrisEmployeesEmployeeIdDocumentsPositiveResponseData](../models/posthrisemployeesemployeeiddocumentspositiveresponsedata.md)                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `warnings`                                                                                                                                                        | [models.PostHrisEmployeesEmployeeIdDocumentsPositiveResponseWarning](../models/posthrisemployeesemployeeiddocumentspositiveresponsewarning.md)[]                  | :heavy_check_mark:                                                                                                                                                | These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. |