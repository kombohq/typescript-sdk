# KomboPassthroughError

The standard error response with the error codes for the passthrough API.

## Example Usage

```typescript
import { KomboPassthroughError } from "@kombo-api/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `status`                                                                          | [models.KomboPassthroughErrorStatus](../../models/kombopassthrougherrorstatus.md) | :heavy_check_mark:                                                                | N/A                                                                               |
| `error`                                                                           | [models.KomboPassthroughErrorError](../../models/kombopassthrougherrorerror.md)   | :heavy_check_mark:                                                                | Error details with structured code for programmatic handling.                     |