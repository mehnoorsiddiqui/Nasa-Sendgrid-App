
# Custom Field Definitions Response

## Structure

`CustomFieldDefinitionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `name` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `fieldType` | [`FieldTypeEnum`](../../doc/models/field-type-enum.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "a1_D",
  "name": "custom_field_name",
  "field_type": "Date"
}
```

