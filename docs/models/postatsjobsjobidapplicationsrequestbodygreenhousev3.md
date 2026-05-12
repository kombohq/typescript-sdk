# PostAtsJobsJobIdApplicationsRequestBodyGreenhousev3

Fields specific to Greenhouse V3 (OAuth-based connector).

## Example Usage

```typescript
import { PostAtsJobsJobIdApplicationsRequestBodyGreenhousev3 } from "@kombo-api/sdk/models";

let value: PostAtsJobsJobIdApplicationsRequestBodyGreenhousev3 = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `candidate`                                                                               | Record<string, *any*>                                                                     | :heavy_minus_sign:                                                                        | Additional fields passed through to Greenhouse V3's `POST /v3/candidates` request body.   |
| `application`                                                                             | Record<string, *any*>                                                                     | :heavy_minus_sign:                                                                        | Additional fields passed through to Greenhouse V3's `POST /v3/applications` request body. |