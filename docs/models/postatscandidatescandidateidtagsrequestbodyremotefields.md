# PostAtsCandidatesCandidateIdTagsRequestBodyRemoteFields

Additional fields that we will pass through to specific ATS systems.

## Example Usage

```typescript
import { PostAtsCandidatesCandidateIdTagsRequestBodyRemoteFields } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesCandidateIdTagsRequestBodyRemoteFields = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `greenhouse`                                                                                                                       | [models.PostAtsCandidatesCandidateIdTagsRequestBodyGreenhouse](../models/postatscandidatescandidateidtagsrequestbodygreenhouse.md) | :heavy_minus_sign:                                                                                                                 | Fields specific to Greenhouse.                                                                                                     |
| `workable`                                                                                                                         | [models.PostAtsCandidatesCandidateIdTagsRequestBodyWorkable](../models/postatscandidatescandidateidtagsrequestbodyworkable.md)     | :heavy_minus_sign:                                                                                                                 | Workable specific remote fields for ATS actions.                                                                                   |