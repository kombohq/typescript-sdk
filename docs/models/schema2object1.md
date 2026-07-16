# Schema2Object1

## Example Usage

```typescript
import { Schema2Object1 } from "@kombo-api/sdk/models";

let value: Schema2Object1 = {
  label: "<value>",
  required: false,
  type: "object",
  properties: {
    "key": {
      label: "<value>",
      required: false,
      type: "checkbox",
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
| `unified_key`                                                | [models.Schema2UnifiedKey6](../models/schema2unifiedkey6.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | *"object"*                                                   | :heavy_check_mark:                                           | N/A                                                          |
| `properties`                                                 | Record<string, *models.Schema1Union1*>                       | :heavy_check_mark:                                           | N/A                                                          |