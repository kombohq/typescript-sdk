# WebhookDataChangedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookDataChangedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookDataChangedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  data_changed_webhook_payload: {
    id: "<id>",
    type: "data-changed",
    data: {
      integration_id: "<id>",
      integration_tool: "<value>",
      integration_category: "ATS",
      changed_models: [
        {
          name: "ats_offers",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `x_kombo_signature`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HMAC signature for webhook verification. See the webhook documentation for details on how to verify this signature. |
| `data_changed_webhook_payload`                                                                                      | [models.DataChangedWebhookPayload](../../models/datachangedwebhookpayload.md)                                       | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |