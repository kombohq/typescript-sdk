# GetAtsScorecardsResponse

## Example Usage

```typescript
import { GetAtsScorecardsResponse } from "@kombo-api/sdk/models/operations";

let value: GetAtsScorecardsResponse = {
  result: {
    status: "success",
    data: {
      next:
        "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
      results: [
        {
          id: "H77fDF8uvEzGNPRubiz5DvQ7",
          remote_id: "32",
          candidate_id: "26vafvWSRmbhNcxJYqjCzuJg",
          application_id: "H5daSm8e85Dmvmne3wLeCPhX",
          interview_id: "5J7L4b48wBfffYwek9Az9pkM",
          author_id: "6Wq4mDpYz3vBnh8Xk2Lr9TfA",
          responses: [
            {
              remote_id: null,
              label: "Overall rating",
              description: "How you feel the interview went",
              required: false,
              type: "SINGLE_SELECT",
              options: [
                {
                  remote_id: "1",
                  label: "Definitely not",
                },
                {
                  remote_id: "2",
                  label: "No",
                },
                {
                  remote_id: "3",
                  label: "Mixed",
                },
                {
                  remote_id: "4",
                  label: "Yes",
                },
                {
                  remote_id: "5",
                  label: "Strong yes",
                },
                {
                  remote_id: "6",
                  label: "No decision",
                },
              ],
              answer: {
                remote_id: "4",
                label: "Yes",
              },
            },
            {
              remote_id: null,
              label: "Summary",
              description: "Main notes about the interview",
              required: true,
              type: "TEXT",
              answer:
                "Excellent system design, strong communication throughout.",
            },
            {
              remote_id: "8123",
              label: "System design",
              description: null,
              required: null,
              type: "SINGLE_SELECT",
              options: [
                {
                  remote_id: "1",
                  label: "Definitely not",
                },
                {
                  remote_id: "2",
                  label: "No",
                },
                {
                  remote_id: "3",
                  label: "Mixed",
                },
                {
                  remote_id: "4",
                  label: "Yes",
                },
                {
                  remote_id: "5",
                  label: "Strong yes",
                },
                {
                  remote_id: "6",
                  label: "No decision",
                },
              ],
              answer: {
                remote_id: "5",
                label: "Strong yes",
              },
            },
            {
              remote_id: "4471",
              label: "Would you work with this person again?",
              description: null,
              required: true,
              type: "BOOLEAN",
              answer: true,
            },
            {
              remote_id: "4472",
              label: "Which areas did you cover?",
              description: null,
              required: false,
              type: "MULTI_SELECT",
              options: [
                {
                  remote_id: "9001",
                  label: "System design",
                },
                {
                  remote_id: "9002",
                  label: "Debugging",
                },
                {
                  remote_id: "9003",
                  label: "Pair programming",
                },
              ],
              answer: [
                {
                  remote_id: "9001",
                  label: "System design",
                },
                {
                  remote_id: "9002",
                  label: "Debugging",
                },
              ],
            },
            {
              remote_id: "4473",
              label: "Anything the next interviewer should probe?",
              description: null,
              required: false,
              type: "TEXT",
              answer: "Ask more about experience with microservices",
            },
            {
              remote_id: "4474",
              label: "Years of relevant experience",
              description: null,
              required: false,
              type: "NUMBER",
              answer: 7.5,
            },
            {
              remote_id: "4475",
              label: "Earliest start date",
              description: null,
              required: false,
              type: "DATE",
              answer: "2026-09-01T00:00:00Z",
            },
            {
              remote_id: "4476",
              label: "Additional notes",
              description: null,
              required: false,
              type: "TEXT",
              answer: null,
            },
          ],
          remote_created_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_updated_at: new Date("2022-08-07T14:01:29.196Z"),
          changed_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_deleted_at: null,
          author: {
            id: "26vafvWSRmbhNcxJYqjCzuJg",
            remote_id: "32",
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@kombo.dev",
          },
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `result`                                                                                    | [models.GetAtsScorecardsPositiveResponse](../../models/getatsscorecardspositiveresponse.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |