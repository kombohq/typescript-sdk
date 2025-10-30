# IntegrationStateChangedWebhookPayloadData

## Example Usage

```typescript
import { IntegrationStateChangedWebhookPayloadData } from "@kombo-api/sdk/models";

let value: IntegrationStateChangedWebhookPayloadData = {
  integration_tool: "<value>",
  integration_id: "<id>",
  integration_category: "ATS",
  end_user: {
    organization_name: "<value>",
    creator_email: "Tyrel.Romaguera@gmail.com",
    origin_id: "<id>",
  },
  qa_status: "PENDING",
  state: "INACTIVE",
  updated_at: new Date("2023-07-04T11:57:43.166Z"),
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `integration_tool`                                                                                                                       | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The name of the integrated tool (e.g., "personio", "greenhouse").                                                                        |
| `integration_id`                                                                                                                         | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The unique identifier of the integration.                                                                                                |
| `integration_category`                                                                                                                   | [models.IntegrationStateChangedWebhookPayloadIntegrationCategory](../models/integrationstatechangedwebhookpayloadintegrationcategory.md) | :heavy_check_mark:                                                                                                                       | The category of the integration (HRIS, ATS, or ASSESSMENT).                                                                              |
| `end_user`                                                                                                                               | [models.IntegrationStateChangedWebhookPayloadEndUser](../models/integrationstatechangedwebhookpayloadenduser.md)                         | :heavy_check_mark:                                                                                                                       | Information about the end user who created the integration.                                                                              |
| `qa_status`                                                                                                                              | [models.QaStatus](../models/qastatus.md)                                                                                                 | :heavy_check_mark:                                                                                                                       | The quality assurance status of the integration.                                                                                         |
| `state`                                                                                                                                  | [models.State](../models/state.md)                                                                                                       | :heavy_check_mark:                                                                                                                       | The current state of the integration.                                                                                                    |
| `updated_at`                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                            | :heavy_check_mark:                                                                                                                       | ISO 8601 timestamp when the integration state was last updated.                                                                          |