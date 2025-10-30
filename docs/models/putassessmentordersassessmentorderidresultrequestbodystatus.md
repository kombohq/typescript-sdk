# PutAssessmentOrdersAssessmentOrderIdResultRequestBodyStatus

Status of the assessment.

**Please note the `status` can only be updated to a different value if its current value is `OPEN`.**

## Example Usage

```typescript
import { PutAssessmentOrdersAssessmentOrderIdResultRequestBodyStatus } from "@kombo-api/sdk/models";

let value: PutAssessmentOrdersAssessmentOrderIdResultRequestBodyStatus = "OPEN";
```

## Values

```typescript
"COMPLETED" | "CANCELLED" | "OPEN"
```