# ConnectionFlowFailedWebhookPayload

## Example Usage

```typescript
import { ConnectionFlowFailedWebhookPayload } from "@kombo-api/sdk/models";

let value: ConnectionFlowFailedWebhookPayload = {
  id: "<id>",
  type: "connection-flow-failed",
  data: {
    integration_tool: "<value>",
    integration_category: "HRIS",
    end_user: {
      organization_name: "<value>",
      creator_email: "Caden_Reynolds16@hotmail.com",
      origin_id: "<id>",
    },
    log_url: "https://prestigious-space.name/",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | Unique identifier for this webhook event                                                             |
| `type`                                                                                               | [models.ConnectionFlowFailedWebhookPayloadType](../models/connectionflowfailedwebhookpayloadtype.md) | :heavy_check_mark:                                                                                   | Type of the webhook event                                                                            |
| `data`                                                                                               | [models.ConnectionFlowFailedWebhookPayloadData](../models/connectionflowfailedwebhookpayloaddata.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |