# PostIntegrationsIntegrationIdRelinkRequest

## Example Usage

```typescript
import { PostIntegrationsIntegrationIdRelinkRequest } from "@kombo-api/sdk/models/operations";

let value: PostIntegrationsIntegrationIdRelinkRequest = {
  integration_id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `integration_id`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | POST /integrations/:integration_id/relink Parameter                                                                     |
| `body`                                                                                                                  | [models.PostIntegrationsIntegrationIdRelinkRequestBody](../../models/postintegrationsintegrationidrelinkrequestbody.md) | :heavy_check_mark:                                                                                                      | POST /integrations/:integration_id/relink Request body                                                                  |