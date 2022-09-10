
# Blocks Response

## Structure

`BlocksResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `created` | `number` | Required | A Unix timestamp indicating when the email address was added to the blocks list. |
| `email` | `string` | Required | The email address that was added to the block list. |
| `reason` | `string` | Required | An explanation for the reason of the block. |
| `status` | `string` | Required | The status of the block. |

## Example (as JSON)

```json
{
  "created": 60,
  "email": "email6",
  "reason": "reason4",
  "status": "status8"
}
```

