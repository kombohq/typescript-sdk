# PostAtsImportTrackedApplicationPositiveResponseErecruiterApplicationAndJobRemoteIds

## Example Usage

```typescript
import {
  PostAtsImportTrackedApplicationPositiveResponseErecruiterApplicationAndJobRemoteIds,
} from "@kombo-api/sdk/models";

let value:
  PostAtsImportTrackedApplicationPositiveResponseErecruiterApplicationAndJobRemoteIds =
    {
      id_type: "application_and_job_remote_ids",
      application_remote_id: "<id>",
      job_remote_id: "<id>",
    };
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id_type`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Uses the `Api/Applications/ByJob/{jobId}` endpoint to retrieve the relevant application based on the job ID. |
| `application_remote_id`                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `job_remote_id`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |