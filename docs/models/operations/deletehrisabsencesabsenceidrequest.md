# DeleteHrisAbsencesAbsenceIdRequest

## Example Usage

```typescript
import { DeleteHrisAbsencesAbsenceIdRequest } from "@kombo-api/sdk/models/operations";

let value: DeleteHrisAbsencesAbsenceIdRequest = {
  absence_id: "<id>",
  delete_hris_absences_absence_id_request_body: {},
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `absence_id`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | The Kombo ID of the absence                                                                             |
| `delete_hris_absences_absence_id_request_body`                                                          | [models.DeleteHrisAbsencesAbsenceIdRequestBody](../../models/deletehrisabsencesabsenceidrequestbody.md) | :heavy_check_mark:                                                                                      | DELETE /hris/absences/:absence_id Request body                                                          |