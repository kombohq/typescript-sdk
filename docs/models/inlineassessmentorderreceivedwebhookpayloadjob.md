# InlineAssessmentOrderReceivedWebhookPayloadJob

Information about the job posting.

## Example Usage

```typescript
import { InlineAssessmentOrderReceivedWebhookPayloadJob } from "@kombo-api/sdk/models";

let value: InlineAssessmentOrderReceivedWebhookPayloadJob = {
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
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `remote_id`                                                                                                                          | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The job's identifier in the integrated system.                                                                                       |
| `name`                                                                                                                               | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The job title.                                                                                                                       |
| `location`                                                                                                                           | [models.InlineAssessmentOrderReceivedWebhookPayloadLocation](../models/inlineassessmentorderreceivedwebhookpayloadlocation.md)       | :heavy_minus_sign:                                                                                                                   | The job location information.                                                                                                        |
| `hiring_team`                                                                                                                        | [models.InlineAssessmentOrderReceivedWebhookPayloadHiringTeam](../models/inlineassessmentorderreceivedwebhookpayloadhiringteam.md)[] | :heavy_check_mark:                                                                                                                   | The hiring team allows you to sync users into your system who can access the job and its applications.                               |