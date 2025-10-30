# LegalEntityAddress

The legal entity’s address.

## Example Usage

```typescript
import { LegalEntityAddress } from "@kombo-api/sdk/models";

let value: LegalEntityAddress = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `city`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `country`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | Contains the ISO2 country code if possible. If not, it contains the original value.             |
| `raw`                                                                                           | *string*                                                                                        | :heavy_minus_sign:                                                                              | If we have address data, this is filled with the raw address string.                            |
| `state`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `street_1`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | If we can parse the address data, this field contains the first part of the street information. |
| `street_2`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `zip_code`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |