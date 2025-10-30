# PostAtsImportTrackedApplicationRequestBodySmartrecruitersCandidateAndJobRemoteIds

## Example Usage

```typescript
import {
  PostAtsImportTrackedApplicationRequestBodySmartrecruitersCandidateAndJobRemoteIds,
} from "@kombo-api/sdk/models";

let value:
  PostAtsImportTrackedApplicationRequestBodySmartrecruitersCandidateAndJobRemoteIds =
    {
      id_type: "candidate_and_job_remote_ids",
      candidate_remote_id: "<id>",
      job_remote_id: "<id>",
    };
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id_type`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | Uses the `/candidates/{candidateId}/jobs/{jobId}` endpoint to retrieve the application. |
| `candidate_remote_id`                                                                   | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `job_remote_id`                                                                         | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |