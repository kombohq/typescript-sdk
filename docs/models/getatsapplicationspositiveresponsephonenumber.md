# GetAtsApplicationsPositiveResponsePhoneNumber

## Example Usage

```typescript
import { GetAtsApplicationsPositiveResponsePhoneNumber } from "@kombo-api/sdk/models";

let value: GetAtsApplicationsPositiveResponsePhoneNumber = {
  phone_number: "249-799-2797",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `phone_number`                                                                                                                | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `type`                                                                                                                        | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Kombo exposes type information through this field. If we don't get any information from the tool, we will set this to `null`. |