# PostHrisEmployeesEmployeeIdDocumentsRequest

## Example Usage

```typescript
import { PostHrisEmployeesEmployeeIdDocumentsRequest } from "@kombo-api/sdk/models/operations";

let value: PostHrisEmployeesEmployeeIdDocumentsRequest = {
  employee_id: "<id>",
  body: {
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
| `body`                                                                                                                    | [models.PostHrisEmployeesEmployeeIdDocumentsRequestBody](../../models/posthrisemployeesemployeeiddocumentsrequestbody.md) | :heavy_check_mark:                                                                                                        | POST /hris/employees/:employee_id/documents Request body                                                                  |