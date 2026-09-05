# GetHrisPayRunsPositiveResponsePaidAmount

The total amount paid out through the pay run. This value accounts for net earnings and deductions.

## Example Usage

```typescript
import { GetHrisPayRunsPositiveResponsePaidAmount } from "@kombo-api/sdk/models";

let value: GetHrisPayRunsPositiveResponsePaidAmount = {
  currency: "Vatu",
  value: 3653.73,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The [ISO 4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) the value is denominated in. |
| `value`                                                                                                     | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The monetary value.                                                                                         |