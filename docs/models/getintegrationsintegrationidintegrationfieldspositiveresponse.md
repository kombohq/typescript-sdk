# GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse

## Example Usage

```typescript
import { GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse } from "@kombo-api/sdk/models";

let value: GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse = {
  status: "success",
  data: {
    results: [
      {
        id: "FFpTK47GhXnU6QAopPq2bdos",
        key: "tax_id",
        model: "hris_employees",
        type: "DEFAULT",
        label: "Tax ID",
        is_passthrough_enabled: true,
        is_writable: false,
      },
    ],
    next: null,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        | Example                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |                                                                                                                                                                                                                                    |
| `data`                                                                                                                                                                                                                             | [models.GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponseData](../models/getintegrationsintegrationidintegrationfieldspositiveresponsedata.md)                                                                         | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                | {<br/>"results": [<br/>{<br/>"id": "FFpTK47GhXnU6QAopPq2bdos",<br/>"key": "tax_id",<br/>"model": "hris_employees",<br/>"type": "DEFAULT",<br/>"label": "Tax ID",<br/>"is_passthrough_enabled": true,<br/>"is_writable": false<br/>}<br/>],<br/>"next_cursor": null,<br/>"next": null<br/>} |