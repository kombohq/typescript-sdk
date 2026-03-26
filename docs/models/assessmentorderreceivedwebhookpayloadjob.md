# AssessmentOrderReceivedWebhookPayloadJob

Information about the job posting.

## Example Usage

```typescript
import { AssessmentOrderReceivedWebhookPayloadJob } from "@kombo-api/sdk/models";

let value: AssessmentOrderReceivedWebhookPayloadJob = {
  hiring_team: [
    {
      remote_id: "<id>",
      email: "Janice_Mosciski1@yahoo.com",
      first_name: "Carroll",
      last_name: "Boehm",
      hiring_team_roles: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `remote_id`                                                                                                              | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The job's identifier in the integrated system.                                                                           |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The job title.                                                                                                           |
| `location`                                                                                                               | [models.AssessmentOrderReceivedWebhookPayloadLocation](../models/assessmentorderreceivedwebhookpayloadlocation.md)       | :heavy_minus_sign:                                                                                                       | The job location information.                                                                                            |
| `hiring_team`                                                                                                            | [models.AssessmentOrderReceivedWebhookPayloadHiringTeam](../models/assessmentorderreceivedwebhookpayloadhiringteam.md)[] | :heavy_check_mark:                                                                                                       | The hiring team allows you to provision users into your system who can access the job and its applications.              |