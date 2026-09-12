# ResultSingleSelect

## Example Usage

```typescript
import { ResultSingleSelect } from "@kombo-api/sdk/models";

let value: ResultSingleSelect = {
  remote_id: null,
  label: "<value>",
  description: "for ha next nectarine",
  required: true,
  type: "SINGLE_SELECT",
  options: [
    {
      remote_id: "<id>",
      label: "<value>",
    },
  ],
  answer: null,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `remote_id`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | ID of the question in the connected ATS. `null` when the ATS keeps the headline rating or summary outside the rubric. |
| `label`                                                                                                               | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The question or attribute being assessed, e.g. "Willingness to travel".                                               |
| `description`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Guidance the ATS shows the interviewer below the question, e.g. "1 is poor, 4 is great".                              |
| `required`                                                                                                            | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | Whether the ATS marked this question mandatory.                                                                       |
| `type`                                                                                                                | *"SINGLE_SELECT"*                                                                                                     | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `options`                                                                                                             | [models.GetAtsScorecardsPositiveResponseOption1](../models/getatsscorecardspositiveresponseoption1.md)[]              | :heavy_check_mark:                                                                                                    | Every option available for select and multi-select questions.                                                         |
| `answer`                                                                                                              | [models.GetAtsScorecardsPositiveResponseAnswer1](../models/getatsscorecardspositiveresponseanswer1.md)                | :heavy_check_mark:                                                                                                    | The id and label of the selected option.                                                                              |