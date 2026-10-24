# Amount

The amount of the line item.

## Example Usage

```typescript
import { Amount } from "@kombo-api/sdk/models";

let value: Amount = {
  currency: "Cordoba Oro",
  value: 136.9,
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                                               | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The [ISO 4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) the value is denominated in.                                              |
| `value`                                                                                                                                                  | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The monetary value. See the integration’s limitations for whether this value is rounded. Rounded values use mathematical rounding (half away from zero). |