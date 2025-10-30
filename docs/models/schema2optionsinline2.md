# Schema2OptionsInline2

## Example Usage

```typescript
import { Schema2OptionsInline2 } from "@kombo-api/sdk/models";

let value: Schema2OptionsInline2 = {
  type: "inline",
  entries: [
    {
      id: "<id>",
      label: "<value>",
      remote_id: "<id>",
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `entries`                                            | [models.Schema2Entry2](../models/schema2entry2.md)[] | :heavy_check_mark:                                   | N/A                                                  |