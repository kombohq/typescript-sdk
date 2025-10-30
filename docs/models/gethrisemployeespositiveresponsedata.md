# GetHrisEmployeesPositiveResponseData

## Example Usage

```typescript
import { GetHrisEmployeesPositiveResponseData } from "@kombo-api/sdk/models";

let value: GetHrisEmployeesPositiveResponseData = {
  next:
    "eyJwYWdlIjoxMiwibm90ZSI6InRoaXMgaXMganVzdCBhbiBleGFtcGxlIGFuZCBub3QgcmVwcmVzZW50YXRpdmUgZm9yIGEgcmVhbCBjdXJzb3IhIn0=",
  results: [
    {
      id: "26vafvWSRmbhNcxJYqjCzuJg",
      remote_id: "32",
      employee_number: "3243422",
      first_name: "John",
      last_name: "Doe",
      nationality: "French",
      display_full_name: "John Doe",
      job_title: "Integrations Team Lead",
      work_email: "john.doe@acme.com",
      personal_email: "john@doe.me",
      mobile_phone_number: "801-555-4687",
      ssn: "555-32-6395",
      tax_id: "12 345 678 901",
      gender: "MALE",
      ethnicity: "BLACK_AFRICAN_AMERICAN",
      marital_status: "MARRIED",
      employment_status: "INACTIVE",
      employment_type: "FULL_TIME",
      weekly_hours: 40,
      avatar: "https://resources.bamboohr.com/images/photo_person_150x150.png",
      work_location_id: "7E2gyuv6TmvtByzBxW9Sxt53",
      legal_entity_id: "xB32bied320csBSsl3XWdlw33",
      manager_id: "9pf2pxBB8VX8EQMC9aipW2Bo",
      home_address: {
        city: "Berlin",
        country: "DE",
        raw: "Sonnenallee 63\n"
          + "12045 Berlin\n"
          + "Germany",
        state: "Berlin",
        street_1: "Sonnenallee 63",
        street_2: null,
        zip_code: "12045",
      },
      bank_accounts: [
        {
          iban: "DE12345678901234567890",
          bic: "COBADEFFXXX",
          account_number: "1234567890",
          holder_name: "John Doe",
          bank_name: "Commerzbank",
          domestic_bank_routing: {
            number: "34567890",
            type: "DE_BANKLEITZAHL",
          },
        },
      ],
      date_of_birth: new Date("1986-01-01T00:00:00Z"),
      start_date: new Date("2020-04-07T00:00:00Z"),
      termination_date: new Date("2022-05-20T00:00:00Z"),
      remote_created_at: new Date("2020-04-07T12:32:01Z"),
      changed_at: new Date("2022-08-07T14:01:29.196Z"),
      remote_deleted_at: null,
      custom_fields: {},
      employments: [
        {
          id: "12vpXR7BeqYNWDShXRgsonnm",
          remote_id: "859",
          employee_id: "26vafvWSRmbhNcxJYqjCzuJg",
          job_title: "Social Media Marketer",
          pay_rate: 85000,
          pay_period: "YEAR",
          pay_frequency: "SEMIMONTHLY",
          employment_type: "FULL_TIME",
          pay_currency: "EUR",
          effective_date: new Date("2021-01-30T00:00:00Z"),
          changed_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_deleted_at: null,
          custom_fields: {},
        },
      ],
      time_off_balances: [
        {
          id: "FuyRuk5NqP3qTcThED3ymTuE",
          remote_id: "124123",
          employee_id: "2Up4ZCvq1bFVzmzXG6EWzV3j",
          type_id: "BQJaBxRCiqN46G27VTegvkEr",
          balance: 14,
          balance_unit: "DAYS",
          changed_at: new Date("2022-08-07T14:01:29.196Z"),
          remote_deleted_at: null,
          used: 3,
          used_unit: "DAYS",
        },
      ],
      manager: {
        first_name: "John",
        last_name: "Doe",
        display_full_name: "John Doe",
        id: "26vafvWSRmbhNcxJYqjCzuJg",
        work_email: "john.doe@acme.com",
        remote_id: "32",
        employment_status: "INACTIVE",
        termination_date: new Date("2022-05-20T00:00:00Z"),
      },
      groups: [
        {
          id: "4B9bKBpX5tnwjiG93TAqF7ci",
          remote_id: "49",
          name: "Customer Success",
          type: "TEAM",
        },
      ],
      legal_entity: {
        id: "4B9bKBpX5tnwjiG93TAqF7ci",
        remote_id: "49",
        name: "ACME Inc.",
        address: {
          city: "Berlin",
          country: "DE",
          raw: "Sonnenallee 63\n"
            + "12045 Berlin, Berlin\n"
            + "Germany",
          state: "Berlin",
          street_1: "Sonnenallee 63",
          street_2: null,
          zip_code: "12045",
        },
      },
      work_location: {
        id: "22st2Ji8XpncEYEak8mvQgQF",
        remote_id: "1348",
        name: "Kombo HQ",
        address: {
          city: "Berlin",
          country: "DE",
          raw: "Sonnenallee 63\n"
            + "12045 Berlin, Berlin\n"
            + "Germany",
          state: "Berlin",
          street_1: "Sonnenallee 63",
          street_2: null,
          zip_code: "12045",
        },
        type: "OFFICE",
        changed_at: new Date("2022-08-07T14:01:29.196Z"),
        remote_deleted_at: new Date("2022-08-07T14:01:29.196Z"),
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `next`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Cursor string that can be passed to the `cursor` query parameter to get the next page. If this is `null`, then there are no more pages. |
| `results`                                                                                                                               | [models.GetHrisEmployeesPositiveResponseResult](../models/gethrisemployeespositiveresponseresult.md)[]                                  | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |