# Visibility

## Example Usage

```typescript
import { Visibility } from "@kombo-api/sdk/models";

let value: Visibility = "PUBLIC";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PUBLIC" | "INTERNAL" | "UNLISTED" | "CONFIDENTIAL" | Unrecognized<string>
```