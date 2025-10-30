# PostAtsJobsJobIdApplicationsRequestBodyDvinci

Fields specific to d.vinci.

## Example Usage

```typescript
import { PostAtsJobsJobIdApplicationsRequestBodyDvinci } from "@kombo-api/sdk/models";

let value: PostAtsJobsJobIdApplicationsRequestBodyDvinci = {};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `application`                                                                                                                                                                         | Record<string, *any*>                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                    | Fields that we will pass through to d.vinci's application object. This API is used: https://static.dvinci-easy.com/files/d.vinci%20application-apply-api.html#jobs__id__applyApi_post |