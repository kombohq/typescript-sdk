# PostForceSyncPositiveResponseType

The type of the triggered sync. May differ from request, if the integration does not support delta syncs or if another sync is already running.

## Example Usage

```typescript
import { PostForceSyncPositiveResponseType } from "@kombo-api/sdk/models";

let value: PostForceSyncPositiveResponseType = "DELTA";
```

## Values

```typescript
"FULL" | "DELTA"
```