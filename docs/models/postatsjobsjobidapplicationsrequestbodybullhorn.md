# PostAtsJobsJobIdApplicationsRequestBodyBullhorn

Fields specific to Bullhorn.

## Example Usage

```typescript
import { PostAtsJobsJobIdApplicationsRequestBodyBullhorn } from "@kombo-api/sdk/models";

let value: PostAtsJobsJobIdApplicationsRequestBodyBullhorn = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `candidate`                                                            | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | Fields that we will pass through to Bullhorn's `Candidate` object.     |
| `job_submission`                                                       | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | Fields that we will pass through to Bullhorn's `JobSubmission` object. |