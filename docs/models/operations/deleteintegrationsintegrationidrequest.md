# DeleteIntegrationsIntegrationIdRequest

## Example Usage

```typescript
import { DeleteIntegrationsIntegrationIdRequest } from "@kombo-api/sdk/models/operations";

let value: DeleteIntegrationsIntegrationIdRequest = {
  integration_id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `integration_id`                                                                                                | *string*                                                                                                        | :heavy_check_mark:                                                                                              | DELETE /integrations/:integration_id Parameter                                                                  |
| `body`                                                                                                          | [models.DeleteIntegrationsIntegrationIdRequestBody](../../models/deleteintegrationsintegrationidrequestbody.md) | :heavy_check_mark:                                                                                              | DELETE /integrations/:integration_id Request body                                                               |