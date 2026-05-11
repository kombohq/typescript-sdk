# PostIntegrationsIntegrationIdSetupLinkRequest

## Example Usage

```typescript
import { PostIntegrationsIntegrationIdSetupLinkRequest } from "@kombo-api/sdk/models/operations";

let value: PostIntegrationsIntegrationIdSetupLinkRequest = {
  integration_id: "<id>",
  body: {
    link_type: "MAGIC_LINK",
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `integration_id`                                                                                                              | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | POST /integrations/:integration_id/setup-link Parameter                                                                       |
| `body`                                                                                                                        | [models.PostIntegrationsIntegrationIdSetupLinkRequestBody](../../models/postintegrationsintegrationidsetuplinkrequestbody.md) | :heavy_check_mark:                                                                                                            | POST /integrations/:integration_id/setup-link Request body                                                                    |