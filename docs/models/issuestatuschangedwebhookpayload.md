# IssueStatusChangedWebhookPayload

## Example Usage

```typescript
import { IssueStatusChangedWebhookPayload } from "@kombo-api/sdk/models";

let value: IssueStatusChangedWebhookPayload = {
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
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier for this webhook event                                                         |
| `type`                                                                                           | [models.IssueStatusChangedWebhookPayloadType](../models/issuestatuschangedwebhookpayloadtype.md) | :heavy_check_mark:                                                                               | Type of the webhook event                                                                        |
| `data`                                                                                           | [models.IssueStatusChangedWebhookPayloadData](../models/issuestatuschangedwebhookpayloaddata.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |