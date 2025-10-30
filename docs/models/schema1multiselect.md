# Schema1MultiSelect

## Example Usage

```typescript
import { Schema1MultiSelect } from "@kombo-api/sdk/models";

let value: Schema1MultiSelect = {
  label: "<value>",
  required: false,
  type: "multi_select",
  options: {
    type: "inline",
    entries: [
      {
        id: "<id>",
        label: "<value>",
        remote_id: "<id>",
      },
    ],
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
| `type`                        | *string*                      | :heavy_check_mark:            | N/A                           |
| `min_items`                   | *number*                      | :heavy_minus_sign:            | N/A                           |
| `max_items`                   | *number*                      | :heavy_minus_sign:            | N/A                           |
| `options`                     | *models.Schema1OptionsUnion2* | :heavy_check_mark:            | N/A                           |