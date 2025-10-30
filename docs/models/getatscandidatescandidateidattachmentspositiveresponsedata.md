# GetAtsCandidatesCandidateIdAttachmentsPositiveResponseData

## Example Usage

```typescript
import { GetAtsCandidatesCandidateIdAttachmentsPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetAtsCandidatesCandidateIdAttachmentsPositiveResponseData = {
  results: [
    {
      id: "EYJjhMQT3LtVKXnTbnRT8s6U",
      application_id: null,
      candidate_id: "BTbkvY2w5ou3z3hdwuKcKzDh",
      type: "CV",
      remote_id: "GUzE666zfyjeoCJX6A8n7wh6",
      data_url: "https://resources.kombo.dev/EYJjhMQT3LtVKXnTbnRT8s6U",
      file_name: "Frank Doe CV.pdf",
      content_type: "application/pdf",
      remote_created_at: null,
      remote_updated_at: null,
    },
  ],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                                                          | [models.GetAtsCandidatesCandidateIdAttachmentsPositiveResponseResult](../models/getatscandidatescandidateidattachmentspositiveresponseresult.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |