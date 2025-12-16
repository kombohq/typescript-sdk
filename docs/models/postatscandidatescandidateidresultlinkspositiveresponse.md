# PostAtsCandidatesCandidateIdResultLinksPositiveResponse

## Example Usage

```typescript
import { PostAtsCandidatesCandidateIdResultLinksPositiveResponse } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesCandidateIdResultLinksPositiveResponse = {
  status: "success",
  data: {},
  warnings: [],
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                          | *"success"*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `data`                                                                                                                                                            | [models.PostAtsCandidatesCandidateIdResultLinksPositiveResponseData](../models/postatscandidatescandidateidresultlinkspositiveresponsedata.md)                    | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `warnings`                                                                                                                                                        | [models.PostAtsCandidatesCandidateIdResultLinksPositiveResponseWarning](../models/postatscandidatescandidateidresultlinkspositiveresponsewarning.md)[]            | :heavy_check_mark:                                                                                                                                                | These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console. |