# Schema2Date

## Example Usage

```typescript
import { Schema2Date } from "@kombo-api/sdk/models";

let value: Schema2Date = {
  label: "<value>",
  required: false,
  type: "date",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `label`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `required`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `unified_key`                                                | [models.Schema2UnifiedKey3](../models/schema2unifiedkey3.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | *"date"*                                                     | :heavy_check_mark:                                           | N/A                                                          |