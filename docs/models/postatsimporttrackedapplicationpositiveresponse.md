# PostAtsImportTrackedApplicationPositiveResponse

## Example Usage

```typescript
import { PostAtsImportTrackedApplicationPositiveResponse } from "@kombo-api/sdk/models";

let value: PostAtsImportTrackedApplicationPositiveResponse = {
  status: "success",
  data: {
    id: "5wdtQtJei2oVhJKya2V1KZLM",
    tracked_at: new Date("2025-02-11T15:37:37Z"),
    imported_id: {
      successfactors: {
        id_type: "application_remote_id",
        application_remote_id: "1224042",
      },
    },
  },
  warnings: [
    {
      message: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 | Example                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                                                    | *"success"*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                          | N/A                                                                                                                                                                                         |                                                                                                                                                                                             |
| `data`                                                                                                                                                                                      | [models.PostAtsImportTrackedApplicationPositiveResponseData](../models/postatsimporttrackedapplicationpositiveresponsedata.md)                                                              | :heavy_check_mark:                                                                                                                                                                          | N/A                                                                                                                                                                                         | {<br/>"id": "5wdtQtJei2oVhJKya2V1KZLM",<br/>"tracked_at": "2025-02-11T15:37:37Z",<br/>"imported_id": {<br/>"successfactors": {<br/>"id_type": "application_remote_id",<br/>"application_remote_id": "1224042"<br/>}<br/>}<br/>} |
| `warnings`                                                                                                                                                                                  | [models.PostAtsImportTrackedApplicationPositiveResponseWarning](../models/postatsimporttrackedapplicationpositiveresponsewarning.md)[]                                                      | :heavy_check_mark:                                                                                                                                                                          | These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console.                           |                                                                                                                                                                                             |