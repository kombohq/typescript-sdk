# GrossPayYtd

The year-to-date gross pay as returned by the remote system. Kombo never calculates this value. `null` when the remote API does not provide a year-to-date amount.

## Example Usage

```typescript
import { GrossPayYtd } from "@kombo-api/sdk/models";

let value: GrossPayYtd = {
  currency: "Uzbekistan Sum",
  value: 7614.24,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The [ISO 4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) the value is denominated in. |
| `value`                                                                                                     | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The monetary value.                                                                                         |