# DeleteHrisAbsencesAbsenceIdRequest

## Example Usage

```typescript
import { DeleteHrisAbsencesAbsenceIdRequest } from "@kombo-api/sdk/models/operations";

let value: DeleteHrisAbsencesAbsenceIdRequest = {
  absence_id: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `absence_id`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | The Kombo ID of the absence                                                                             |
| `body`                                                                                                  | [models.DeleteHrisAbsencesAbsenceIdRequestBody](../../models/deletehrisabsencesabsenceidrequestbody.md) | :heavy_check_mark:                                                                                      | DELETE /hris/absences/:absence_id Request body                                                          |