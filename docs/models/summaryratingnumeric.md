# SummaryRatingNumeric

## Example Usage

```typescript
import { SummaryRatingNumeric } from "@kombo-api/sdk/models";

let value: SummaryRatingNumeric = {
  type: "NUMERIC",
  min: 1898.13,
  max: null,
  value: 8466.98,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `type`                                   | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `min`                                    | *number*                                 | :heavy_check_mark:                       | The minimum value of the summary rating. |
| `max`                                    | *number*                                 | :heavy_check_mark:                       | The maximum value of the summary rating. |
| `value`                                  | *number*                                 | :heavy_check_mark:                       | The numeric value of the summary rating. |