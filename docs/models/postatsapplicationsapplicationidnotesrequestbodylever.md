# PostAtsApplicationsApplicationIdNotesRequestBodyLever

Lever specific remote fields for the note.

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdNotesRequestBodyLever } from "@kombo-api/sdk/models";

let value: PostAtsApplicationsApplicationIdNotesRequestBodyLever = {};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `perform_as`                                                                                                                              | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | ID of the Lever user that will show up as having created the note. If not provided, defaults to the user associated with the OAuth token. |