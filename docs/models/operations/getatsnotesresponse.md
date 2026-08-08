# GetAtsNotesResponse

## Example Usage

```typescript
import { GetAtsNotesResponse } from "@kombo-api/sdk/models/operations";

let value: GetAtsNotesResponse = {
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
          author_id: "5J7L4b48wBfffYwek9Az9pkM",
          title: "Screening call",
          content_html:
            "Available from March, looking for a hybrid role in Berlin.",
          is_private: true,
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

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `result`                                                                          | [models.GetAtsNotesPositiveResponse](../../models/getatsnotespositiveresponse.md) | :heavy_check_mark:                                                                | N/A                                                                               |