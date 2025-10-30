# GetAtsCandidatesResponse

## Example Usage

```typescript
import { GetAtsCandidatesResponse } from "@kombo-api/sdk/models/operations";

let value: GetAtsCandidatesResponse = {
  result: {
    status: "success",
    data: {
      next:
        "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
      results: [
        {
          id: "26vafvWSRmbhNcxJYqjCzuJg",
          remote_id: "32",
          first_name: "John",
          last_name: "Doe",
          company: "Acme, Inc.",
          title: "Head of Marketing",
          confidential: false,
          source: "Employee Referral",
          phone_numbers: [
            {
              phone_number: "+1-541-754-3010",
              type: "HOME",
            },
          ],
          email_addresses: [
            {
              email_address: "john.doe@example.com",
              type: "PRIVATE",
            },
          ],
          social_media: [
            {
              link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              type: "YOUTUBE",
              username: null,
            },
          ],
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
          remote_url: "https://app.greenhouse.io/people/32",
          remote_created_at: new Date("2022-04-02T00:00:00Z"),
          remote_updated_at: new Date("2022-04-04T00:00:00Z"),
          changed_at: new Date("2022-04-04T00:00:00Z"),
          remote_deleted_at: null,
          applications: [
            {
              id: "H77fDF8uvEzGNPRubiz5DvQ7",
              remote_id: "32",
              outcome: "HIRED",
              rejection_reason_name: null,
              rejected_at: null,
              remote_url: "https://app.greenhouse.io/applications/32",
              changed_at: new Date("2022-08-07T14:01:29.196Z"),
              remote_created_at: new Date("2022-08-07T14:01:29.196Z"),
              remote_updated_at: new Date("2022-08-07T14:01:29.196Z"),
              current_stage: {
                id: "5J7L4b48wBfffYwek9Az9pkM",
                name: "Initial Screening",
                remote_id: "32",
                index: 2,
              },
              job: {
                id: "H5daSm8e85Dmvmne3wLeCPhX",
                name: "Backend Engineer",
                remote_id: "32",
              },
            },
          ],
          tags: [
            {
              id: "26vafvWSRmbhNcxJYqjCzuJg",
              name: "High Potential",
              remote_id: "32",
            },
          ],
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `result`                                                                                    | [models.GetAtsCandidatesPositiveResponse](../../models/getatscandidatespositiveresponse.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |