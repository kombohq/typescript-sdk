# Schema2Object1

## Example Usage

```typescript
import { Schema2Object1 } from "@kombo-api/sdk/models";

let value: Schema2Object1 = {
  label: "<value>",
  required: false,
  type: "object",
  properties: {},
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `label`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `required`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `unified_key`                                                | [models.Schema2UnifiedKey6](../models/schema2unifiedkey6.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `properties`                                                 | [models.Schema1](../models/schema1.md)                       | :heavy_check_mark:                                           | N/A                                                          |