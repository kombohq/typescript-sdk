# GetIntegrationsIntegrationIdCustomFieldsPositiveResponseData

## Example Usage

```typescript
import { GetIntegrationsIntegrationIdCustomFieldsPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetIntegrationsIntegrationIdCustomFieldsPositiveResponseData = {
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
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `results`                                                                                                                                              | [models.GetIntegrationsIntegrationIdCustomFieldsPositiveResponseResult](../models/getintegrationsintegrationidcustomfieldspositiveresponseresult.md)[] | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `next`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages.                |