# WebhookAssessmentOrderReceivedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookAssessmentOrderReceivedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookAssessmentOrderReceivedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  body: {
    id: "<id>",
    type: "assessment:order-received",
    data: {
      id: "<id>",
      package_id: "<id>",
      status: "COMPLETED",
      integration_id: "<id>",
      candidate: {
        remote_id: "<id>",
        email: "Gregorio17@gmail.com",
        first_name: "Rafael",
        last_name: "Harber",
        phone: "694-301-6071 x84172",
      },
      application: {
        remote_id: "<id>",
      },
      job: {
        remote_id: "<id>",
        name: "<value>",
        job_code: "<value>",
        description:
          "skateboard duh mammoth phooey availability blah whirlwind pfft sizzle",
        location: {},
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
| `body`                                                                                                              | [models.AssessmentOrderReceivedWebhookPayload](../../models/assessmentorderreceivedwebhookpayload.md)               | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |