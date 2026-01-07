# GetHrisLocationsPositiveResponseData

## Example Usage

```typescript
import { GetHrisLocationsPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetHrisLocationsPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
    {
      id: "22st2Ji8XpncEYEak8mvQgQF",
      remote_id: "1348",
      name: "Kombo HQ",
      address: {
        city: "Berlin",
        country: "DE",
        raw: "Sonnenallee 63\n12045 Berlin, Berlin\nGermany",
        state: "Berlin",
        street_1: "Sonnenallee 63",
        street_2: null,
        zip_code: "12045",
      },
      type: "OFFICE",
      changed_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_deleted_at: new Date("2022-08-07T14:01:29.196Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `next`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. |
| `results`                                                                                                                               | [models.GetHrisLocationsPositiveResponseResult](../models/gethrislocationspositiveresponseresult.md)[]                                  | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |