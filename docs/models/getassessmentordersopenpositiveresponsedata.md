# GetAssessmentOrdersOpenPositiveResponseData

## Example Usage

```typescript
import { GetAssessmentOrdersOpenPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetAssessmentOrdersOpenPositiveResponseData = {
  next: "<value>",
  results: [
    {
      id: "B5KQKhAgTv6ZwzrfAbqbhipd",
      package_id: "typescript_test",
      candidate: {
        remote_id: "12345",
        email: "john.doe@gmail.com",
        first_name: "John",
        last_name: "Doe",
        phone: "+1 123 456 7890",
      },
      application: {
        remote_id: "54321",
      },
      job: {
        remote_id: "67890",
        name: "Engineering Manager",
        location: {
          city: "Berlin",
          country: "DE",
          raw: "Berlin, Germany",
          state: "Berlin",
          street_1: "Lohmühlenstraße 65",
          street_2: null,
          zip_code: "12435",
        },
        hiring_team: [
          {
            remote_id: "78901",
            email: "jane.doe@gmail.com",
            first_name: "Jane",
            last_name: "Doe",
            hiring_team_roles: [
              "RECRUITER",
            ],
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `next`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `results`                                                                                                            | [models.GetAssessmentOrdersOpenPositiveResponseResult](../models/getassessmentordersopenpositiveresponseresult.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |