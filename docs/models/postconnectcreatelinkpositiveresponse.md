# PostConnectCreateLinkPositiveResponse

## Example Usage

```typescript
import { PostConnectCreateLinkPositiveResponse } from "@kombo-api/sdk/models";

let value: PostConnectCreateLinkPositiveResponse = {
  status: "success",
  data: {
    link: "https://connect.kombo.dev/v1?token=<example-token>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                   | *"success"*                                                                                                | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `data`                                                                                                     | [models.PostConnectCreateLinkPositiveResponseData](../models/postconnectcreatelinkpositiveresponsedata.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        | {<br/>"link": "https://connect.kombo.dev/v1?token=\u003cexample-token\u003e"<br/>}                         |