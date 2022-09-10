
# Reserved Field Definitions Response

## Structure

`ReservedFieldDefinitionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `fieldType` | [`FieldTypeEnum \| undefined`](../../doc/models/field-type-enum.md) | Optional | - |
| `readOnly` | `boolean \| undefined` | Optional | When `true` this means API consumers are unable to set the value of this field on contacts.<br>**Default**: `false` |

## Example (as JSON)

```json
{
  "name": null,
  "field_type": null,
  "read_only": null
}
```

