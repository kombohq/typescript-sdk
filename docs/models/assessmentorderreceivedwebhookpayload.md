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
      email: "Hazle.Daugherty15@hotmail.com",
    },
    application: {},
    job: {
      hiring_team: [
        {
          remote_id: "<id>",
          email: "Presley33@hotmail.com",
          first_name: "Jevon",
          last_name: "Hane",
          hiring_team_roles: [
            "HIRING_MANAGER",
          ],
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