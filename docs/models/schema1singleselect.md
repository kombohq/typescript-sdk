# Schema1SingleSelect

## Example Usage

```typescript
import { Schema1SingleSelect } from "@kombo-api/sdk/models";

let value: Schema1SingleSelect = {
  label: "<value>",
  required: false,
  type: "single_select",
  options: {
    type: "referenced",
    link: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `label`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `required`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `unified_key`                                                | [models.Schema1UnifiedKey4](../models/schema1unifiedkey4.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `options`                                                    | *models.Schema1OptionsUnion1*                                | :heavy_check_mark:                                           | N/A                                                          |