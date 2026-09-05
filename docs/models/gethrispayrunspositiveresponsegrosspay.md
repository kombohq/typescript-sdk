# GetHrisPayRunsPositiveResponseGrossPay

The total gross pay for the pay run, before taxes and after gross deductions.

## Example Usage

```typescript
import { GetHrisPayRunsPositiveResponseGrossPay } from "@kombo-api/sdk/models";

let value: GetHrisPayRunsPositiveResponseGrossPay = {
  currency: "Norwegian Krone",
  value: 8836.71,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The [ISO 4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) the value is denominated in. |
| `value`                                                                                                     | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The monetary value.                                                                                         |