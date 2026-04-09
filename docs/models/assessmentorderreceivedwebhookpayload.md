# AssessmentOrderReceivedWebhookPayload

## Example Usage

```typescript
import { AssessmentOrderReceivedWebhookPayload } from "@kombo-api/sdk/models";

let value: AssessmentOrderReceivedWebhookPayload = {
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
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique identifier for this webhook event                                                                   |
| `type`                                                                                                     | [models.AssessmentOrderReceivedWebhookPayloadType](../models/assessmentorderreceivedwebhookpayloadtype.md) | :heavy_check_mark:                                                                                         | Type of the webhook event                                                                                  |
| `data`                                                                                                     | [models.AssessmentOrderReceivedWebhookPayloadData](../models/assessmentorderreceivedwebhookpayloaddata.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |