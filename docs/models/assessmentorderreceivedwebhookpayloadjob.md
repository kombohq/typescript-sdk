# AssessmentOrderReceivedWebhookPayloadJob

Information about the job posting.

## Example Usage

```typescript
import { AssessmentOrderReceivedWebhookPayloadJob } from "@kombo-api/sdk/models";

let value: AssessmentOrderReceivedWebhookPayloadJob = {
  remote_id: "<id>",
  name: "<value>",
  job_code: "<value>",
  description: "even even huzzah mobility gum verve",
  location: {},
  hiring_team: [],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `remote_id`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The job's identifier in the integrated system.                                                                           |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The job title.                                                                                                           |
| `job_code`                                                                                                               | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The human readable job code. Some systems expose this as the Requisition Code/ID.                                        |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Description of the job. This field is usually returned as HTML.                                                          |
| `location`                                                                                                               | [models.AssessmentOrderReceivedWebhookPayloadLocation](../models/assessmentorderreceivedwebhookpayloadlocation.md)       | :heavy_check_mark:                                                                                                       | The job location information.                                                                                            |
| `hiring_team`                                                                                                            | [models.AssessmentOrderReceivedWebhookPayloadHiringTeam](../models/assessmentorderreceivedwebhookpayloadhiringteam.md)[] | :heavy_check_mark:                                                                                                       | The hiring team allows you to provision users into your system who can access the job and its applications.              |