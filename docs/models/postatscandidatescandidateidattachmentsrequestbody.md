# PostAtsCandidatesCandidateIdAttachmentsRequestBody

## Example Usage

```typescript
import { PostAtsCandidatesCandidateIdAttachmentsRequestBody } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesCandidateIdAttachmentsRequestBody = {
  attachment: {
    name: "<value>",
    type: "COVER_LETTER",
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attachment`                                                                                                                                         | [models.PostAtsCandidatesCandidateIdAttachmentsRequestBodyAttachment](../models/postatscandidatescandidateidattachmentsrequestbodyattachment.md)     | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `remote_fields`                                                                                                                                      | [models.PostAtsCandidatesCandidateIdAttachmentsRequestBodyRemoteFields](../models/postatscandidatescandidateidattachmentsrequestbodyremotefields.md) | :heavy_minus_sign:                                                                                                                                   | Additional fields that we will pass through to specific ATS systems.                                                                                 |