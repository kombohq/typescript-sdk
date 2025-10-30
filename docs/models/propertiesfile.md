# PropertiesFile

## Example Usage

```typescript
import { PropertiesFile } from "@kombo-api/sdk/models";

let value: PropertiesFile = {
  label: "<value>",
  required: true,
  type: "file",
  file_restrictions: {
    accepted_mime_types: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `label`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `required`                                                                                                                       | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `description`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `unified_key`                                                                                                                    | [models.GetHrisEmployeesFormPositiveResponseUnifiedKey8](../models/gethrisemployeesformpositiveresponseunifiedkey8.md)           | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `type`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `file_restrictions`                                                                                                              | [models.GetHrisEmployeesFormPositiveResponseFileRestrictions](../models/gethrisemployeesformpositiveresponsefilerestrictions.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |