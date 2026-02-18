# Assessment

## Overview

### Available Operations

* [getPackages](#getpackages) - Get packages
* [setPackages](#setpackages) - Set packages
* [getOpenOrders](#getopenorders) - Get open orders
* [updateOrderResult](#updateorderresult) - Update order result

## getPackages

Get all available assessment and background check packages for an integration.

This is mainly intended for debugging. As you always need to submit the full list of available packages when using ["set packages"](/assessment/v1/put-packages), there shouldn't ever be a need to call this endpoint in production.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAssessmentPackages" method="get" path="/assessment/packages" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.assessment.getPackages();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { assessmentGetPackages } from "@kombo-api/sdk/funcs/assessmentGetPackages.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await assessmentGetPackages(kombo);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentGetPackages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAssessmentPackagesRequest](../../models/operations/getassessmentpackagesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetAssessmentPackagesPositiveResponse](../../models/getassessmentpackagespositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## setPackages

Set packages

Replaces the list of available assessment and or background check packages.

Packages that have been previously submitted through this endpoint but aren't included again will be marked as deleted.

### Example Request Body

```json
{
  "packages": [
    {
      "id": "1001",
      "type": "SKILLS_TEST",
      "name": "TypeScript",
      "description": "TypeScript coding skills assessments"
    },
    {
      "id": "1002",
      "type": "VIDEO_INTERVIEW",
      "name": "Video Interview",
      "description": "Video interview to assess communication skills"
    }
  ]
}
```

### Example Usage: Error Response

<!-- UsageSnippet language="typescript" operationID="PutAssessmentPackages" method="put" path="/assessment/packages" example="Error Response" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.assessment.setPackages({
    packages: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { assessmentSetPackages } from "@kombo-api/sdk/funcs/assessmentSetPackages.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await assessmentSetPackages(kombo, {
    packages: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentSetPackages failed:", res.error);
  }
}

run();
```
### Example Usage: Minimal Error Response

<!-- UsageSnippet language="typescript" operationID="PutAssessmentPackages" method="put" path="/assessment/packages" example="Minimal Error Response" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.assessment.setPackages({
    packages: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { assessmentSetPackages } from "@kombo-api/sdk/funcs/assessmentSetPackages.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await assessmentSetPackages(kombo, {
    packages: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentSetPackages failed:", res.error);
  }
}

run();
```
### Example Usage: example1

<!-- UsageSnippet language="typescript" operationID="PutAssessmentPackages" method="put" path="/assessment/packages" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.assessment.setPackages({
    packages: [
      {
        id: "1001",
        type: "SKILLS_TEST",
        name: "TypeScript",
        description: "TypeScript coding skills assessments",
      },
      {
        id: "1002",
        type: "VIDEO_INTERVIEW",
        name: "Video Interview",
        description: "Video interview to assess communication skills",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { assessmentSetPackages } from "@kombo-api/sdk/funcs/assessmentSetPackages.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await assessmentSetPackages(kombo, {
    packages: [
      {
        id: "1001",
        type: "SKILLS_TEST",
        name: "TypeScript",
        description: "TypeScript coding skills assessments",
      },
      {
        id: "1002",
        type: "VIDEO_INTERVIEW",
        name: "Video Interview",
        description: "Video interview to assess communication skills",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentSetPackages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PutAssessmentPackagesRequestBody](../../models/putassessmentpackagesrequestbody.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PutAssessmentPackagesPositiveResponse](../../models/putassessmentpackagespositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getOpenOrders

Get all open assessment and background check orders of an integration.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAssessmentOrdersOpen" method="get" path="/assessment/orders/open" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.assessment.getOpenOrders({});

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
import { assessmentGetOpenOrders } from "@kombo-api/sdk/funcs/assessmentGetOpenOrders.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await assessmentGetOpenOrders(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("assessmentGetOpenOrders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAssessmentOrdersOpenRequest](../../models/operations/getassessmentordersopenrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAssessmentOrdersOpenResponse](../../models/operations/getassessmentordersopenresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## updateOrderResult

Updates an assessment or a background check order result.

### Example Request Body

```json
{
  "status": "COMPLETED",
  "score": 90,
  "max_score": 100,
  "result_url": "https://example.com",
  "completed_at": "2023-04-04T00:00:00.000Z",
  "attributes": [
    {
      "type": "TEXT",
      "label": "Role fit",
      "value": "Excellent"
    },
    {
      "type": "SUB_RESULT",
      "id": "<YOUR_INTERNAL_ID_OF_THE_TEST>",
      "label": "Personality test",
      "score": {
        "value": 97,
        "max": 100
      },
      "status": "COMPLETED"
    }
  ],
  "attachments": [
    {
      "name": "Assessment Report.pdf",
      "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
      "content_type": "application/pdf"
    }
  ]
}
```

### Example Usage: Error Response

<!-- UsageSnippet language="typescript" operationID="PutAssessmentOrdersAssessmentOrderIdResult" method="put" path="/assessment/orders/{assessment_order_id}/result" example="Error Response" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.assessment.updateOrderResult({
    assessment_order_id: "<id>",
    body: {
      status: "CANCELLED",
      result_url: "https://sour-best-seller.net",
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
import { assessmentUpdateOrderResult } from "@kombo-api/sdk/funcs/assessmentUpdateOrderResult.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await assessmentUpdateOrderResult(kombo, {
    assessment_order_id: "<id>",
    body: {
      status: "CANCELLED",
      result_url: "https://sour-best-seller.net",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentUpdateOrderResult failed:", res.error);
  }
}

run();
```
### Example Usage: Minimal Error Response

<!-- UsageSnippet language="typescript" operationID="PutAssessmentOrdersAssessmentOrderIdResult" method="put" path="/assessment/orders/{assessment_order_id}/result" example="Minimal Error Response" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.assessment.updateOrderResult({
    assessment_order_id: "<id>",
    body: {
      status: "CANCELLED",
      result_url: "https://sour-best-seller.net",
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
import { assessmentUpdateOrderResult } from "@kombo-api/sdk/funcs/assessmentUpdateOrderResult.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await assessmentUpdateOrderResult(kombo, {
    assessment_order_id: "<id>",
    body: {
      status: "CANCELLED",
      result_url: "https://sour-best-seller.net",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentUpdateOrderResult failed:", res.error);
  }
}

run();
```
### Example Usage: example1

<!-- UsageSnippet language="typescript" operationID="PutAssessmentOrdersAssessmentOrderIdResult" method="put" path="/assessment/orders/{assessment_order_id}/result" example="example1" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.assessment.updateOrderResult({
    assessment_order_id: "GRKdd9dibYKKCrmGRSMJf3wu",
    body: {
      status: "COMPLETED",
      result_url: "https://example.com",
      completed_at: new Date("2023-04-04T00:00:00Z"),
      score: 90,
      max_score: 100,
      attributes: [
        {
          type: "TEXT",
          label: "Role fit",
          value: "Excellent",
        },
        {
          type: "SUB_RESULT",
          id: "<YOUR_INTERNAL_ID_OF_THE_TEST>",
          label: "Personality test",
          score: {
            value: 97,
            max: 100,
          },
          status: "COMPLETED",
        },
      ],
      attachments: [
        {
          name: "Assessment Report.pdf",
          content_type: "application/pdf",
          data: "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
        },
      ],
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
import { assessmentUpdateOrderResult } from "@kombo-api/sdk/funcs/assessmentUpdateOrderResult.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await assessmentUpdateOrderResult(kombo, {
    assessment_order_id: "GRKdd9dibYKKCrmGRSMJf3wu",
    body: {
      status: "COMPLETED",
      result_url: "https://example.com",
      completed_at: new Date("2023-04-04T00:00:00Z"),
      score: 90,
      max_score: 100,
      attributes: [
        {
          type: "TEXT",
          label: "Role fit",
          value: "Excellent",
        },
        {
          type: "SUB_RESULT",
          id: "<YOUR_INTERNAL_ID_OF_THE_TEST>",
          label: "Personality test",
          score: {
            value: 97,
            max: 100,
          },
          status: "COMPLETED",
        },
      ],
      attachments: [
        {
          name: "Assessment Report.pdf",
          content_type: "application/pdf",
          data: "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assessmentUpdateOrderResult failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutAssessmentOrdersAssessmentOrderIdResultRequest](../../models/operations/putassessmentordersassessmentorderidresultrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PutAssessmentOrdersAssessmentOrderIdResultPositiveResponse](../../models/putassessmentordersassessmentorderidresultpositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |