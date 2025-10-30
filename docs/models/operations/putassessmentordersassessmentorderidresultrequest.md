# PutAssessmentOrdersAssessmentOrderIdResultRequest

## Example Usage

```typescript
import { PutAssessmentOrdersAssessmentOrderIdResultRequest } from "@kombo-api/sdk/models/operations";

let value: PutAssessmentOrdersAssessmentOrderIdResultRequest = {
  assessment_order_id: "<id>",
  put_assessment_orders_assessment_order_id_result_request_body: {
    status: "OPEN",
    result_url: "https://uniform-secrecy.info",
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `assessment_order_id`                                                                                                                 | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | PUT /assessment/orders/:assessment_order_id/result Parameter                                                                          |
| `put_assessment_orders_assessment_order_id_result_request_body`                                                                       | [models.PutAssessmentOrdersAssessmentOrderIdResultRequestBody](../../models/putassessmentordersassessmentorderidresultrequestbody.md) | :heavy_check_mark:                                                                                                                    | PUT /assessment/orders/:assessment_order_id/result Request body                                                                       |