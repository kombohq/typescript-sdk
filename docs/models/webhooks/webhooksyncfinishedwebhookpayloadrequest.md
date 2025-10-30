# WebhookSyncFinishedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookSyncFinishedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookSyncFinishedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  sync_finished_webhook_payload: {
    id: "<id>",
    type: "sync-finished",
    data: {
      sync_id: "<id>",
      sync_state: "<value>",
      sync_started_at: new Date("2023-01-08T00:32:22.802Z"),
      sync_ended_at: new Date("2025-04-22T06:32:08.936Z"),
      sync_duration_seconds: 145543,
      integration_id: "<id>",
      integration_tool: "<value>",
      integration_category: "ATS",
      end_user: {
        organization_name: "<value>",
        creator_email: "Ashley14@hotmail.com",
        origin_id: "<id>",
      },
      log_url: "https://coordinated-lounge.org",
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `x_kombo_signature`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HMAC signature for webhook verification. See the webhook documentation for details on how to verify this signature. |
| `sync_finished_webhook_payload`                                                                                     | [models.SyncFinishedWebhookPayload](../../models/syncfinishedwebhookpayload.md)                                     | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |