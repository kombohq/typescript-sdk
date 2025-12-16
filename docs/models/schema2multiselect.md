# Schema2MultiSelect

## Example Usage

```typescript
import { Schema2MultiSelect } from "@kombo-api/sdk/models";

let value: Schema2MultiSelect = {
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

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `label`                       | *string*                      | :heavy_check_mark:            | N/A                           |
| `required`                    | *boolean*                     | :heavy_check_mark:            | N/A                           |
| `description`                 | *string*                      | :heavy_minus_sign:            | N/A                           |
| `unified_key`                 | *string*                      | :heavy_minus_sign:            | N/A                           |
| `type`                        | *"multi_select"*              | :heavy_check_mark:            | N/A                           |
| `min_items`                   | *number*                      | :heavy_minus_sign:            | N/A                           |
| `max_items`                   | *number*                      | :heavy_minus_sign:            | N/A                           |
| `options`                     | *models.Schema2OptionsUnion2* | :heavy_check_mark:            | N/A                           |