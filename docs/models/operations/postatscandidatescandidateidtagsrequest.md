# PostAtsCandidatesCandidateIdTagsRequest

## Example Usage

```typescript
import { PostAtsCandidatesCandidateIdTagsRequest } from "@kombo-api/sdk/models/operations";

let value: PostAtsCandidatesCandidateIdTagsRequest = {
  candidate_id: "<id>",
  body: {
    tag: {
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `candidate_id`                                                                                                    | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The Kombo ID of the candidate you want to add the tag to.                                                         |
| `body`                                                                                                            | [models.PostAtsCandidatesCandidateIdTagsRequestBody](../../models/postatscandidatescandidateidtagsrequestbody.md) | :heavy_check_mark:                                                                                                | POST /ats/candidates/:candidate_id/tags Request body                                                              |