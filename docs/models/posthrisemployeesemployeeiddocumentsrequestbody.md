# PostHrisEmployeesEmployeeIdDocumentsRequestBody

## Example Usage

```typescript
import { PostHrisEmployeesEmployeeIdDocumentsRequestBody } from "@kombo-api/sdk/models";

let value: PostHrisEmployeesEmployeeIdDocumentsRequestBody = {
  category_id: "<id>",
  document: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `category_id`                                                                                                                                  | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `document`                                                                                                                                     | [models.Document](../models/document.md)                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `remote_fields`                                                                                                                                | [models.PostHrisEmployeesEmployeeIdDocumentsRequestBodyRemoteFields](../models/posthrisemployeesemployeeiddocumentsrequestbodyremotefields.md) | :heavy_minus_sign:                                                                                                                             | Additional fields that we will pass through to specific HRIS systems.                                                                          |