# PostAtsJobsJobIdApplicationsPositiveResponseQuestionUnknown

## Example Usage

```typescript
import { PostAtsJobsJobIdApplicationsPositiveResponseQuestionUnknown } from "@kombo-api/sdk/models";

let value: PostAtsJobsJobIdApplicationsPositiveResponseQuestionUnknown = {
  remote_id: "<id>",
  title: "<value>",
  type: "UNKNOWN",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `remote_id`                                                                                                                                                      | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `title`                                                                                                                                                          | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `type`                                                                                                                                                           | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | When we're not able to map a specific question type yet, we will return this type. Every `UNKNOWN` question will also be parsed and unified by us at some point. |