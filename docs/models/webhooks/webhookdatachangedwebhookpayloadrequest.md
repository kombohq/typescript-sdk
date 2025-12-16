# WebhookDataChangedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookDataChangedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookDataChangedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  body: {
    id: "<id>",
    type: "data-changed",
    data: {
      integration_id: "<id>",
      integration_tool: "<value>",
      integration_category: "ASSESSMENT",
      changed_models: [],
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `x_kombo_signature`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HMAC signature for webhook verification. See the webhook documentation for details on how to verify this signature. |
| `body`                                                                                                              | [models.DataChangedWebhookPayload](../../models/datachangedwebhookpayload.md)                                       | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |