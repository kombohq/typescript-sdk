# WebhookIntegrationDeletedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookIntegrationDeletedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookIntegrationDeletedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  integration_deleted_webhook_payload: {
    id: "<id>",
    type: "integration-deleted",
    data: {
      id: "<id>",
      tool: "<value>",
      category: "ATS",
      end_user: {
        organization_name: "<value>",
        creator_email: null,
        origin_id: "<id>",
      },
      deleted_at: new Date("2025-02-17T13:48:06.789Z"),
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `x_kombo_signature`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HMAC signature for webhook verification. See the webhook documentation for details on how to verify this signature. |
| `integration_deleted_webhook_payload`                                                                               | [models.IntegrationDeletedWebhookPayload](../../models/integrationdeletedwebhookpayload.md)                         | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |