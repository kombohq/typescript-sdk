# InlineAssessmentOrderReceivedWebhookPayloadCandidate

Information about the candidate taking the assessment.

## Example Usage

```typescript
import { InlineAssessmentOrderReceivedWebhookPayloadCandidate } from "@kombo-api/sdk/models";

let value: InlineAssessmentOrderReceivedWebhookPayloadCandidate = {
  email: "Manuel_Prosacco96@gmail.com",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `email`                                              | *string*                                             | :heavy_check_mark:                                   | The candidate's email address.                       |
| `first_name`                                         | *string*                                             | :heavy_minus_sign:                                   | The candidate's first name.                          |
| `last_name`                                          | *string*                                             | :heavy_minus_sign:                                   | The candidate's last name.                           |
| `phone`                                              | *string*                                             | :heavy_minus_sign:                                   | The candidate's phone number.                        |
| `remote_id`                                          | *string*                                             | :heavy_minus_sign:                                   | The candidate's identifier in the integrated system. |