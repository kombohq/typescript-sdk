# GetAssessmentOrdersOpenRequest

## Example Usage

```typescript
import { GetAssessmentOrdersOpenRequest } from "@kombo-api/sdk/models/operations";

let value: GetAssessmentOrdersOpenRequest = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                     | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional cursor string used for pagination. This can be retrieved from the `next` property of the previous page response. |
| `page_size`                                                                                                                  | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The number of results to return per page. Maximum is 250.                                                                    |