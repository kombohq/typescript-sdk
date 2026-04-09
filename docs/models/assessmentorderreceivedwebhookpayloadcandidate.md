# AssessmentOrderReceivedWebhookPayloadCandidate

Information about the candidate taking the assessment.

## Example Usage

```typescript
import { AssessmentOrderReceivedWebhookPayloadCandidate } from "@kombo-api/sdk/models";

let value: AssessmentOrderReceivedWebhookPayloadCandidate = {
  remote_id: "<id>",
  email: "Fredrick.Ritchie95@yahoo.com",
  first_name: "Conor",
  last_name: "Hegmann",
  phone: "(628) 612-3035 x1057",
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