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
    description: "prejudge measly pry brr strong until rebuff now aggravating",
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