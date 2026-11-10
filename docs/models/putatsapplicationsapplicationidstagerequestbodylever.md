# PutAtsApplicationsApplicationIdStageRequestBodyLever

Fields specific to Lever.

## Example Usage

```typescript
import { PutAtsApplicationsApplicationIdStageRequestBodyLever } from "@kombo-api/sdk/models";

let value: PutAtsApplicationsApplicationIdStageRequestBodyLever = {};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `perform_as`                                                                                                                            | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | ID of the Lever user that will show up as having moved the application. If not provided, Lever records the stage change without a user. |