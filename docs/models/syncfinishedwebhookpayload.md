# SyncFinishedWebhookPayload

## Example Usage

```typescript
import { SyncFinishedWebhookPayload } from "@kombo-api/sdk/models";

let value: SyncFinishedWebhookPayload = {
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
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Unique identifier for this webhook event                                             |
| `type`                                                                               | [models.SyncFinishedWebhookPayloadType](../models/syncfinishedwebhookpayloadtype.md) | :heavy_check_mark:                                                                   | Type of the webhook event                                                            |
| `data`                                                                               | [models.SyncFinishedWebhookPayloadData](../models/syncfinishedwebhookpayloaddata.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |