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