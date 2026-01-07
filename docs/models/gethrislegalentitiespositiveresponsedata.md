# GetHrisLegalEntitiesPositiveResponseData

## Example Usage

```typescript
import { GetHrisLegalEntitiesPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetHrisLegalEntitiesPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
    {
      id: "4B9bKBpX5tnwjiG93TAqF7ci",
      remote_id: "49",
      name: "ACME Inc.",
      address: {
        city: "Berlin",
        country: "DE",
        raw: "Sonnenallee 63\n"
          + "12045 Berlin, Berlin\n"
          + "Germany",
        state: "Berlin",
        street_1: "Sonnenallee 63",
        street_2: null,
        zip_code: "12045",
      },
      changed_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_deleted_at: null,
    },
  ],
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `next`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. |
| `results`                                                                                                                               | [models.GetHrisLegalEntitiesPositiveResponseResult](../models/gethrislegalentitiespositiveresponseresult.md)[]                          | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |