# WebhookConnectionFlowFailedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookConnectionFlowFailedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookConnectionFlowFailedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  connection_flow_failed_webhook_payload: {
    id: "<id>",
    type: "connection-flow-failed",
    data: {
      integration_tool: "<value>",
      integration_category: "ATS",
      end_user: {
        organization_name: "<value>",
        creator_email: "Wilhelmine.Stehr@gmail.com",
        origin_id: "<id>",
      },
      log_url: "https://ecstatic-captain.info/",
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `x_kombo_signature`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HMAC signature for webhook verification. See the webhook documentation for details on how to verify this signature. |
| `connection_flow_failed_webhook_payload`                                                                            | [models.ConnectionFlowFailedWebhookPayload](../../models/connectionflowfailedwebhookpayload.md)                     | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |