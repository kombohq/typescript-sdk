# FormatUnknown

## Example Usage

```typescript
import { FormatUnknown } from "@kombo-api/sdk/models";

let value: FormatUnknown = {
  type: "UNKNOWN",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `raw_question`                                                                                                                                                   | *any*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                               | We pass the original question data along so you can handle it.                                                                                                   |
| `type`                                                                                                                                                           | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | When we're not able to map a specific question type yet, we will return this type. Every `UNKNOWN` question will also be parsed and unified by us at some point. |