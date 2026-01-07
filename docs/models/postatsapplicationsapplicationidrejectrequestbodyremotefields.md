# PostAtsApplicationsApplicationIdRejectRequestBodyRemoteFields

Additional fields that we will pass through to specific ATS systems.

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdRejectRequestBodyRemoteFields } from "@kombo-api/sdk/models";

let value: PostAtsApplicationsApplicationIdRejectRequestBodyRemoteFields = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `greenhouse`                                                                                                                                   | [models.PostAtsApplicationsApplicationIdRejectRequestBodyGreenhouse](../models/postatsapplicationsapplicationidrejectrequestbodygreenhouse.md) | :heavy_minus_sign:                                                                                                                             | Fields specific to Greenhouse.                                                                                                                 |
| `teamtailor`                                                                                                                                   | [models.PostAtsApplicationsApplicationIdRejectRequestBodyTeamtailor](../models/postatsapplicationsapplicationidrejectrequestbodyteamtailor.md) | :heavy_minus_sign:                                                                                                                             | Fields specific to Teamtailor.                                                                                                                 |
| `workable`                                                                                                                                     | [models.PostAtsApplicationsApplicationIdRejectRequestBodyWorkable](../models/postatsapplicationsapplicationidrejectrequestbodyworkable.md)     | :heavy_minus_sign:                                                                                                                             | Workable specific remote fields for ATS actions.                                                                                               |