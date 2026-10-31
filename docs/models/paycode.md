# PayCode

The pay code (salary type) this line item belongs to in the remote system.

## Example Usage

```typescript
import { PayCode } from "@kombo-api/sdk/models";

let value: PayCode = {
  remote_id: "200",
  remote_label: "Regular Salary",
};
```

## Fields

| Field                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `remote_id`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                       | The raw ID of the object in the remote system. We don't recommend using this as a primary key on your side as it might sometimes be compromised of multiple identifiers if a system doesn't provide a clear primary key. |
| `remote_label`                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                       | The name of the salary type as it appears in the remote system.                                                                                                                                                          |