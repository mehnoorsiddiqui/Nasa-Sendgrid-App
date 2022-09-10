
# V3 Marketing Field Definitions Response

## Structure

`V3MarketingFieldDefinitionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `name` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `fieldType` | [`FieldTypeEnum`](../../doc/models/field-type-enum.md) | Required | - |
| `metadata` | [`Metadata \| undefined`](../../doc/models/metadata.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "name": "name0",
  "field_type": "Number",
  "_metadata": null
}
```

