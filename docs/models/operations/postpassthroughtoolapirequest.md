# PostPassthroughToolApiRequest

## Example Usage

```typescript
import { PostPassthroughToolApiRequest } from "@kombo-api/sdk/models/operations";

let value: PostPassthroughToolApiRequest = {
  tool: "<value>",
  api: "<value>",
  body: {
    method: "GET",
    path: "/boot",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `tool`                                                                                                                                         | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The ID of the tool whose passthrough API you want to call (e.g., `personio`).                                                                  |
| `api`                                                                                                                                          | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The ID of the passthrough API you want to call (some tools provide multiple). Check the endpoint description for a list of all available APIs. |
| `body`                                                                                                                                         | [models.PostPassthroughToolApiRequestBody](../../models/postpassthroughtoolapirequestbody.md)                                                  | :heavy_check_mark:                                                                                                                             | POST /passthrough/:tool/:api Request body                                                                                                      |