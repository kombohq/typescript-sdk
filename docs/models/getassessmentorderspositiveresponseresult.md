# GetAssessmentOrdersPositiveResponseResult

## Example Usage

```typescript
import { GetAssessmentOrdersPositiveResponseResult } from "@kombo-api/sdk/models";

let value: GetAssessmentOrdersPositiveResponseResult = {
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
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The unique identifier of the assessment order.                                                                       | B5KQKhAgTv6ZwzrfAbqbhipd                                                                                             |
| `package_id`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The identifier of the assessment package.                                                                            | typescript_test                                                                                                      |
| `status`                                                                                                             | [models.GetAssessmentOrdersPositiveResponseStatus](../models/getassessmentorderspositiveresponsestatus.md)           | :heavy_check_mark:                                                                                                   | The current status of the assessment order.                                                                          | OPEN                                                                                                                 |
| `candidate`                                                                                                          | [models.GetAssessmentOrdersPositiveResponseCandidate](../models/getassessmentorderspositiveresponsecandidate.md)     | :heavy_check_mark:                                                                                                   | Information about the candidate taking the assessment.                                                               |                                                                                                                      |
| `application`                                                                                                        | [models.GetAssessmentOrdersPositiveResponseApplication](../models/getassessmentorderspositiveresponseapplication.md) | :heavy_check_mark:                                                                                                   | Information about the job application.                                                                               |                                                                                                                      |
| `job`                                                                                                                | [models.GetAssessmentOrdersPositiveResponseJob](../models/getassessmentorderspositiveresponsejob.md)                 | :heavy_check_mark:                                                                                                   | Information about the job posting.                                                                                   |                                                                                                                      |