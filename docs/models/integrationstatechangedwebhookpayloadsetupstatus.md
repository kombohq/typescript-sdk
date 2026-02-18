# IntegrationStateChangedWebhookPayloadSetupStatus

The current status of an integration that has filtering, field mapping features or required setup steps.

## Example Usage

```typescript
import { IntegrationStateChangedWebhookPayloadSetupStatus } from "@kombo-api/sdk/models";

let value: IntegrationStateChangedWebhookPayloadSetupStatus = "INCOMPLETE";
```

## Values

```typescript
"INCOMPLETE" | "FINAL_SYNC_PENDING" | "COMPLETED"
```