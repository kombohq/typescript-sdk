# GetHrisPayRunsPositiveResponseTotals

## Example Usage

```typescript
import { GetHrisPayRunsPositiveResponseTotals } from "@kombo-api/sdk/models";

let value: GetHrisPayRunsPositiveResponseTotals = {
  gross_pay: {
    currency: "USD",
    value: 435300,
  },
  net_pay: {
    currency: "USD",
    value: 362300,
  },
  paid_amount: {
    currency: "USD",
    value: 306300.26,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `gross_pay`                                                                                              | [models.GetHrisPayRunsPositiveResponseGrossPay](../models/gethrispayrunspositiveresponsegrosspay.md)     | :heavy_minus_sign:                                                                                       | The total gross pay for the pay run, before taxes and after gross deductions.                            |
| `net_pay`                                                                                                | [models.GetHrisPayRunsPositiveResponseNetPay](../models/gethrispayrunspositiveresponsenetpay.md)         | :heavy_minus_sign:                                                                                       | The total net pay for the pay run, after taxes have been applied to the gross pay.                       |
| `paid_amount`                                                                                            | [models.GetHrisPayRunsPositiveResponsePaidAmount](../models/gethrispayrunspositiveresponsepaidamount.md) | :heavy_minus_sign:                                                                                       | The total amount paid out through the pay run. This value accounts for net earnings and deductions.      |