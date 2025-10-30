# GetAssessmentOrdersOpenPositiveResponseJob

Information about the job posting.

## Example Usage

```typescript
import { GetAssessmentOrdersOpenPositiveResponseJob } from "@kombo-api/sdk/models";

let value: GetAssessmentOrdersOpenPositiveResponseJob = {
  remote_id: "67890",
  name: "Engineering Manager",
  hiring_team: [],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `remote_id`                                                                                                                  | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The job's identifier in the integrated system.                                                                               | 67890                                                                                                                        |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The job title.                                                                                                               | Engineering Manager                                                                                                          |
| `location`                                                                                                                   | [models.GetAssessmentOrdersOpenPositiveResponseLocation](../models/getassessmentordersopenpositiveresponselocation.md)       | :heavy_minus_sign:                                                                                                           | The job location information.                                                                                                |                                                                                                                              |
| `hiring_team`                                                                                                                | [models.GetAssessmentOrdersOpenPositiveResponseHiringTeam](../models/getassessmentordersopenpositiveresponsehiringteam.md)[] | :heavy_check_mark:                                                                                                           | The hiring team allows you to sync users into your system who can access the job and its applications.                       |                                                                                                                              |