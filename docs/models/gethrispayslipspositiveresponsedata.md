# GetHrisPayslipsPositiveResponseData

## Example Usage

```typescript
import { GetHrisPayslipsPositiveResponseData } from "@kombo-api/sdk/models";
import { RFCDate } from "@kombo-api/sdk/types";

let value: GetHrisPayslipsPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
    {
      id: "E4q8YceHEtPWeGwBAEcd9xPs",
      remote_id: "300000331094861",
      changed_at: new Date("2026-01-10T12:32:01Z"),
      remote_deleted_at: null,
      totals: {
        gross_pay: {
          currency: "USD",
          value: 2207.75,
        },
        net_pay: {
          currency: "USD",
          value: 1730.35,
        },
        paid_amount: {
          currency: "USD",
          value: 1730.35,
        },
      },
      employee: {
        id: "26vafvWSRmbhNcxJYqjCzuJg",
        remote_id: "32",
        first_name: "John",
        last_name: "Doe",
        display_full_name: "John Doe",
        work_email: "john.doe@acme.com",
        remote_deleted_at: null,
      },
      pay_run: {
        id: "HdyE3KNfcbNzXFRqwW1Wh2eP",
        remote_id: "300000092871122",
        start_date: new RFCDate("2026-01-01T00:00:00Z"),
        end_date: new RFCDate("2026-01-13T00:00:00Z"),
        legal_entity_id: "3Y6vdh2SPujGVx8oj4g8hdUu",
      },
      line_items: [
        {
          id: "8TMenmF8QVyP1EqagstHhsPG",
          remote_id: "300000331094861:REGULAR_SALARY",
          name: "Regular Salary",
          amount: {
            currency: "USD",
            value: 2207.75,
          },
        },
        {
          id: "CELfyfzuHs6Dz1MDPdoSCY3U",
          remote_id: "300000331094861:FIT_WITHHELD",
          name: "FIT Withheld",
          amount: {
            currency: "USD",
            value: 235.94,
          },
        },
        {
          id: "H1gPqyuZTK3y75NRxe4QZ3u7",
          remote_id: "300000331094861:SOCIAL_SECURITY_EMPLOYEE_WITHHELD",
          name: "Social Security Employee Withheld",
          amount: {
            currency: "USD",
            value: 136.88,
          },
        },
        {
          id: "HEnJXik92Qqph5SX4NtK6NRM",
          remote_id: "300000331094861:MEDICARE_EMPLOYEE_WITHHELD",
          name: "Medicare Employee Withheld",
          amount: {
            currency: "USD",
            value: 32.01,
          },
        },
        {
          id: "Ho16emGY5zVYeEc2nN9CWeKv",
          remote_id: "300000331094861:SIT_WITHHELD_CA",
          name: "SIT Withheld (CA)",
          amount: {
            currency: "USD",
            value: 71.47,
          },
        },
        {
          id: "9D24qXFEp1pSQ2Y3jaRFSTBQ",
          remote_id: "300000331094861:VPDI_EMPLOYEE_WITHHELD_CA",
          name: "VPDI Employee Withheld (CA)",
          amount: {
            currency: "USD",
            value: 1.1,
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `next`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. |
| `results`                                                                                                                               | [models.GetHrisPayslipsPositiveResponseResult](../models/gethrispayslipspositiveresponseresult.md)[]                                    | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |