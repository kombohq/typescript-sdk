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
        remote_id: "<id>",
        email: "Sidney.Braun@hotmail.com",
        first_name: "Leif",
        last_name: "Hegmann",
        phone: "1-358-538-8030 x014",
      },
      application: {
        remote_id: null,
      },
      job: {
        remote_id: "<id>",
        name: "<value>",
        job_code: "<value>",
        description:
          "prejudge measly pry brr strong until rebuff now aggravating",
        location: {},
        hiring_team: [
          {
            remote_id: "<id>",
            email: "Danielle_Ward@yahoo.com",
            first_name: "Callie",
            last_name: "Johns",
            hiring_team_roles: [
              "SOURCER",
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