
# Bounce Response

## Structure

`BounceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `created` | `number \| undefined` | Optional | The unix timestamp for when the bounce record was created at SendGrid. |
| `email` | `string \| undefined` | Optional | The email address that was added to the bounce list. |
| `reason` | `string \| undefined` | Optional | The reason for the bounce. This typically will be a bounce code, an enhanced code, and a description. |
| `status` | `string \| undefined` | Optional | Enhanced SMTP bounce response |

## Example (as JSON)

```json
{
  "created": 1250337600,
  "email": "example@example.com",
  "reason": "550 5.1.1 The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for typos or unnecessary spaces. Learn more at  https://support.google.com/mail/answer/6596 o186si2389584ioe.63 - gsmtp ",
  "status": "5.1.1"
}
```

