# ResultNumber

## Example Usage

```typescript
import { ResultNumber } from "@kombo-api/sdk/models";

let value: ResultNumber = {
  remote_id: "<id>",
  label: "<value>",
  description: "vainly solidly low warmhearted along cannon",
  required: false,
  type: "NUMBER",
  answer: 1611.2,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `remote_id`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | ID of the question in the connected ATS. `null` when the ATS keeps the headline rating or summary outside the rubric. |
| `label`                                                                                                               | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The question or attribute being assessed, e.g. "Willingness to travel".                                               |
| `description`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Guidance the ATS shows the interviewer below the question, e.g. "1 is poor, 4 is great".                              |
| `required`                                                                                                            | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | Whether the ATS marked this question mandatory.                                                                       |
| `type`                                                                                                                | *"NUMBER"*                                                                                                            | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `answer`                                                                                                              | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | A decimal value.                                                                                                      |