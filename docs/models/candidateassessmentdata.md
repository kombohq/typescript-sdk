# CandidateAssessmentData

The data used to create or modify a Candidate Assessment.

## Example Usage

```typescript
import { CandidateAssessmentData } from "@kombo-api/sdk/models";

let value: CandidateAssessmentData = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `assess_candidate_test_result_data`                                                            | [models.AssessCandidateTestResultData](../models/assesscandidatetestresultdata.md)             | :heavy_minus_sign:                                                                             | Information on a set of Assessment Test Results used in concert with the Candidate Assessment. |