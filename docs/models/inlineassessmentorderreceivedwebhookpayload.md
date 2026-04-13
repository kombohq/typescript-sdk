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