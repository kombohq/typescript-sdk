# GetHrisStaffingEntitiesPositiveResponseData

## Example Usage

```typescript
import { GetHrisStaffingEntitiesPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetHrisStaffingEntitiesPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
    {
      id: "26vafvWSRmbhNcxJYqjCzuJg",
      remote_id: "32",
      name: "Software Engineer",
      model_type: "POSITION",
      description: "Description of the position",
      status: "OPEN_UNLIMITED",
      employment_types: [
        {
          remote_label: "Vollzeit",
          unified_type: "FULL_TIME",
        },
      ],
      number_of_openings: null,
      parent_id: "KGaJ5XaVPob8mYVfD49W4DGB",
      remote_url: "https://example.com/position/32",
      remote_created_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_updated_at: new Date("2022-08-07T14:01:29.196Z"),
      changed_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_deleted_at: null,
      custom_fields: {},
      locations: [
        {
          id: "22st2Ji8XpncEYEak8mvQgQF",
          remote_id: "1348",
          name: "Kombo HQ",
          type: "OFFICE",
        },
      ],
      legal_entities: [
        {
          id: "4B9bKBpX5tnwjiG93TAqF7ci",
          remote_id: "49",
          name: "ACME Inc.",
        },
      ],
      groups: [
        {
          id: "4B9bKBpX5tnwjiG93TAqF7ci",
          remote_id: "49",
          name: "Customer Success",
          type: "TEAM",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `next`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. |
| `results`                                                                                                                               | [models.GetHrisStaffingEntitiesPositiveResponseResult](../models/gethrisstaffingentitiespositiveresponseresult.md)[]                    | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |