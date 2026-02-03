# WebhookIntegrationStateChangedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookIntegrationStateChangedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookIntegrationStateChangedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  body: {
    id: "<id>",
    type: "integration-state-changed",
    data: {
      integration_tool: "<value>",
      integration_id: "<id>",
      integration_category: "HRIS",
      end_user: {
        organization_name: "<value>",
        creator_email: "Cathrine_Simonis@hotmail.com",
        origin_id: "<id>",
      },
      qa_status: "FAILED",
      setup_status: "INCOMPLETE",
      state: "INACTIVE",
      updated_at: new Date("2024-03-19T23:41:13.372Z"),
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `x_kombo_signature`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HMAC signature for webhook verification. See the webhook documentation for details on how to verify this signature. |
| `body`                                                                                                              | [models.IntegrationStateChangedWebhookPayload](../../models/integrationstatechangedwebhookpayload.md)               | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |