# ResultMultiSelect

## Example Usage

```typescript
import { ResultMultiSelect } from "@kombo-api/sdk/models";

let value: ResultMultiSelect = {
  remote_id: "<id>",
  label: "<value>",
  description: "despite snarling reorganisation mortally always",
  required: false,
  type: "MULTI_SELECT",
  options: [],
  answer: [
    {
      remote_id: "<id>",
      label: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `remote_id`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | ID of the question in the connected ATS. `null` when the ATS keeps the headline rating or summary outside the rubric. |
| `label`                                                                                                               | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The question or attribute being assessed, e.g. "Willingness to travel".                                               |
| `description`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Guidance the ATS shows the interviewer below the question, e.g. "1 is poor, 4 is great".                              |
| `required`                                                                                                            | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | Whether the ATS marked this question mandatory.                                                                       |
| `type`                                                                                                                | *"MULTI_SELECT"*                                                                                                      | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `options`                                                                                                             | [models.GetAtsScorecardsPositiveResponseOption2](../models/getatsscorecardspositiveresponseoption2.md)[]              | :heavy_check_mark:                                                                                                    | Every option available for select and multi-select questions.                                                         |
| `answer`                                                                                                              | [models.GetAtsScorecardsPositiveResponseAnswer2](../models/getatsscorecardspositiveresponseanswer2.md)[]              | :heavy_check_mark:                                                                                                    | An array of ids and labels with every selected option.                                                                |