# Schema1Union1


## Supported Types

### `models.Schema1Text`

```typescript
const value: models.Schema1Text = {
  label: "<value>",
  required: false,
  type: "text",
};
```

### `models.Schema1Number`

```typescript
const value: models.Schema1Number = {
  label: "<value>",
  required: true,
  type: "number",
};
```

### `models.Schema1Date`

```typescript
const value: models.Schema1Date = {
  label: "<value>",
  required: true,
  type: "date",
};
```

### `models.Schema1SingleSelect`

```typescript
const value: models.Schema1SingleSelect = {
  label: "<value>",
  required: false,
  type: "single_select",
  options: {
    type: "referenced",
    link: "<value>",
  },
};
```

### `models.Schema1MultiSelect`

```typescript
const value: models.Schema1MultiSelect = {
  label: "<value>",
  required: false,
  type: "multi_select",
  options: {
    type: "inline",
    entries: [
      {
        id: "<id>",
        label: "<value>",
        remote_id: "<id>",
      },
    ],
  },
};
```

### `models.Schema1Checkbox`

```typescript
const value: models.Schema1Checkbox = {
  label: "<value>",
  required: true,
  type: "checkbox",
};
```

### `models.Schema1Object`

```typescript
const value: models.Schema1Object = {
  label: "<value>",
  required: false,
  type: "object",
  properties: {},
};
```

### `models.Schema1Array1`

```typescript
const value: models.Schema1Array1 = {
  label: "<value>",
  required: true,
  type: "array",
  item_type: {
    label: "<value>",
    required: false,
    type: "multi_select",
    options: {
      type: "inline",
      entries: [],
    },
  },
};
```

### `models.Schema1File`

```typescript
const value: models.Schema1File = {
  label: "<value>",
  required: true,
  type: "file",
  file_restrictions: {
    accepted_mime_types: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

