# GetHrisEmployeesFormPositiveResponseData

## Example Usage

```typescript
import { GetHrisEmployeesFormPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetHrisEmployeesFormPositiveResponseData = {
  properties: {
    "firstName": {
      label: "First Name",
      required: true,
      description: "Employee's first name",
      unified_key: "first_name",
      type: "text",
      min_length: 1,
      max_length: 100,
      reg_exp: null,
    },
    "startDate": {
      label: "Start Date",
      required: true,
      description: "Employee's start date",
      unified_key: "start_date",
      type: "date",
    },
    "workLocation": {
      label: "Work Location",
      required: false,
      description: "Employee's work location",
      unified_key: null,
      type: "object",
      properties: {
        "site": {
          label: "Site",
          required: true,
          description: "Employee's site",
          unified_key: null,
          type: "single_select",
          options: {
            type: "inline",
            entries: [
              {
                id: "FXrER44xubBqA9DLgZ3PFNNx",
                label: "Site 1",
                unified_value: "1",
                remote_id: "site_1",
              },
              {
                id: "2rv75UKT2XBoQXsUb9agiTUm",
                label: "Site 2",
                unified_value: "2",
                remote_id: "site_2",
              },
            ],
          },
        },
        "keyNumbers": {
          label: "Key Numbers",
          required: false,
          description: "Employee's key numbers",
          unified_key: null,
          type: "array",
          item_type: {
            label: "Key Number",
            required: false,
            description: "The number of the keys which belong to the employee",
            unified_key: null,
            type: "number",
            min: 0,
            max: 99,
          },
          min_items: 2,
          max_items: 5,
        },
      },
    },
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `properties`                        | Record<string, *models.Properties*> | :heavy_check_mark:                  | N/A                                 |