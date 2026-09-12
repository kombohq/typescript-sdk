# PostAtsCandidatesRequestBodyAfas

Fields specific to AFAS.

## Example Usage

```typescript
import { PostAtsCandidatesRequestBodyAfas } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesRequestBodyAfas = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `fields`                                                                     | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | Additional fields passed through to AFAS `HrCreateApplicant.Element.Fields`. |