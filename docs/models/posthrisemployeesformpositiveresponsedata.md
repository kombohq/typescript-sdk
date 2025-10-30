# PostHrisEmployeesFormPositiveResponseData

## Example Usage

```typescript
import { PostHrisEmployeesFormPositiveResponseData } from "@kombo-api/sdk/models";

let value: PostHrisEmployeesFormPositiveResponseData = {
  id: "26vafvWSRmbhNcxJYqjCzuJg",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The Kombo id of the created employee. If null, we only created a pre-hire which shows up in the next sync after a successful onboarding. |