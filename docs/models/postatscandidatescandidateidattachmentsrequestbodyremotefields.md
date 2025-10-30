# PostAtsCandidatesCandidateIdAttachmentsRequestBodyRemoteFields

Additional fields that we will pass through to specific ATS systems.

## Example Usage

```typescript
import { PostAtsCandidatesCandidateIdAttachmentsRequestBodyRemoteFields } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesCandidateIdAttachmentsRequestBodyRemoteFields = {};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `greenhouse`                                                                                                                                     | [models.PostAtsCandidatesCandidateIdAttachmentsRequestBodyGreenhouse](../models/postatscandidatescandidateidattachmentsrequestbodygreenhouse.md) | :heavy_minus_sign:                                                                                                                               | Fields specific to Greenhouse.                                                                                                                   |
| `workable`                                                                                                                                       | [models.PostAtsCandidatesCandidateIdAttachmentsRequestBodyWorkable](../models/postatscandidatescandidateidattachmentsrequestbodyworkable.md)     | :heavy_minus_sign:                                                                                                                               | Workable specific remote fields for ATS actions.                                                                                                 |