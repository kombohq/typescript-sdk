# FormatSingleSelect

## Example Usage

```typescript
import { FormatSingleSelect } from "@kombo-api/sdk/models";

let value: FormatSingleSelect = {
  options: [],
  type: "SINGLE_SELECT",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `display_type`                                                                               | [models.DisplayType3](../models/displaytype3.md)                                             | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `options`                                                                                    | [models.GetAtsJobsPositiveResponseOption1](../models/getatsjobspositiveresponseoption1.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | *"SINGLE_SELECT"*                                                                            | :heavy_check_mark:                                                                           | N/A                                                                                          |