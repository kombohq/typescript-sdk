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
        email: "Ed_Maggio0@gmail.com",
      },
      application: {},
      job: {
        hiring_team: [
          {
            remote_id: "<id>",
            email: "Janice_Mosciski1@yahoo.com",
            first_name: "Carroll",
            last_name: "Boehm",
            hiring_team_roles: [],
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
| `body`                                                                                                              | [models.AssessmentOrderReceivedWebhookPayload](../../models/assessmentorderreceivedwebhookpayload.md)               | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |