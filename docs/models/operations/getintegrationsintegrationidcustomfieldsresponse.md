# GetIntegrationsIntegrationIdCustomFieldsResponse

## Example Usage

```typescript
import { GetIntegrationsIntegrationIdCustomFieldsResponse } from "@kombo-api/sdk/models/operations";

let value: GetIntegrationsIntegrationIdCustomFieldsResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                                    | [models.GetIntegrationsIntegrationIdCustomFieldsPositiveResponse](../../models/getintegrationsintegrationidcustomfieldspositiveresponse.md) | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |