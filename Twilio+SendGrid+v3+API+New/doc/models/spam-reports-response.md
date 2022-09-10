
# Spam Reports Response

## Structure

`SpamReportsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `created` | `number` | Required | A Unix timestamp that indicates when the recipient marked your message as spam. |
| `email` | `string` | Required | The email address of the recipient that marked your message as spam. |
| `ip` | `string` | Required | The IP address that the message was sent from. |

## Example (as JSON)

```json
{
  "created": 60,
  "email": "email6",
  "ip": "ip4"
}
```

