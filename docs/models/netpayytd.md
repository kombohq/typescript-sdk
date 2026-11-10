# NetPayYtd

The year-to-date net pay as returned by the remote system. Kombo never calculates this value. `null` when the remote API does not provide a year-to-date amount.

## Example Usage

```typescript
import { NetPayYtd } from "@kombo-api/sdk/models";

let value: NetPayYtd = {
  currency: "Euro",
  value: 8814.19,
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                                               | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The [ISO 4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) the value is denominated in.                                              |
| `value`                                                                                                                                                  | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The monetary value. See the integration’s limitations for whether this value is rounded. Rounded values use mathematical rounding (half away from zero). |