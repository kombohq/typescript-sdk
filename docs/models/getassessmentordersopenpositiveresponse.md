# GetAssessmentOrdersOpenPositiveResponse

## Example Usage

```typescript
import { GetAssessmentOrdersOpenPositiveResponse } from "@kombo-api/sdk/models";

let value: GetAssessmentOrdersOpenPositiveResponse = {
  status: "success",
  data: {
    next: "<value>",
    results: [
      {
        id: "B5KQKhAgTv6ZwzrfAbqbhipd",
        package_id: "typescript_test",
        candidate: {
          email: "john.doe@gmail.com",
          first_name: "John",
          last_name: "Doe",
          phone: "+1 123 456 7890",
          remote_id: "12345",
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
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `data`                                                                                                         | [models.GetAssessmentOrdersOpenPositiveResponseData](../models/getassessmentordersopenpositiveresponsedata.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |