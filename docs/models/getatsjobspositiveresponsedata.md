# GetAtsJobsPositiveResponseData

## Example Usage

```typescript
import { GetAtsJobsPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetAtsJobsPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
    {
      id: "H5daSm8e85Dmvmne3wLeCPhX",
      remote_id: "32",
      name: "Backend Engineer",
      job_code: "BE-2021-01",
      description:
        "<p>Kombo is hiring engineers! If you are reading this and you are located in Berlin, Germany, feel free to contact us about this position.</p>",
      confidential: false,
      weekly_hours: 37,
      employment_type: "FULL_TIME",
      status: "OPEN",
      visibility: "PUBLIC",
      category: "Technical Job",
      department: "Engineering",
      post_url: "https://jobs.example.com/post/159829112",
      experience_level: "Mid-Senior",
      remote_work_status: "HYBRID",
      salary_amount: 4200,
      salary_amount_from: null,
      salary_amount_to: null,
      salary_currency: "EUR",
      salary_period: "MONTH",
      location: {
        city: "Berlin",
        country: "DE",
        raw: "Berlin, Germany",
        state: "Berlin",
        street_1: "Lohmühlenstraße 65",
        street_2: null,
        zip_code: "12435",
      },
      custom_fields: {},
      remote_url: "https://app.greenhouse.io/jobs/32",
      opened_at: new Date("2022-08-07T14:01:29.196Z"),
      closed_at: null,
      remote_created_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_updated_at: new Date("2022-08-07T14:01:29.196Z"),
      contact_id: "6gT2yLMBEipd3zpezATv3Rhu",
      changed_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_deleted_at: null,
      stages: [
        {
          id: "5J7L4b48wBfffYwek9Az9pkM",
          remote_id: "32",
          name: "Initial Screening",
          index: 0,
        },
      ],
      screening_questions: [
        {
          id: "26vafvWSRmbhNcxJYqjCzuJg",
          remote_id: "48b4d36a-1d4b-4c50-ada7-9519078e65b4",
          title: "Which is your primary programming language?",
          description:
            "Please enter the language you are most comfortable with.",
          format: {
            display_type: "SINGLE_LINE",
            max_length: null,
            type: "TEXT",
          },
          category: null,
          index: 0,
          required: true,
          precondition_question_id: "4ZVteCSSgDw3BdwGzcQqGEPk",
          precondition_options: [
            "7qd5qjPwDHarsMLFMGzXYG1K",
          ],
        },
      ],
      job_postings: [
        {
          id: "26vafvWSRmbhNcxJYqjCzuJg",
          remote_id: "48b4d36a-1d4b-4c50-ada7-9519078e65b4",
          title: "Frontend Engineer",
          description_html: "<p>We are looking for a Frontend Engineer.</p>",
          status: "ACTIVE",
          visibility: "PUBLIC",
          url: "https://jobs.example.com/post/159829112",
        },
      ],
      hiring_team: [
        {
          id: "26vafvWSRmbhNcxJYqjCzuJg",
          remote_id: "32",
          first_name: "John",
          last_name: "Doe",
          email: "john.doe@kombo.dev",
          hiring_team_roles: [
            "RECRUITER",
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `next`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. |
| `results`                                                                                                                               | [models.GetAtsJobsPositiveResponseResult](../models/getatsjobspositiveresponseresult.md)[]                                              | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |