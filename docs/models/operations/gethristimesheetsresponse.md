# GetHrisTimesheetsResponse

## Example Usage

```typescript
import { GetHrisTimesheetsResponse } from "@kombo-api/sdk/models/operations";

let value: GetHrisTimesheetsResponse = {
  result: {
    status: "success",
    data: {
      next:
        "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
      results: [
        {
          id: "C1BB1C36-FE1D-4185-AAB8-0716D8FBA017",
          remote_id: "446655440000",
          employee_id: "289AD550-8659-4305-92B2-6EAA006AAB17",
          started_at: new Date("2025-04-16T09:02:00Z"),
          ended_at: new Date("2025-04-16T16:59:00Z"),
          timezone: "-04:00",
          payable_hours: 8,
          unpaid_break_minutes: 30,
          breaks: [
            {
              ended_at: new Date("2025-04-16T12:30:00Z"),
              paid: false,
              started_at: new Date("2025-04-16T12:00:00Z"),
            },
          ],
          approval_status: "APPROVED",
          approved_at: new Date("2025-04-16T17:05:31Z"),
          comment: "Sprint planning & code review",
          custom_fields: {},
          changed_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_deleted_at: null,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `result`                                                                                      | [models.GetHrisTimesheetsPositiveResponse](../../models/gethristimesheetspositiveresponse.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |