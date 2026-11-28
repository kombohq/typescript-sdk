# GetHrisEmployeesFormPositiveResponsePropertiesObject

## Example Usage

```typescript
import { GetHrisEmployeesFormPositiveResponsePropertiesObject } from "@kombo-api/sdk/models";

let value: GetHrisEmployeesFormPositiveResponsePropertiesObject = {
  label: "<value>",
  required: false,
  type: "object",
  properties: {
    "key": {
      label: "<value>",
      required: true,
      type: "checkbox",
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
| `unified_key`                                                                                                          | [models.GetHrisEmployeesFormPositiveResponseUnifiedKey6](../models/gethrisemployeesformpositiveresponseunifiedkey6.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | *"object"*                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `properties`                                                                                                           | Record<string, *models.Schema1Union1*>                                                                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |