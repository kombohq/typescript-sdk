# PutIntegrationsIntegrationIdEnabledRequest

## Example Usage

```typescript
import { PutIntegrationsIntegrationIdEnabledRequest } from "@kombo-api/sdk/models/operations";

let value: PutIntegrationsIntegrationIdEnabledRequest = {
  integration_id: "<id>",
  body: {
    value: false,
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `integration_id`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | PUT /integrations/:integration_id/enabled Parameter                                                                     |
| `body`                                                                                                                  | [models.PutIntegrationsIntegrationIdEnabledRequestBody](../../models/putintegrationsintegrationidenabledrequestbody.md) | :heavy_check_mark:                                                                                                      | PUT /integrations/:integration_id/enabled Request body                                                                  |