# GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesArray

## Example Usage

```typescript
import { GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesArray } from "@kombo-api/sdk/models";

let value: GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesArray =
  {
    label: "<value>",
    required: false,
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

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `label`                                                                                                                                                | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `required`                                                                                                                                             | *boolean*                                                                                                                                              | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `description`                                                                                                                                          | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `unified_key`                                                                                                                                          | [models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponseUnifiedKey7](../models/gethrisemployeesemployeeidformrehirepositiveresponseunifiedkey7.md) | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `type`                                                                                                                                                 | *"array"*                                                                                                                                              | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `item_type`                                                                                                                                            | *models.Schema2Union1*                                                                                                                                 | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `min_items`                                                                                                                                            | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `max_items`                                                                                                                                            | *number*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |