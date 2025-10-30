# IntegrationCreatedWebhookPayloadData

## Example Usage

```typescript
import { IntegrationCreatedWebhookPayloadData } from "@kombo-api/sdk/models";

let value: IntegrationCreatedWebhookPayloadData = {
  id: "<id>",
  tool: "<value>",
  category: "HRIS",
  end_user: {
    organization_name: "<value>",
    creator_email: "Jarrell_Murray14@hotmail.com",
    origin_id: "<id>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique identifier of the newly created integration.                                                  |
| `tool`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The name of the integrated tool.                                                                         |
| `category`                                                                                               | [models.IntegrationCreatedWebhookPayloadCategory](../models/integrationcreatedwebhookpayloadcategory.md) | :heavy_check_mark:                                                                                       | The category of the integration.                                                                         |
| `end_user`                                                                                               | [models.IntegrationCreatedWebhookPayloadEndUser](../models/integrationcreatedwebhookpayloadenduser.md)   | :heavy_check_mark:                                                                                       | Information about the end user who created the integration.                                              |