# SalaryPeriod

## Example Usage

```typescript
import { SalaryPeriod } from "@kombo-api/sdk/models";

let value: SalaryPeriod = "WEEK";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"YEAR" | "MONTH" | "TWO_WEEKS" | "WEEK" | "DAY" | "HOUR" | Unrecognized<string>
```