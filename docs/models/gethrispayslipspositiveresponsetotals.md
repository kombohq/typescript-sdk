# GetHrisPayslipsPositiveResponseTotals

## Example Usage

```typescript
import { GetHrisPayslipsPositiveResponseTotals } from "@kombo-api/sdk/models";

let value: GetHrisPayslipsPositiveResponseTotals = {
  gross_pay: {
    currency: "USD",
    value: 2207.75,
  },
  net_pay: {
    currency: "USD",
    value: 1730.35,
  },
  paid_amount: {
    currency: "USD",
    value: 1730.35,
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `gross_pay`                                                                                                                | [models.GetHrisPayslipsPositiveResponseGrossPay](../models/gethrispayslipspositiveresponsegrosspay.md)                     | :heavy_minus_sign:                                                                                                         | The total gross pay for the payslip, before taxes and after gross deductions.                                              |
| `net_pay`                                                                                                                  | [models.GetHrisPayslipsPositiveResponseNetPay](../models/gethrispayslipspositiveresponsenetpay.md)                         | :heavy_minus_sign:                                                                                                         | The total net pay for the payslip, after taxes have been applied to the gross pay.                                         |
| `paid_amount`                                                                                                              | [models.GetHrisPayslipsPositiveResponsePaidAmount](../models/gethrispayslipspositiveresponsepaidamount.md)                 | :heavy_minus_sign:                                                                                                         | The amount of the payslip that was actually paid out to the employee. This value accounts for net earnings and deductions. |