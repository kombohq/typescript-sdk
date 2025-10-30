# SyncFinishedWebhookPayloadEndUser

Information about the end user who created the integration.

## Example Usage

```typescript
import { SyncFinishedWebhookPayloadEndUser } from "@kombo-api/sdk/models";

let value: SyncFinishedWebhookPayloadEndUser = {
  organization_name: "<value>",
  creator_email: null,
  origin_id: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `organization_name`                                                 | *string*                                                            | :heavy_check_mark:                                                  | The name of the organization that owns the integration.             |
| `creator_email`                                                     | *string*                                                            | :heavy_check_mark:                                                  | The email address of the user who created the integration.          |
| `origin_id`                                                         | *string*                                                            | :heavy_check_mark:                                                  | The unique identifier of the organization in the integrated system. |