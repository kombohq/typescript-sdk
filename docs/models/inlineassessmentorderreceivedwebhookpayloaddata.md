# InlineAssessmentOrderReceivedWebhookPayloadData

## Example Usage

```typescript
import { InlineAssessmentOrderReceivedWebhookPayloadData } from "@kombo-api/sdk/models";

let value: InlineAssessmentOrderReceivedWebhookPayloadData = {
  id: "<id>",
  package_id: "<id>",
  status: "COMPLETED",
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
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The unique identifier of the assessment order.                                                                                       |
| `package_id`                                                                                                                         | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The identifier of the assessment package.                                                                                            |
| `status`                                                                                                                             | [models.InlineAssessmentOrderReceivedWebhookPayloadStatus](../models/inlineassessmentorderreceivedwebhookpayloadstatus.md)           | :heavy_check_mark:                                                                                                                   | The current status of the assessment order.                                                                                          |
| `integration_id`                                                                                                                     | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The unique identifier of the integration.                                                                                            |
| `candidate`                                                                                                                          | [models.InlineAssessmentOrderReceivedWebhookPayloadCandidate](../models/inlineassessmentorderreceivedwebhookpayloadcandidate.md)     | :heavy_check_mark:                                                                                                                   | Information about the candidate taking the assessment.                                                                               |
| `application`                                                                                                                        | [models.InlineAssessmentOrderReceivedWebhookPayloadApplication](../models/inlineassessmentorderreceivedwebhookpayloadapplication.md) | :heavy_check_mark:                                                                                                                   | Information about the job application.                                                                                               |
| `job`                                                                                                                                | [models.InlineAssessmentOrderReceivedWebhookPayloadJob](../models/inlineassessmentorderreceivedwebhookpayloadjob.md)                 | :heavy_check_mark:                                                                                                                   | Information about the job posting.                                                                                                   |