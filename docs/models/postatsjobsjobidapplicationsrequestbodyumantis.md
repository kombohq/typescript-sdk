# PostAtsJobsJobIdApplicationsRequestBodyUmantis

Fields specific to Abacus Umantis.

## Example Usage

```typescript
import { PostAtsJobsJobIdApplicationsRequestBodyUmantis } from "@kombo-api/sdk/models";

let value: PostAtsJobsJobIdApplicationsRequestBodyUmantis = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `person`                                                                                                                  | Record<string, *any*>                                                                                                     | :heavy_minus_sign:                                                                                                        | Fields that we will pass through to Abacus Umantis's "Create a person" endpoint's `attributes` when creating a candidate. |