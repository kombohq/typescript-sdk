# PostAtsImportTrackedApplicationPositiveResponseData

## Example Usage

```typescript
import { PostAtsImportTrackedApplicationPositiveResponseData } from "@kombo-api/sdk/models";

let value: PostAtsImportTrackedApplicationPositiveResponseData = {
  id: "5wdtQtJei2oVhJKya2V1KZLM",
  tracked_at: new Date("2025-02-11T15:37:37Z"),
  imported_id: {
    successfactors: {
      id_type: "application_remote_id",
      application_remote_id: "1224042",
    },
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                            | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `tracked_at`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_check_mark:                                                                                                              | YYYY-MM-DDTHH:mm:ss.sssZ<br/><br/>[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) |
| `imported_id`                                                                                                                   | [models.ImportedId](../models/importedid.md)                                                                                    | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |