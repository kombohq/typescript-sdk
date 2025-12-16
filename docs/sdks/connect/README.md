# Connect

## Overview

### Available Operations

* [createConnectionLink](#createconnectionlink) - Create connection link
* [getIntegrationByToken](#getintegrationbytoken) - Get integration by token

## createConnectionLink

Generate a unique link that allows your user to enter the embedded Kombo Connect flow.

> Check out [our full guide](/connect/embedded-flow) for more details about implementing the connection flow into your app.

> Kombo will not deduplicate integrations for you that are created with this endpoint. You are responsible for keeping track of integrations in your system and prevent customers from connecting the same tool again. Use the [reconnection link](/v1/post-integrations-integration-id-relink) endpoint if you want a customer to update their credentials.

### Example Request Body

```json
{
  "end_user_email": "test@example.com",
  "end_user_organization_name": "Test Inc.",
  "integration_category": "HRIS",
  "integration_tool": "personio",
  "end_user_origin_id": "123",
  "language": "en",
  "link_type": "EMBEDDED"
}
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PostConnectCreateLink" method="post" path="/connect/create-link" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.connect.createConnectionLink({
    end_user_email: "test@example.com",
    end_user_organization_name: "Test Inc.",
    end_user_origin_id: "123",
    integration_tool: "personio",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { connectCreateConnectionLink } from "@kombo-api/sdk/funcs/connectCreateConnectionLink.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await connectCreateConnectionLink(kombo, {
    end_user_email: "test@example.com",
    end_user_organization_name: "Test Inc.",
    end_user_origin_id: "123",
    integration_tool: "personio",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectCreateConnectionLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PostConnectCreateLinkRequestBody](../../models/postconnectcreatelinkrequestbody.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PostConnectCreateLinkPositiveResponse](../../models/postconnectcreatelinkpositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboGeneralError | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |

## getIntegrationByToken

Use this endpoint with the token you get from the connection flow to retrieve information about the created integration.

  It works in a similar way as the OAuth2 code flow to securely retrieve information and connect the integration to your user.

> Check out [our full guide](/connect/embedded-flow) for more details about implementing the connection flow into your app.

This endpoint is used to ensure users can't trick your system connecting their
account in your system to another customers integration. You don't get the integration ID
from the `showKomboConnect(link)` function but only the short lived token used
for this endpoint so that users can't send you arbitrary data that you would put
into your system.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetConnectIntegrationByTokenToken" method="get" path="/connect/integration-by-token/{token}" -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.connect.getIntegrationByToken({
    token: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { KomboCore } from "@kombo-api/sdk/core.js";
import { connectGetIntegrationByToken } from "@kombo-api/sdk/funcs/connectGetIntegrationByToken.js";

// Use `KomboCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const kombo = new KomboCore({
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await connectGetIntegrationByToken(kombo, {
    token: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectGetIntegrationByToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConnectIntegrationByTokenTokenRequest](../../models/operations/getconnectintegrationbytokentokenrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetConnectIntegrationByTokenTokenPositiveResponse](../../models/getconnectintegrationbytokentokenpositiveresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.KomboGeneralError | default                  | application/json         |
| errors.KomboDefaultError | 4XX, 5XX                 | \*/\*                    |