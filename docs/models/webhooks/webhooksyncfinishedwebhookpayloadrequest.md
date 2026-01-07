# WebhookSyncFinishedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookSyncFinishedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookSyncFinishedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  body: {
    id: "<id>",
    type: "sync-finished",
    data: {
      sync_id: "<id>",
      sync_state: "<value>",
      sync_started_at: new Date("2023-10-09T05:46:10.483Z"),
      sync_ended_at: new Date("2023-09-11T14:02:10.039Z"),
      sync_duration_seconds: 56309,
      integration_id: "<id>",
      integration_tool: "<value>",
      integration_category: "ATS",
      end_user: {
        organization_name: "<value>",
        creator_email: "Austen11@yahoo.com",
        origin_id: "<id>",
      },
      log_url: "https://sad-tenant.com/",
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `x_kombo_signature`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HMAC signature for webhook verification. See the webhook documentation for details on how to verify this signature. |
| `body`                                                                                                              | [models.SyncFinishedWebhookPayload](../../models/syncfinishedwebhookpayload.md)                                     | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |