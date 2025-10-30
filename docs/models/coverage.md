# Coverage

This describes the supported models and actions of this tool.

## Example Usage

```typescript
import { Coverage } from "@kombo-api/sdk/models";

let value: Coverage = {
  read_models: [
    {
      id: "<id>",
      label: "<value>",
      coverage_status: "UNSUPPORTED",
      fields: [
        {
          id: "<id>",
          coverage_status: "UNSUPPORTED",
        },
      ],
    },
  ],
  write_actions: [],
  features: [
    {
      id: "<id>",
      label: "<value>",
      coverage_status: "SUPPORTED",
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `read_models`                                                                                                | [models.GetToolsCategoryPositiveResponseReadModel](../models/gettoolscategorypositiveresponsereadmodel.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `write_actions`                                                                                              | [models.WriteAction](../models/writeaction.md)[]                                                             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `features`                                                                                                   | [models.Feature](../models/feature.md)[]                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |