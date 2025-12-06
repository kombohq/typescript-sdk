# Schema1Array1

## Example Usage

```typescript
import { Schema1Array1 } from "@kombo-api/sdk/models";

let value: Schema1Array1 = {
  label: "<value>",
  required: true,
  type: "array",
  item_type: {
    label: "<value>",
    required: false,
    type: "multi_select",
    options: {
      type: "inline",
      entries: [],
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
| `unified_key`                                                | [models.Schema1UnifiedKey7](../models/schema1unifiedkey7.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | *"array"*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `item_type`                                                  | *models.Schema2Union1*                                       | :heavy_check_mark:                                           | N/A                                                          |
| `min_items`                                                  | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `max_items`                                                  | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |