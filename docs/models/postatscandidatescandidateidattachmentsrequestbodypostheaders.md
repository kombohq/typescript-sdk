# PostAtsCandidatesCandidateIdAttachmentsRequestBodyPostHeaders

Headers we will pass with `POST` requests to Greenhouse.

## Example Usage

```typescript
import { PostAtsCandidatesCandidateIdAttachmentsRequestBodyPostHeaders } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesCandidateIdAttachmentsRequestBodyPostHeaders = {};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `on_behalf_of`                                                                                                                                              | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | ID of the the user that will show up as having performed the action in Greenhouse. We already pass a value by default, but you can use this to override it. |