# Schema1Object

## Example Usage

```typescript
import { Schema1Object } from "@kombo-api/sdk/models";

let value: Schema1Object = {
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
| `unified_key`                                                | [models.Schema1UnifiedKey6](../models/schema1unifiedkey6.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | *"object"*                                                   | :heavy_check_mark:                                           | N/A                                                          |
| `properties`                                                 | [models.Schema1](../models/schema1.md)                       | :heavy_check_mark:                                           | N/A                                                          |