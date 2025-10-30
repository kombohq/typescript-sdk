# GetAssessmentPackagesPositiveResponse

## Example Usage

```typescript
import { GetAssessmentPackagesPositiveResponse } from "@kombo-api/sdk/models";

let value: GetAssessmentPackagesPositiveResponse = {
  status: "success",
  data: {
    packages: [
      {
        id: "1001",
        name: "TypeScript",
        description: "TypeScript coding skills assessments",
        updated_at: new Date("2023-06-29T18:47:40.89Z"),
        type: "SKILLS_TEST",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       | Example                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                                          | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |                                                                                                                                                                                   |
| `data`                                                                                                                                                                            | [models.GetAssessmentPackagesPositiveResponseData](../models/getassessmentpackagespositiveresponsedata.md)                                                                        | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               | {<br/>"packages": [<br/>{<br/>"id": "1001",<br/>"name": "TypeScript",<br/>"description": "TypeScript coding skills assessments",<br/>"updated_at": "2023-06-29T18:47:40.89Z",<br/>"type": "SKILLS_TEST"<br/>}<br/>]<br/>} |