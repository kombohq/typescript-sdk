# PostHrisEmployeesFormPositiveResponseData

## Example Usage

```typescript
import { PostHrisEmployeesFormPositiveResponseData } from "@kombo-api/sdk/models";

let value: PostHrisEmployeesFormPositiveResponseData = {
  id: "26vafvWSRmbhNcxJYqjCzuJg",
  remote_id: "12345",
  prehire: {
    remote_id: null,
  },
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                              | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The Kombo id of the created employee. If null, we only created a pre-hire which shows up in the next sync after a successful onboarding.                                                          |
| `remote_id`                                                                                                                                                                                       | *string*                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | The raw ID of the created employee in the remote system. This is only populated when `id` is set (i.e., when a full employee was created). For pre-hires, use the `prehire` object instead.       |
| `prehire`                                                                                                                                                                                         | [models.Prehire](../models/prehire.md)                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                | An object containing the temporary pre-hire information from the remote system. This ID may change or become invalid when the pre-hire becomes a full employee. Only populated when `id` is null. |