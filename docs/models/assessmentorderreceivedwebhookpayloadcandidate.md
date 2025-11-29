# AssessmentOrderReceivedWebhookPayloadCandidate

Information about the candidate taking the assessment.

## Example Usage

```typescript
import { AssessmentOrderReceivedWebhookPayloadCandidate } from "@kombo-api/sdk/models";

let value: AssessmentOrderReceivedWebhookPayloadCandidate = {
  email: "Letitia27@yahoo.com",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `remote_id`                                          | *string*                                             | :heavy_minus_sign:                                   | The candidate's identifier in the integrated system. |
| `email`                                              | *string*                                             | :heavy_check_mark:                                   | The candidate's email address.                       |
| `first_name`                                         | *string*                                             | :heavy_minus_sign:                                   | The candidate's first name.                          |
| `last_name`                                          | *string*                                             | :heavy_minus_sign:                                   | The candidate's last name.                           |
| `phone`                                              | *string*                                             | :heavy_minus_sign:                                   | The candidate's phone number.                        |