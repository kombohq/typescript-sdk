# PostAtsCandidatesRequestBodyPinpoint

Fields specific to Pinpoint.

## Example Usage

```typescript
import { PostAtsCandidatesRequestBodyPinpoint } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesRequestBodyPinpoint = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `candidate`                                                        | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | Fields that we will pass through to Pinpoint's `Candidate` object. |