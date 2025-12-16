# Prehire

An object containing the temporary pre-hire information from the remote system. This ID may change or become invalid when the pre-hire becomes a full employee. Only populated when `id` is null.

## Example Usage

```typescript
import { Prehire } from "@kombo-api/sdk/models";

let value: Prehire = {
  remote_id: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `remote_id`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | The temporary ID returned by the remote system when creating a pre-hire. |