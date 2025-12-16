# Schema2Array2

## Example Usage

```typescript
import { Schema2Array2 } from "@kombo-api/sdk/models";

let value: Schema2Array2 = {
  label: "<value>",
  required: false,
  type: "array",
  item_type: {
    label: "<value>",
    required: true,
    type: "array",
    item_type: {
      label: "<value>",
      required: true,
      type: "text",
    },
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `label`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `required`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `unified_key`                                                | [models.Schema2UnifiedKey7](../models/schema2unifiedkey7.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | *"array"*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `item_type`                                                  | *models.Schema2Union2*                                       | :heavy_check_mark:                                           | N/A                                                          |
| `min_items`                                                  | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `max_items`                                                  | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |