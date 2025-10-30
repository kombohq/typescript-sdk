# IntegrationCreatedWebhookPayloadEndUser

Information about the end user who created the integration.

## Example Usage

```typescript
import { IntegrationCreatedWebhookPayloadEndUser } from "@kombo-api/sdk/models";

let value: IntegrationCreatedWebhookPayloadEndUser = {
  organization_name: "<value>",
  creator_email: "Janiya.Kirlin7@gmail.com",
  origin_id: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `organization_name`                                                 | *string*                                                            | :heavy_check_mark:                                                  | The name of the organization that owns the integration.             |
| `creator_email`                                                     | *string*                                                            | :heavy_check_mark:                                                  | The email address of the user who created the integration.          |
| `origin_id`                                                         | *string*                                                            | :heavy_check_mark:                                                  | The unique identifier of the organization in the integrated system. |