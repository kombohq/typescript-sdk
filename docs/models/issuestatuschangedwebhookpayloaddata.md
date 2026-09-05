# IssueStatusChangedWebhookPayloadData

## Example Usage

```typescript
import { IssueStatusChangedWebhookPayloadData } from "@kombo-api/sdk/models";

let value: IssueStatusChangedWebhookPayloadData = {
  change: "raised",
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `change`                                                                   | [models.Change](../models/change.md)                                       | :heavy_check_mark:                                                         | Why this webhook was sent: the issue was raised or resolved.               |
| `issue`                                                                    | [models.Issue](../models/issue.md)                                         | :heavy_check_mark:                                                         | N/A                                                                        |
| `integration`                                                              | [models.Integration](../models/integration.md)                             | :heavy_check_mark:                                                         | The integration this issue belongs to. `null` for environment-wide issues. |