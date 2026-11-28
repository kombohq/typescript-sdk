# GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesMultiSelect

## Example Usage

```typescript
import { GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesMultiSelect } from "@kombo-api/sdk/models";

let value:
  GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesMultiSelect = {
    label: "<value>",
    required: true,
    type: "multi_select",
    options: {
      type: "referenced",
      link: "<value>",
    },
  };
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `label`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `required`                                                                 | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `unified_key`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `type`                                                                     | *"multi_select"*                                                           | :heavy_check_mark:                                                         | N/A                                                                        |
| `min_items`                                                                | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `max_items`                                                                | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `options`                                                                  | *models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponseOptionsUnion2* | :heavy_check_mark:                                                         | N/A                                                                        |