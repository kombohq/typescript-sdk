# InlineAssessmentOrderReceivedWebhookPayload

## Example Usage

```typescript
import { InlineAssessmentOrderReceivedWebhookPayload } from "@kombo-api/sdk/models";

let value: InlineAssessmentOrderReceivedWebhookPayload = {
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
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Unique identifier for this webhook event                                                                               |
| `type`                                                                                                                 | [models.InlineAssessmentOrderReceivedWebhookPayloadType](../models/inlineassessmentorderreceivedwebhookpayloadtype.md) | :heavy_check_mark:                                                                                                     | Type of the webhook event                                                                                              |
| `data`                                                                                                                 | [models.InlineAssessmentOrderReceivedWebhookPayloadData](../models/inlineassessmentorderreceivedwebhookpayloaddata.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |