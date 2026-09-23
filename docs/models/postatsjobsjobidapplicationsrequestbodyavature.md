# PostAtsJobsJobIdApplicationsRequestBodyAvature

Fields specific to Avature.

## Example Usage

```typescript
import { PostAtsJobsJobIdApplicationsRequestBodyAvature } from "@kombo-api/sdk/models";

let value: PostAtsJobsJobIdApplicationsRequestBodyAvature = {};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `candidate`                                                                                                                                                       | Record<string, *any*>                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                | Fields that we will pass through to Avature's create person form (`POST /people`). Available fields depend on your Avature instance's People write configuration. |
| `workflow`                                                                                                                                                        | [models.PostAtsJobsJobIdApplicationsRequestBodyWorkflow](../models/postatsjobsjobidapplicationsrequestbodyworkflow.md)                                            | :heavy_minus_sign:                                                                                                                                                | N/A                                                                                                                                                               |