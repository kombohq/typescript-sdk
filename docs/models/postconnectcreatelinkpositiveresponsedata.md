# PostConnectCreateLinkPositiveResponseData

## Example Usage

```typescript
import { PostConnectCreateLinkPositiveResponseData } from "@kombo-api/sdk/models";

let value: PostConnectCreateLinkPositiveResponseData = {
  link: "https://connect.kombo.dev/v1?token=<example-token>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `link`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `static_ips`                                                                        | *string*[]                                                                          | :heavy_minus_sign:                                                                  | The allowlist IPs for this integration. Present when `enable_static_ips` is `true`. |