# DataChangedWebhookPayloadData

## Example Usage

```typescript
import { DataChangedWebhookPayloadData } from "@kombo-api/sdk/models";

let value: DataChangedWebhookPayloadData = {
  integration_id: "<id>",
  integration_tool: "<value>",
  integration_category: "ASSESSMENT",
  changed_models: [],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `integration_id`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The unique identifier of the integration.                                                                        |
| `integration_tool`                                                                                               | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The name of the integrated tool (e.g., "personio", "greenhouse").                                                |
| `integration_category`                                                                                           | [models.DataChangedWebhookPayloadIntegrationCategory](../models/datachangedwebhookpayloadintegrationcategory.md) | :heavy_check_mark:                                                                                               | The category of the integration (HRIS, ATS, or ASSESSMENT).                                                      |
| `changed_models`                                                                                                 | [models.ChangedModel](../models/changedmodel.md)[]                                                               | :heavy_check_mark:                                                                                               | List of data models and connections for which one or more records were created, updated, or deleted.             |