# Schema1File

## Example Usage

```typescript
import { Schema1File } from "@kombo-api/sdk/models";

let value: Schema1File = {
  label: "<value>",
  required: true,
  type: "file",
  file_restrictions: {
    accepted_mime_types: [
      "<value 1>",
      "<value 2>",
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
| `unified_key`                                                          | [models.Schema1UnifiedKey8](../models/schema1unifiedkey8.md)           | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | *"file"*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `file_restrictions`                                                    | [models.Schema1FileRestrictions](../models/schema1filerestrictions.md) | :heavy_check_mark:                                                     | N/A                                                                    |