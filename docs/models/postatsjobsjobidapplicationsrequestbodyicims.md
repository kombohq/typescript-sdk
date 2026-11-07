# PostAtsJobsJobIdApplicationsRequestBodyIcims

Fields specific to iCIMS.

## Example Usage

```typescript
import { PostAtsJobsJobIdApplicationsRequestBodyIcims } from "@kombo-api/sdk/models";

let value: PostAtsJobsJobIdApplicationsRequestBodyIcims = {};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `application`                                                                                                                               | Record<string, *any*>                                                                                                                       | :heavy_minus_sign:                                                                                                                          | Fields that we will pass through to the iCIMS applicant workflow when it is created. For example `sourcechannel` or custom `fieldNNNN` IDs. |