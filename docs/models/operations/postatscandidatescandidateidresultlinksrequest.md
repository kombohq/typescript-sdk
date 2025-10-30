# PostAtsCandidatesCandidateIdResultLinksRequest

## Example Usage

```typescript
import { PostAtsCandidatesCandidateIdResultLinksRequest } from "@kombo-api/sdk/models/operations";

let value: PostAtsCandidatesCandidateIdResultLinksRequest = {
  candidate_id: "<id>",
  post_ats_candidates_candidate_id_result_links_request_body: {
    label: "<value>",
    url: "https://acceptable-excess.name",
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `candidate_id`                                                                                                                  | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The Kombo ID of the candidate you want to add the result link to.                                                               |
| `post_ats_candidates_candidate_id_result_links_request_body`                                                                    | [models.PostAtsCandidatesCandidateIdResultLinksRequestBody](../../models/postatscandidatescandidateidresultlinksrequestbody.md) | :heavy_check_mark:                                                                                                              | POST /ats/candidates/:candidate_id/result-links Request body                                                                    |