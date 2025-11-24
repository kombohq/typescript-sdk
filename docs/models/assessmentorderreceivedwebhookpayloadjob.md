# AssessmentOrderReceivedWebhookPayloadJob

Information about the job posting.

## Example Usage

```typescript
import { AssessmentOrderReceivedWebhookPayloadJob } from "@kombo-api/sdk/models";

let value: AssessmentOrderReceivedWebhookPayloadJob = {
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
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `remote_id`                                                                                                              | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The job's identifier in the integrated system.                                                                           |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The job title.                                                                                                           |
| `location`                                                                                                               | [models.AssessmentOrderReceivedWebhookPayloadLocation](../models/assessmentorderreceivedwebhookpayloadlocation.md)       | :heavy_minus_sign:                                                                                                       | The job location information.                                                                                            |
| `hiring_team`                                                                                                            | [models.AssessmentOrderReceivedWebhookPayloadHiringTeam](../models/assessmentorderreceivedwebhookpayloadhiringteam.md)[] | :heavy_check_mark:                                                                                                       | The hiring team allows you to sync users into your system who can access the job and its applications.                   |