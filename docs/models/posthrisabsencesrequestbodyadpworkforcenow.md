# PostHrisAbsencesRequestBodyAdpworkforcenow

Fields specific to ADP Workforce Now.

## Example Usage

```typescript
import { PostHrisAbsencesRequestBodyAdpworkforcenow } from "@kombo-api/sdk/models";

let value: PostHrisAbsencesRequestBodyAdpworkforcenow = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `employment_id`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | [Required] The employment ID of the employee that the absence will be added to. |
| `paid_leave`                                                                    | *boolean*                                                                       | :heavy_minus_sign:                                                              | Whether the absence is paid or not.                                             |