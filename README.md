# @kombo-api/sdk

Developer-friendly & type-safe TypeScript SDK for the [Kombo Unified API](https://docs.kombo.dev/introduction).

<div align="left">
  <a href="https://www.speakeasy.com/?utm_source=@kombo-api/sdk&utm_campaign=typescript">
    <img src="https://custom-icon-badges.demolab.com/badge/-built%20with%20speakeasy-212015?style=flat-square&logoColor=FBE331&logo=speakeasy&labelColor=545454" />
  </a>
  <a href="https://www.npmjs.com/package/@kombo-api/sdk">
    <img src="https://img.shields.io/npm/v/%40kombo-api%2Fsdk?style=flat-square" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" />
  </a>
</div>

<br />

> [!WARNING]
> The Kombo TypeScript SDK is still in beta and is subject to breaking changes.

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@kombo-api/sdk](#kombo-apisdk)
  * [SDK Installation](#sdk-installation)
  * [SDK Example Usage](#sdk-example-usage)
  * [Region Selection](#region-selection)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Pagination](#pagination)
  * [Error Handling](#error-handling)
  * [Retries](#retries)
  * [Standalone functions](#standalone-functions)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
  * [Requirements](#requirements)
* [Development](#development)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @kombo-api/sdk
```

### PNPM

```bash
pnpm add @kombo-api/sdk
```

### Bun

```bash
bun add @kombo-api/sdk
```

### Yarn

```bash
yarn add @kombo-api/sdk
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import("@kombo-api/sdk")` to import and use this package.
<!-- End SDK Installation [installation] -->

## SDK Example Usage

```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.general.checkApiKey();

  console.log(result);
}

run();
```

### Specifying an integration ID

The majority of Kombo API endpoints are for interacting with a single "integration" (i.e., a single connection to one your customers' systems). For using these, make sure to specify the `integration_id` parameter when initializing the SDK:

```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
  integration_id: "workday:HWUTwvyx2wLoSUHphiWVrp28",
});

async function run() {
  const result = await kombo.hris.getEmployees();

  console.log(result);
}

run();
```

## Region Selection

The Kombo platform is available in two regions: Europe and United States.

By default, the SDK will use the EU region. If you're using the US region (hosted under `api.us.kombo.dev`), make sure to specify the `server` parameter when initializing the SDK.

#### Example

```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  server: "us",
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});
```

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [assessment](docs/sdks/assessment/README.md)

* [getPackages](docs/sdks/assessment/README.md#getpackages) - Get packages
* [setPackages](docs/sdks/assessment/README.md#setpackages) - Set packages
* [getOpenOrders](docs/sdks/assessment/README.md#getopenorders) - Get open orders
* [updateOrderResult](docs/sdks/assessment/README.md#updateorderresult) - Update order result

### [ats](docs/sdks/ats/README.md)

* [getApplications](docs/sdks/ats/README.md#getapplications) - Get applications
* [moveApplicationToStage](docs/sdks/ats/README.md#moveapplicationtostage) - Move application to stage
* [addApplicationResultLink](docs/sdks/ats/README.md#addapplicationresultlink) - Add result link to application
* [addApplicationNote](docs/sdks/ats/README.md#addapplicationnote) - Add note to application
* [getApplicationAttachments](docs/sdks/ats/README.md#getapplicationattachments) - Get application attachments
* [addApplicationAttachment](docs/sdks/ats/README.md#addapplicationattachment) - Add attachment to application
* [rejectApplication](docs/sdks/ats/README.md#rejectapplication) - Reject application
* [getCandidates](docs/sdks/ats/README.md#getcandidates) - Get candidates
* [createCandidate](docs/sdks/ats/README.md#createcandidate) - Create candidate
* [getCandidateAttachments](docs/sdks/ats/README.md#getcandidateattachments) - Get candidate attachments
* [addCandidateAttachment](docs/sdks/ats/README.md#addcandidateattachment) - Add attachment to candidate
* [addCandidateResultLink](docs/sdks/ats/README.md#addcandidateresultlink) - Add result link to candidate
* [addCandidateTag](docs/sdks/ats/README.md#addcandidatetag) - Add tag to candidate
* [removeCandidateTag](docs/sdks/ats/README.md#removecandidatetag) - Remove tag from candidate
* [getTags](docs/sdks/ats/README.md#gettags) - Get tags
* [getApplicationStages](docs/sdks/ats/README.md#getapplicationstages) - Get application stages
* [getJobs](docs/sdks/ats/README.md#getjobs) - Get jobs
* [createApplication](docs/sdks/ats/README.md#createapplication) - Create application
* [getUsers](docs/sdks/ats/README.md#getusers) - Get users
* [getOffers](docs/sdks/ats/README.md#getoffers) - Get offers
* [getRejectionReasons](docs/sdks/ats/README.md#getrejectionreasons) - Get rejection reasons
* [getInterviews](docs/sdks/ats/README.md#getinterviews) - Get interviews
* [importTrackedApplication](docs/sdks/ats/README.md#importtrackedapplication) - Import tracked application

### [connect](docs/sdks/connect/README.md)

* [createConnectionLink](docs/sdks/connect/README.md#createconnectionlink) - Create connection link
* [getIntegrationByToken](docs/sdks/connect/README.md#getintegrationbytoken) - Get integration by token

### [general](docs/sdks/general/README.md)

* [checkApiKey](docs/sdks/general/README.md#checkapikey) - Check API key
* [triggerSync](docs/sdks/general/README.md#triggersync) - Trigger sync
* [sendPassthroughRequest](docs/sdks/general/README.md#sendpassthroughrequest) - Send passthrough request
* [deleteIntegration](docs/sdks/general/README.md#deleteintegration) - Delete integration
* [getIntegrationDetails](docs/sdks/general/README.md#getintegrationdetails) - Get integration details
* [createReconnectionLink](docs/sdks/general/README.md#createreconnectionlink) - Create reconnection link
* [getIntegrationFields](docs/sdks/general/README.md#getintegrationfields) - Get integration fields
* [updateIntegrationField](docs/sdks/general/README.md#updateintegrationfield) - Updates an integration fields passthrough setting
* [getCustomFields](docs/sdks/general/README.md#getcustomfields) - Get custom fields with current mappings
* [updateCustomFieldMapping](docs/sdks/general/README.md#updatecustomfieldmapping) - Put custom field mappings
* [getTools](docs/sdks/general/README.md#gettools) - Get tools

### [hris](docs/sdks/hris/README.md)

* [getEmployees](docs/sdks/hris/README.md#getemployees) - Get employees
* [getEmployeeForm](docs/sdks/hris/README.md#getemployeeform) - Get employee form
* [createEmployeeWithForm](docs/sdks/hris/README.md#createemployeewithform) - Create employee with form
* [addEmployeeDocument](docs/sdks/hris/README.md#addemployeedocument) - Add document to employee
* [getEmployeeDocumentCategories](docs/sdks/hris/README.md#getemployeedocumentcategories) - Get employee document categories
* [getGroups](docs/sdks/hris/README.md#getgroups) - Get groups
* [getEmployments](docs/sdks/hris/README.md#getemployments) - Get employments
* [getLocations](docs/sdks/hris/README.md#getlocations) - Get work locations
* [getAbsenceTypes](docs/sdks/hris/README.md#getabsencetypes) - Get absence types
* [getTimeOffBalances](docs/sdks/hris/README.md#gettimeoffbalances) - Get time off balances
* [getAbsences](docs/sdks/hris/README.md#getabsences) - Get absences
* [createAbsence](docs/sdks/hris/README.md#createabsence) - Create absence
* [deleteAbsence](docs/sdks/hris/README.md#deleteabsence) - Delete absence
* [getLegalEntities](docs/sdks/hris/README.md#getlegalentities) - Get legal entities
* [getTimesheets](docs/sdks/hris/README.md#gettimesheets) - Get timesheets
* [getPerformanceReviewCycles](docs/sdks/hris/README.md#getperformancereviewcycles) - Get performance review cycles
* [getPerformanceReviews](docs/sdks/hris/README.md#getperformancereviews) - Get performance reviews

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.general.getIntegrationFields({
    integration_id: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`KomboError`](./src/models/errors/komboerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Kombo } from "@kombo-api/sdk";
import * as errors from "@kombo-api/sdk/models/errors";

const kombo = new Kombo({
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  try {
    const result = await kombo.general.checkApiKey();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.KomboError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.KomboGeneralError) {
        console.log(error.data$.status); // models.KomboGeneralErrorStatus
        console.log(error.data$.error); // models.KomboGeneralErrorError
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`KomboError`](./src/models/errors/komboerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (9)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`KomboError`](./src/models/errors/komboerror.ts)**:
* [`KomboAtsError`](./src/models/errors/komboatserror.ts): The standard error response with the error codes for the ATS use case. Applicable to 27 of 57 methods.*
* [`KomboHrisError`](./src/models/errors/kombohriserror.ts): The standard error response with the error codes for the HRIS use case. Applicable to 17 of 57 methods.*
* [`KomboGeneralError`](./src/models/errors/kombogeneralerror.ts): The standard error response with just the platform error codes. Applicable to 13 of 57 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.general.checkApiKey({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  retry_config: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.general.checkApiKey();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`assessmentGetOpenOrders`](docs/sdks/assessment/README.md#getopenorders) - Get open orders
- [`assessmentGetPackages`](docs/sdks/assessment/README.md#getpackages) - Get packages
- [`assessmentSetPackages`](docs/sdks/assessment/README.md#setpackages) - Set packages
- [`assessmentUpdateOrderResult`](docs/sdks/assessment/README.md#updateorderresult) - Update order result
- [`atsAddApplicationAttachment`](docs/sdks/ats/README.md#addapplicationattachment) - Add attachment to application
- [`atsAddApplicationNote`](docs/sdks/ats/README.md#addapplicationnote) - Add note to application
- [`atsAddApplicationResultLink`](docs/sdks/ats/README.md#addapplicationresultlink) - Add result link to application
- [`atsAddCandidateAttachment`](docs/sdks/ats/README.md#addcandidateattachment) - Add attachment to candidate
- [`atsAddCandidateResultLink`](docs/sdks/ats/README.md#addcandidateresultlink) - Add result link to candidate
- [`atsAddCandidateTag`](docs/sdks/ats/README.md#addcandidatetag) - Add tag to candidate
- [`atsCreateApplication`](docs/sdks/ats/README.md#createapplication) - Create application
- [`atsCreateCandidate`](docs/sdks/ats/README.md#createcandidate) - Create candidate
- [`atsGetApplicationAttachments`](docs/sdks/ats/README.md#getapplicationattachments) - Get application attachments
- [`atsGetApplications`](docs/sdks/ats/README.md#getapplications) - Get applications
- [`atsGetApplicationStages`](docs/sdks/ats/README.md#getapplicationstages) - Get application stages
- [`atsGetCandidateAttachments`](docs/sdks/ats/README.md#getcandidateattachments) - Get candidate attachments
- [`atsGetCandidates`](docs/sdks/ats/README.md#getcandidates) - Get candidates
- [`atsGetInterviews`](docs/sdks/ats/README.md#getinterviews) - Get interviews
- [`atsGetJobs`](docs/sdks/ats/README.md#getjobs) - Get jobs
- [`atsGetOffers`](docs/sdks/ats/README.md#getoffers) - Get offers
- [`atsGetRejectionReasons`](docs/sdks/ats/README.md#getrejectionreasons) - Get rejection reasons
- [`atsGetTags`](docs/sdks/ats/README.md#gettags) - Get tags
- [`atsGetUsers`](docs/sdks/ats/README.md#getusers) - Get users
- [`atsImportTrackedApplication`](docs/sdks/ats/README.md#importtrackedapplication) - Import tracked application
- [`atsMoveApplicationToStage`](docs/sdks/ats/README.md#moveapplicationtostage) - Move application to stage
- [`atsRejectApplication`](docs/sdks/ats/README.md#rejectapplication) - Reject application
- [`atsRemoveCandidateTag`](docs/sdks/ats/README.md#removecandidatetag) - Remove tag from candidate
- [`connectCreateConnectionLink`](docs/sdks/connect/README.md#createconnectionlink) - Create connection link
- [`connectGetIntegrationByToken`](docs/sdks/connect/README.md#getintegrationbytoken) - Get integration by token
- [`generalCheckApiKey`](docs/sdks/general/README.md#checkapikey) - Check API key
- [`generalCreateReconnectionLink`](docs/sdks/general/README.md#createreconnectionlink) - Create reconnection link
- [`generalDeleteIntegration`](docs/sdks/general/README.md#deleteintegration) - Delete integration
- [`generalGetCustomFields`](docs/sdks/general/README.md#getcustomfields) - Get custom fields with current mappings
- [`generalGetIntegrationDetails`](docs/sdks/general/README.md#getintegrationdetails) - Get integration details
- [`generalGetIntegrationFields`](docs/sdks/general/README.md#getintegrationfields) - Get integration fields
- [`generalGetTools`](docs/sdks/general/README.md#gettools) - Get tools
- [`generalSendPassthroughRequest`](docs/sdks/general/README.md#sendpassthroughrequest) - Send passthrough request
- [`generalTriggerSync`](docs/sdks/general/README.md#triggersync) - Trigger sync
- [`generalUpdateCustomFieldMapping`](docs/sdks/general/README.md#updatecustomfieldmapping) - Put custom field mappings
- [`generalUpdateIntegrationField`](docs/sdks/general/README.md#updateintegrationfield) - Updates an integration fields passthrough setting
- [`hrisAddEmployeeDocument`](docs/sdks/hris/README.md#addemployeedocument) - Add document to employee
- [`hrisCreateAbsence`](docs/sdks/hris/README.md#createabsence) - Create absence
- [`hrisCreateEmployeeWithForm`](docs/sdks/hris/README.md#createemployeewithform) - Create employee with form
- [`hrisDeleteAbsence`](docs/sdks/hris/README.md#deleteabsence) - Delete absence
- [`hrisGetAbsences`](docs/sdks/hris/README.md#getabsences) - Get absences
- [`hrisGetAbsenceTypes`](docs/sdks/hris/README.md#getabsencetypes) - Get absence types
- [`hrisGetEmployeeDocumentCategories`](docs/sdks/hris/README.md#getemployeedocumentcategories) - Get employee document categories
- [`hrisGetEmployeeForm`](docs/sdks/hris/README.md#getemployeeform) - Get employee form
- [`hrisGetEmployees`](docs/sdks/hris/README.md#getemployees) - Get employees
- [`hrisGetEmployments`](docs/sdks/hris/README.md#getemployments) - Get employments
- [`hrisGetGroups`](docs/sdks/hris/README.md#getgroups) - Get groups
- [`hrisGetLegalEntities`](docs/sdks/hris/README.md#getlegalentities) - Get legal entities
- [`hrisGetLocations`](docs/sdks/hris/README.md#getlocations) - Get work locations
- [`hrisGetPerformanceReviewCycles`](docs/sdks/hris/README.md#getperformancereviewcycles) - Get performance review cycles
- [`hrisGetPerformanceReviews`](docs/sdks/hris/README.md#getperformancereviews) - Get performance reviews
- [`hrisGetTimeOffBalances`](docs/sdks/hris/README.md#gettimeoffbalances) - Get time off balances
- [`hrisGetTimesheets`](docs/sdks/hris/README.md#gettimesheets) - Get timesheets

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Kombo } from "@kombo-api/sdk";
import { HTTPClient } from "@kombo-api/sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Kombo({ http_client: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Kombo } from "@kombo-api/sdk";

const sdk = new Kombo({ debug_logger: console });
```
<!-- End Debugging [debug] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@kombo-api/sdk&utm_campaign=typescript)

<!-- No Summary [summary] -->
<!-- No SDK Example Usage [usage] -->
<!-- No Authentication [security] -->
<!-- No Global Parameters [global-parameters] -->
<!-- No Server Selection [server] -->
