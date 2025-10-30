<!-- Start SDK Example Usage [usage] -->
```typescript
import { Kombo } from "@kombo-api/sdk";

const kombo = new Kombo({
  api_key: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await kombo.general.checkApiKey();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->