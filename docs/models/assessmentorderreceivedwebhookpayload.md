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
          email: "Jaydon_Schimmel71@hotmail.com",
          first_name: null,
          last_name: "Buckridge",
          hiring_team_roles: [
            "RECRUITER",
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