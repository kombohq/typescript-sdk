# Schema2Entry1

## Example Usage

```typescript
import { Schema2Entry1 } from "@kombo-api/sdk/models";

let value: Schema2Entry1 = {
  id: "<id>",
  label: "<value>",
  remote_id: "<id>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `id`                      | *string*                  | :heavy_check_mark:        | N/A                       |
| `label`                   | *string*                  | :heavy_check_mark:        | N/A                       |
| `unified_value`           | *string*                  | :heavy_minus_sign:        | N/A                       |
| `remote_id`               | *models.Schema2RemoteId1* | :heavy_check_mark:        | N/A                       |