# PostAtsJobsJobIdApplicationsRequestBodyLever

Fields specific to Lever.

## Example Usage

```typescript
import { PostAtsJobsJobIdApplicationsRequestBodyLever } from "@kombo-api/sdk/models";

let value: PostAtsJobsJobIdApplicationsRequestBodyLever = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `candidate`                                                                                                                                    | Record<string, *any*>                                                                                                                          | :heavy_minus_sign:                                                                                                                             | Fields that we will pass through to Lever's `Candidate` object. Note: make sure to submit the keys and values in the correct form data format. |