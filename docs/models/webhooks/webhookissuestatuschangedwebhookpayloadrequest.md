# WebhookIssueStatusChangedWebhookPayloadRequest

## Example Usage

```typescript
import { WebhookIssueStatusChangedWebhookPayloadRequest } from "@kombo-api/sdk/models/webhooks";

let value: WebhookIssueStatusChangedWebhookPayloadRequest = {
  x_kombo_signature: "<value>",
  body: {
    id: "<id>",
    type: "issue-status-changed",
    data: {
      change: "resolved",
      issue: {
        id: "<id>",
        type: "<value>",
        title: "<value>",
        status: "OPEN",
        markdown_message: "<value>",
        first_observed_at: new Date("2026-06-26T05:59:49.538Z"),
        resolved_at: new Date("2025-01-18T22:54:27.833Z"),
      },
      integration: {
        id: "<id>",
        tool: "<value>",
        category: "ASSESSMENT",
        end_user: {
          organization_name: "<value>",
          creator_email: "Mallory1@hotmail.com",
          origin_id: null,
        },
      },
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `x_kombo_signature`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HMAC signature for webhook verification. See the webhook documentation for details on how to verify this signature. |
| `body`                                                                                                              | [models.IssueStatusChangedWebhookPayload](../../models/issuestatuschangedwebhookpayload.md)                         | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |