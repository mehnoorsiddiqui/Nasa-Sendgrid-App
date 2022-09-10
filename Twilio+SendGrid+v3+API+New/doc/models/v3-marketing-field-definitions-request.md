
# V3 Marketing Field Definitions Request

## Structure

`V3MarketingFieldDefinitionsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `fieldType` | [`FieldTypeEnum`](../../doc/models/field-type-enum.md) | Required | - |

## Example (as JSON)

```json
{
  "name": "custom_field_name",
  "field_type": "Text"
}
```

