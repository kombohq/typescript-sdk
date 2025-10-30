# PostIntegrationsIntegrationIdRelinkRequest

## Example Usage

```typescript
import { PostIntegrationsIntegrationIdRelinkRequest } from "@kombo-api/sdk/models/operations";

let value: PostIntegrationsIntegrationIdRelinkRequest = {
  integration_id: "<id>",
  post_integrations_integration_id_relink_request_body: {},
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `integration_id`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | POST /integrations/:integration_id/relink Parameter                                                                     |
| `post_integrations_integration_id_relink_request_body`                                                                  | [models.PostIntegrationsIntegrationIdRelinkRequestBody](../../models/postintegrationsintegrationidrelinkrequestbody.md) | :heavy_check_mark:                                                                                                      | POST /integrations/:integration_id/relink Request body                                                                  |