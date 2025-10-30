# GetIntegrationsIntegrationIdPositiveResponseStatus

The current status of the integration.

- `ACTIVE`: The integration is syncing data as expected.
- `INVALID`: The integration has stopped syncing data because of invalid credentials. To fix this, reach out to your customer to [reconnect the integration](../guides/integration-states#credentials-invalid).
- `INACTIVE`: The integration has stopped syncing as it's been manually set to inactive. You can [enable it again](../guides/integration-states#inactive) in the integration's page.

## Example Usage

```typescript
import { GetIntegrationsIntegrationIdPositiveResponseStatus } from "@kombo-api/sdk/models";

let value: GetIntegrationsIntegrationIdPositiveResponseStatus = "ACTIVE";
```

## Values

```typescript
"ACTIVE" | "INVALID" | "INACTIVE"
```