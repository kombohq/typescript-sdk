# PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody

## Example Usage

```typescript
import { PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody } from "@kombo-api/sdk/models";

let value: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody = {
  integration_field_id: null,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `integration_field_id`                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | The integration field's unique ID which the custom field should be mapped to. Null to remove a mapping. |