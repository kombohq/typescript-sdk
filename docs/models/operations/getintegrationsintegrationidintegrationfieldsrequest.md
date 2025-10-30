# GetIntegrationsIntegrationIdIntegrationFieldsRequest

## Example Usage

```typescript
import { GetIntegrationsIntegrationIdIntegrationFieldsRequest } from "@kombo-api/sdk/models/operations";

let value: GetIntegrationsIntegrationIdIntegrationFieldsRequest = {
  integration_id: "<id>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `integration_id`                                                                                                             | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | GET /integrations/:integration_id/integration-fields Parameter                                                               |
| `cursor`                                                                                                                     | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. |
| `page_size`                                                                                                                  | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The number of results to return per page. Maximum is 2000.                                                                   |