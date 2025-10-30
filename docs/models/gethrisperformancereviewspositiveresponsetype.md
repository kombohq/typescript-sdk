# GetHrisPerformanceReviewsPositiveResponseType

The relationship between the reviewee and reviewer. Manager: The reviewer is the manager of the reviewee. Direct Report: The reviewer is a direct report of the reviewee (reverse MANAGER). Peer: The reviewer is a peer of the reviewee. Self: The reviewer is the reviewee himself/herself. null: The relationship cannot be determined or the reviewer is missing.

## Example Usage

```typescript
import { GetHrisPerformanceReviewsPositiveResponseType } from "@kombo-api/sdk/models";

let value: GetHrisPerformanceReviewsPositiveResponseType = "DIRECT_REPORT";
```

## Values

```typescript
"MANAGER" | "DIRECT_REPORT" | "PEER" | "SELF"
```