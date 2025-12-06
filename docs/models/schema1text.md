# Schema1Text

## Example Usage

```typescript
import { Schema1Text } from "@kombo-api/sdk/models";

let value: Schema1Text = {
  label: "<value>",
  required: false,
  type: "text",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `label`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `required`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `unified_key`                                                | [models.Schema1UnifiedKey1](../models/schema1unifiedkey1.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | *"text"*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `min_length`                                                 | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `max_length`                                                 | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `reg_exp`                                                    | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |