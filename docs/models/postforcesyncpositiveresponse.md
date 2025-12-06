# PostForceSyncPositiveResponse

## Example Usage

```typescript
import { PostForceSyncPositiveResponse } from "@kombo-api/sdk/models";

let value: PostForceSyncPositiveResponse = {
  status: "success",
  data: {
    already_queued: false,
    sync_id: "119ihtp91nA3dqRFiV67nXS6",
    type: "DELTA",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `status`                                                                                   | *"success"*                                                                                | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `data`                                                                                     | [models.PostForceSyncPositiveResponseData](../models/postforcesyncpositiveresponsedata.md) | :heavy_check_mark:                                                                         | N/A                                                                                        | {<br/>"already_queued": false,<br/>"sync_id": "119ihtp91nA3dqRFiV67nXS6",<br/>"type": "DELTA"<br/>} |