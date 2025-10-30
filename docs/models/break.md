# Break

## Example Usage

```typescript
import { Break } from "@kombo-api/sdk/models";

let value: Break = {
  ended_at: new Date("2025-01-30T06:09:23.178Z"),
  paid: true,
  started_at: new Date("2025-03-19T15:02:46.275Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `ended_at`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | End time of the break.                                                                        |
| `paid`                                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the break is paid or unpaid.                                                          |
| `started_at`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start time of the break.                                                                      |