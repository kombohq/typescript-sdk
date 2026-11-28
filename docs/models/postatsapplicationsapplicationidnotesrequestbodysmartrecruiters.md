# PostAtsApplicationsApplicationIdNotesRequestBodySmartrecruiters

SmartRecruiters specific remote fields for the note.

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdNotesRequestBodySmartrecruiters } from "@kombo-api/sdk/models";

let value: PostAtsApplicationsApplicationIdNotesRequestBodySmartrecruiters = {};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `share_with`                                                                                                                                                     | [models.ShareWith](../models/sharewith.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                               | Sharing and visibility options passed through to SmartRecruiters' `POST /messages/shares` `shareWith` field. Defaults to `{ openNote: true }` when not provided. |