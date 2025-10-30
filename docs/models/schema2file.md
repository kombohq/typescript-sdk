# Schema2File

## Example Usage

```typescript
import { Schema2File } from "@kombo-api/sdk/models";

let value: Schema2File = {
  label: "<value>",
  required: true,
  type: "file",
  file_restrictions: {
    accepted_mime_types: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `label`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `required`                                                             | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `unified_key`                                                          | [models.Schema2UnifiedKey8](../models/schema2unifiedkey8.md)           | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `file_restrictions`                                                    | [models.Schema2FileRestrictions](../models/schema2filerestrictions.md) | :heavy_check_mark:                                                     | N/A                                                                    |