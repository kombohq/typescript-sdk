# PostAtsJobsJobIdApplicationsRequest

## Example Usage

```typescript
import { PostAtsJobsJobIdApplicationsRequest } from "@kombo-api/sdk/models/operations";

let value: PostAtsJobsJobIdApplicationsRequest = {
  job_id: "<id>",
  body: {
    candidate: {
      first_name: "Lorine",
      last_name: "Stanton",
      email_address: "Raymundo.Collins4@gmail.com",
    },
    screening_question_answers: [
      {
        question_id: "D8yPrjXXvA2XeBksTmrVvKSn",
        answer: "Yes",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `job_id`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                        | The Kombo ID or Remote ID of the Job this candidate should apply for. If you want to use the ID of the integrated system (remote_id) you need to prefix the id with "remote:". You can use the remote ID if you do not want to sync jobs. |
| `body`                                                                                                                                                                                                                                    | [models.PostAtsJobsJobIdApplicationsRequestBody](../../models/postatsjobsjobidapplicationsrequestbody.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                        | POST /ats/jobs/:job_id/applications Request body                                                                                                                                                                                          |