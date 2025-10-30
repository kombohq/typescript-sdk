# PostAtsCandidatesCandidateIdAttachmentsRequest

## Example Usage

```typescript
import { PostAtsCandidatesCandidateIdAttachmentsRequest } from "@kombo-api/sdk/models/operations";

let value: PostAtsCandidatesCandidateIdAttachmentsRequest = {
  candidate_id: "<id>",
  post_ats_candidates_candidate_id_attachments_request_body: {
    attachment: {
      name: "<value>",
      type: "COVER_LETTER",
    },
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `candidate_id`                                                                                                                  | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The Kombo ID of the candidate you want to add the attachment to.                                                                |
| `post_ats_candidates_candidate_id_attachments_request_body`                                                                     | [models.PostAtsCandidatesCandidateIdAttachmentsRequestBody](../../models/postatscandidatescandidateidattachmentsrequestbody.md) | :heavy_check_mark:                                                                                                              | POST /ats/candidates/:candidate_id/attachments Request body                                                                     |