# IntegrationStateChangedWebhookPayload

## Example Usage

```typescript
import { IntegrationStateChangedWebhookPayload } from "@kombo-api/sdk/models";

let value: IntegrationStateChangedWebhookPayload = {
  id: "<id>",
  type: "integration-state-changed",
  data: {
    integration_tool: "<value>",
    integration_id: "<id>",
    integration_category: "HRIS",
    end_user: {
      organization_name: "<value>",
      creator_email: "Cathrine_Simonis@hotmail.com",
      origin_id: "<id>",
    },
    qa_status: "FAILED",
    state: "ACTIVE",
    updated_at: new Date("2026-10-15T12:49:34.797Z"),
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique identifier for this webhook event                                                                   |
| `type`                                                                                                     | [models.IntegrationStateChangedWebhookPayloadType](../models/integrationstatechangedwebhookpayloadtype.md) | :heavy_check_mark:                                                                                         | Type of the webhook event                                                                                  |
| `data`                                                                                                     | [models.IntegrationStateChangedWebhookPayloadData](../models/integrationstatechangedwebhookpayloaddata.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |