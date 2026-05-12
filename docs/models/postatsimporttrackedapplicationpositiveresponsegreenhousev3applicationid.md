# PostAtsImportTrackedApplicationPositiveResponseGreenhousev3ApplicationID

## Example Usage

```typescript
import { PostAtsImportTrackedApplicationPositiveResponseGreenhousev3ApplicationID } from "@kombo-api/sdk/models";

let value:
  PostAtsImportTrackedApplicationPositiveResponseGreenhousev3ApplicationID = {
    id_type: "application_id",
    application_id: "<id>",
  };
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `id_type`                                                                 | *"application_id"*                                                        | :heavy_check_mark:                                                        | Uses the V3 `/v3/applications/{id}` endpoint to retrieve the application. |
| `application_id`                                                          | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |