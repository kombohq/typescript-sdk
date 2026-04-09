# GetAssessmentOrdersPositiveResponseCandidate

Information about the candidate taking the assessment.

## Example Usage

```typescript
import { GetAssessmentOrdersPositiveResponseCandidate } from "@kombo-api/sdk/models";

let value: GetAssessmentOrdersPositiveResponseCandidate = {
  remote_id: "12345",
  email: "john.doe@gmail.com",
  first_name: "John",
  last_name: "Doe",
  phone: "+1 123 456 7890",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `remote_id`                                          | *string*                                             | :heavy_check_mark:                                   | The candidate's identifier in the integrated system. | 12345                                                |
| `email`                                              | *string*                                             | :heavy_check_mark:                                   | The candidate's email address.                       | john.doe@gmail.com                                   |
| `first_name`                                         | *string*                                             | :heavy_check_mark:                                   | The candidate's first name.                          | John                                                 |
| `last_name`                                          | *string*                                             | :heavy_check_mark:                                   | The candidate's last name.                           | Doe                                                  |
| `phone`                                              | *string*                                             | :heavy_check_mark:                                   | The candidate's phone number.                        | +1 123 456 7890                                      |