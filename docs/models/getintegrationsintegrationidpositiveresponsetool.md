# GetIntegrationsIntegrationIdPositiveResponseTool

## Example Usage

```typescript
import { GetIntegrationsIntegrationIdPositiveResponseTool } from "@kombo-api/sdk/models";

let value: GetIntegrationsIntegrationIdPositiveResponseTool = {
  id: "<id>",
  label: "<value>",
  internal_label: "<value>",
  logo_url: "https://unusual-disappointment.biz",
  icon_url: "https://homely-lady.biz",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The ID of the connected tool in Kombo (e.g. `factorial`).                                                         |
| `label`                                                                                                           | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `internal_label`                                                                                                  | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Internal label that can help you debug specific variants of the integration. Only show the `label` to your users. |
| `logo_url`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | URL to an SVG logo of the connected tool. The logo usually contains the tool name.                                |
| `icon_url`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | URL to a square SVG icon of the connected tool.                                                                   |