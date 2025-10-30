# GetIntegrationsIntegrationIdCustomFieldsPositiveResponse

## Example Usage

```typescript
import { GetIntegrationsIntegrationIdCustomFieldsPositiveResponse } from "@kombo-api/sdk/models";

let value: GetIntegrationsIntegrationIdCustomFieldsPositiveResponse = {
  status: "success",
  data: {
    results: [
      {
        id: "D9CoSqqun6ix7uKEwb2kHBU1",
        key: "unified_tax_id",
        integration_field: {
          id: "FFpTK47GhXnU6QAopPq2bdos",
          key: "tax_id",
          type: "DEFAULT",
          label: "The employee's tax ID",
        },
        model: "hris_employees",
        label: null,
        description: null,
      },
    ],
    next: null,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                     |
| `data`                                                                                                                                                                                                                                                                                                              | [models.GetIntegrationsIntegrationIdCustomFieldsPositiveResponseData](../models/getintegrationsintegrationidcustomfieldspositiveresponsedata.md)                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                                                                                                                 | {<br/>"results": [<br/>{<br/>"id": "D9CoSqqun6ix7uKEwb2kHBU1",<br/>"key": "unified_tax_id",<br/>"integration_field": {<br/>"id": "FFpTK47GhXnU6QAopPq2bdos",<br/>"key": "tax_id",<br/>"type": "DEFAULT",<br/>"label": "The employee's tax ID"<br/>},<br/>"model": "hris_employees",<br/>"label": null,<br/>"description": null<br/>}<br/>],<br/>"next_cursor": null,<br/>"next": null<br/>} |