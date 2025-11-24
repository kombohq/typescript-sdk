# WebhookInlineAssessmentOrderReceivedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookInlineAssessmentOrderReceivedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookInlineAssessmentOrderReceivedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  body: {
    id: "<id>",
    type: "inline-assessment:order-received",
    data: {
      id: "<id>",
      package_id: "<id>",
      status: "REJECTED",
      integration_id: "<id>",
      candidate: {
        email: "Rudolph.Denesik@yahoo.com",
      },
      application: {},
      job: {
        hiring_team: [
          {
            remote_id: "<id>",
            email: "Bernadine.Sawayn-Hackett1@yahoo.com",
            first_name: "Jalen",
            last_name: "Bailey",
            hiring_team_roles: [
              "HIRING_MANAGER",
            ],
          },
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `x_kombo_signature`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HMAC signature for webhook verification. See the webhook documentation for details on how to verify this signature. |
| `body`                                                                                                              | [models.InlineAssessmentOrderReceivedWebhookPayload](../../models/inlineassessmentorderreceivedwebhookpayload.md)   | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |