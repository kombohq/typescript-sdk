# Schema1OptionsInline1

## Example Usage

```typescript
import { Schema1OptionsInline1 } from "@kombo-api/sdk/models";

let value: Schema1OptionsInline1 = {
  type: "inline",
  entries: [
    {
      id: "<id>",
      label: "<value>",
      remote_id: 6013.97,
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `entries`                                            | [models.Schema1Entry1](../models/schema1entry1.md)[] | :heavy_check_mark:                                   | N/A                                                  |