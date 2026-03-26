# PostAtsCandidatesRequestBodyConsentDecisions

The consent decisions for the candidate. SmartRecruiters supports two consent models: 'Single' (use the `SINGLE` key) and 'Separated' (use `SMART_RECRUIT`, `SMART_CRM`, `SMART_MESSAGE_SMS`, and/or `SMART_MESSAGE_WHATSAPP` keys). When this field is provided, it takes precedence over the `gdpr_consent` field for the `consentDecisions` property. See: https://developers.smartrecruiters.com/docs/partners-post-an-application

## Example Usage

```typescript
import { PostAtsCandidatesRequestBodyConsentDecisions } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesRequestBodyConsentDecisions = {};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `single`                 | *boolean*                | :heavy_minus_sign:       | N/A                      |
| `smart_recruit`          | *boolean*                | :heavy_minus_sign:       | N/A                      |
| `smart_crm`              | *boolean*                | :heavy_minus_sign:       | N/A                      |
| `smart_message_sms`      | *boolean*                | :heavy_minus_sign:       | N/A                      |
| `smart_message_whatsapp` | *boolean*                | :heavy_minus_sign:       | N/A                      |