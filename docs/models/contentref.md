# ContentRef

## Example Usage

```typescript
import { ContentRef } from "@kombo-api/sdk/models";

let value: ContentRef = {
  type: "s3",
  bucket: "<value>",
  key: "<key>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `type`                                                                        | *"s3"*                                                                        | :heavy_check_mark:                                                            | N/A                                                                           |
| `bucket`                                                                      | *string*                                                                      | :heavy_check_mark:                                                            | The bucket the object was written to.                                         |
| `key`                                                                         | *string*                                                                      | :heavy_check_mark:                                                            | The full object key, including the prefix configured on the file destination. |