# PostAtsJobsJobIdApplicationsRequestBodyHrworks

Fields specific to GuideCom.

## Example Usage

```typescript
import { PostAtsJobsJobIdApplicationsRequestBodyHrworks } from "@kombo-api/sdk/models";

let value: PostAtsJobsJobIdApplicationsRequestBodyHrworks = {};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `job_application`                                                                                                                                                               | Record<string, *any*>                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                              | Fields that we will pass through to HRWorks's `Job Application` object. This API is used: https://developers.hrworks.de/docs/hrworks-api-v2/53021f035f62d-post-job-applications |