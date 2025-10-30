# EmploymentStatus

## Example Usage

```typescript
import { EmploymentStatus } from "@kombo-api/sdk/models";

let value: EmploymentStatus = "LEAVE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE" | Unrecognized<string>
```