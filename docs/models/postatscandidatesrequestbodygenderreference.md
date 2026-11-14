# PostAtsCandidatesRequestBodyGenderReference

Gender reference written to Person Biographic and Demographic Information Data.

## Example Usage

```typescript
import { PostAtsCandidatesRequestBodyGenderReference } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesRequestBodyGenderReference = {
  gender_code: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `gender_code`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Tenant Gender_Code for the gender, such as Feminin. Not the Kombo gender enum and not the display label. |