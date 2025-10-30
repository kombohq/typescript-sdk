# PostHrisEmployeesFormPositiveResponse

## Example Usage

```typescript
import { PostHrisEmployeesFormPositiveResponse } from "@kombo-api/sdk/models";

let value: PostHrisEmployeesFormPositiveResponse = {
  status: "success",
  data: {
    id: "26vafvWSRmbhNcxJYqjCzuJg",
  },
  warnings: [
    {
      message: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       | Example                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                          | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |                                                                                                                                                                   |
| `data`                                                                                                                                                            | [models.PostHrisEmployeesFormPositiveResponseData](../models/posthrisemployeesformpositiveresponsedata.md)                                                        | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               | {<br/>"id": "26vafvWSRmbhNcxJYqjCzuJg"<br/>}                                                                                                                      |
| `warnings`                                                                                                                                                        | [models.PostHrisEmployeesFormPositiveResponseWarning](../models/posthrisemployeesformpositiveresponsewarning.md)[]                                                | :heavy_check_mark:                                                                                                                                                | These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. |                                                                                                                                                                   |