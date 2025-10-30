# DeleteAtsCandidatesCandidateIdTagsRequestBody

## Example Usage

```typescript
import { DeleteAtsCandidatesCandidateIdTagsRequestBody } from "@kombo-api/sdk/models";

let value: DeleteAtsCandidatesCandidateIdTagsRequestBody = {
  tag: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `tag`                                                                                                                                      | [models.DeleteAtsCandidatesCandidateIdTagsRequestBodyTag](../models/deleteatscandidatescandidateidtagsrequestbodytag.md)                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `remote_fields`                                                                                                                            | [models.DeleteAtsCandidatesCandidateIdTagsRequestBodyRemoteFields](../models/deleteatscandidatescandidateidtagsrequestbodyremotefields.md) | :heavy_minus_sign:                                                                                                                         | Additional fields that we will pass through to specific ATS systems.                                                                       |