# PropertiesMultiSelect

## Example Usage

```typescript
import { PropertiesMultiSelect } from "@kombo-api/sdk/models";

let value: PropertiesMultiSelect = {
  label: "<value>",
  required: true,
  type: "multi_select",
  options: {
    type: "inline",
    entries: [],
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `label`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `required`                                                 | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `description`                                              | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `unified_key`                                              | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `min_items`                                                | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `max_items`                                                | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `options`                                                  | *models.GetHrisEmployeesFormPositiveResponseOptionsUnion2* | :heavy_check_mark:                                         | N/A                                                        |