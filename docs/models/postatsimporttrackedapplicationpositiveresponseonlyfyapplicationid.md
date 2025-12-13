# PostAtsImportTrackedApplicationPositiveResponseOnlyfyApplicationID

## Example Usage

```typescript
import { PostAtsImportTrackedApplicationPositiveResponseOnlyfyApplicationID } from "@kombo-api/sdk/models";

let value: PostAtsImportTrackedApplicationPositiveResponseOnlyfyApplicationID =
  {
    id_type: "application_id",
    application_id: "<id>",
  };
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id_type`                                                             | *"application_id"*                                                    | :heavy_check_mark:                                                    | Uses the `/v1/application/{id}` endpoint to retrieve the application. |
| `application_id`                                                      | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |