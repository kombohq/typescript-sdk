# InlineAssessmentOrderReceivedWebhookPayloadCandidate

Information about the candidate taking the assessment.

## Example Usage

```typescript
import { InlineAssessmentOrderReceivedWebhookPayloadCandidate } from "@kombo-api/sdk/models";

let value: InlineAssessmentOrderReceivedWebhookPayloadCandidate = {
  remote_id: "<id>",
  email: "Ted_Watsica@yahoo.com",
  first_name: "Lottie",
  last_name: "Windler",
  phone: "(407) 672-7654",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `remote_id`                                          | *string*                                             | :heavy_check_mark:                                   | The candidate's identifier in the integrated system. |
| `email`                                              | *string*                                             | :heavy_check_mark:                                   | The candidate's email address.                       |
| `first_name`                                         | *string*                                             | :heavy_check_mark:                                   | The candidate's first name.                          |
| `last_name`                                          | *string*                                             | :heavy_check_mark:                                   | The candidate's last name.                           |
| `phone`                                              | *string*                                             | :heavy_check_mark:                                   | The candidate's phone number.                        |