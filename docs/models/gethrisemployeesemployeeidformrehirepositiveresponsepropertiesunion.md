# GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesUnion


## Supported Types

### `models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesText`

```typescript
const value:
  models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesText = {
    label: "<value>",
    required: true,
    type: "text",
  };
```

### `models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesNumber`

```typescript
const value:
  models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesNumber =
    {
      label: "<value>",
      required: false,
      type: "number",
    };
```

### `models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesDate`

```typescript
const value:
  models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesDate = {
    label: "<value>",
    required: false,
    type: "date",
  };
```

### `models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesSingleSelect`

```typescript
const value:
  models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesSingleSelect =
    {
      label: "<value>",
      required: true,
      type: "single_select",
      options: {
        type: "inline",
        entries: [],
      },
    };
```

### `models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesMultiSelect`

```typescript
const value:
  models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesMultiSelect =
    {
      label: "<value>",
      required: true,
      type: "multi_select",
      options: {
        type: "referenced",
        link: "<value>",
      },
    };
```

### `models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesCheckbox`

```typescript
const value:
  models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesCheckbox =
    {
      label: "<value>",
      required: true,
      type: "checkbox",
    };
```

### `models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesObject`

```typescript
const value:
  models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesObject =
    {
      label: "<value>",
      required: false,
      type: "object",
      properties: {
        "key": {
          label: "<value>",
          required: false,
          type: "text",
        },
      },
    };
```

### `models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesArray`

```typescript
const value:
  models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesArray = {
    label: "<value>",
    required: false,
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

### `models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesFile`

```typescript
const value:
  models.GetHrisEmployeesEmployeeIdFormRehirePositiveResponsePropertiesFile = {
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

