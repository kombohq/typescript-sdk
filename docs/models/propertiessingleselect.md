# PropertiesSingleSelect

## Example Usage

```typescript
import { PropertiesSingleSelect } from "@kombo-api/sdk/models";

let value: PropertiesSingleSelect = {
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `label`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `required`                                                                                                             | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `unified_key`                                                                                                          | [models.GetHrisEmployeesFormPositiveResponseUnifiedKey4](../models/gethrisemployeesformpositiveresponseunifiedkey4.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `options`                                                                                                              | *models.GetHrisEmployeesFormPositiveResponseOptionsUnion1*                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |