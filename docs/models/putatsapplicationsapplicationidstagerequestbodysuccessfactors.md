# PutAtsApplicationsApplicationIdStageRequestBodySuccessfactors

Fields specific to SAP SuccessFactors.

## Example Usage

```typescript
import { PutAtsApplicationsApplicationIdStageRequestBodySuccessfactors } from "@kombo-api/sdk/models";

let value: PutAtsApplicationsApplicationIdStageRequestBodySuccessfactors = {};
```

## Fields

| Field                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `job_application`                                                                                                                                                                                                                     | Record<string, *any*>                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                    | Fields that we will pass through to SuccessFactor's `JobApplication` object when moving the application to a new stage. Useful for instance-specific fields that SAP requires on certain status transitions (e.g. `custEventReason`). |