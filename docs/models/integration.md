# Integration

The integration this issue belongs to. `null` for environment-wide issues.

## Example Usage

```typescript
import { Integration } from "@kombo-api/sdk/models";

let value: Integration = {
  id: "<id>",
  tool: "<value>",
  category: "ASSESSMENT",
  end_user: {
    organization_name: "<value>",
    creator_email: "Mallory1@hotmail.com",
    origin_id: null,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique identifier of the integration.                                                                |
| `tool`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The name of the integrated tool (e.g., "personio", "greenhouse").                                        |
| `category`                                                                                               | [models.IssueStatusChangedWebhookPayloadCategory](../models/issuestatuschangedwebhookpayloadcategory.md) | :heavy_check_mark:                                                                                       | The category of the integration (HRIS, ATS, ASSESSMENT, or LMS).                                         |
| `end_user`                                                                                               | [models.IssueStatusChangedWebhookPayloadEndUser](../models/issuestatuschangedwebhookpayloadenduser.md)   | :heavy_check_mark:                                                                                       | Information about the end user who created the integration.                                              |