# Schema2Number

## Example Usage

```typescript
import { Schema2Number } from "@kombo-api/sdk/models";

let value: Schema2Number = {
  label: "<value>",
  required: true,
  type: "number",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `label`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `required`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `unified_key`                                                | [models.Schema2UnifiedKey2](../models/schema2unifiedkey2.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | *"number"*                                                   | :heavy_check_mark:                                           | N/A                                                          |
| `min`                                                        | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `max`                                                        | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |