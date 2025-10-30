# PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequest

## Example Usage

```typescript
import { PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequest } from "@kombo-api/sdk/models/operations";

let value: PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequest = {
  integration_id: "<id>",
  custom_field_id: "<id>",
  put_integrations_integration_id_custom_fields_custom_field_id_request_body: {
    integration_field_id: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `integration_id`                                                                                                                                            | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | The unique ID of the integration where the custom field mapping should be updated                                                                           |
| `custom_field_id`                                                                                                                                           | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | The unique ID of the custom field that should be updated                                                                                                    |
| `put_integrations_integration_id_custom_fields_custom_field_id_request_body`                                                                                | [models.PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdRequestBody](../../models/putintegrationsintegrationidcustomfieldscustomfieldidrequestbody.md) | :heavy_check_mark:                                                                                                                                          | PUT /integrations/:integration_id/custom-fields/:custom_field_id Request body                                                                               |