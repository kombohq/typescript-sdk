# PostAtsCandidatesRequestBodyRecruiteeCandidate

## Example Usage

```typescript
import { PostAtsCandidatesRequestBodyRecruiteeCandidate } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesRequestBodyRecruiteeCandidate = {};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cover_letter_text`                                                                                                                                                                              | *string*                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                               | The cover letter text as a string. This will be visible on the main candidate page. Can be provided together with the `cover_letter` attachment, which will end up in a separate `file` section. |