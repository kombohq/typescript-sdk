# FormatText

## Example Usage

```typescript
import { FormatText } from "@kombo-api/sdk/models";

let value: FormatText = {
  type: "TEXT",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `display_type`                                               | [models.DisplayType1](../models/displaytype1.md)             | :heavy_minus_sign:                                           | If unavailable, we recommend displaying a single-line input. |
| `max_length`                                                 | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |