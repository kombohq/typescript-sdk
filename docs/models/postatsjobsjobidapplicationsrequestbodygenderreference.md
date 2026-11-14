# PostAtsJobsJobIdApplicationsRequestBodyGenderReference

Gender reference written to Person Biographic and Demographic Information Data.

## Example Usage

```typescript
import { PostAtsJobsJobIdApplicationsRequestBodyGenderReference } from "@kombo-api/sdk/models";

let value: PostAtsJobsJobIdApplicationsRequestBodyGenderReference = {
  gender_code: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `gender_code`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Tenant Gender_Code for the gender, such as Feminin. Not the Kombo gender enum and not the display label. |