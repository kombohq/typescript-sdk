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
    category: "ASSESSMENT",
    end_user: {
      organization_name: "<value>",
      creator_email: "Chanel.Bechtelar40@gmail.com",
      origin_id: "<id>",
    },
    deleted_at: new Date("2025-12-23T03:35:56.048Z"),
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier for this webhook event                                                         |
| `type`                                                                                           | [models.IntegrationDeletedWebhookPayloadType](../models/integrationdeletedwebhookpayloadtype.md) | :heavy_check_mark:                                                                               | Type of the webhook event                                                                        |
| `data`                                                                                           | [models.IntegrationDeletedWebhookPayloadData](../models/integrationdeletedwebhookpayloaddata.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |