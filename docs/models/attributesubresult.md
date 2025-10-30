# AttributeSubResult

## Example Usage

```typescript
import { AttributeSubResult } from "@kombo-api/sdk/models";

let value: AttributeSubResult = {
  type: "SUB_RESULT",
  id: "<id>",
  label: "<value>",
  score: {
    value: 2480.69,
    max: 987.12,
  },
  status: "COMPLETED",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `label`                                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `score`                                                | [models.Score](../models/score.md)                     | :heavy_check_mark:                                     | N/A                                                    |
| `status`                                               | [models.AttributeStatus](../models/attributestatus.md) | :heavy_check_mark:                                     | N/A                                                    |