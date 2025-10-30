# Properties


## Supported Types

### `models.PropertiesText`

```typescript
const value: models.PropertiesText = {
  label: "<value>",
  required: true,
  type: "text",
};
```

### `models.PropertiesNumber`

```typescript
const value: models.PropertiesNumber = {
  label: "<value>",
  required: true,
  type: "number",
};
```

### `models.PropertiesDate`

```typescript
const value: models.PropertiesDate = {
  label: "<value>",
  required: false,
  type: "date",
};
```

### `models.PropertiesSingleSelect`

```typescript
const value: models.PropertiesSingleSelect = {
  label: "<value>",
  required: false,
  type: "single_select",
  options: {
    type: "referenced",
    link: "<value>",
  },
};
```

### `models.PropertiesMultiSelect`

```typescript
const value: models.PropertiesMultiSelect = {
  label: "<value>",
  required: true,
  type: "multi_select",
  options: {
    type: "inline",
    entries: [],
  },
};
```

### `models.PropertiesCheckbox`

```typescript
const value: models.PropertiesCheckbox = {
  label: "<value>",
  required: true,
  type: "checkbox",
};
```

### `models.PropertiesObject`

```typescript
const value: models.PropertiesObject = {
  label: "<value>",
  required: false,
  type: "object",
  properties: {},
};
```

### `models.PropertiesArray`

```typescript
const value: models.PropertiesArray = {
  label: "<value>",
  required: false,
  type: "array",
  item_type: {
    label: "<value>",
    required: false,
    type: "single_select",
    options: {
      type: "inline",
      entries: [],
    },
  },
};
```

### `models.PropertiesFile`

```typescript
const value: models.PropertiesFile = {
  label: "<value>",
  required: true,
  type: "file",
  file_restrictions: {
    accepted_mime_types: [
      "<value 1>",
    ],
  },
};
```

