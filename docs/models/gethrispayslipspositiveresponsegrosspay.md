# GetHrisPayslipsPositiveResponseGrossPay

The total gross pay for the payslip, before taxes and after gross deductions.

## Example Usage

```typescript
import { GetHrisPayslipsPositiveResponseGrossPay } from "@kombo-api/sdk/models";

let value: GetHrisPayslipsPositiveResponseGrossPay = {
  currency: "Dominican Peso",
  value: 7054.66,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The [ISO 4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) the value is denominated in. |
| `value`                                                                                                     | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The monetary value.                                                                                         |