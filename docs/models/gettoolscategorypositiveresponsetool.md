# GetToolsCategoryPositiveResponseTool

## Example Usage

```typescript
import { GetToolsCategoryPositiveResponseTool } from "@kombo-api/sdk/models";

let value: GetToolsCategoryPositiveResponseTool = {
  id: "<id>",
  label: "<value>",
  internal_label: "<value>",
  assets: {
    logo_url: "https://bony-gastropod.biz",
    icon_url: "https://exotic-trolley.name",
    icon_black_url: "https://prudent-affect.com",
  },
  paid_api_details_markdown: "<value>",
  fast_track_details_markdown: null,
  partner_only_details_markdown: "<value>",
  connection_guide_url: "https://neighboring-freckle.biz/",
  coverage: {
    read_models: [],
    write_actions: [],
    features: [
      {
        id: "<id>",
        label: "<value>",
        coverage_status: "SUPPORTED",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                            | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `label`                                                                                                                         | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `internal_label`                                                                                                                | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Internal label that can help you debug specific variants of the integration. Only show the `label` to your users.               |
| `assets`                                                                                                                        | [models.Assets](../models/assets.md)                                                                                            | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `paid_api_details_markdown`                                                                                                     | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Markdown formatted text that describes details about the paid API. `null` if the tool is not paid.                              |
| `fast_track_details_markdown`                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Markdown formatted text that describes details about the fast track process. `null` if the fast track process is not available. |
| `partner_only_details_markdown`                                                                                                 | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Markdown formatted text that describes partnership requirements. `null` if the tool does not require a partnership.             |
| `connection_guide_url`                                                                                                          | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | URL to the connection guide for this tool. `null` if no connection guide is available.                                          |
| `coverage`                                                                                                                      | [models.Coverage](../models/coverage.md)                                                                                        | :heavy_check_mark:                                                                                                              | This describes the supported models and actions of this tool.                                                                   |