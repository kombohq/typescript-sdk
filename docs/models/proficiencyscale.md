# ProficiencyScale

The scale used to rate this skill, useful when writing a rating back. `null` when the skill has no scale.


## Supported Types

### `models.ProficiencyScaleNumeric`

```typescript
const value: models.ProficiencyScaleNumeric = {
  id: "5xKMdr68N8kG9EzLwjsN9scl",
  remote_id: "scale-12345",
  type: "NUMERIC",
  min: 3367.06,
  max: 8080.61,
  step: 7816.35,
};
```

### `models.ProficiencyScaleSingleSelect`

```typescript
const value: models.ProficiencyScaleSingleSelect = {
  id: "5xKMdr68N8kG9EzLwjsN9scl",
  remote_id: "scale-12345",
  type: "SINGLE_SELECT",
  ordered_options: [
    {
      id: "3aKMdr68N8kG9EzLwjsN1",
      remote_id: "1",
      name: "Beginner",
    },
    {
      id: "3aKMdr68N8kG9EzLwjsN2",
      remote_id: "2",
      name: "Intermediate",
    },
    {
      id: "3aKMdr68N8kG9EzLwjsN3",
      remote_id: "3",
      name: "Advanced",
    },
    {
      id: "3aKMdr68N8kG9EzLwjsN4",
      remote_id: "4",
      name: "Expert",
    },
  ],
};
```

