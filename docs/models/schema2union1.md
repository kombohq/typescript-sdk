# Schema2Union1


## Supported Types

### `models.Schema2Text`

```typescript
const value: models.Schema2Text = {
  label: "<value>",
  required: false,
  type: "text",
};
```

### `models.Schema2Number`

```typescript
const value: models.Schema2Number = {
  label: "<value>",
  required: true,
  type: "number",
};
```

### `models.Schema2Date`

```typescript
const value: models.Schema2Date = {
  label: "<value>",
  required: false,
  type: "date",
};
```

### `models.Schema2SingleSelect`

```typescript
const value: models.Schema2SingleSelect = {
  label: "<value>",
  required: false,
  type: "single_select",
  options: {
    type: "referenced",
    link: "<value>",
  },
};
```

### `models.Schema2MultiSelect`

```typescript
const value: models.Schema2MultiSelect = {
  label: "<value>",
  required: true,
  type: "multi_select",
  options: {
    type: "inline",
    entries: [],
  },
};
```

### `models.Schema2Checkbox`

```typescript
const value: models.Schema2Checkbox = {
  label: "<value>",
  required: true,
  type: "checkbox",
};
```

### `models.Schema2Object1`

```typescript
const value: models.Schema2Object1 = {
  label: "<value>",
  required: false,
  type: "object",
  properties: {},
};
```

### `models.Schema2Array1`

```typescript
const value: models.Schema2Array1 = {
  label: "<value>",
  required: true,
  type: "array",
  item_type: {
    label: "<value>",
    required: false,
    type: "checkbox",
  },
};
```

### `models.Schema2File`

```typescript
const value: models.Schema2File = {
  label: "<value>",
  required: true,
  type: "file",
  file_restrictions: {
    accepted_mime_types: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

