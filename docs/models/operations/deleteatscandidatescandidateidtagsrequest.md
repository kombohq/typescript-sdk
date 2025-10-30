# DeleteAtsCandidatesCandidateIdTagsRequest

## Example Usage

```typescript
import { DeleteAtsCandidatesCandidateIdTagsRequest } from "@kombo-api/sdk/models/operations";

let value: DeleteAtsCandidatesCandidateIdTagsRequest = {
  candidate_id: "<id>",
  delete_ats_candidates_candidate_id_tags_request_body: {
    tag: {
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `candidate_id`                                                                                                        | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The Kombo ID of the candidate you want to remove the tag from.                                                        |
| `delete_ats_candidates_candidate_id_tags_request_body`                                                                | [models.DeleteAtsCandidatesCandidateIdTagsRequestBody](../../models/deleteatscandidatescandidateidtagsrequestbody.md) | :heavy_check_mark:                                                                                                    | DELETE /ats/candidates/:candidate_id/tags Request body                                                                |