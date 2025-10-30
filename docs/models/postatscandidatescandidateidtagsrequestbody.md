# PostAtsCandidatesCandidateIdTagsRequestBody

## Example Usage

```typescript
import { PostAtsCandidatesCandidateIdTagsRequestBody } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesCandidateIdTagsRequestBody = {
  tag: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `tag`                                                                                                                                  | [models.PostAtsCandidatesCandidateIdTagsRequestBodyTag](../models/postatscandidatescandidateidtagsrequestbodytag.md)                   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `remote_fields`                                                                                                                        | [models.PostAtsCandidatesCandidateIdTagsRequestBodyRemoteFields](../models/postatscandidatescandidateidtagsrequestbodyremotefields.md) | :heavy_minus_sign:                                                                                                                     | Additional fields that we will pass through to specific ATS systems.                                                                   |