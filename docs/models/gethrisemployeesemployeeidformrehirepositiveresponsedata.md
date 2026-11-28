# GetHrisEmployeesEmployeeIdFormRehirePositiveResponseData

## Example Usage

```typescript
import { GetHrisEmployeesEmployeeIdFormRehirePositiveResponseData } from "@kombo-api/sdk/models";

let value: GetHrisEmployeesEmployeeIdFormRehirePositiveResponseData = {
  properties: {
    "startDate": {
      label: "Start Date",
      required: true,
      description: "The first day of the new job",
      unified_key: "start_date",
      type: "date",
    },
    "jobTitle": {
      label: "Job Title",
      required: false,
      description: "The job title of the new job",
      unified_key: "job_title",
      type: "text",
      min_length: null,
      max_length: null,
      reg_exp: null,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `properties`                                                                                 | Record<string, *models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesUnion*> | :heavy_check_mark:                                                                           | N/A                                                                                          |