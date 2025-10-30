# PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse

## Example Usage

```typescript
import {
  PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse,
} from "@kombo-api/sdk/models";

let value:
  PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponse =
    {
      status: "success",
      data: {
        id: "9suhxJU83Kon4kPTS47837uE",
        key: "tax_id",
        model: "hris_employees",
        type: "DEFAULT",
        label: "Tax ID",
        is_passthrough_enabled: true,
        is_writable: false,
      },
    };
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        | Example                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                                                           | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |                                                                                                                                                                                                    |
| `data`                                                                                                                                                                                             | [models.PatchIntegrationsIntegrationIdIntegrationFieldsIntegrationFieldIdPositiveResponseData](../models/patchintegrationsintegrationidintegrationfieldsintegrationfieldidpositiveresponsedata.md) | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                | {<br/>"id": "9suhxJU83Kon4kPTS47837uE",<br/>"key": "tax_id",<br/>"model": "hris_employees",<br/>"type": "DEFAULT",<br/>"label": "Tax ID",<br/>"is_passthrough_enabled": true,<br/>"is_writable": false<br/>} |