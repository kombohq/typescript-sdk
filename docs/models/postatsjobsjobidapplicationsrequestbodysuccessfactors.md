# PostAtsJobsJobIdApplicationsRequestBodySuccessfactors

Fields specific to SAP SuccessFactors.

## Example Usage

```typescript
import { PostAtsJobsJobIdApplicationsRequestBodySuccessfactors } from "@kombo-api/sdk/models";

let value: PostAtsJobsJobIdApplicationsRequestBodySuccessfactors = {};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `candidate`                                                                                                                 | Record<string, *any*>                                                                                                       | :heavy_minus_sign:                                                                                                          | Fields that we will pass through to SuccessFactor's `Candidate` object.                                                     |
| `job_application`                                                                                                           | Record<string, *any*>                                                                                                       | :heavy_minus_sign:                                                                                                          | Fields that we will pass through to SuccessFactor's `JobApplication` object.                                                |
| `copy_job_application_attachments`                                                                                          | *boolean*                                                                                                                   | :heavy_minus_sign:                                                                                                          | If set to true, we will copy custom attachments from the JobApplication to the Candidate.                                   |
| `update_existing_candidate`                                                                                                 | *boolean*                                                                                                                   | :heavy_minus_sign:                                                                                                          | When the candidate already exists, whether to update the Candidate with the remote fields found under the Candidate entity. |