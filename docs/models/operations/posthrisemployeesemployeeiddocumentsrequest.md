# PostHrisEmployeesEmployeeIdDocumentsRequest

## Example Usage

```typescript
import { PostHrisEmployeesEmployeeIdDocumentsRequest } from "@kombo-api/sdk/models/operations";

let value: PostHrisEmployeesEmployeeIdDocumentsRequest = {
  employee_id: "<id>",
  post_hris_employees_employee_id_documents_request_body: {
    category_id: "<id>",
    document: {
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `employee_id`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | POST /hris/employees/:employee_id/documents Parameter                                                                     |
| `post_hris_employees_employee_id_documents_request_body`                                                                  | [models.PostHrisEmployeesEmployeeIdDocumentsRequestBody](../../models/posthrisemployeesemployeeiddocumentsrequestbody.md) | :heavy_check_mark:                                                                                                        | POST /hris/employees/:employee_id/documents Request body                                                                  |