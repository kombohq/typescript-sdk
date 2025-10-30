# GetAtsOffersPositiveResponseEmailAddress

## Example Usage

```typescript
import { GetAtsOffersPositiveResponseEmailAddress } from "@kombo-api/sdk/models";

let value: GetAtsOffersPositiveResponseEmailAddress = {
  type: "<value>",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `email_address`                                                                                                               | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `type`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`. |