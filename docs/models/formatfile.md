# FormatFile

## Example Usage

```typescript
import { FormatFile } from "@kombo-api/sdk/models";

let value: FormatFile = {
  type: "FILE",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `accepted_mime_types` | *string*[]            | :heavy_minus_sign:    | N/A                   |
| `max_file_size_bytes` | *number*              | :heavy_minus_sign:    | N/A                   |
| `type`                | *string*              | :heavy_check_mark:    | N/A                   |