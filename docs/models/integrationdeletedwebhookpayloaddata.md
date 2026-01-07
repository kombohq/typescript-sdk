# IntegrationDeletedWebhookPayloadData

## Example Usage

```typescript
import { IntegrationDeletedWebhookPayloadData } from "@kombo-api/sdk/models";

let value: IntegrationDeletedWebhookPayloadData = {
  id: "<id>",
  tool: "<value>",
  category: "ASSESSMENT",
  end_user: {
    organization_name: "<value>",
    creator_email: "Chanel.Bechtelar40@gmail.com",
    origin_id: "<id>",
  },
  deleted_at: new Date("2023-05-07T10:21:09.462Z"),
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique identifier of the deleted integration.                                                        |
| `tool`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The name of the integrated tool.                                                                         |
| `category`                                                                                               | [models.IntegrationDeletedWebhookPayloadCategory](../models/integrationdeletedwebhookpayloadcategory.md) | :heavy_check_mark:                                                                                       | The category of the integration.                                                                         |
| `end_user`                                                                                               | [models.IntegrationDeletedWebhookPayloadEndUser](../models/integrationdeletedwebhookpayloadenduser.md)   | :heavy_check_mark:                                                                                       | Information about the end user who created the integration.                                              |
| `deleted_at`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_check_mark:                                                                                       | ISO 8601 timestamp when the integration was deleted.                                                     |