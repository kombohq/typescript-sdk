# GetAtsApplicationsApplicationIdAttachmentsPositiveResponseData

## Example Usage

```typescript
import { GetAtsApplicationsApplicationIdAttachmentsPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetAtsApplicationsApplicationIdAttachmentsPositiveResponseData = {
  results: [
    {
      type: "CV",
      id: "EYJjhMQT3LtVKXnTbnRT8s6U",
      remote_id: "GUzE666zfyjeoCJX6A8n7wh6",
      data_url: "https://resources.kombo.dev/7yZfKGzWigXxxRTygqAfHvyE",
      file_name: "Frank Doe CV.pdf",
      content_type: "application/x-pdf",
      remote_created_at: null,
      remote_updated_at: null,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                                                                  | [models.GetAtsApplicationsApplicationIdAttachmentsPositiveResponseResult](../models/getatsapplicationsapplicationidattachmentspositiveresponseresult.md)[] | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |