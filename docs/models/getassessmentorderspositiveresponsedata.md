# GetAssessmentOrdersPositiveResponseData

## Example Usage

```typescript
import { GetAssessmentOrdersPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetAssessmentOrdersPositiveResponseData = {
  next: "<value>",
  results: [
    {
      id: "B5KQKhAgTv6ZwzrfAbqbhipd",
      package_id: "typescript_test",
      status: "OPEN",
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
        name: "Bottle Opener",
        job_code: "BO-2024-01",
        description:
          "<p>We are looking for a skilled and energetic individual to join our team as the chief bottle open officer. This unique role requires precision, attention to detail, and the ability to handle a high volume of beverage bottles in a fast-paced environment. The ideal candidate will ensure bottles are opened swiftly and safely while maintaining hygiene standards.</p>",
        location: {
          street_1: "Lohmühlenstraße 65",
          street_2: null,
          city: "Berlin",
          state: "Berlin",
          zip_code: "12435",
          country: "DE",
          raw: "Berlin, Germany",
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `next`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `results`                                                                                                    | [models.GetAssessmentOrdersPositiveResponseResult](../models/getassessmentorderspositiveresponseresult.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |