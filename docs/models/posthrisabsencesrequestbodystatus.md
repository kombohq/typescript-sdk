# PostHrisAbsencesRequestBodyStatus

The state that the absence should be created in. Some tools may approve absences automatically if they were created for an absence type that does not require approval.

## Example Usage

```typescript
import { PostHrisAbsencesRequestBodyStatus } from "@kombo-api/sdk/models";

let value: PostHrisAbsencesRequestBodyStatus = "APPROVED";
```

## Values

```typescript
"REQUESTED" | "APPROVED"
```