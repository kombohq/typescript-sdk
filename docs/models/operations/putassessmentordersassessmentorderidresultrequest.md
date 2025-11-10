# PutAssessmentOrdersAssessmentOrderIdResultRequest

## Example Usage

```typescript
import { PutAssessmentOrdersAssessmentOrderIdResultRequest } from "@kombo-api/sdk/models/operations";

let value: PutAssessmentOrdersAssessmentOrderIdResultRequest = {
  assessment_order_id: "<id>",
  body: {
    status: "OPEN",
    result_url: "https://uniform-secrecy.info",
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `assessment_order_id`                                                                                                                 | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | PUT /assessment/orders/:assessment_order_id/result Parameter                                                                          |
| `body`                                                                                                                                | [models.PutAssessmentOrdersAssessmentOrderIdResultRequestBody](../../models/putassessmentordersassessmentorderidresultrequestbody.md) | :heavy_check_mark:                                                                                                                    | PUT /assessment/orders/:assessment_order_id/result Request body                                                                       |