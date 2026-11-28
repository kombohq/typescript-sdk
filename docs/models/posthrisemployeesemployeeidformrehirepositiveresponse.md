# PostHrisEmployeesEmployeeIdFormRehirePositiveResponse

## Example Usage

```typescript
import { PostHrisEmployeesEmployeeIdFormRehirePositiveResponse } from "@kombo-api/sdk/models";

let value: PostHrisEmployeesEmployeeIdFormRehirePositiveResponse = {
  status: "success",
  data: {
    id: "26vafvWSRmbhNcxJYqjCzuJg",
    remote_id: "12345",
  },
  warnings: [],
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       | Example                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                          | *"success"*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |                                                                                                                                                                   |
| `data`                                                                                                                                                            | [models.PostHrisEmployeesEmployeeIdFormRehirePositiveResponseData](../models/posthrisemployeesemployeeidformrehirepositiveresponsedata.md)                        | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               | {<br/>"id": "26vafvWSRmbhNcxJYqjCzuJg",<br/>"remote_id": "12345"<br/>}                                                                                            |
| `warnings`                                                                                                                                                        | [models.PostHrisEmployeesEmployeeIdFormRehirePositiveResponseWarning](../models/posthrisemployeesemployeeidformrehirepositiveresponsewarning.md)[]                | :heavy_check_mark:                                                                                                                                                | These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. |                                                                                                                                                                   |