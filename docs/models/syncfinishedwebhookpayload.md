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
    sync_started_at: new Date("2024-10-08T05:46:10.483Z"),
    sync_ended_at: new Date("2024-09-10T14:02:10.039Z"),
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
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Unique identifier for this webhook event                                             |
| `type`                                                                               | [models.SyncFinishedWebhookPayloadType](../models/syncfinishedwebhookpayloadtype.md) | :heavy_check_mark:                                                                   | Type of the webhook event                                                            |
| `data`                                                                               | [models.SyncFinishedWebhookPayloadData](../models/syncfinishedwebhookpayloaddata.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |