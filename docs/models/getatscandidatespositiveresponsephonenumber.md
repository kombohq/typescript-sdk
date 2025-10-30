# GetAtsCandidatesPositiveResponsePhoneNumber

## Example Usage

```typescript
import { GetAtsCandidatesPositiveResponsePhoneNumber } from "@kombo-api/sdk/models";

let value: GetAtsCandidatesPositiveResponsePhoneNumber = {
  phone_number: "215.895.1188 x886",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `phone_number`                                                                                                                | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `type`                                                                                                                        | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`. |