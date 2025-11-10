# PostAtsApplicationsApplicationIdNotesRequest

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdNotesRequest } from "@kombo-api/sdk/models/operations";

let value: PostAtsApplicationsApplicationIdNotesRequest = {
  application_id: "<id>",
  body: {
    content: "<value>",
    content_type: "PLAIN_TEXT",
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `application_id`                                                                                                            | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The Kombo ID of the application you want to create the note for.                                                            |
| `body`                                                                                                                      | [models.PostAtsApplicationsApplicationIdNotesRequestBody](../../models/postatsapplicationsapplicationidnotesrequestbody.md) | :heavy_check_mark:                                                                                                          | POST /ats/applications/:application_id/notes Request body                                                                   |