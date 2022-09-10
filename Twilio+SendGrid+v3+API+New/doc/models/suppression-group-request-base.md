
# Suppression Group Request Base

## Structure

`SuppressionGroupRequestBase`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of your suppression group. Required when creating a group.<br>**Constraints**: *Maximum Length*: `30` |
| `description` | `string \| undefined` | Optional | A brief description of your suppression group. Required when creating a group.<br>**Constraints**: *Maximum Length*: `100` |
| `isDefault` | `boolean \| undefined` | Optional | Indicates if you would like this to be your default suppression group. |

## Example (as JSON)

```json
{
  "name": null,
  "description": null,
  "is_default": null
}
```

