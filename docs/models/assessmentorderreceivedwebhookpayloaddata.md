# AssessmentOrderReceivedWebhookPayloadData

## Example Usage

```typescript
import { AssessmentOrderReceivedWebhookPayloadData } from "@kombo-api/sdk/models";

let value: AssessmentOrderReceivedWebhookPayloadData = {
  id: "<id>",
  package_id: "<id>",
  status: "CANCELLED",
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
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The unique identifier of the assessment order.                                                                           |
| `package_id`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The identifier of the assessment package.                                                                                |
| `status`                                                                                                                 | [models.AssessmentOrderReceivedWebhookPayloadStatus](../models/assessmentorderreceivedwebhookpayloadstatus.md)           | :heavy_check_mark:                                                                                                       | The current status of the assessment order.                                                                              |
| `integration_id`                                                                                                         | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The unique identifier of the integration.                                                                                |
| `candidate`                                                                                                              | [models.AssessmentOrderReceivedWebhookPayloadCandidate](../models/assessmentorderreceivedwebhookpayloadcandidate.md)     | :heavy_check_mark:                                                                                                       | Information about the candidate taking the assessment.                                                                   |
| `application`                                                                                                            | [models.AssessmentOrderReceivedWebhookPayloadApplication](../models/assessmentorderreceivedwebhookpayloadapplication.md) | :heavy_check_mark:                                                                                                       | Information about the job application.                                                                                   |
| `job`                                                                                                                    | [models.AssessmentOrderReceivedWebhookPayloadJob](../models/assessmentorderreceivedwebhookpayloadjob.md)                 | :heavy_check_mark:                                                                                                       | Information about the job posting.                                                                                       |