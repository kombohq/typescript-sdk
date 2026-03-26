# InlineAssessmentOrderReceivedWebhookPayloadHiringTeam

A member of the hiring team.

## Example Usage

```typescript
import { InlineAssessmentOrderReceivedWebhookPayloadHiringTeam } from "@kombo-api/sdk/models";

let value: InlineAssessmentOrderReceivedWebhookPayloadHiringTeam = {
  remote_id: "<id>",
  email: "Dennis.Bauch96@hotmail.com",
  first_name: "Glenna",
  last_name: "Jast",
  hiring_team_roles: [
    "HIRING_MANAGER",
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `remote_id`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The team member's identifier in the integrated system.                                                                                       |
| `email`                                                                                                                                      | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The team member's email address.                                                                                                             |
| `first_name`                                                                                                                                 | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The team member's first name.                                                                                                                |
| `last_name`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The team member's last name.                                                                                                                 |
| `hiring_team_roles`                                                                                                                          | [models.InlineAssessmentOrderReceivedWebhookPayloadHiringTeamRole](../models/inlineassessmentorderreceivedwebhookpayloadhiringteamrole.md)[] | :heavy_check_mark:                                                                                                                           | Array of the roles of the user for this specific job. Currently only `RECRUITER` and `HIRING_MANAGER` are mapped into our unified schema.    |