# OrderedOption

## Example Usage

```typescript
import { OrderedOption } from "@kombo-api/sdk/models";

let value: OrderedOption = {
  id: "<id>",
  remote_id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The Kombo ID of this proficiency option. Submit this ID when writing a rating for a `SINGLE_SELECT` skill. |
| `remote_id`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of this option in the remote system. `null` when the system identifies the level only by its name.  |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The display name of this proficiency level.                                                                |