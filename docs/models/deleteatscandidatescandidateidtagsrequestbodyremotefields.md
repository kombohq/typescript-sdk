# DeleteAtsCandidatesCandidateIdTagsRequestBodyRemoteFields

Additional fields that we will pass through to specific ATS systems.

## Example Usage

```typescript
import { DeleteAtsCandidatesCandidateIdTagsRequestBodyRemoteFields } from "@kombo-api/sdk/models";

let value: DeleteAtsCandidatesCandidateIdTagsRequestBodyRemoteFields = {};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `greenhouse`                                                                                                                           | [models.DeleteAtsCandidatesCandidateIdTagsRequestBodyGreenhouse](../models/deleteatscandidatescandidateidtagsrequestbodygreenhouse.md) | :heavy_minus_sign:                                                                                                                     | Fields specific to Greenhouse.                                                                                                         |
| `workable`                                                                                                                             | [models.DeleteAtsCandidatesCandidateIdTagsRequestBodyWorkable](../models/deleteatscandidatescandidateidtagsrequestbodyworkable.md)     | :heavy_minus_sign:                                                                                                                     | Workable specific remote fields for ATS actions.                                                                                       |