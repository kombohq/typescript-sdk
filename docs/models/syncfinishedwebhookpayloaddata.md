# SyncFinishedWebhookPayloadData

## Example Usage

```typescript
import { SyncFinishedWebhookPayloadData } from "@kombo-api/sdk/models";

let value: SyncFinishedWebhookPayloadData = {
  sync_id: "<id>",
  sync_state: "<value>",
  sync_started_at: new Date("2023-11-29T06:47:24.021Z"),
  sync_ended_at: new Date("2024-07-22T21:53:56.960Z"),
  sync_duration_seconds: 411840,
  integration_id: "<id>",
  integration_tool: "<value>",
  integration_category: "LMS",
  end_user: {
    organization_name: "<value>",
    creator_email: "Austen11@yahoo.com",
    origin_id: "<id>",
  },
  log_url: "https://mean-provider.name/",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `sync_id`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The unique identifier of the sync operation.                                                                       |
| `sync_state`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The final state of the sync operation (e.g., `SUCCEEDED`, `FAILED`).                                               |
| `sync_started_at`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | ISO 8601 timestamp when the sync operation started.                                                                |
| `sync_ended_at`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | ISO 8601 timestamp when the sync operation completed.                                                              |
| `sync_duration_seconds`                                                                                            | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Duration of the sync operation in seconds.                                                                         |
| `integration_id`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The unique identifier of the integration.                                                                          |
| `integration_tool`                                                                                                 | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The name of the integrated tool (e.g., "personio", "greenhouse").                                                  |
| `integration_category`                                                                                             | [models.SyncFinishedWebhookPayloadIntegrationCategory](../models/syncfinishedwebhookpayloadintegrationcategory.md) | :heavy_check_mark:                                                                                                 | The category of the integration (HRIS, ATS, ASSESSMENT, or LMS).                                                   |
| `end_user`                                                                                                         | [models.SyncFinishedWebhookPayloadEndUser](../models/syncfinishedwebhookpayloadenduser.md)                         | :heavy_check_mark:                                                                                                 | Information about the end user who created the integration.                                                        |
| `log_url`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | URL to view detailed logs for the operation.                                                                       |