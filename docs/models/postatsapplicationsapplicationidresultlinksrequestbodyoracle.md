# PostAtsApplicationsApplicationIdResultLinksRequestBodyOracle

Fields specific to Oracle.

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdResultLinksRequestBodyOracle } from "@kombo-api/sdk/models";

let value: PostAtsApplicationsApplicationIdResultLinksRequestBodyOracle = {};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `override_document_category`                                                                                                                                                         | [models.PostAtsApplicationsApplicationIdResultLinksRequestBodyOverrideDocumentCategory](../models/postatsapplicationsapplicationidresultlinksrequestbodyoverridedocumentcategory.md) | :heavy_minus_sign:                                                                                                                                                                   | Allows you to override the document category for the url. (Default: MISC)                                                                                                            |
| `multi_post_to_all_current_applications`                                                                                                                                             | *boolean*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                   | If true, the result link will be posted to all current applications for the candidate.                                                                                               |