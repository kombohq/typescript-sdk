# GetHrisEmployeesFormPositiveResponsePropertiesArray

## Example Usage

```typescript
import { GetHrisEmployeesFormPositiveResponsePropertiesArray } from "@kombo-api/sdk/models";

let value: GetHrisEmployeesFormPositiveResponsePropertiesArray = {
  label: "<value>",
  required: true,
  type: "array",
  item_type: {
    label: "<value>",
    required: true,
    type: "single_select",
    options: {
      type: "referenced",
      link: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `label`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `required`                                                                                                             | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `unified_key`                                                                                                          | [models.GetHrisEmployeesFormPositiveResponseUnifiedKey7](../models/gethrisemployeesformpositiveresponseunifiedkey7.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | *"array"*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `item_type`                                                                                                            | *models.Schema2Union1*                                                                                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `min_items`                                                                                                            | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `max_items`                                                                                                            | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |