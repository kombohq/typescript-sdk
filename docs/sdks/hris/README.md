# Hris

## Overview

### Available Operations

* [getEmployees](#getemployees) - Get employees
* [getEmployeeForm](#getemployeeform) - Get employee form
* [createEmployeeWithForm](#createemployeewithform) - Create employee with form
* [addEmployeeDocument](#addemployeedocument) - Add document to employee
* [getEmployeeDocumentCategories](#getemployeedocumentcategories) - Get employee document categories
* [getGroups](#getgroups) - Get groups
* [getEmployments](#getemployments) - Get employments
* [getLocations](#getlocations) - Get work locations
* [getAbsenceTypes](#getabsencetypes) - Get absence types
* [getTimeOffBalances](#gettimeoffbalances) - Get time off balances
* [getAbsences](#getabsences) - Get absences
* [createAbsence](#createabsence) - Create absence
* [deleteAbsence](#deleteabsence) - Delete absence
* [getLegalEntities](#getlegalentities) - Get legal entities
* [getTimesheets](#gettimesheets) - Get timesheets
* [getPerformanceReviewCycles](#getperformancereviewcycles) - Get performance review cycles
* [getPerformanceReviews](#getperformancereviews) - Get performance reviews

## getEmployees

Retrieve all employees.

<Note>Not interested in most fields? You can use our [our Scopes feature](/scopes) to customize what data points are synced.</Note>

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetHrisEmployees" method="get" path="/hris/employees" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.getEmployees({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisGetEmployees } from "@kombo-api/sdk/funcs/hrisGetEmployees.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisGetEmployees(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisGetEmployees failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisEmployeesRequest](../../models/operations/gethrisemployeesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHrisEmployeesResponse](../../models/operations/gethrisemployeesresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getEmployeeForm

Get the form for creating an employee. This form can be rendered dynamically on your frontend to allow your customers to create employees in their HRIS.

Follow our [create employee guide here](/hris/features/create-employee) to learn how this form is generated and how you can use it.

### Example Form
```json
{
  "properties": {
    "firstName": {
      "type": "text",
      "label": "First Name",
      "required": true,
      "description": "Employee's first name",
      "unified_key": "first_name",
      "min_length": 1,
      "max_length": 100
    },
    "startDate": {
      "type": "date",
      "label": "Start Date",
      "required": true,
      "description": "Employee's start date",
      "unified_key": "start_date"
    },
    "workLocation": {
      "type": "object",
      "label": "Work Location",
      "required": false,
      "description": "Employee's work location",
      "unified_key": null,
      "properties": {
        "site": {
          "type": "single_select",
          "label": "Site",
          "required": true,
          "description": "Employee's site",
          "unified_key": null,
          "options": {
            "type": "inline",
            "entries": [
              {
                "label": "Site 1",
                "id": "FXrER44xubBqA9DLgZ3PFNNx",
                "unified_value": "1",
                "remote_id": "site_1"
              },
              {
                "label": "Site 2",
                "id": "2rv75UKT2XBoQXsUb9agiTUm",
                "unified_value": "2",
                "remote_id": "site_2"
              }
            ]
          }
        },
        "keyNumbers": {
          "type": "array",
          "label": "Key Numbers",
          "required": false,
          "description": "Employee's key numbers",
          "unified_key": null,
          "min_items": 2,
          "max_items": 5,
          "item_type": {
            "type": "number",
            "label": "Key Number",
            "required": false,
            "description": "The number of the keys which belong to the employee",
            "unified_key": null,
            "min": 0,
            "max": 99
          }
        }
      }
    }
  }
}
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetHrisEmployeesForm" method="get" path="/hris/employees/form" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.getEmployeeForm();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisGetEmployeeForm } from "@kombo-api/sdk/funcs/hrisGetEmployeeForm.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisGetEmployeeForm(kombo);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetEmployeeForm failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisEmployeesFormRequest](../../models/operations/gethrisemployeesformrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetHrisEmployeesFormPositiveResponse](../../models/gethrisemployeesformpositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## createEmployeeWithForm

Create an employee, based on the form schema.

<Note>
  This endpoint requires the permission **Create and manage employees** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "properties": {
    "firstName": "John",
    "startDate": "2025-01-01",
    "workLocation": {
      "site": "8e422bf8cav",
      "keyNumbers": [
        142,
        525,
        63
      ]
    }
  }
}
```

### Example Usage: Error Response

<!-- UsageSnippet language="typescript" operationID="PostHrisEmployeesForm" method="post" path="/hris/employees/form" example="Error Response" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.createEmployeeWithForm({
    properties: {
      "key": 3571.27,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisCreateEmployeeWithForm } from "@kombo-api/sdk/funcs/hrisCreateEmployeeWithForm.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisCreateEmployeeWithForm(kombo, {
    properties: {
      "key": 3571.27,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateEmployeeWithForm failed:", res.error);
  }
}

run();
```
### Example Usage: Minimal Error Response

<!-- UsageSnippet language="typescript" operationID="PostHrisEmployeesForm" method="post" path="/hris/employees/form" example="Minimal Error Response" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.createEmployeeWithForm({
    properties: {
      "key": 3571.27,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisCreateEmployeeWithForm } from "@kombo-api/sdk/funcs/hrisCreateEmployeeWithForm.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisCreateEmployeeWithForm(kombo, {
    properties: {
      "key": 3571.27,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateEmployeeWithForm failed:", res.error);
  }
}

run();
```
### Example Usage: example1

<!-- UsageSnippet language="typescript" operationID="PostHrisEmployeesForm" method="post" path="/hris/employees/form" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.createEmployeeWithForm({
    properties: {
      "firstName": "John",
      "startDate": "2025-01-01T00:00:00Z",
      "workLocation": {
        "site": "8e422bf8cav",
        "keyNumbers": {
          "0": 142,
          "1": 525,
          "2": 63,
        },
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisCreateEmployeeWithForm } from "@kombo-api/sdk/funcs/hrisCreateEmployeeWithForm.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisCreateEmployeeWithForm(kombo, {
    properties: {
      "firstName": "John",
      "startDate": "2025-01-01T00:00:00Z",
      "workLocation": {
        "site": "8e422bf8cav",
        "keyNumbers": {
          "0": 142,
          "1": 525,
          "2": 63,
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateEmployeeWithForm failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PostHrisEmployeesFormRequestBody](../../models/posthrisemployeesformrequestbody.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostHrisEmployeesFormPositiveResponse](../../models/posthrisemployeesformpositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## addEmployeeDocument

Uploads an document file for the specified employee.

<Note>
  This endpoint requires the permission **Manage documents** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "category_id": "3Cjwu7nA7pH5cX5X1NAPmb7M",
  "document": {
    "name": "Frank Doe Employment Contract.txt",
    "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
    "content_type": "text/plain"
  }
}
```

### Example Usage: Error Response

<!-- UsageSnippet language="typescript" operationID="PostHrisEmployeesEmployeeIdDocuments" method="post" path="/hris/employees/{employee_id}/documents" example="Error Response" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.addEmployeeDocument({
    employee_id: "<id>",
    body: {
      category_id: "<id>",
      document: {
        name: "<value>",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisAddEmployeeDocument } from "@kombo-api/sdk/funcs/hrisAddEmployeeDocument.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisAddEmployeeDocument(kombo, {
    employee_id: "<id>",
    body: {
      category_id: "<id>",
      document: {
        name: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisAddEmployeeDocument failed:", res.error);
  }
}

run();
```
### Example Usage: Minimal Error Response

<!-- UsageSnippet language="typescript" operationID="PostHrisEmployeesEmployeeIdDocuments" method="post" path="/hris/employees/{employee_id}/documents" example="Minimal Error Response" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.addEmployeeDocument({
    employee_id: "<id>",
    body: {
      category_id: "<id>",
      document: {
        name: "<value>",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisAddEmployeeDocument } from "@kombo-api/sdk/funcs/hrisAddEmployeeDocument.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisAddEmployeeDocument(kombo, {
    employee_id: "<id>",
    body: {
      category_id: "<id>",
      document: {
        name: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisAddEmployeeDocument failed:", res.error);
  }
}

run();
```
### Example Usage: example1

<!-- UsageSnippet language="typescript" operationID="PostHrisEmployeesEmployeeIdDocuments" method="post" path="/hris/employees/{employee_id}/documents" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.addEmployeeDocument({
    employee_id: "GRKdd9dibYKKCrmGRSMJf3wu",
    body: {
      category_id: "3Cjwu7nA7pH5cX5X1NAPmb7M",
      document: {
        name: "Frank Doe Employment Contract.txt",
        content_type: "text/plain",
        data: "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisAddEmployeeDocument } from "@kombo-api/sdk/funcs/hrisAddEmployeeDocument.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisAddEmployeeDocument(kombo, {
    employee_id: "GRKdd9dibYKKCrmGRSMJf3wu",
    body: {
      category_id: "3Cjwu7nA7pH5cX5X1NAPmb7M",
      document: {
        name: "Frank Doe Employment Contract.txt",
        content_type: "text/plain",
        data: "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisAddEmployeeDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostHrisEmployeesEmployeeIdDocumentsRequest](../../models/operations/posthrisemployeesemployeeiddocumentsrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostHrisEmployeesEmployeeIdDocumentsPositiveResponse](../../models/posthrisemployeesemployeeiddocumentspositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getEmployeeDocumentCategories

Get employee document categories.

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetHrisEmployeeDocumentCategories" method="get" path="/hris/employee-document-categories" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.getEmployeeDocumentCategories({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisGetEmployeeDocumentCategories } from "@kombo-api/sdk/funcs/hrisGetEmployeeDocumentCategories.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisGetEmployeeDocumentCategories(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisGetEmployeeDocumentCategories failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisEmployeeDocumentCategoriesRequest](../../models/operations/gethrisemployeedocumentcategoriesrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHrisEmployeeDocumentCategoriesResponse](../../models/operations/gethrisemployeedocumentcategoriesresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getGroups

Retrieve all "groups" (teams, departments, and cost centers).

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetHrisGroups" method="get" path="/hris/groups" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.getGroups({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisGetGroups } from "@kombo-api/sdk/funcs/hrisGetGroups.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisGetGroups(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisGetGroups failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisGroupsRequest](../../models/operations/gethrisgroupsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHrisGroupsResponse](../../models/operations/gethrisgroupsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getEmployments

Retrieve all employments.

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetHrisEmployments" method="get" path="/hris/employments" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.getEmployments({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisGetEmployments } from "@kombo-api/sdk/funcs/hrisGetEmployments.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisGetEmployments(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisGetEmployments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisEmploymentsRequest](../../models/operations/gethrisemploymentsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHrisEmploymentsResponse](../../models/operations/gethrisemploymentsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getLocations

Retrieve all work locations.

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetHrisLocations" method="get" path="/hris/locations" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.getLocations({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisGetLocations } from "@kombo-api/sdk/funcs/hrisGetLocations.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisGetLocations(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisGetLocations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisLocationsRequest](../../models/operations/gethrislocationsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHrisLocationsResponse](../../models/operations/gethrislocationsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getAbsenceTypes

Retrieve all absence types.

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetHrisAbsenceTypes" method="get" path="/hris/absence-types" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.getAbsenceTypes({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisGetAbsenceTypes } from "@kombo-api/sdk/funcs/hrisGetAbsenceTypes.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisGetAbsenceTypes(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisGetAbsenceTypes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisAbsenceTypesRequest](../../models/operations/gethrisabsencetypesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHrisAbsenceTypesResponse](../../models/operations/gethrisabsencetypesresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getTimeOffBalances

Retrieve all time off balances.

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetHrisTimeOffBalances" method="get" path="/hris/time-off-balances" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.getTimeOffBalances({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisGetTimeOffBalances } from "@kombo-api/sdk/funcs/hrisGetTimeOffBalances.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisGetTimeOffBalances(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisGetTimeOffBalances failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisTimeOffBalancesRequest](../../models/operations/gethristimeoffbalancesrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHrisTimeOffBalancesResponse](../../models/operations/gethristimeoffbalancesresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getAbsences

Retrieve all absences.

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetHrisAbsences" method="get" path="/hris/absences" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.getAbsences({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisGetAbsences } from "@kombo-api/sdk/funcs/hrisGetAbsences.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisGetAbsences(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisGetAbsences failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisAbsencesRequest](../../models/operations/gethrisabsencesrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHrisAbsencesResponse](../../models/operations/gethrisabsencesresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## createAbsence

Create a new absence.

Check [this page](/hris/features/creating-absences) for a detailed guide.

<Note>
  This endpoint requires the permission **Manage absences** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "employee_id": "wXJMxwDvPAjrJ4CyqdV9",
  "absence_type_id": "3YKtQ7qedsrcCady1jSyAkY1",
  "start_date": "2019-09-17",
  "end_date": "2019-09-21",
  "start_time": "08:30:00",
  "end_time": "16:00:00",
  "start_half_day": false,
  "end_half_day": false,
  "employee_note": "Visiting the aliens"
}
```

### Example Usage: Error Response

<!-- UsageSnippet language="typescript" operationID="PostHrisAbsences" method="post" path="/hris/absences" example="Error Response" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.createAbsence({
    employee_id: "<id>",
    absence_type_id: "<id>",
    start_date: new Date("2023-09-09T17:57:22.170Z"),
    end_date: new Date("2024-03-21T09:03:29.368Z"),
    employee_note: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisCreateAbsence } from "@kombo-api/sdk/funcs/hrisCreateAbsence.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisCreateAbsence(kombo, {
    employee_id: "<id>",
    absence_type_id: "<id>",
    start_date: new Date("2023-09-09T17:57:22.170Z"),
    end_date: new Date("2024-03-21T09:03:29.368Z"),
    employee_note: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateAbsence failed:", res.error);
  }
}

run();
```
### Example Usage: Minimal Error Response

<!-- UsageSnippet language="typescript" operationID="PostHrisAbsences" method="post" path="/hris/absences" example="Minimal Error Response" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.createAbsence({
    employee_id: "<id>",
    absence_type_id: "<id>",
    start_date: new Date("2023-09-09T17:57:22.170Z"),
    end_date: new Date("2024-03-21T09:03:29.368Z"),
    employee_note: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisCreateAbsence } from "@kombo-api/sdk/funcs/hrisCreateAbsence.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisCreateAbsence(kombo, {
    employee_id: "<id>",
    absence_type_id: "<id>",
    start_date: new Date("2023-09-09T17:57:22.170Z"),
    end_date: new Date("2024-03-21T09:03:29.368Z"),
    employee_note: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateAbsence failed:", res.error);
  }
}

run();
```
### Example Usage: example1

<!-- UsageSnippet language="typescript" operationID="PostHrisAbsences" method="post" path="/hris/absences" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.createAbsence({
    employee_id: "wXJMxwDvPAjrJ4CyqdV9",
    absence_type_id: "3YKtQ7qedsrcCady1jSyAkY1",
    start_date: new Date("2019-09-17T00:00:00Z"),
    end_date: new Date("2019-09-21T00:00:00Z"),
    employee_note: "Visiting the aliens",
    start_time: "08:30:00",
    end_time: "16:00:00",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisCreateAbsence } from "@kombo-api/sdk/funcs/hrisCreateAbsence.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisCreateAbsence(kombo, {
    employee_id: "wXJMxwDvPAjrJ4CyqdV9",
    absence_type_id: "3YKtQ7qedsrcCady1jSyAkY1",
    start_date: new Date("2019-09-17T00:00:00Z"),
    end_date: new Date("2019-09-21T00:00:00Z"),
    employee_note: "Visiting the aliens",
    start_time: "08:30:00",
    end_time: "16:00:00",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateAbsence failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PostHrisAbsencesRequestBody](../../models/posthrisabsencesrequestbody.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostHrisAbsencesPositiveResponse](../../models/posthrisabsencespositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## deleteAbsence

Delete this absence.

<Note>
  This endpoint requires the permission **Manage absences** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "absence_id": "wXJMxwDvPAjrJ4CyqdV9"
}
```

### Example Usage: Error Response

<!-- UsageSnippet language="typescript" operationID="DeleteHrisAbsencesAbsenceId" method="delete" path="/hris/absences/{absence_id}" example="Error Response" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.deleteAbsence({
    absence_id: "<id>",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisDeleteAbsence } from "@kombo-api/sdk/funcs/hrisDeleteAbsence.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisDeleteAbsence(kombo, {
    absence_id: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisDeleteAbsence failed:", res.error);
  }
}

run();
```
### Example Usage: Minimal Error Response

<!-- UsageSnippet language="typescript" operationID="DeleteHrisAbsencesAbsenceId" method="delete" path="/hris/absences/{absence_id}" example="Minimal Error Response" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.deleteAbsence({
    absence_id: "<id>",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisDeleteAbsence } from "@kombo-api/sdk/funcs/hrisDeleteAbsence.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisDeleteAbsence(kombo, {
    absence_id: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisDeleteAbsence failed:", res.error);
  }
}

run();
```
### Example Usage: example1

<!-- UsageSnippet language="typescript" operationID="DeleteHrisAbsencesAbsenceId" method="delete" path="/hris/absences/{absence_id}" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.deleteAbsence({
    absence_id: "wXJMxwDvPAjrJ4CyqdV9",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisDeleteAbsence } from "@kombo-api/sdk/funcs/hrisDeleteAbsence.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisDeleteAbsence(kombo, {
    absence_id: "wXJMxwDvPAjrJ4CyqdV9",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisDeleteAbsence failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteHrisAbsencesAbsenceIdRequest](../../models/operations/deletehrisabsencesabsenceidrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DeleteHrisAbsencesAbsenceIdPositiveResponse](../../models/deletehrisabsencesabsenceidpositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getLegalEntities

Retrieve all legal entites.

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetHrisLegalEntities" method="get" path="/hris/legal-entities" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.getLegalEntities({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisGetLegalEntities } from "@kombo-api/sdk/funcs/hrisGetLegalEntities.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisGetLegalEntities(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisGetLegalEntities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisLegalEntitiesRequest](../../models/operations/gethrislegalentitiesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHrisLegalEntitiesResponse](../../models/operations/gethrislegalentitiesresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getTimesheets

Get timesheets

Retrieve attendance data and timesheets from HRIS tools.

<Warning>**Open Beta Feature:** This endpoint is currently in beta. Please reach out to our support team if you need assistance with implementation.</Warning>

For a detailed explanation of the data model, validation rules, time zones, payable hours, approvals, and break patterns, see the [Time & Attendance guide](/hris/features/time-and-attendance).

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetHrisTimesheets" method="get" path="/hris/timesheets" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.getTimesheets({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisGetTimesheets } from "@kombo-api/sdk/funcs/hrisGetTimesheets.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisGetTimesheets(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisGetTimesheets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisTimesheetsRequest](../../models/operations/gethristimesheetsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHrisTimesheetsResponse](../../models/operations/gethristimesheetsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getPerformanceReviewCycles

Get performance review cycles

Retrieve performance review cycles data from HRIS tools.

<Warning>**Open Beta Feature:** This endpoint is currently in beta. Please reach out to our support team if you need assistance with implementation.</Warning>



Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetHrisPerformanceReviewCycles" method="get" path="/hris/performance-review-cycles" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.getPerformanceReviewCycles({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisGetPerformanceReviewCycles } from "@kombo-api/sdk/funcs/hrisGetPerformanceReviewCycles.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisGetPerformanceReviewCycles(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisGetPerformanceReviewCycles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisPerformanceReviewCyclesRequest](../../models/operations/gethrisperformancereviewcyclesrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHrisPerformanceReviewCyclesResponse](../../models/operations/gethrisperformancereviewcyclesresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getPerformanceReviews

Get performance reviews

Retrieve performance review data from HRIS tools.

<Warning>**Open Beta Feature:** This endpoint is currently in beta. Please reach out to our support team if you need assistance with implementation.</Warning>



Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetHrisPerformanceReviews" method="get" path="/hris/performance-reviews" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.hris.getPerformanceReviews({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { hrisGetPerformanceReviews } from "@kombo-api/sdk/funcs/hrisGetPerformanceReviews.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await hrisGetPerformanceReviews(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisGetPerformanceReviews failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisPerformanceReviewsRequest](../../models/operations/gethrisperformancereviewsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHrisPerformanceReviewsResponse](../../models/operations/gethrisperformancereviewsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboHrisError    | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |