# PostAtsCandidatesRequestBodyCustomField

## Example Usage

```typescript
import { PostAtsCandidatesRequestBodyCustomField } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesRequestBodyCustomField = {
  field_id: 158686,
  value: "<value>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `field_id`                                                                                                              | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | ID of the Recruit CRM candidate custom field (`GET /v1/custom-fields/candidates`).                                      |
| `value`                                                                                                                 | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | Value to write. Dropdown and multiselect values must match a configured option. File fields take a direct download URL. |
| `entity_type`                                                                                                           | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Entity the custom field belongs to, usually `candidate`.                                                                |
| `field_name`                                                                                                            | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Custom field name.                                                                                                      |
| `field_type`                                                                                                            | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Custom field type, for example `text`.                                                                                  |