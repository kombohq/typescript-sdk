# GetHrisEmployeesFormPositiveResponsePropertiesUnion


## Supported Types

### `models.GetHrisEmployeesFormPositiveResponsePropertiesText`

```typescript
const value: models.GetHrisEmployeesFormPositiveResponsePropertiesText = {
  label: "<value>",
  required: false,
  type: "text",
};
```

### `models.GetHrisEmployeesFormPositiveResponsePropertiesNumber`

```typescript
const value: models.GetHrisEmployeesFormPositiveResponsePropertiesNumber = {
  label: "<value>",
  required: false,
  type: "number",
};
```

### `models.GetHrisEmployeesFormPositiveResponsePropertiesDate`

```typescript
const value: models.GetHrisEmployeesFormPositiveResponsePropertiesDate = {
  label: "<value>",
  required: true,
  type: "date",
};
```

### `models.GetHrisEmployeesFormPositiveResponsePropertiesSingleSelect`

```typescript
const value: models.GetHrisEmployeesFormPositiveResponsePropertiesSingleSelect =
  {
    label: "<value>",
    required: false,
    type: "single_select",
    options: {
      type: "referenced",
      link: "<value>",
    },
  };
```

### `models.GetHrisEmployeesFormPositiveResponsePropertiesMultiSelect`

```typescript
const value: models.GetHrisEmployeesFormPositiveResponsePropertiesMultiSelect =
  {
    label: "<value>",
    required: true,
    type: "multi_select",
    options: {
      type: "inline",
      entries: [],
    },
  };
```

### `models.GetHrisEmployeesFormPositiveResponsePropertiesCheckbox`

```typescript
const value: models.GetHrisEmployeesFormPositiveResponsePropertiesCheckbox = {
  label: "<value>",
  required: true,
  type: "checkbox",
};
```

### `models.GetHrisEmployeesFormPositiveResponsePropertiesObject`

```typescript
const value: models.GetHrisEmployeesFormPositiveResponsePropertiesObject = {
  label: "<value>",
  required: false,
  type: "object",
  properties: {
    "key": {
      label: "<value>",
      required: true,
      type: "checkbox",
    },
  },
};
```

### `models.GetHrisEmployeesFormPositiveResponsePropertiesArray`

```typescript
const value: models.GetHrisEmployeesFormPositiveResponsePropertiesArray = {
  label: "<value>",
  required: true,
  type: "array",
  item_type: {
    label: "<value>",
    required: true,
    type: "single_select",
    options: {
      type: "referenced",
      link: "<value>",
    },
  },
};
```

### `models.GetHrisEmployeesFormPositiveResponsePropertiesFile`

```typescript
const value: models.GetHrisEmployeesFormPositiveResponsePropertiesFile = {
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

