# InlineAssessmentOrderReceivedWebhookPayloadJob

Information about the job posting.

## Example Usage

```typescript
import { InlineAssessmentOrderReceivedWebhookPayloadJob } from "@kombo-api/sdk/models";

let value: InlineAssessmentOrderReceivedWebhookPayloadJob = {
  remote_id: "<id>",
  name: "<value>",
  job_code: "<value>",
  description:
    "nor overconfidently webbed runway heighten eek downchange unto unibody doubter",
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
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `remote_id`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The job's identifier in the integrated system.                                                                                       |
| `name`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The job title.                                                                                                                       |
| `job_code`                                                                                                                           | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The human readable job code. Some systems expose this as the Requisition Code/ID.                                                    |
| `description`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Description of the job. This field is usually returned as HTML.                                                                      |
| `location`                                                                                                                           | [models.InlineAssessmentOrderReceivedWebhookPayloadLocation](../models/inlineassessmentorderreceivedwebhookpayloadlocation.md)       | :heavy_check_mark:                                                                                                                   | The job location information.                                                                                                        |
| `hiring_team`                                                                                                                        | [models.InlineAssessmentOrderReceivedWebhookPayloadHiringTeam](../models/inlineassessmentorderreceivedwebhookpayloadhiringteam.md)[] | :heavy_check_mark:                                                                                                                   | The hiring team allows you to provision users into your system who can access the job and its applications.                          |