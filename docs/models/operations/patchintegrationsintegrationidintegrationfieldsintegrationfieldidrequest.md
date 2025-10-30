# PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequest

## Example Usage

```typescript
import { PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequest } from "@kombo-api/sdk/models/operations";

let value:
  PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequest = {
    integration_id: "<id>",
    integration_field_id: "<id>",
    patch_integrations_integration_id_integration_fields_integration_field_id_request_body:
      {
        enable_passthrough: true,
      },
  };
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `integration_id`                                                                                                                                                                    | *string*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | PATCH /integrations/:integration_id/integration-fields/:integration_field_id Parameter                                                                                              |
| `integration_field_id`                                                                                                                                                              | *string*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | PATCH /integrations/:integration_id/integration-fields/:integration_field_id Parameter                                                                                              |
| `patch_integrations_integration_id_integration_fields_integration_field_id_request_body`                                                                                            | [models.PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdRequestBody](../../models/patchintegrationsintegrationidintegrationfieldsintegrationfieldidrequestbody.md) | :heavy_check_mark:                                                                                                                                                                  | PATCH /integrations/:integration_id/integration-fields/:integration_field_id Request body                                                                                           |