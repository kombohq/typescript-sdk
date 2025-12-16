# GetCheckApiKeyPositiveResponse

## Example Usage

```typescript
import { GetCheckApiKeyPositiveResponse } from "@kombo-api/sdk/models";

let value: GetCheckApiKeyPositiveResponse = {
  status: "success",
  data: {
    environment_id: "2Uev1YUTqLFdvMPD3Jtrg2FX",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `status`                                                                                     | *"success"*                                                                                  | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `data`                                                                                       | [models.GetCheckApiKeyPositiveResponseData](../models/getcheckapikeypositiveresponsedata.md) | :heavy_check_mark:                                                                           | N/A                                                                                          | {<br/>"environment_id": "2Uev1YUTqLFdvMPD3Jtrg2FX",<br/>"customer_id": "2Uev1YUTqLFdvMPD3Jtrg2FX"<br/>} |