# DomesticBankRouting

## Example Usage

```typescript
import { DomesticBankRouting } from "@kombo-api/sdk/models";

let value: DomesticBankRouting = {
  number: "<value>",
  type: "US_ABA_ROUTING_TRANSIT_NUMBER",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `number`                                                                                                                                                                         | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | Bank routing number (e.g. DE Bankleitzahl, GB Sort Code, US ABA routing number, AU BSB code). This field is not formatted and therefore might contain delimiters (eg. 01-23-45). |
| `type`                                                                                                                                                                           | [models.DomesticBankRoutingType](../models/domesticbankroutingtype.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                               | Enum of the routing type, prefixed with the iso-3166-1-alpha-2 banks origin country. If there is uncertainty about the type, it will be set to null.                             |