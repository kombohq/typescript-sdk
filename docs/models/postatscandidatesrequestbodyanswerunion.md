# PostAtsCandidatesRequestBodyAnswerUnion

Answer to a question. This will be validated based on the question format and throw an error if the answer is invalid. Here is a description of each question type and the required answer format:

`TEXT` - Simply provide a "string" answer.

`SINGLE_SELECT` - Provide the ID of the answer as a string.

`MULTI_SELECT` - Provide a string array containing the question IDs of the selected options.

`BOOLEAN` - Either `true` or `false`.

`NUMBER` - A number.

`DATE` - Provide the answer as an ISO 8601 date string.

`FILE` - Please select Option 6 in the dropdown above to see the required format.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `boolean`

```typescript
const value: boolean = true;
```

### `number`

```typescript
const value: number = 1284.03;
```

### `string[]`

```typescript
const value: string[] = [
  "<value 1>",
  "<value 2>",
];
```

### `Date`

```typescript
const value: Date = new Date("2024-12-06T03:31:58.587Z");
```

### `models.PostAtsCandidatesRequestBodyAnswer`

```typescript
const value: models.PostAtsCandidatesRequestBodyAnswer = {
  name: "<value>",
};
```

