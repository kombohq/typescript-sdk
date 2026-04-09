# AssessmentOrderReceivedWebhookPayloadApplication

Information about the job application.

## Example Usage

```typescript
import { AssessmentOrderReceivedWebhookPayloadApplication } from "@kombo-api/sdk/models";

let value: AssessmentOrderReceivedWebhookPayloadApplication = {
  remote_id: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `remote_id`                                            | *string*                                               | :heavy_check_mark:                                     | The application's identifier in the integrated system. |