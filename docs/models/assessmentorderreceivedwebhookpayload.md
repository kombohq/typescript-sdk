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
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique identifier for this webhook event                                                                   |
| `type`                                                                                                     | [models.AssessmentOrderReceivedWebhookPayloadType](../models/assessmentorderreceivedwebhookpayloadtype.md) | :heavy_check_mark:                                                                                         | Type of the webhook event                                                                                  |
| `data`                                                                                                     | [models.AssessmentOrderReceivedWebhookPayloadData](../models/assessmentorderreceivedwebhookpayloaddata.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |