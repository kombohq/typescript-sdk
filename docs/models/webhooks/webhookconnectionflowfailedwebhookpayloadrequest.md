# WebhookConnectionFlowFailedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookConnectionFlowFailedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookConnectionFlowFailedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  body: {
    id: "<id>",
    type: "connection-flow-failed",
    data: {
      integration_tool: "<value>",
      integration_category: "HRIS",
      end_user: {
        organization_name: "<value>",
        creator_email: "Caden_Reynolds16@hotmail.com",
        origin_id: "<id>",
      },
      log_url: "https://prestigious-space.name/",
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `x_kombo_signature`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HMAC signature for webhook verification. See the webhook documentation for details on how to verify this signature. |
| `body`                                                                                                              | [models.ConnectionFlowFailedWebhookPayload](../../models/connectionflowfailedwebhookpayload.md)                     | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |