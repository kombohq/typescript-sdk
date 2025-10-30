# IntegrationDeletedWebhookPayload

## Example Usage

```typescript
import { IntegrationDeletedWebhookPayload } from "@kombo-api/sdk/models";

let value: IntegrationDeletedWebhookPayload = {
  id: "<id>",
  type: "integration-deleted",
  data: {
    id: "<id>",
    tool: "<value>",
    category: "ATS",
    end_user: {
      organization_name: "<value>",
      creator_email: null,
      origin_id: "<id>",
    },
    deleted_at: new Date("2025-02-17T13:48:06.789Z"),
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier for this webhook event                                                         |
| `type`                                                                                           | [models.IntegrationDeletedWebhookPayloadType](../models/integrationdeletedwebhookpayloadtype.md) | :heavy_check_mark:                                                                               | Type of the webhook event                                                                        |
| `data`                                                                                           | [models.IntegrationDeletedWebhookPayloadData](../models/integrationdeletedwebhookpayloaddata.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |