# Schema2Checkbox

## Example Usage

```typescript
import { Schema2Checkbox } from "@kombo-api/sdk/models";

let value: Schema2Checkbox = {
  label: "<value>",
  required: true,
  type: "checkbox",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `label`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `required`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `unified_key`                                                | [models.Schema2UnifiedKey5](../models/schema2unifiedkey5.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | *"checkbox"*                                                 | :heavy_check_mark:                                           | N/A                                                          |