# PostAtsCandidatesCandidateIdResultLinksRequestBodyTraffit

Fields specific to Traffit.

## Example Usage

```typescript
import { PostAtsCandidatesCandidateIdResultLinksRequestBodyTraffit } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesCandidateIdResultLinksRequestBodyTraffit = {};
```

## Fields

| Field                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `candidate`                                                                                                                                                                                                                                   | Record<string, *any*>                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                            | Fields that we will write to the Traffit candidate before adding the result note. Custom fields are keyed by their SID with a `_` prefix, for example `{ "_Assessment_Score": "5" }`. The field must be available via integration in Traffit. |