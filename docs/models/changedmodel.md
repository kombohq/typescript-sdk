# ChangedModel

A model or connection that has changed in the integration.

## Example Usage

```typescript
import { ChangedModel } from "@kombo-api/sdk/models";

let value: ChangedModel = {
  name: "hris_timesheets",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `name`                                                  | [models.Name](../models/name.md)                        | :heavy_check_mark:                                      | The name of the Kombo model or connection that changed. |