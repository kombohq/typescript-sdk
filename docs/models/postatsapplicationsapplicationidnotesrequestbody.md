# PostAtsApplicationsApplicationIdNotesRequestBody

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdNotesRequestBody } from "@kombo-api/sdk/models";

let value: PostAtsApplicationsApplicationIdNotesRequestBody = {
  content: "<value>",
  content_type: "PLAIN_TEXT",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`                                                                                                                                          | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Title of the note, often called "subject" in the ATS. If the ATS has no note title, the title becomes the first line of the content instead.     |
| `content`                                                                                                                                        | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | UTF-8 content of the note.                                                                                                                       |
| `content_type`                                                                                                                                   | [models.ContentType](../models/contenttype.md)                                                                                                   | :heavy_check_mark:                                                                                                                               | Content type of the note. Currently only `PLAIN_TEXT` is supported.                                                                              |
| `remote_fields`                                                                                                                                  | [models.PostAtsApplicationsApplicationIdNotesRequestBodyRemoteFields](../models/postatsapplicationsapplicationidnotesrequestbodyremotefields.md) | :heavy_minus_sign:                                                                                                                               | Tool specific remote fields for the note.                                                                                                        |