# GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponseData

## Example Usage

```typescript
import { GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponseData = {
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
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                                                                        | [models.GetIntegrationsIntegrationIdIntegrationFieldsPositiveResponseResult](../models/getintegrationsintegrationidintegrationfieldspositiveresponseresult.md)[] | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `next`                                                                                                                                                           | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages.                          |