# PostAtsCandidatesRequestBodyCandidateData

## Example Usage

```typescript
import { PostAtsCandidatesRequestBodyCandidateData } from "@kombo-api/sdk/models";

let value: PostAtsCandidatesRequestBodyCandidateData = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `name_detail_data`                                                                                                   | [models.PostAtsCandidatesRequestBodyNameDetailData](../models/postatscandidatesrequestbodynamedetaildata.md)         | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `language_reference`                                                                                                 | [models.PostAtsCandidatesRequestBodyLanguageReference](../models/postatscandidatesrequestbodylanguagereference.md)   | :heavy_minus_sign:                                                                                                   | Used to set the candidate's primary language                                                                         |
| `job_application_data`                                                                                               | [models.PostAtsCandidatesRequestBodyJobApplicationData](../models/postatscandidatesrequestbodyjobapplicationdata.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `contact_data`                                                                                                       | [models.PostAtsCandidatesRequestBodyContactData](../models/postatscandidatesrequestbodycontactdata.md)               | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `worker_reference`                                                                                                   | [models.PostAtsCandidatesRequestBodyWorkerReference](../models/postatscandidatesrequestbodyworkerreference.md)       | :heavy_minus_sign:                                                                                                   | Reference to the Worker (employee) to link the candidate to. Provide either WID or Employee_ID.                      |