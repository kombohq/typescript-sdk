# PostAtsApplicationsApplicationIdAttachmentsRequestBodyOracle

Oracle specific remote fields for the attachment.

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdAttachmentsRequestBodyOracle } from "@kombo-api/sdk/models";

let value: PostAtsApplicationsApplicationIdAttachmentsRequestBodyOracle = {};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `override_document_category`                                                                                                                                                         | [models.PostAtsApplicationsApplicationIdAttachmentsRequestBodyOverrideDocumentCategory](../models/postatsapplicationsapplicationidattachmentsrequestbodyoverridedocumentcategory.md) | :heavy_minus_sign:                                                                                                                                                                   | Allows you to override the document category for the attachment.                                                                                                                     |
| `multi_post_to_all_current_applications`                                                                                                                                             | *boolean*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                   | If true, the attachment will be posted to all current applications for the candidate.                                                                                                |