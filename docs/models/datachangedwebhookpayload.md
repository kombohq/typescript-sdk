# DataChangedWebhookPayload

## Example Usage

```typescript
import { DataChangedWebhookPayload } from "@kombo-api/sdk/models";

let value: DataChangedWebhookPayload = {
  id: "<id>",
  type: "data-changed",
  data: {
    integration_id: "<id>",
    integration_tool: "<value>",
    integration_category: "ASSESSMENT",
    changed_models: [],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | Unique identifier for this webhook event                                           |
| `type`                                                                             | [models.DataChangedWebhookPayloadType](../models/datachangedwebhookpayloadtype.md) | :heavy_check_mark:                                                                 | Type of the webhook event                                                          |
| `data`                                                                             | [models.DataChangedWebhookPayloadData](../models/datachangedwebhookpayloaddata.md) | :heavy_check_mark:                                                                 | N/A                                                                                |