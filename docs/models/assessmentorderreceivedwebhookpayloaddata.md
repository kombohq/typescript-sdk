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
    remote_id: "<id>",
    email: "Gregorio17@gmail.com",
    first_name: "Rafael",
    last_name: "Harber",
    phone: "694-301-6071 x84172",
  },
  application: {
    remote_id: "<id>",
  },
  job: {
    remote_id: "<id>",
    name: "<value>",
    job_code: "<value>",
    description:
      "skateboard duh mammoth phooey availability blah whirlwind pfft sizzle",
    location: {},
    hiring_team: [],
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