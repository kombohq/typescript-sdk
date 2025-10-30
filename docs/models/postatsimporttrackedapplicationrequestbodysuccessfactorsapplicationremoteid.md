# PostAtsImportTrackedApplicationRequestBodySuccessfactorsApplicationRemoteID

## Example Usage

```typescript
import { PostAtsImportTrackedApplicationRequestBodySuccessfactorsApplicationRemoteID } from "@kombo-api/sdk/models";

let value:
  PostAtsImportTrackedApplicationRequestBodySuccessfactorsApplicationRemoteID =
    {
      id_type: "application_remote_id",
      application_remote_id: "<id>",
    };
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `id_type`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Uses the `/JobApplication` ODATA endpoint to retrieve the relevant application based on the application ID. |
| `application_remote_id`                                                                                     | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |