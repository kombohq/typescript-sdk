# ManagerEmploymentStatus

## Example Usage

```typescript
import { ManagerEmploymentStatus } from "@kombo-api/sdk/models";

let value: ManagerEmploymentStatus = "INACTIVE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ACTIVE" | "PENDING" | "INACTIVE" | "LEAVE" | Unrecognized<string>
```