# PostAtsApplicationsApplicationIdResultLinksRequestBodyDetails

Additional details with attributes that will be added to the result. This can be percentages, scores, or any text.

We generally recommend using short attribute keys and a short custom_field_name_prefix to avoid overflowing the ATS UI.

## Example Usage

```typescript
import { PostAtsApplicationsApplicationIdResultLinksRequestBodyDetails } from "@kombo-api/sdk/models";

let value: PostAtsApplicationsApplicationIdResultLinksRequestBodyDetails = {
  custom_field_name_prefix: "<value>",
  attributes: [],
};
```

## Fields

| Field                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `custom_field_name_prefix`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | That will be added to the attribute labels if they are used for custom fields. If you specify `Acme:` as the prefix, the custom field will be named `Acme: Score`. Putting in the name of your company/product is a good idea. |
| `attributes`                                                                                                                                                                                                                   | [models.PostAtsApplicationsApplicationIdResultLinksRequestBodyAttribute](../models/postatsapplicationsapplicationidresultlinksrequestbodyattribute.md)[]                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |