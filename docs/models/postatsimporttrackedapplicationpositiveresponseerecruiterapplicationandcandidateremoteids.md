# PostAtsImportTrackedApplicationPositiveResponseErecruiterApplicationAndCandidateRemoteIds

## Example Usage

```typescript
import {
  PostAtsImportTrackedApplicationPositiveResponseErecruiterApplicationAndCandidateRemoteIds,
} from "@kombo-api/sdk/models";

let value:
  PostAtsImportTrackedApplicationPositiveResponseErecruiterApplicationAndCandidateRemoteIds =
    {
      id_type: "application_and_candidate_remote_ids",
      candidate_remote_id: "<id>",
      application_remote_id: "<id>",
    };
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id_type`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Uses the `Api/Applications/{applicantId}` endpoint to retrieve the relevant application based on the candidate ID. |
| `candidate_remote_id`                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `application_remote_id`                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |