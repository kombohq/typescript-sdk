# GetHrisLocationsResponse

## Example Usage

```typescript
import { GetHrisLocationsResponse } from "@kombo-api/sdk/models/operations";

let value: GetHrisLocationsResponse = {
  result: {
    status: "success",
    data: {
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
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `result`                                                                                    | [models.GetHrisLocationsPositiveResponse](../../models/gethrislocationspositiveresponse.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |