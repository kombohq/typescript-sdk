# PostPassthroughToolApiPositiveResponseData

## Example Usage

```typescript
import { PostPassthroughToolApiPositiveResponseData } from "@kombo-api/sdk/models";

let value: PostPassthroughToolApiPositiveResponseData = {
  url: "https://api.personio.de/v1/company/employees",
  status: 200,
  headers: {
    "content-type": "application/json",
  },
  data: {
    "success": true,
    "data": [
      {
        "id": 123,
        "first_name": "John",
        "last_name": "Doe",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                 | The full URL of the request that we automatically assemble for you based on the specified `api`, the specified `path`, and the integration's auth credentials. You can use this to debug path-related issues (e.g., the API returning 404 errors). |
| `status`                                                                                                                                                                                                                                           | *number*                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                 | The HTTP status code returned from the remote system.                                                                                                                                                                                              |
| `headers`                                                                                                                                                                                                                                          | Record<string, *models.Headers*>                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                 | The HTTP headers returned from the remote system.                                                                                                                                                                                                  |
| `data`                                                                                                                                                                                                                                             | *any*                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                 | The HTTP body returned from the remote system. This will either be an array or object (in the case that JSON was returned) or a string (in any other case).                                                                                        |