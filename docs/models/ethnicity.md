# Ethnicity

## Example Usage

```typescript
import { Ethnicity } from "@kombo-api/sdk/models";

let value: Ethnicity = "NATIVE_AMERICAN";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"WHITE" | "ASIAN" | "HISPANIC_LATINO" | "HAWAIIAN" | "NATIVE_AMERICAN" | "BLACK_AFRICAN_AMERICAN" | "MULTIPLE_ETHNICITIES" | "DECLINE_TO_SPECIFY" | Unrecognized<string>
```