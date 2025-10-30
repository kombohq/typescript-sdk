# Option2

## Example Usage

```typescript
import { Option2 } from "@kombo-api/sdk/models";

let value: Option2 = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | The Kombo ID of this question option. Use this ID to specify the answer to this question.             |
| `remote_id`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | ID in the connected ATS. This might be null as some systems only use the name to identify the option. |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | Content of the question option.                                                                       |