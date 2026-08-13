# PostAtsApplicationsApplicationIdResultLinksRequestBodyTalent360

Talent360 specific remote fields for the result link.

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdResultLinksRequestBodyTalent360 } from "@kombo-api/sdk/models";

let value: PostAtsApplicationsApplicationIdResultLinksRequestBodyTalent360 = {
  user_id: "<id>",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `user_id`                                                                                                                             | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Talent360 user ID the result-link note is attributed to. Required because every Talent360 communication must be attributed to a user. |