# PostAtsJobsJobIdApplicationsRequestBodyCovetorestCandidate

Additional candidate fields that will be passed to the Coveto candidate creation.

## Example Usage

```typescript
import { PostAtsJobsJobIdApplicationsRequestBodyCovetorestCandidate } from "@kombo-api/sdk/models";

let value: PostAtsJobsJobIdApplicationsRequestBodyCovetorestCandidate = {};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `mandant`                                                                                                                                   | *number*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | The mandant field for the candidate in Coveto.                                                                                              |
| `status`                                                                                                                                    | *number*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | The numeric status ID to assign to the candidate on creation in Coveto. Refer to your Coveto `/bewerber-status` endpoint for available IDs. |