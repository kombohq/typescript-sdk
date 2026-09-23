# GetAtsScorecardsPositiveResponseOption2

## Example Usage

```typescript
import { GetAtsScorecardsPositiveResponseOption2 } from "@kombo-api/sdk/models";

let value: GetAtsScorecardsPositiveResponseOption2 = {
  remote_id: "<id>",
  label: "<value>",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `remote_id`                                                                                                                     | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The ID of this option in the remote system, e.g. `strong_hire`. `null` when the system identifies the option only by its label. |
| `label`                                                                                                                         | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The option as the interviewer sees it, e.g. "Strong Hire".                                                                      |