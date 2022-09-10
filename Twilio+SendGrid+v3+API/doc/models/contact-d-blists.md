
# Contact D Blists

## Structure

`ContactDBlists`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The reference ID of your list. |
| `name` | `string` | Required | The name of your list. Must be unique against all other list and segment names. |
| `recipientCount` | `number` | Required | The count of recipients currently in the list. |

## Example (as JSON)

```json
{
  "id": 1,
  "name": "listname",
  "recipient_count": 0
}
```

