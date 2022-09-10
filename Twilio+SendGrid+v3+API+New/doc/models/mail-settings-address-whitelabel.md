
# Mail Settings Address Whitelabel

## Structure

`MailSettingsAddressWhitelabel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean \| undefined` | Optional | Indicates if you have an email address whitelist enabled. |
| `list` | `string[] \| undefined` | Optional | All email addresses that are currently on the whitelist. |

## Example (as JSON)

```json
{
  "enabled": true,
  "list": [
    "email1@example.com",
    "example.com"
  ]
}
```

