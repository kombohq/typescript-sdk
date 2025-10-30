# WebhookIntegrationStateChangedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookIntegrationStateChangedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookIntegrationStateChangedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  integration_state_changed_webhook_payload: {
    id: "<id>",
    type: "integration-state-changed",
    data: {
      integration_tool: "<value>",
      integration_id: "<id>",
      integration_category: "HRIS",
      end_user: {
        organization_name: "<value>",
        creator_email: "Tyrel.Romaguera@gmail.com",
        origin_id: "<id>",
      },
      qa_status: "PASSED",
      state: "ACTIVE",
      updated_at: new Date("2024-11-14T00:09:26.906Z"),
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `x_kombo_signature`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HMAC signature for webhook verification. See the webhook documentation for details on how to verify this signature. |
| `integration_state_changed_webhook_payload`                                                                         | [models.IntegrationStateChangedWebhookPayload](../../models/integrationstatechangedwebhookpayload.md)               | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |