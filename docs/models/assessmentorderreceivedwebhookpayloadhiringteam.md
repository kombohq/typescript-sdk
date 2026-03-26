# AssessmentOrderReceivedWebhookPayloadHiringTeam

A member of the hiring team.

## Example Usage

```typescript
import { AssessmentOrderReceivedWebhookPayloadHiringTeam } from "@kombo-api/sdk/models";

let value: AssessmentOrderReceivedWebhookPayloadHiringTeam = {
  remote_id: "<id>",
  email: "Marielle43@yahoo.com",
  first_name: "Ernest",
  last_name: "Franey",
  hiring_team_roles: [
    "SOURCER",
  ],
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `remote_id`                                                                                                                               | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The team member's identifier in the integrated system.                                                                                    |
| `email`                                                                                                                                   | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The team member's email address.                                                                                                          |
| `first_name`                                                                                                                              | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The team member's first name.                                                                                                             |
| `last_name`                                                                                                                               | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The team member's last name.                                                                                                              |
| `hiring_team_roles`                                                                                                                       | [models.AssessmentOrderReceivedWebhookPayloadHiringTeamRole](../models/assessmentorderreceivedwebhookpayloadhiringteamrole.md)[]          | :heavy_check_mark:                                                                                                                        | Array of the roles of the user for this specific job. Currently only `RECRUITER` and `HIRING_MANAGER` are mapped into our unified schema. |