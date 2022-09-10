
# V3 Asm Groups Response

## Structure

`V3AsmGroupsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The ID of the suppression group. |
| `name` | `string` | Required | The name of the suppression group. |
| `description` | `string` | Required | A brief description of the suppression group. |
| `isDefault` | `boolean` | Required | Indicates if this is the default suppression group. |

## Example (as JSON)

```json
{
  "id": 112,
  "name": "name0",
  "description": "description0",
  "is_default": false
}
```

