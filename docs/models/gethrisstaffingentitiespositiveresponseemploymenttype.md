# GetHrisStaffingEntitiesPositiveResponseEmploymentType

## Example Usage

```typescript
import { GetHrisStaffingEntitiesPositiveResponseEmploymentType } from "@kombo-api/sdk/models";

let value: GetHrisStaffingEntitiesPositiveResponseEmploymentType = {
  remote_label: "<value>",
  unified_type: "PART_TIME",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `remote_label`                                                                                                               | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The label of the employment type how it appears in the remote system.                                                        |
| `unified_type`                                                                                                               | [models.GetHrisStaffingEntitiesPositiveResponseUnifiedType](../models/gethrisstaffingentitiespositiveresponseunifiedtype.md) | :heavy_check_mark:                                                                                                           | The unified type, how Kombo categorize this label.                                                                           |