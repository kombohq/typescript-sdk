# GetIntegrationsIntegrationIdIntegrationFieldsResponse

## Example Usage

```typescript
import { GetIntegrationsIntegrationIdIntegrationFieldsResponse } from "@kombo-api/sdk/models/operations";

let value: GetIntegrationsIntegrationIdIntegrationFieldsResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                                              | [models.GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponse](../../models/getintegrationsintegrationidintegrationfieldspositiveresponse.md) | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |