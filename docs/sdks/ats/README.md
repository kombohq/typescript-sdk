# Ats

## Overview

### Available Operations

* [getApplications](#getapplications) - Get applications
* [moveApplicationToStage](#moveapplicationtostage) - Move application to stage
* [addApplicationResultLink](#addapplicationresultlink) - Add result link to application
* [addApplicationNote](#addapplicationnote) - Add note to application
* [getApplicationAttachments](#getapplicationattachments) - Get application attachments
* [addApplicationAttachment](#addapplicationattachment) - Add attachment to application
* [rejectApplication](#rejectapplication) - Reject application
* [getCandidates](#getcandidates) - Get candidates
* [createCandidate](#createcandidate) - Create candidate
* [getCandidateAttachments](#getcandidateattachments) - Get candidate attachments
* [addCandidateAttachment](#addcandidateattachment) - Add attachment to candidate
* [addCandidateResultLink](#addcandidateresultlink) - Add result link to candidate
* [addCandidateTag](#addcandidatetag) - Add tag to candidate
* [removeCandidateTag](#removecandidatetag) - Remove tag from candidate
* [getTags](#gettags) - Get tags
* [getApplicationStages](#getapplicationstages) - Get application stages
* [getJobs](#getjobs) - Get jobs
* [createApplication](#createapplication) - Create application
* [getUsers](#getusers) - Get users
* [getOffers](#getoffers) - Get offers
* [getRejectionReasons](#getrejectionreasons) - Get rejection reasons
* [getInterviews](#getinterviews) - Get interviews
* [importTrackedApplication](#importtrackedapplication) - Import tracked application

## getApplications

Retrieve all applications.

Visit our in-depth guides to learn more about:

- 💡 [Being aware of which applications are tracked](/ats/features/implementation-guide/tracking-created-applications#be-aware-of-which-applications-are-tracked)
- 🚦 [Hiring signals](/ats/features/implementation-guide/tracking-created-applications#hiring-signals)
- 📈 [Application stage changes](/ats/features/implementation-guide/tracking-created-applications#application-stage-changes)
- ❓ [ATS-specific limitations](/ats/features/implementation-guide/tracking-created-applications#ats-specific-limitations)

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAtsApplications" method="get" path="/ats/applications" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.getApplications({});

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
import { atsGetApplications } from "@kombo-api/sdk/funcs/atsGetApplications.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsGetApplications(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("atsGetApplications failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsApplicationsRequest](../../models/operations/getatsapplicationsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAtsApplicationsResponse](../../models/operations/getatsapplicationsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## moveApplicationToStage

Moves an application to a specified stage. Use job-specific stages from GET /jobs, not the deprecated /application-stages endpoint.

<Note>
  This endpoint requires the permission **Set application stage** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "stage_id": "3PJ8PZhZZa1eEdd2DtPNtVup"
}
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PutAtsApplicationsApplicationIdStage" method="put" path="/ats/applications/{application_id}/stage" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.moveApplicationToStage({
    application_id: "GRKdd9dibYKKCrmGRSMJf3wu",
    body: {
      stage_id: "3PJ8PZhZZa1eEdd2DtPNtVup",
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
import { atsMoveApplicationToStage } from "@kombo-api/sdk/funcs/atsMoveApplicationToStage.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsMoveApplicationToStage(kombo, {
    application_id: "GRKdd9dibYKKCrmGRSMJf3wu",
    body: {
      stage_id: "3PJ8PZhZZa1eEdd2DtPNtVup",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsMoveApplicationToStage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutAtsApplicationsApplicationIdStageRequest](../../models/operations/putatsapplicationsapplicationidstagerequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PutAtsApplicationsApplicationIdStagePositiveResponse](../../models/putatsapplicationsapplicationidstagepositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## addApplicationResultLink

Add a result link to an application.

This can, for example, be used to link a candidate back to a test result/assessment in your application. As not all ATS tools have a "result link" feature, we sometimes repurpose other fields to expose it.

<Note>
  This endpoint requires the permission **Add result links** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "application_id": "8Xi6iZrwusZqJmDGXs49GBmJ",
  "label": "Assessment Result",
  "url": "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG",
  "details": {
    "custom_field_name_prefix": "Acme:",
    "attributes": [
      {
        "key": "Score",
        "value": "100%"
      },
      {
        "key": "Time",
        "value": "2:30h"
      }
    ]
  },
  "remote_fields": {}
}
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PostAtsApplicationsApplicationIdResultLinks" method="post" path="/ats/applications/{application_id}/result-links" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.addApplicationResultLink({
    application_id: "8Xi6iZrwusZqJmDGXs49GBmJ",
    body: {
      label: "Assessment Result",
      url: "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG",
      details: {
        custom_field_name_prefix: "Acme:",
        attributes: [
          {
            key: "Score",
            value: "100%",
          },
          {
            key: "Time",
            value: "2:30h",
          },
        ],
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
import { atsAddApplicationResultLink } from "@kombo-api/sdk/funcs/atsAddApplicationResultLink.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsAddApplicationResultLink(kombo, {
    application_id: "8Xi6iZrwusZqJmDGXs49GBmJ",
    body: {
      label: "Assessment Result",
      url: "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG",
      details: {
        custom_field_name_prefix: "Acme:",
        attributes: [
          {
            key: "Score",
            value: "100%",
          },
          {
            key: "Time",
            value: "2:30h",
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsAddApplicationResultLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostAtsApplicationsApplicationIdResultLinksRequest](../../models/operations/postatsapplicationsapplicationidresultlinksrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostAtsApplicationsApplicationIdResultLinksPositiveResponse](../../models/postatsapplicationsapplicationidresultlinkspositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## addApplicationNote

Add a note to an application.

Add extra information to an application. This can be any extra text information you want to add to an application.

<Note>
  This endpoint requires the permission **Add notes** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "content": "A new message from the candidate is available in YourChat!",
  "content_type": "PLAIN_TEXT",
  "remote_fields": {}
}
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PostAtsApplicationsApplicationIdNotes" method="post" path="/ats/applications/{application_id}/notes" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.addApplicationNote({
    application_id: "8Xi6iZrwusZqJmDGXs49GBmJ",
    body: {
      content: "A new message from the candidate is available in YourChat!",
      content_type: "PLAIN_TEXT",
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
import { atsAddApplicationNote } from "@kombo-api/sdk/funcs/atsAddApplicationNote.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsAddApplicationNote(kombo, {
    application_id: "8Xi6iZrwusZqJmDGXs49GBmJ",
    body: {
      content: "A new message from the candidate is available in YourChat!",
      content_type: "PLAIN_TEXT",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsAddApplicationNote failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostAtsApplicationsApplicationIdNotesRequest](../../models/operations/postatsapplicationsapplicationidnotesrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostAtsApplicationsApplicationIdNotesPositiveResponse](../../models/postatsapplicationsapplicationidnotespositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getApplicationAttachments

Get attachments from a candidate or application.

Get attachments from an application. If the ATS stores the attachments on the candidate, it will get the attachments from the corresponding candidate instead.

<Note>
  This endpoint requires the permission **Read document attachments** to be enabled in [your scope config](/scopes).
</Note>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAtsApplicationsApplicationIdAttachments" method="get" path="/ats/applications/{application_id}/attachments" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.getApplicationAttachments({
    application_id: "8Xi6iZrwusZqJmDGXs49GBmJ",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { atsGetApplicationAttachments } from "@kombo-api/sdk/funcs/atsGetApplicationAttachments.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsGetApplicationAttachments(kombo, {
    application_id: "8Xi6iZrwusZqJmDGXs49GBmJ",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsGetApplicationAttachments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsApplicationsApplicationIdAttachmentsRequest](../../models/operations/getatsapplicationsapplicationidattachmentsrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetAtsApplicationsApplicationIdAttachmentsPositiveResponse](../../models/getatsapplicationsapplicationidattachmentspositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## addApplicationAttachment

Uploads an attachment file for the specified applicant.

<Warning>
  If adding an attachment to an application is not supported by the integration, the attachment will be [added to the candidate](/ats/v1/post-candidates-candidate-id-attachments) instead. 
</Warning>

<Note>
  This endpoint requires the permission **Add attachments** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "application_id": "GRKdd9dibYKKCrmGRSMJf3wu",
  "attachment": {
    "name": "Frank Doe CV.txt",
    "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
    "type": "CV",
    "content_type": "text/plain"
  },
  "remote_fields": {}
}
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PostAtsApplicationsApplicationIdAttachments" method="post" path="/ats/applications/{application_id}/attachments" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.addApplicationAttachment({
    application_id: "GRKdd9dibYKKCrmGRSMJf3wu",
    body: {
      attachment: {
        name: "Frank Doe CV.txt",
        content_type: "text/plain",
        data: "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
        type: "CV",
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
import { atsAddApplicationAttachment } from "@kombo-api/sdk/funcs/atsAddApplicationAttachment.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsAddApplicationAttachment(kombo, {
    application_id: "GRKdd9dibYKKCrmGRSMJf3wu",
    body: {
      attachment: {
        name: "Frank Doe CV.txt",
        content_type: "text/plain",
        data: "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
        type: "CV",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsAddApplicationAttachment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostAtsApplicationsApplicationIdAttachmentsRequest](../../models/operations/postatsapplicationsapplicationidattachmentsrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostAtsApplicationsApplicationIdAttachmentsPositiveResponse](../../models/postatsapplicationsapplicationidattachmentspositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## rejectApplication

Rejects an application with a provided reason.

Rejects an application with a provided reason. Optionally, you can provide a free text note. You can get the list of rejection reasons with our [Get rejection reasons endpoint](/ats/v1/get-rejection-reasons).

<Note>
  This endpoint requires the permission **Reject applications** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "rejection_reason_id": "3PJ8PZhZZa1eEdd2DtPNtVup",
  "note": "Candidate was a great culture fit but didn't bring the hard skills we need.",
  "remote_fields": {}
}
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PostAtsApplicationsApplicationIdReject" method="post" path="/ats/applications/{application_id}/reject" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.rejectApplication({
    application_id: "GRKdd9dibYKKCrmGRSMJf3wu",
    body: {
      rejection_reason_id: "3PJ8PZhZZa1eEdd2DtPNtVup",
      note: "Candidate was a great culture fit but didn't bring the hard skills we need.",
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
import { atsRejectApplication } from "@kombo-api/sdk/funcs/atsRejectApplication.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsRejectApplication(kombo, {
    application_id: "GRKdd9dibYKKCrmGRSMJf3wu",
    body: {
      rejection_reason_id: "3PJ8PZhZZa1eEdd2DtPNtVup",
      note: "Candidate was a great culture fit but didn't bring the hard skills we need.",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsRejectApplication failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostAtsApplicationsApplicationIdRejectRequest](../../models/operations/postatsapplicationsapplicationidrejectrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostAtsApplicationsApplicationIdRejectPositiveResponse](../../models/postatsapplicationsapplicationidrejectpositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getCandidates

Retrieve all candidates.

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAtsCandidates" method="get" path="/ats/candidates" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.getCandidates({});

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
import { atsGetCandidates } from "@kombo-api/sdk/funcs/atsGetCandidates.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsGetCandidates(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("atsGetCandidates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsCandidatesRequest](../../models/operations/getatscandidatesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAtsCandidatesResponse](../../models/operations/getatscandidatesresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## createCandidate

Create a new candidate and application for the specified job.

<Warning>
      **We recommend using the [Create application](/ats/v1/post-jobs-job-id-applications) endpoint instead.**

      We realized that in practice it was always more about creating _applications_ instead of _candidates_, so we created a new, more aptly named one that you should use instead: [Create application](/ats/v1/post-jobs-job-id-applications)

      Using it also has the benefit that we return the newly created applicant at the root level, so you can easily store its ID.
    </Warning>

<Note>
  This endpoint requires the permission **Create applications and candidates** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "candidate": {
    "first_name": "Frank",
    "last_name": "Doe",
    "company": "Acme Inc.",
    "title": "Head of Integrations",
    "email_address": "frank.doe@example.com",
    "phone_number": "+1-541-754-3010",
    "gender": "MALE",
    "salary_expectations": {
      "amount": 100000,
      "period": "YEAR"
    },
    "availability_date": "2021-01-01",
    "location": {
      "city": "New York",
      "country": "US",
      "state": "NY"
    },
    "social_links": [
      {
        "url": "https://www.linkedin.com/in/frank-doe-123456789/"
      },
      {
        "url": "https://twitter.com/frankdoe"
      }
    ]
  },
  "application": {
    "job_id": "BDpgnpZ148nrGh4mYHNxJBgx",
    "stage_id": "8x3YKRDcuRnwShdh96ShBNn1"
  },
  "attachments": [
    {
      "name": "Frank Doe CV.txt",
      "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
      "type": "CV",
      "content_type": "text/plain"
    }
  ],
  "screening_question_answers": [
    {
      "question_id": "3phFBNXRweGnDmsU9o2vdPuQ",
      "answer": "Yes"
    },
    {
      "question_id": "EYJjhMQT3LtVKXnTbnRT8s6U",
      "answer": [
        "GUzE666zfyjeoCJX6A8n7wh6",
        "5WPHzzKAv8cx97KtHRUV96U8",
        "7yZfKGzWigXxxRTygqAfHvyE"
      ]
    }
  ],
  "remote_fields": {}
}
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PostAtsCandidates" method="post" path="/ats/candidates" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.createCandidate({
    candidate: {
      first_name: "Frank",
      last_name: "Doe",
      email_address: "frank.doe@example.com",
      company: "Acme Inc.",
      title: "Head of Integrations",
      phone_number: "+1-541-754-3010",
      location: {
        city: "New York",
        country: "US",
        state: "NY",
      },
      gender: "MALE",
      availability_date: new Date("2021-01-01T00:00:00Z"),
      salary_expectations: {
        period: "YEAR",
        amount: 100000,
      },
      social_links: [
        {
          url: "https://www.linkedin.com/in/frank-doe-123456789/",
        },
        {
          url: "https://twitter.com/frankdoe",
        },
      ],
    },
    application: {
      job_id: "BDpgnpZ148nrGh4mYHNxJBgx",
      stage_id: "8x3YKRDcuRnwShdh96ShBNn1",
    },
    screening_question_answers: [
      {
        question_id: "3phFBNXRweGnDmsU9o2vdPuQ",
        answer: "Yes",
      },
      {
        question_id: "EYJjhMQT3LtVKXnTbnRT8s6U",
        answer: [
          "GUzE666zfyjeoCJX6A8n7wh6",
          "5WPHzzKAv8cx97KtHRUV96U8",
          "7yZfKGzWigXxxRTygqAfHvyE",
        ],
      },
    ],
    attachments: [
      {
        name: "Frank Doe CV.txt",
        content_type: "text/plain",
        data: "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
        type: "CV",
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
import { atsCreateCandidate } from "@kombo-api/sdk/funcs/atsCreateCandidate.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsCreateCandidate(kombo, {
    candidate: {
      first_name: "Frank",
      last_name: "Doe",
      email_address: "frank.doe@example.com",
      company: "Acme Inc.",
      title: "Head of Integrations",
      phone_number: "+1-541-754-3010",
      location: {
        city: "New York",
        country: "US",
        state: "NY",
      },
      gender: "MALE",
      availability_date: new Date("2021-01-01T00:00:00Z"),
      salary_expectations: {
        period: "YEAR",
        amount: 100000,
      },
      social_links: [
        {
          url: "https://www.linkedin.com/in/frank-doe-123456789/",
        },
        {
          url: "https://twitter.com/frankdoe",
        },
      ],
    },
    application: {
      job_id: "BDpgnpZ148nrGh4mYHNxJBgx",
      stage_id: "8x3YKRDcuRnwShdh96ShBNn1",
    },
    screening_question_answers: [
      {
        question_id: "3phFBNXRweGnDmsU9o2vdPuQ",
        answer: "Yes",
      },
      {
        question_id: "EYJjhMQT3LtVKXnTbnRT8s6U",
        answer: [
          "GUzE666zfyjeoCJX6A8n7wh6",
          "5WPHzzKAv8cx97KtHRUV96U8",
          "7yZfKGzWigXxxRTygqAfHvyE",
        ],
      },
    ],
    attachments: [
      {
        name: "Frank Doe CV.txt",
        content_type: "text/plain",
        data: "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
        type: "CV",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsCreateCandidate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PostAtsCandidatesRequestBody](../../models/postatscandidatesrequestbody.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostAtsCandidatesPositiveResponse](../../models/postatscandidatespositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getCandidateAttachments

Get attachments from a candidate, including all attachments of all of their applications.

<Note>
  This endpoint requires the permission **Read document attachments** to be enabled in [your scope config](/scopes).
</Note>

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAtsCandidatesCandidateIdAttachments" method="get" path="/ats/candidates/{candidate_id}/attachments" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.getCandidateAttachments({
    candidate_id: "8Xi6iZrwusZqJmDGXs49GBmJ",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { atsGetCandidateAttachments } from "@kombo-api/sdk/funcs/atsGetCandidateAttachments.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsGetCandidateAttachments(kombo, {
    candidate_id: "8Xi6iZrwusZqJmDGXs49GBmJ",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsGetCandidateAttachments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsCandidatesCandidateIdAttachmentsRequest](../../models/operations/getatscandidatescandidateidattachmentsrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetAtsCandidatesCandidateIdAttachmentsPositiveResponse](../../models/getatscandidatescandidateidattachmentspositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## addCandidateAttachment

Uploads an attachment file for the specified candidate.

<Warning>
  **We recommend using the [add attachment to application](/ats/v1/post-applications-application-id-attachments) endpoint instead.**

  We realized that in practice it was always more about adding attachments to _applications_ instead of _candidates_, so we created a new, more aptly named one that you should use instead: [add attachment to application](/ats/v1/post-applications-application-id-attachments)
  </Warning>

<Note>
  This endpoint requires the permission **Add attachments** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "candidate_id": "GRKdd9dibYKKCrmGRSMJf3wu",
  "attachment": {
    "name": "Frank Doe CV.txt",
    "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
    "type": "CV",
    "content_type": "text/plain"
  }
}
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PostAtsCandidatesCandidateIdAttachments" method="post" path="/ats/candidates/{candidate_id}/attachments" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.addCandidateAttachment({
    candidate_id: "GRKdd9dibYKKCrmGRSMJf3wu",
    body: {
      attachment: {
        name: "Frank Doe CV.txt",
        content_type: "text/plain",
        data: "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
        type: "CV",
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
import { atsAddCandidateAttachment } from "@kombo-api/sdk/funcs/atsAddCandidateAttachment.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsAddCandidateAttachment(kombo, {
    candidate_id: "GRKdd9dibYKKCrmGRSMJf3wu",
    body: {
      attachment: {
        name: "Frank Doe CV.txt",
        content_type: "text/plain",
        data: "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
        type: "CV",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsAddCandidateAttachment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostAtsCandidatesCandidateIdAttachmentsRequest](../../models/operations/postatscandidatescandidateidattachmentsrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostAtsCandidatesCandidateIdAttachmentsPositiveResponse](../../models/postatscandidatescandidateidattachmentspositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## addCandidateResultLink

Add a result link to a candidate.

<Warning>
  **We recommend to use [add result link to application](/ats/v1/post-applications-application-id-result-links) instead.**

  This can, for example, be used to link a candidate back to a test result/assessment in your application. As not all ATS tools have a "result link" feature, we sometimes repurpose other fields to expose it.

  </Warning>
  

<Note>
  This endpoint requires the permission **Add result links** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "label": "Assessment Result",
  "url": "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG",
  "details": {
    "custom_field_name_prefix": "Acme:",
    "attributes": [
      {
        "key": "Score",
        "value": "100%"
      },
      {
        "key": "Time",
        "value": "2:30h"
      }
    ]
  },
  "remote_fields": {}
}
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PostAtsCandidatesCandidateIdResultLinks" method="post" path="/ats/candidates/{candidate_id}/result-links" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.addCandidateResultLink({
    candidate_id: "8Xi6iZrwusZqJmDGXs49GBmJ",
    body: {
      label: "Assessment Result",
      url: "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG",
      details: {
        custom_field_name_prefix: "Acme:",
        attributes: [
          {
            key: "Score",
            value: "100%",
          },
          {
            key: "Time",
            value: "2:30h",
          },
        ],
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
import { atsAddCandidateResultLink } from "@kombo-api/sdk/funcs/atsAddCandidateResultLink.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsAddCandidateResultLink(kombo, {
    candidate_id: "8Xi6iZrwusZqJmDGXs49GBmJ",
    body: {
      label: "Assessment Result",
      url: "https://example.com/test-results/5BtP1WC1UboS7CF3yxjKcvjG",
      details: {
        custom_field_name_prefix: "Acme:",
        attributes: [
          {
            key: "Score",
            value: "100%",
          },
          {
            key: "Time",
            value: "2:30h",
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsAddCandidateResultLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostAtsCandidatesCandidateIdResultLinksRequest](../../models/operations/postatscandidatescandidateidresultlinksrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostAtsCandidatesCandidateIdResultLinksPositiveResponse](../../models/postatscandidatescandidateidresultlinkspositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## addCandidateTag

Add a tag to a candidate.

Kombo takes care of creating the tag if required, finding out the right ID, and appending it to the list of tags.

<Note>
  This endpoint requires the permission **Manage tags** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "tag": {
    "name": "Excellent Fit"
  }
}
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PostAtsCandidatesCandidateIdTags" method="post" path="/ats/candidates/{candidate_id}/tags" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.addCandidateTag({
    candidate_id: "8Xi6iZrwusZqJmDGXs49GBmJ",
    body: {
      tag: {
        name: "Excellent Fit",
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
import { atsAddCandidateTag } from "@kombo-api/sdk/funcs/atsAddCandidateTag.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsAddCandidateTag(kombo, {
    candidate_id: "8Xi6iZrwusZqJmDGXs49GBmJ",
    body: {
      tag: {
        name: "Excellent Fit",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsAddCandidateTag failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostAtsCandidatesCandidateIdTagsRequest](../../models/operations/postatscandidatescandidateidtagsrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostAtsCandidatesCandidateIdTagsPositiveResponse](../../models/postatscandidatescandidateidtagspositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## removeCandidateTag

Remove a tag from a candidate based on its name.

This will also succeed if the tag does not exist on the candidate.

<Note>
  This endpoint requires the permission **Manage tags** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "tag": {
    "name": "Excellent Fit"
  }
}
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="DeleteAtsCandidatesCandidateIdTags" method="delete" path="/ats/candidates/{candidate_id}/tags" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.removeCandidateTag({
    candidate_id: "8Xi6iZrwusZqJmDGXs49GBmJ",
    body: {
      tag: {
        name: "Excellent Fit",
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
import { atsRemoveCandidateTag } from "@kombo-api/sdk/funcs/atsRemoveCandidateTag.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsRemoveCandidateTag(kombo, {
    candidate_id: "8Xi6iZrwusZqJmDGXs49GBmJ",
    body: {
      tag: {
        name: "Excellent Fit",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsRemoveCandidateTag failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAtsCandidatesCandidateIdTagsRequest](../../models/operations/deleteatscandidatescandidateidtagsrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DeleteAtsCandidatesCandidateIdTagsPositiveResponse](../../models/deleteatscandidatescandidateidtagspositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getTags

Retrieve all tags.

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAtsTags" method="get" path="/ats/tags" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.getTags({});

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
import { atsGetTags } from "@kombo-api/sdk/funcs/atsGetTags.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsGetTags(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("atsGetTags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsTagsRequest](../../models/operations/getatstagsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAtsTagsResponse](../../models/operations/getatstagsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getApplicationStages

Get all application stages available in the ATS.

<Warning>
  **This endpoint is deprecated!**

  Get all application stages available in the ATS. This is deprecated because most ATS systems have separate sets of stages for each job. We'd recommend using the `stages` property from the [GET Jobs endpoint](/ats/v1/get-jobs) instead.

**Important**: Using global stages can cause "Stage not found" errors when moving applications, especially with systems like Workable that have job-specific stages.

[Moving Applications Guide](/ats/implementation-guide/moving-and-rejecting-candidates).
</Warning>

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAtsApplicationStages" method="get" path="/ats/application-stages" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.getApplicationStages({});

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
import { atsGetApplicationStages } from "@kombo-api/sdk/funcs/atsGetApplicationStages.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsGetApplicationStages(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("atsGetApplicationStages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsApplicationStagesRequest](../../models/operations/getatsapplicationstagesrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAtsApplicationStagesResponse](../../models/operations/getatsapplicationstagesresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getJobs

Retrieve all jobs.

Visit our in-depth guides to learn more about:

- 🔄 [Getting updates of the data](/ats/features/implementation-guide/reading-jobs#getting-updates-of-the-data)
- ❗ [Handling failing syncs](/ats/features/implementation-guide/reading-jobs#handling-failing-syncs)
- 🔍 [Letting your customer choose which jobs to expose](/ats/features/implementation-guide/reading-jobs#let-your-customer-choose-which-jobs-to-expose-to-you)
- 🔗 [Matching jobs in your database to ATS jobs](/ats/features/implementation-guide/reading-jobs#match-jobs-in-your-database-to-ats-jobs)
- 🗑️ [Reacting to deleted/closed jobs](/ats/features/implementation-guide/reading-jobs#reacting-to-deleted-closed-jobs)

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAtsJobs" method="get" path="/ats/jobs" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.getJobs({});

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
import { atsGetJobs } from "@kombo-api/sdk/funcs/atsGetJobs.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsGetJobs(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("atsGetJobs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsJobsRequest](../../models/operations/getatsjobsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAtsJobsResponse](../../models/operations/getatsjobsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## createApplication

Create a new application and candidate for the specified job.

Visit our in-depth guides to learn more about:

- 🌐 [Setting the source of the application](/ats/features/implementation-guide/creating-applications#set-the-source-of-the-application) 
- 📎 [Uploading attachments with the application](/ats/features/implementation-guide/creating-applications#upload-attachments-with-the-application) 
- ♻️ [Retry behaviour](/ats/features/implementation-guide/creating-applications#retry-behaviour) 
- ✏️ [Writing answers to screening questions](/ats/features/implementation-guide/creating-applications#write-answers-to-screening-questions) 
- ⚠️ [Handling ATS-specific limitations](/ats/features/implementation-guide/creating-applications#handle-ats-specific-limitations)

<Note>
  This endpoint requires the permission **Create applications and candidates** to be enabled in [your scope config](/scopes).
</Note>

### Example Request Body

```json
{
  "candidate": {
    "first_name": "Frank",
    "last_name": "Doe",
    "company": "Acme Inc.",
    "title": "Head of Integrations",
    "email_address": "frank.doe@example.com",
    "phone_number": "+1-541-754-3010",
    "gender": "MALE",
    "salary_expectations": {
      "amount": 100000,
      "period": "YEAR"
    },
    "availability_date": "2021-01-01",
    "location": {
      "city": "New York",
      "zip_code": "10016",
      "state": "NY",
      "country": "US"
    }
  },
  "stage_id": "8x3YKRDcuRnwShdh96ShBNn1",
  "attachments": [
    {
      "name": "Frank Doe CV.txt",
      "data": "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
      "type": "CV",
      "content_type": "text/plain"
    }
  ],
  "screening_question_answers": [
    {
      "question_id": "3phFBNXRweGnDmsU9o2vdPuQ",
      "answer": "Yes"
    },
    {
      "question_id": "EYJjhMQT3LtVKXnTbnRT8s6U",
      "answer": [
        "GUzE666zfyjeoCJX6A8n7wh6",
        "5WPHzzKAv8cx97KtHRUV96U8",
        "7yZfKGzWigXxxRTygqAfHvyE"
      ]
    }
  ],
  "remote_fields": {}
}
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PostAtsJobsJobIdApplications" method="post" path="/ats/jobs/{job_id}/applications" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.createApplication({
    job_id: "BDpgnpZ148nrGh4mYHNxJBgx",
    body: {
      stage_id: "8x3YKRDcuRnwShdh96ShBNn1",
      candidate: {
        first_name: "Frank",
        last_name: "Doe",
        email_address: "frank.doe@example.com",
        company: "Acme Inc.",
        title: "Head of Integrations",
        phone_number: "+1-541-754-3010",
        location: {
          city: "New York",
          country: "US",
          state: "NY",
          zip_code: "10016",
        },
        gender: "MALE",
        availability_date: new Date("2021-01-01T00:00:00Z"),
        salary_expectations: {
          period: "YEAR",
          amount: 100000,
        },
      },
      attachments: [
        {
          name: "Frank Doe CV.txt",
          content_type: "text/plain",
          data: "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
          type: "CV",
        },
      ],
      screening_question_answers: [
        {
          question_id: "3phFBNXRweGnDmsU9o2vdPuQ",
          answer: "Yes",
        },
        {
          question_id: "EYJjhMQT3LtVKXnTbnRT8s6U",
          answer: [
            "GUzE666zfyjeoCJX6A8n7wh6",
            "5WPHzzKAv8cx97KtHRUV96U8",
            "7yZfKGzWigXxxRTygqAfHvyE",
          ],
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
import { atsCreateApplication } from "@kombo-api/sdk/funcs/atsCreateApplication.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsCreateApplication(kombo, {
    job_id: "BDpgnpZ148nrGh4mYHNxJBgx",
    body: {
      stage_id: "8x3YKRDcuRnwShdh96ShBNn1",
      candidate: {
        first_name: "Frank",
        last_name: "Doe",
        email_address: "frank.doe@example.com",
        company: "Acme Inc.",
        title: "Head of Integrations",
        phone_number: "+1-541-754-3010",
        location: {
          city: "New York",
          country: "US",
          state: "NY",
          zip_code: "10016",
        },
        gender: "MALE",
        availability_date: new Date("2021-01-01T00:00:00Z"),
        salary_expectations: {
          period: "YEAR",
          amount: 100000,
        },
      },
      attachments: [
        {
          name: "Frank Doe CV.txt",
          content_type: "text/plain",
          data: "SGkgdGhlcmUsIEtvbWJvIGlzIGN1cnJlbnRseSBoaXJpbmcgZW5naW5lZXJzIHRoYXQgbG92ZSB0byB3b3JrIG9uIGRldmVsb3BlciBwcm9kdWN0cy4=",
          type: "CV",
        },
      ],
      screening_question_answers: [
        {
          question_id: "3phFBNXRweGnDmsU9o2vdPuQ",
          answer: "Yes",
        },
        {
          question_id: "EYJjhMQT3LtVKXnTbnRT8s6U",
          answer: [
            "GUzE666zfyjeoCJX6A8n7wh6",
            "5WPHzzKAv8cx97KtHRUV96U8",
            "7yZfKGzWigXxxRTygqAfHvyE",
          ],
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsCreateApplication failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostAtsJobsJobIdApplicationsRequest](../../models/operations/postatsjobsjobidapplicationsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostAtsJobsJobIdApplicationsPositiveResponse](../../models/postatsjobsjobidapplicationspositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getUsers

Retrieve all users.

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAtsUsers" method="get" path="/ats/users" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.getUsers({});

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
import { atsGetUsers } from "@kombo-api/sdk/funcs/atsGetUsers.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsGetUsers(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("atsGetUsers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsUsersRequest](../../models/operations/getatsusersrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAtsUsersResponse](../../models/operations/getatsusersresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getOffers

Retrieve all offers.

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAtsOffers" method="get" path="/ats/offers" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.getOffers({});

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
import { atsGetOffers } from "@kombo-api/sdk/funcs/atsGetOffers.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsGetOffers(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("atsGetOffers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsOffersRequest](../../models/operations/getatsoffersrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAtsOffersResponse](../../models/operations/getatsoffersresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getRejectionReasons

Retrieve all rejection reasons.

Get all rejection reasons available in the system. The Kombo ID is required in the associated [reject application action](/ats/v1/post-applications-application-id-reject).

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAtsRejectionReasons" method="get" path="/ats/rejection-reasons" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.getRejectionReasons({});

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
import { atsGetRejectionReasons } from "@kombo-api/sdk/funcs/atsGetRejectionReasons.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsGetRejectionReasons(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("atsGetRejectionReasons failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsRejectionReasonsRequest](../../models/operations/getatsrejectionreasonsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAtsRejectionReasonsResponse](../../models/operations/getatsrejectionreasonsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getInterviews

Retrieve all interviews.

Top level filters use AND, while individual filters use OR if they accept multiple arguments. That means filters will be resolved like this: `(id IN ids) AND (remote_id IN remote_ids)`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAtsInterviews" method="get" path="/ats/interviews" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.getInterviews({});

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
import { atsGetInterviews } from "@kombo-api/sdk/funcs/atsGetInterviews.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsGetInterviews(kombo, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("atsGetInterviews failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsInterviewsRequest](../../models/operations/getatsinterviewsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAtsInterviewsResponse](../../models/operations/getatsinterviewsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## importTrackedApplication

Import tracked application

Retroactively import existing applications into Kombo's tracking system. This is particularly useful if you have enabled the 'sync only created applications' setting and want to start tracking applications that were created before using Kombo.

To import an application, you'll need to provide specific identifiers based on the ATS. The available `id_type` values are defined by Kombo based on the tool's API capabilities. Please reach out to Kombo support if you require further types to be supported.

Once imported, Kombo will automatically fetch and update the application's complete data during the next sync.

### Example Request Body

```json
{
  "tracked_at": "2024-04-12T14:33:47.000Z",
  "successfactors": {
    "id_type": "application_remote_id",
    "application_remote_id": "1224042"
  }
}
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PostAtsImportTrackedApplication" method="post" path="/ats/import-tracked-application" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.ats.importTrackedApplication({
    successfactors: {
      id_type: "application_remote_id",
      application_remote_id: "1224042",
    },
    tracked_at: new Date("2024-04-12T14:33:47Z"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { atsImportTrackedApplication } from "@kombo-api/sdk/funcs/atsImportTrackedApplication.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await atsImportTrackedApplication(kombo, {
    successfactors: {
      id_type: "application_remote_id",
      application_remote_id: "1224042",
    },
    tracked_at: new Date("2024-04-12T14:33:47Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsImportTrackedApplication failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PostAtsImportTrackedApplicationRequestBody](../../models/postatsimporttrackedapplicationrequestbody.md)                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostAtsImportTrackedApplicationPositiveResponse](../../models/postatsimporttrackedapplicationpositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboAtsError     | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |