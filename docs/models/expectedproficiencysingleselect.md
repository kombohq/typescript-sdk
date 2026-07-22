# ExpectedProficiencySingleSelect

## Example Usage

```typescript
import { ExpectedProficiencySingleSelect } from "@kombo-api/sdk/models";

let value: ExpectedProficiencySingleSelect = {
  type: "SINGLE_SELECT",
  selected_option_id: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"SINGLE_SELECT"*                                                                            | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `selected_option_id`                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | The Kombo ID of the selected option on the scale (`proficiency_scale.ordered_options[].id`). |