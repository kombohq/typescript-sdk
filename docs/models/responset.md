# ResponseT


## Supported Types

### `models.ResultText`

```typescript
const value: models.ResultText = {
  remote_id: "<id>",
  label: "<value>",
  description: "overfeed blah triumphantly defrag a",
  required: true,
  type: "TEXT",
  answer: "<value>",
};
```

### `models.ResultSingleSelect`

```typescript
const value: models.ResultSingleSelect = {
  remote_id: null,
  label: "<value>",
  description: "for ha next nectarine",
  required: true,
  type: "SINGLE_SELECT",
  options: [
    {
      remote_id: "<id>",
      label: "<value>",
    },
  ],
  answer: null,
};
```

### `models.ResultMultiSelect`

```typescript
const value: models.ResultMultiSelect = {
  remote_id: "<id>",
  label: "<value>",
  description: "despite snarling reorganisation mortally always",
  required: false,
  type: "MULTI_SELECT",
  options: [],
  answer: [
    {
      remote_id: "<id>",
      label: "<value>",
    },
  ],
};
```

### `models.ResultBoolean`

```typescript
const value: models.ResultBoolean = {
  remote_id: "<id>",
  label: "<value>",
  description: "gleefully thigh except plumber since a er tightly",
  required: false,
  type: "BOOLEAN",
  answer: false,
};
```

### `models.ResultNumber`

```typescript
const value: models.ResultNumber = {
  remote_id: "<id>",
  label: "<value>",
  description: "vainly solidly low warmhearted along cannon",
  required: false,
  type: "NUMBER",
  answer: 1611.2,
};
```

### `models.ResultDate`

```typescript
const value: models.ResultDate = {
  remote_id: "<id>",
  label: "<value>",
  description: "ligate modulo low before drat worth among so",
  required: false,
  type: "DATE",
  answer: "<value>",
};
```

