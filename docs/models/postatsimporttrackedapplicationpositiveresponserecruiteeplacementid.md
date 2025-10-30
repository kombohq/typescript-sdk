# PostAtsImportTrackedApplicationPositiveResponseRecruiteePlacementID

## Example Usage

```typescript
import { PostAtsImportTrackedApplicationPositiveResponseRecruiteePlacementID } from "@kombo-api/sdk/models";

let value: PostAtsImportTrackedApplicationPositiveResponseRecruiteePlacementID =
  {
    id_type: "placement_id",
    placement_id: "<id>",
  };
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id_type`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | Uses the `/candidates` endpoint to retrieve all candidates, to find the relevant application based on the placement ID. |
| `placement_id`                                                                                                          | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |