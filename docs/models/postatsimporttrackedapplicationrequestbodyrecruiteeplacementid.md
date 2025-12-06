# PostAtsImportTrackedApplicationRequestBodyRecruiteePlacementID

## Example Usage

```typescript
import { PostAtsImportTrackedApplicationRequestBodyRecruiteePlacementID } from "@kombo-api/sdk/models";

let value: PostAtsImportTrackedApplicationRequestBodyRecruiteePlacementID = {
  id_type: "placement_id",
  placement_id: "<id>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id_type`                                                                                                               | *"placement_id"*                                                                                                        | :heavy_check_mark:                                                                                                      | Uses the `/candidates` endpoint to retrieve all candidates, to find the relevant application based on the placement ID. |
| `placement_id`                                                                                                          | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |