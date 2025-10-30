# PostHrisAbsencesRequestBodyRemoteFields

Additional fields that we will pass through to specific HRIS systems.

## Example Usage

```typescript
import { PostHrisAbsencesRequestBodyRemoteFields } from "@kombo-api/sdk/models";

let value: PostHrisAbsencesRequestBodyRemoteFields = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `adpworkforcenow`                                                                                            | [models.PostHrisAbsencesRequestBodyAdpworkforcenow](../models/posthrisabsencesrequestbodyadpworkforcenow.md) | :heavy_minus_sign:                                                                                           | Fields specific to ADP Workforce Now.                                                                        |