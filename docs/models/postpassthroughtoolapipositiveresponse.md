# PostPassthroughToolApiPositiveResponse

## Example Usage

```typescript
import { PostPassthroughToolApiPositiveResponse } from "@kombo-api/sdk/models";

let value: PostPassthroughToolApiPositiveResponse = {
  status: "success",
  data: {
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
  },
  warnings: [
    {
      message: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                           |                                                                                                                                                                                                                               |
| `data`                                                                                                                                                                                                                        | [models.PostPassthroughToolApiPositiveResponseData](../models/postpassthroughtoolapipositiveresponsedata.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                           | {<br/>"url": "https://api.personio.de/v1/company/employees",<br/>"status": 200,<br/>"headers": {<br/>"content-type": "application/json"<br/>},<br/>"data": {<br/>"success": true,<br/>"data": [<br/>{<br/>"id": 123,<br/>"first_name": "John",<br/>"last_name": "Doe"<br/>}<br/>]<br/>}<br/>} |
| `warnings`                                                                                                                                                                                                                    | [models.PostPassthroughToolApiPositiveResponseWarning](../models/postpassthroughtoolapipositiveresponsewarning.md)[]                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                            | These are the interaction warnings that are shown in the dashboard. They are meant to provide debug information to you. We recommend logging them to the console.                                                             |                                                                                                                                                                                                                               |