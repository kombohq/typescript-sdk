# KomboGeneralErrorCode

Some errors include an error code that can be used to identify their cause. See the [Error Handling Docs](https://docs.kombo.dev/guides/errors) for more information. For your error handling logic please use the error `code` instead of other properties (e.g. message, http status code, ...).

## Example Usage

```typescript
import { KomboGeneralErrorCode } from "@kombo-api/sdk/models";

let value: KomboGeneralErrorCode = "PLATFORM.RATE_LIMIT_EXCEEDED";
```

## Values

```typescript
"PLATFORM.RATE_LIMIT_EXCEEDED" | "PLATFORM.INTEGRATION_NOT_FOUND" | "PLATFORM.INPUT_INVALID" | "PLATFORM.UNKNOWN_ERROR" | "PLATFORM.IP_NOT_WHITELISTED" | "PLATFORM.AUTHENTICATION_INVALID"
```