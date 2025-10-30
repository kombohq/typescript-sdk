# PostAtsImportTrackedApplicationRequestBodyGreenhouseApplicationID

## Example Usage

```typescript
import { PostAtsImportTrackedApplicationRequestBodyGreenhouseApplicationID } from "@kombo-api/sdk/models";

let value: PostAtsImportTrackedApplicationRequestBodyGreenhouseApplicationID = {
  id_type: "application_id",
  application_id: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id_type`                                                           | *string*                                                            | :heavy_check_mark:                                                  | Uses the `/applications/{id}` endpoint to retrieve the application. |
| `application_id`                                                    | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |