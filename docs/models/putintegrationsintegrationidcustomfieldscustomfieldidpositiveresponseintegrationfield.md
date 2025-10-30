# PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponseIntegrationField

The integration field the custom field is mapped to. Null if not mapped.

## Example Usage

```typescript
import {
  PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponseIntegrationField,
} from "@kombo-api/sdk/models";

let value:
  PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponseIntegrationField =
    {
      id: "<id>",
      key: "<key>",
      type: "DEFAULT",
      label: "<value>",
    };
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The integration field's unique ID                                                                                                                                          |
| `key`                                                                                                                                                                      | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The key of the integration field in the remote system                                                                                                                      |
| `type`                                                                                                                                                                     | [models.PutIntegrationsIntegrationIdCustomFieldsCustomFieldIdPositiveResponseType](../models/putintegrationsintegrationidcustomfieldscustomfieldidpositiveresponsetype.md) | :heavy_check_mark:                                                                                                                                                         | The type of the integration field. There is a type to avoid collisions between DEFAULT fields and CUSTOM fields with the same key.                                         |
| `label`                                                                                                                                                                    | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The label of the integration field in the remote system                                                                                                                    |