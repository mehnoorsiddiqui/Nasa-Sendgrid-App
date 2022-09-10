
# Mail Settings Bounce Purge

## Structure

`MailSettingsBouncePurge`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean \| undefined` | Optional | Indicates if the bounce purge mail setting is enabled. |
| `softBounces` | `number \| undefined` | Optional | The number of days after which SendGrid will purge all contacts from your soft bounces suppression lists. |
| `hardBounces` | `number \| undefined` | Optional | The number of days after which SendGrid will purge all contacts from your hard bounces suppression lists. |

## Example (as JSON)

```json
{
  "enabled": false,
  "soft_bounces": 1234,
  "hard_bounces": null
}
```

