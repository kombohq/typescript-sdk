# GetConnectIntegrationByTokenTokenPositiveResponse

## Example Usage

```typescript
import { GetConnectIntegrationByTokenTokenPositiveResponse } from "@kombo-api/sdk/models";

let value: GetConnectIntegrationByTokenTokenPositiveResponse = {
  status: "success",
  data: {
    tool: "personio",
    id: "personio:CBNMt7dSNCzBdnRTx87dev4E",
    end_user_origin_id: "36123",
    end_user_organization_name: "Acme, Inc.",
    end_user_email: "user@example.com",
    setup_status: "COMPLETED",
  },
};
```

## Fields

| Field                                                                                                                                                                                                           | Type                                                                                                                                                                                                            | Required                                                                                                                                                                                                        | Description                                                                                                                                                                                                     | Example                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                                                                        | *"success"*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                              | N/A                                                                                                                                                                                                             |                                                                                                                                                                                                                 |
| `data`                                                                                                                                                                                                          | [models.GetConnectIntegrationByTokenTokenPositiveResponseData](../models/getconnectintegrationbytokentokenpositiveresponsedata.md)                                                                              | :heavy_check_mark:                                                                                                                                                                                              | N/A                                                                                                                                                                                                             | {<br/>"tool": "personio",<br/>"id": "personio:CBNMt7dSNCzBdnRTx87dev4E",<br/>"end_user_origin_id": "36123",<br/>"end_user_organization_name": "Acme, Inc.",<br/>"end_user_email": "user@example.com",<br/>"setup_status": "COMPLETED"<br/>} |