# ShareWith

Sharing and visibility options passed through to SmartRecruiters' `POST /messages/shares` `shareWith` field. Defaults to `{ openNote: true }` when not provided.

## Example Usage

```typescript
import { ShareWith } from "@kombo-api/sdk/models";

let value: ShareWith = {};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `users`                                                                                                                                   | *string*[]                                                                                                                                | :heavy_minus_sign:                                                                                                                        | Array of SmartRecruiters user remote IDs to share the note with.                                                                          |
| `hiring_team_of`                                                                                                                          | *string*[]                                                                                                                                | :heavy_minus_sign:                                                                                                                        | Array of SmartRecruiters job remote IDs whose hiring teams the note will be shared with.                                                  |
| `everyone`                                                                                                                                | *boolean*                                                                                                                                 | :heavy_minus_sign:                                                                                                                        | Whether to share the note with everyone in the company. Cannot be `true` at the same time as `openNote`.                                  |
| `open_note`                                                                                                                               | *boolean*                                                                                                                                 | :heavy_minus_sign:                                                                                                                        | Whether the note is visible to everyone in the company who has access to the candidate. Defaults to `false` when `shareWith` is provided. |