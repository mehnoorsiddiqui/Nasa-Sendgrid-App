
# Reply to Email Object

## Structure

`ReplyToEmailObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | The email address where any replies or bounces will be returned. |
| `name` | `string \| undefined` | Optional | A name or title associated with the `reply_to` email address. |

## Example (as JSON)

```json
{
  "email": "jane_doe@example.com",
  "name": "Jane Doe"
}
```

