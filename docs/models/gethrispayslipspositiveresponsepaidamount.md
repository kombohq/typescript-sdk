# GetHrisPayslipsPositiveResponsePaidAmount

The amount of the payslip that was actually paid out to the employee. This value accounts for net earnings and deductions.

## Example Usage

```typescript
import { GetHrisPayslipsPositiveResponsePaidAmount } from "@kombo-api/sdk/models";

let value: GetHrisPayslipsPositiveResponsePaidAmount = {
  currency: "Belize Dollar",
  value: 9851.45,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The [ISO 4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) the value is denominated in. |
| `value`                                                                                                     | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The monetary value.                                                                                         |