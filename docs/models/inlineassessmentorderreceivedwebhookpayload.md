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
    status: "CANCELLED",
    integration_id: "<id>",
    candidate: {
      email: "Mateo_Oberbrunner@gmail.com",
    },
    application: {},
    job: {
      hiring_team: [],
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