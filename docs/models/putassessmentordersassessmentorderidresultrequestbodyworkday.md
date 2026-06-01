# PutAssessmentOrdersAssessmentOrderIdResultRequestBodyWorkday

Fields specific to Workday's `Assess_Candidate` [operation](https://community.workday.com/sites/default/files/file-hosting/productionapi/Recruiting/v46.0/Assess_Candidate.html).

## Example Usage

```typescript
import { PutAssessmentOrdersAssessmentOrderIdResultRequestBodyWorkday } from "@kombo-api/sdk/models";

let value: PutAssessmentOrdersAssessmentOrderIdResultRequestBodyWorkday = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `assess_candidate_data`                                                                                                          | [models.AssessCandidateData](../models/assesscandidatedata.md)                                                                   | :heavy_minus_sign:                                                                                                               | References to the Candidate Assessment to be created or modified along with the data to be used in the creation or modification. |