# GetAtsOffersPositiveResponseApplication

## Example Usage

```typescript
import { GetAtsOffersPositiveResponseApplication } from "@kombo-api/sdk/models";

let value: GetAtsOffersPositiveResponseApplication = {
  candidate: {
    id: "26vafvWSRmbhNcxJYqjCzuJg",
    remote_id: "32",
    first_name: "John",
    last_name: "Doe",
    email_addresses: [
      {
        email_address: "john.doe@example.com",
        type: "PRIVATE",
      },
    ],
  },
  job: {
    id: "H5daSm8e85Dmvmne3wLeCPhX",
    remote_id: "32",
    name: "Backend Engineer",
  },
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              | Example                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `candidate`                                                                                                                                                                              | [models.GetAtsOffersPositiveResponseCandidate](../models/getatsofferspositiveresponsecandidate.md)                                                                                       | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      | {<br/>"id": "26vafvWSRmbhNcxJYqjCzuJg",<br/>"remote_id": "32",<br/>"first_name": "John",<br/>"last_name": "Doe",<br/>"email_addresses": [<br/>{<br/>"email_address": "john.doe@example.com",<br/>"type": "PRIVATE"<br/>}<br/>]<br/>} |
| `job`                                                                                                                                                                                    | [models.GetAtsOffersPositiveResponseJob](../models/getatsofferspositiveresponsejob.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      | {<br/>"id": "H5daSm8e85Dmvmne3wLeCPhX",<br/>"remote_id": "32",<br/>"name": "Backend Engineer"<br/>}                                                                                      |