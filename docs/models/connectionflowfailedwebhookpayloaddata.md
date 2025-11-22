# ConnectionFlowFailedWebhookPayloadData

## Example Usage

```typescript
import { ConnectionFlowFailedWebhookPayloadData } from "@kombo-api/sdk/models";

let value: ConnectionFlowFailedWebhookPayloadData = {
  integration_tool: "<value>",
  integration_category: "HRIS",
  end_user: {
    organization_name: "<value>",
    creator_email: "Caden_Reynolds16@hotmail.com",
    origin_id: "<id>",
  },
  log_url: "https://fruitful-alb.net/",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `integration_tool`                                                                                                                 | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The name of the integrated tool (e.g., "personio", "greenhouse").                                                                  |
| `integration_category`                                                                                                             | [models.ConnectionFlowFailedWebhookPayloadIntegrationCategory](../models/connectionflowfailedwebhookpayloadintegrationcategory.md) | :heavy_check_mark:                                                                                                                 | The category of the integration (HRIS, ATS, or ASSESSMENT).                                                                        |
| `end_user`                                                                                                                         | [models.ConnectionFlowFailedWebhookPayloadEndUser](../models/connectionflowfailedwebhookpayloadenduser.md)                         | :heavy_check_mark:                                                                                                                 | Information about the end user who created the integration.                                                                        |
| `log_url`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | URL to view detailed logs for the operation.                                                                                       |