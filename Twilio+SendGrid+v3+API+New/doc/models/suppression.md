
# Suppression

## Structure

`Suppression`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string` | Required | The description of the suppression group. |
| `id` | `number` | Required | The id of the suppression group. |
| `isDefault` | `boolean` | Required | Indicates if the suppression group  is set as the default. |
| `name` | `string` | Required | The name of the suppression group. |
| `suppressed` | `boolean` | Required | Indicates if the given email address is suppressed for this group. |

## Example (as JSON)

```json
{
  "description": "description0",
  "id": 112,
  "is_default": false,
  "name": "name0",
  "suppressed": false
}
```

