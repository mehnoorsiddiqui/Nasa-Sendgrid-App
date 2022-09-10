
# V3 Mail Settings Address Whitelist Request

## Structure

`V3MailSettingsAddressWhitelistRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean \| undefined` | Optional | Indicates if your email address whitelist is enabled. |
| `list` | `string[] \| undefined` | Optional | Either a single email address that you want whitelisted or a domain, for which all email addresses belonging to this domain will be whitelisted. |

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

