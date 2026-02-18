# PutIntegrationsIntegrationIdEnabledRequestBody

## Example Usage

```typescript
import { PutIntegrationsIntegrationIdEnabledRequestBody } from "@kombo-api/sdk/models";

let value: PutIntegrationsIntegrationIdEnabledRequestBody = {
  value: false,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `value`                                                                                | *boolean*                                                                              | :heavy_check_mark:                                                                     | The desired state of the integration (e.g., `true` for enabled, `false` for disabled). |