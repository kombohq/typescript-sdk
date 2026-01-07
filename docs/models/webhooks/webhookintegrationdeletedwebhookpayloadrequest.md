# WebhookIntegrationDeletedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookIntegrationDeletedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookIntegrationDeletedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  body: {
    id: "<id>",
    type: "integration-deleted",
    data: {
      id: "<id>",
      tool: "<value>",
      category: "LMS",
      end_user: {
        organization_name: "<value>",
        creator_email: "Chanel.Bechtelar40@gmail.com",
        origin_id: "<id>",
      },
      deleted_at: new Date("2026-12-23T03:35:56.048Z"),
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `x_kombo_signature`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HMAC signature for webhook verification. See the webhook documentation for details on how to verify this signature. |
| `body`                                                                                                              | [models.IntegrationDeletedWebhookPayload](../../models/integrationdeletedwebhookpayload.md)                         | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |