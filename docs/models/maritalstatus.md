# MaritalStatus

## Example Usage

```typescript
import { MaritalStatus } from "@kombo-api/sdk/models";

let value: MaritalStatus = "NOT_MARRIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"SINGLE" | "MARRIED" | "DOMESTIC_PARTNERSHIP" | "WIDOWED" | "DIVORCED" | "SEPARATED" | "NOT_MARRIED" | Unrecognized<string>
```