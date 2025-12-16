# Schema2SingleSelect

## Example Usage

```typescript
import { Schema2SingleSelect } from "@kombo-api/sdk/models";

let value: Schema2SingleSelect = {
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
| `unified_key`                                                | [models.Schema2UnifiedKey4](../models/schema2unifiedkey4.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | *"single_select"*                                            | :heavy_check_mark:                                           | N/A                                                          |
| `options`                                                    | *models.Schema2OptionsUnion1*                                | :heavy_check_mark:                                           | N/A                                                          |