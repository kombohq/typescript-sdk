# PutAssessmentPackagesRequestBodyPackage

## Example Usage

```typescript
import { PutAssessmentPackagesRequestBodyPackage } from "@kombo-api/sdk/models";

let value: PutAssessmentPackagesRequestBodyPackage = {
  id: "<id>",
  type: "REFERENCE_CHECK",
  name: "<value>",
  description: "zowie ugh perp",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | A unique identifier for the assessment package.                                                  |
| `type`                                                                                           | [models.PutAssessmentPackagesRequestBodyType](../models/putassessmentpackagesrequestbodytype.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | The name of the assessment package.                                                              |
| `description`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | Description about the package. Some ATSs will display this in their UI.                          |