# GetAssessmentPackagesPositiveResponseData

## Example Usage

```typescript
import { GetAssessmentPackagesPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetAssessmentPackagesPositiveResponseData = {
  packages: [
    {
      id: "1001",
      name: "TypeScript",
      description: "TypeScript coding skills assessments",
      updated_at: new Date("2023-06-29T18:47:40.89Z"),
      type: "SKILLS_TEST",
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `packages`                                                                                                         | [models.GetAssessmentPackagesPositiveResponsePackage](../models/getassessmentpackagespositiveresponsepackage.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |