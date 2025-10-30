# RemoteWorkStatus

## Example Usage

```typescript
import { RemoteWorkStatus } from "@kombo-api/sdk/models";

let value: RemoteWorkStatus = "REMOTE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"REMOTE" | "HYBRID" | "TEMPORARY" | "ON_SITE" | Unrecognized<string>
```