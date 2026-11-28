# PostHrisEmployeesEmployeeIdFormRehireRequestBody

## Example Usage

```typescript
import { PostHrisEmployeesEmployeeIdFormRehireRequestBody } from "@kombo-api/sdk/models";

let value: PostHrisEmployeesEmployeeIdFormRehireRequestBody = {
  properties: {
    "key": {},
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `staffing_entity_id`                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The Kombo ID of the position or requisition to rehire into. If provided, use the same ID for GET and POST. |
| `properties`                                                                                               | Record<string, *models.Schema4*>                                                                           | :heavy_check_mark:                                                                                         | Use the field keys returned by GET and include all required fields.                                        |