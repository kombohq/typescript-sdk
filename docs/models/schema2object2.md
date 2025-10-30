# Schema2Object2

## Example Usage

```typescript
import { Schema2Object2 } from "@kombo-api/sdk/models";

let value: Schema2Object2 = {
  label: "<value>",
  required: true,
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
| `properties`                                                 | Record<string, *models.Schema1Union2*>                       | :heavy_check_mark:                                           | N/A                                                          |