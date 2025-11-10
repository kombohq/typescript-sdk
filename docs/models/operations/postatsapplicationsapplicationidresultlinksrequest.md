# PostAtsApplicationsApplicationIdResultLinksRequest

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdResultLinksRequest } from "@kombo-api/sdk/models/operations";

let value: PostAtsApplicationsApplicationIdResultLinksRequest = {
  application_id: "<id>",
  body: {
    label: "<value>",
    url: "https://elegant-litter.com/",
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `application_id`                                                                                                                        | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | The Kombo ID of the application you want to create the link for.                                                                        |
| `body`                                                                                                                                  | [models.PostAtsApplicationsApplicationIdResultLinksRequestBody](../../models/postatsapplicationsapplicationidresultlinksrequestbody.md) | :heavy_check_mark:                                                                                                                      | POST /ats/applications/:application_id/result-links Request body                                                                        |