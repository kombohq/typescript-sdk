# PostForceSyncPositiveResponseData

## Example Usage

```typescript
import { PostForceSyncPositiveResponseData } from "@kombo-api/sdk/models";

let value: PostForceSyncPositiveResponseData = {
  already_queued: false,
  sync_id: "119ihtp91nA3dqRFiV67nXS6",
  type: "DELTA",
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `already_queued`                                                                                                                                | *boolean*                                                                                                                                       | :heavy_check_mark:                                                                                                                              | We only allow 1 concurrent sync to be running or queued.                                                                                        |
| `sync_id`                                                                                                                                       | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | ID of the newly-created or already-queued-or-running sync.                                                                                      |
| `type`                                                                                                                                          | [models.PostForceSyncPositiveResponseType](../models/postforcesyncpositiveresponsetype.md)                                                      | :heavy_check_mark:                                                                                                                              | The type of the triggered sync. May differ from request, if the integration does not support delta syncs or if another sync is already running. |