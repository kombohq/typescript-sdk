# WebhookIntegrationCreatedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookIntegrationCreatedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookIntegrationCreatedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  body: {
    id: "<id>",
    type: "integration-created",
    data: {
      id: "<id>",
      tool: "<value>",
      category: "ASSESSMENT",
      end_user: {
        organization_name: "<value>",
        creator_email: "Annabell.DAmore70@hotmail.com",
        origin_id: "<id>",
      },
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `x_kombo_signature`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HMAC signature for webhook verification. See the webhook documentation for details on how to verify this signature. |
| `body`                                                                                                              | [models.IntegrationCreatedWebhookPayload](../../models/integrationcreatedwebhookpayload.md)                         | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |