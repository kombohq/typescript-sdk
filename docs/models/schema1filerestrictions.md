# Schema1FileRestrictions

## Example Usage

```typescript
import { Schema1FileRestrictions } from "@kombo-api/sdk/models";

let value: Schema1FileRestrictions = {
  accepted_mime_types: [
    "<value 1>",
  ],
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `accepted_mime_types` | *string*[]            | :heavy_check_mark:    | N/A                   |
| `max_file_size`       | *number*              | :heavy_minus_sign:    | N/A                   |