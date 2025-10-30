# GetIntegrationsIntegrationIdPositiveResponseEndUser

## Example Usage

```typescript
import { GetIntegrationsIntegrationIdPositiveResponseEndUser } from "@kombo-api/sdk/models";

let value: GetIntegrationsIntegrationIdPositiveResponseEndUser = {
  organization_name: "<value>",
  creator_email: "<value>",
  origin_id: "<id>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `organization_name`                                                                 | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `creator_email`                                                                     | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `origin_id`                                                                         | *string*                                                                            | :heavy_check_mark:                                                                  | The ID you have passed initially to the connection flow to create this integration. |