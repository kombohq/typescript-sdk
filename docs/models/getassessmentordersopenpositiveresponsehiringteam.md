# GetAssessmentOrdersOpenPositiveResponseHiringTeam

A member of the hiring team.

## Example Usage

```typescript
import { GetAssessmentOrdersOpenPositiveResponseHiringTeam } from "@kombo-api/sdk/models";

let value: GetAssessmentOrdersOpenPositiveResponseHiringTeam = {
  remote_id: "78901",
  email: "jane.doe@gmail.com",
  first_name: "Jane",
  last_name: "Doe",
  hiring_team_roles: [
    "RECRUITER",
  ],
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `remote_id`                                                                                                                               | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The team member's identifier in the integrated system.                                                                                    | 78901                                                                                                                                     |
| `email`                                                                                                                                   | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The team member's email address.                                                                                                          | jane.doe@gmail.com                                                                                                                        |
| `first_name`                                                                                                                              | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The team member's first name.                                                                                                             | Jane                                                                                                                                      |
| `last_name`                                                                                                                               | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The team member's last name.                                                                                                              | Doe                                                                                                                                       |
| `hiring_team_roles`                                                                                                                       | [models.GetAssessmentOrdersOpenPositiveResponseHiringTeamRole](../models/getassessmentordersopenpositiveresponsehiringteamrole.md)[]      | :heavy_check_mark:                                                                                                                        | Array of the roles of the user for this specific job. Currently only `RECRUITER` and `HIRING_MANAGER` are mapped into our unified schema. | [<br/>"RECRUITER"<br/>]                                                                                                                   |