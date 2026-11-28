# PostHrisEmployeesEmployeeIdFormRehireRequest

## Example Usage

```typescript
import { PostHrisEmployeesEmployeeIdFormRehireRequest } from "@kombo-api/sdk/models/operations";

let value: PostHrisEmployeesEmployeeIdFormRehireRequest = {
  employee_id: "<id>",
  body: {
    properties: {},
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `employee_id`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The Kombo ID or the HRIS ID of the employee.                                                                                |
| `body`                                                                                                                      | [models.PostHrisEmployeesEmployeeIdFormRehireRequestBody](../../models/posthrisemployeesemployeeidformrehirerequestbody.md) | :heavy_check_mark:                                                                                                          | POST /hris/employees/:employee_id/form/rehire Request body                                                                  |