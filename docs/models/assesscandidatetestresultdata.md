# AssessCandidateTestResultData

Information on a set of Assessment Test Results used in concert with the Candidate Assessment.

## Example Usage

```typescript
import { AssessCandidateTestResultData } from "@kombo-api/sdk/models";

let value: AssessCandidateTestResultData = {};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `assessment_test_status_reference`                                                                                                   | [models.AssessmentTestStatusReference](../models/assessmentteststatusreference.md)                                                   | :heavy_minus_sign:                                                                                                                   | A reference to the tenant supplied status for this Assessment Test Result. For example, if the test outcome was satisfactory or not. |