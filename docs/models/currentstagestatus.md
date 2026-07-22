# CurrentStageStatus

Whether the application stage is active in the ATS. Inactive stages (also e.g., archived or hidden) may still be referenced by existing applications but are typically not part of the current hiring workflow.

## Example Usage

```typescript
import { CurrentStageStatus } from "@kombo-api/sdk/models";

let value: CurrentStageStatus = "INACTIVE";
```

## Values

```typescript
"ACTIVE" | "INACTIVE"
```