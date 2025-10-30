# PostAtsCandidatesPositiveResponsePhoneNumber

## Example Usage

```typescript
import { PostAtsCandidatesPositiveResponsePhoneNumber } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesPositiveResponsePhoneNumber = {
  phone_number: "908.816.6143 x9342",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `phone_number`                                                                                                                | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `type`                                                                                                                        | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`. |