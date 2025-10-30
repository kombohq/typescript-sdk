# GetAtsApplicationsResponse

## Example Usage

```typescript
import { GetAtsApplicationsResponse } from "@kombo-api/sdk/models/operations";

let value: GetAtsApplicationsResponse = {
  result: {
    status: "success",
    data: {
      next:
        "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
      results: [
        {
          id: "H77fDF8uvEzGNPRubiz5DvQ7",
          remote_id: "32",
          outcome: "HIRED",
          rejection_reason_name: null,
          rejected_at: null,
          current_stage_id: "5J7L4b48wBfffYwek9Az9pkM",
          job_id: "H5daSm8e85Dmvmne3wLeCPhX",
          candidate_id: "26vafvWSRmbhNcxJYqjCzuJg",
          screening_question_answers: [
            {
              answer: {
                choice: "TypeScript",
              },
              question: {
                remote_id: "48b4d36a-1d4b-4c50-ada7-9519078e65b4",
                title: "Which is your primary programming language",
                type: "SINGLE_SELECT",
              },
            },
          ],
          custom_fields: {},
          remote_url: "https://app.greenhouse.io/applications/32",
          changed_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_deleted_at: null,
          remote_created_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_updated_at: new Date("2022-08-07T14:01:29.196Z"),
          candidate: {
            id: "26vafvWSRmbhNcxJYqjCzuJg",
            remote_id: "32",
            first_name: "John",
            last_name: "Doe",
            email_addresses: [
              {
                email_address: "john.doe@example.com",
                type: "PRIVATE",
              },
            ],
            phone_numbers: [
              {
                phone_number: "+1-541-754-3010",
                type: "HOME",
              },
            ],
            social_media: [
              {
                link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                type: "YOUTUBE",
                username: null,
              },
            ],
            source: "Employee Referral",
            remote_url: "https://app.greenhouse.io/people/32",
            tags: [
              {
                id: "26vafvWSRmbhNcxJYqjCzuJg",
                remote_id: "32",
                name: "High Potential",
              },
            ],
          },
          current_stage: {
            id: "5J7L4b48wBfffYwek9Az9pkM",
            remote_id: "32",
            name: "Initial Screening",
            index: 2,
          },
          job: {
            id: "H5daSm8e85Dmvmne3wLeCPhX",
            remote_id: "32",
            name: "Backend Engineer",
          },
          interviews: [
            {
              id: "26vafvWSRmbhNcxJYqjCzuJg",
              remote_id: "32",
              title: "Interview with John Doe",
              starting_at: new Date("2023-06-26T14:30:00Z"),
              ending_at: new Date("2023-06-26T15:30:00Z"),
              location: {
                city: "Berlin",
                country: "DE",
                raw: "Berlin, Germany",
                state: "Berlin",
                street_1: "Lohmühlenstraße 65",
                street_2: null,
                zip_code: "12435",
              },
              canceled: false,
            },
          ],
          offers: [
            {
              id: "76bab8LKuFtqpZ89mofCPMHX",
              remote_id: "6",
              status: "ACCEPTED",
            },
          ],
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `result`                                                                                        | [models.GetAtsApplicationsPositiveResponse](../../models/getatsapplicationspositiveresponse.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |