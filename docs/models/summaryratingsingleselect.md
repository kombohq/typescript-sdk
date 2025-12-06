# SummaryRatingSingleSelect

## Example Usage

```typescript
import { SummaryRatingSingleSelect } from "@kombo-api/sdk/models";

let value: SummaryRatingSingleSelect = {
  type: "SINGLE_SELECT",
  ordered_options: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  value: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *"SINGLE_SELECT"*                                            | :heavy_check_mark:                                           | N/A                                                          |
| `ordered_options`                                            | *string*[]                                                   | :heavy_check_mark:                                           | The options of the summary rating. Ordered from bad to good. |
| `value`                                                      | *string*                                                     | :heavy_check_mark:                                           | The text value of the summary rating.                        |