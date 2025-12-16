# GetToolsCategoryPositiveResponseData

## Example Usage

```typescript
import { GetToolsCategoryPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetToolsCategoryPositiveResponseData = {
  tools: [
    {
      id: "factorial",
      label: "Factorial",
      internal_label: null,
      assets: {
        logo_url:
          "https://storage.googleapis.com/kombo-assets/integrations/factorial/logo.svg",
        icon_url:
          "https://storage.googleapis.com/kombo-assets/integrations/factorial/icon.svg",
        icon_black_url:
          "https://storage.googleapis.com/kombo-assets/integrations/factorial/icon-black.svg",
      },
      paid_api_details_markdown: null,
      fast_track_details_markdown: null,
      partner_only_details_markdown: null,
      connection_guide_url:
        "https://help.kombo.dev/hc/en-us/articles/18743884123409-Factorial-HR-How-do-I-link-my-account",
      coverage: {
        read_models: [
          {
            id: "hris_employees",
            label: "Employees",
            coverage_status: "SUPPORTED",
            fields: [
              {
                id: "date_of_birth",
                coverage_status: "SUPPORTED",
              },
            ],
          },
          {
            id: "hris_teams",
            label: "Groups",
            coverage_status: "UNSUPPORTED",
            fields: [
              {
                id: "parent_id",
                coverage_status: "UNSUPPORTED",
              },
            ],
          },
        ],
        write_actions: [
          {
            id: "hris_create_employee",
            label: "Create employee",
            coverage_status: "SUPPORTED",
            fields: [
              {
                id: "first_name",
                coverage_status: "SUPPORTED",
              },
            ],
          },
        ],
        features: [
          {
            id: "automatic_source_writing",
            label: "Automatic Source Writing",
            coverage_status: "SUPPORTED",
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `tools`                                                                                            | [models.GetToolsCategoryPositiveResponseTool](../models/gettoolscategorypositiveresponsetool.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |