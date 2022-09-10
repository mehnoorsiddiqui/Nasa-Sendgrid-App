
# From Email Object

## Structure

`FromEmailObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | The 'From' email address used to deliver the message. This address should be a verified sender in your Twilio SendGrid account. |
| `name` | `string \| undefined` | Optional | A name or title associated with the sending email address. |

## Example (as JSON)

```json
{
  "email": "jane_doe@example.com",
  "name": "Jane Doe"
}
```

