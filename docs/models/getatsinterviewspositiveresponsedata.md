# GetAtsInterviewsPositiveResponseData

## Example Usage

```typescript
import { GetAtsInterviewsPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetAtsInterviewsPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
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
      video_conferencing_url: "https://meet.example.com/interview-abc123",
      application_id: "H77fDF8uvEzGNPRubiz5DvQ7",
      stage_id: "H5daSm8e85Dmvmne3wLeCPhX",
      canceled: false,
      remote_created_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_updated_at: new Date("2022-08-07T14:01:29.196Z"),
      changed_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_deleted_at: null,
      users: [
        {
          id: "26vafvWSRmbhNcxJYqjCzuJg",
          remote_id: "32",
          first_name: "John",
          last_name: "Doe",
          email: "john.doe@kombo.dev",
        },
      ],
      application: {
        id: "H77fDF8uvEzGNPRubiz5DvQ7",
        remote_id: "32",
        outcome: "HIRED",
        rejection_reason_name: null,
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
        },
        job: {
          id: "H5daSm8e85Dmvmne3wLeCPhX",
          remote_id: "32",
          name: "Backend Engineer",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `next`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. |
| `results`                                                                                                                               | [models.GetAtsInterviewsPositiveResponseResult](../models/getatsinterviewspositiveresponseresult.md)[]                                  | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |