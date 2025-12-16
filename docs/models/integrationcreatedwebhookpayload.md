# IntegrationCreatedWebhookPayload

## Example Usage

```typescript
import { IntegrationCreatedWebhookPayload } from "@kombo-api/sdk/models";

let value: IntegrationCreatedWebhookPayload = {
  id: "<id>",
  type: "integration-created",
  data: {
    id: "<id>",
    tool: "<value>",
    category: "LMS",
    end_user: {
      organization_name: "<value>",
      creator_email: "Annabell.DAmore70@hotmail.com",
      origin_id: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier for this webhook event                                                         |
| `type`                                                                                           | [models.IntegrationCreatedWebhookPayloadType](../models/integrationcreatedwebhookpayloadtype.md) | :heavy_check_mark:                                                                               | Type of the webhook event                                                                        |
| `data`                                                                                           | [models.IntegrationCreatedWebhookPayloadData](../models/integrationcreatedwebhookpayloaddata.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |