# PostAtsApplicationsApplicationIdNotesRequestBodyTalent360

Talent360 specific remote fields for the note.

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdNotesRequestBodyTalent360 } from "@kombo-api/sdk/models";

let value: PostAtsApplicationsApplicationIdNotesRequestBodyTalent360 = {
  user_id: "<id>",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `user_id`                                                                                                                 | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | Talent360 user ID the note is attributed to. Required because every Talent360 communication must be attributed to a user. |