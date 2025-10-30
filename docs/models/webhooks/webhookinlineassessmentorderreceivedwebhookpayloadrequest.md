# WebhookInlineAssessmentOrderReceivedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookInlineAssessmentOrderReceivedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookInlineAssessmentOrderReceivedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  inline_assessment_order_received_webhook_payload: {
    id: "<id>",
    type: "inline-assessment:order-received",
    data: {
      id: "<id>",
      package_id: "<id>",
      status: "CANCELLED",
      integration_id: "<id>",
      candidate: {
        email: "Mateo_Oberbrunner@gmail.com",
      },
      application: {},
      job: {
        hiring_team: [],
      },
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `x_kombo_signature`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HMAC signature for webhook verification. See the webhook documentation for details on how to verify this signature. |
| `inline_assessment_order_received_webhook_payload`                                                                  | [models.InlineAssessmentOrderReceivedWebhookPayload](../../models/inlineassessmentorderreceivedwebhookpayload.md)   | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |