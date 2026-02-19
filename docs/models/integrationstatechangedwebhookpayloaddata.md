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
    creator_email: "Cathrine_Simonis@hotmail.com",
    origin_id: "<id>",
  },
  qa_status: "PASSED",
  setup_status: "INCOMPLETE",
  state: "INACTIVE",
  updated_at: new Date("2025-10-12T14:45:13.654Z"),
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `integration_tool`                                                                                                                       | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The name of the integrated tool (e.g., "personio", "greenhouse").                                                                        |
| `integration_id`                                                                                                                         | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The unique identifier of the integration.                                                                                                |
| `integration_category`                                                                                                                   | [models.IntegrationStateChangedWebhookPayloadIntegrationCategory](../models/integrationstatechangedwebhookpayloadintegrationcategory.md) | :heavy_check_mark:                                                                                                                       | The category of the integration (HRIS, ATS, ASSESSMENT, or LMS).                                                                         |
| `end_user`                                                                                                                               | [models.IntegrationStateChangedWebhookPayloadEndUser](../models/integrationstatechangedwebhookpayloadenduser.md)                         | :heavy_check_mark:                                                                                                                       | Information about the end user who created the integration.                                                                              |
| `qa_status`                                                                                                                              | [models.QaStatus](../models/qastatus.md)                                                                                                 | :heavy_check_mark:                                                                                                                       | The quality assurance status of the integration.                                                                                         |
| `setup_status`                                                                                                                           | [models.IntegrationStateChangedWebhookPayloadSetupStatus](../models/integrationstatechangedwebhookpayloadsetupstatus.md)                 | :heavy_check_mark:                                                                                                                       | The current status of an integration that has filtering, field mapping features or required setup steps.                                 |
| `state`                                                                                                                                  | [models.State](../models/state.md)                                                                                                       | :heavy_check_mark:                                                                                                                       | The current state of the integration.                                                                                                    |
| `updated_at`                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                            | :heavy_check_mark:                                                                                                                       | ISO 8601 timestamp when the integration state was last updated.                                                                          |