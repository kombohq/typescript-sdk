# MultipartFormDatum

The data to submit as part of the request body if the request's `Content-Type` is `multipart/form-data`.

## Example Usage

```typescript
import { MultipartFormDatum } from "@kombo-api/sdk/models";

let value: MultipartFormDatum = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | *string*                 | :heavy_check_mark:       | The key of the form data |
| `value`                  | *models.ValueUnion*      | :heavy_check_mark:       | N/A                      |