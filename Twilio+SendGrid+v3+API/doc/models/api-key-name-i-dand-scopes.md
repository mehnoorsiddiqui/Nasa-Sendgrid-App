
# API Key Name I Dand Scopes

## Structure

`APIKeyNameIDandScopes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scopes` | `string[] \| undefined` | Optional | The permissions this API Key has access to. |
| `apiKeyId` | `string \| undefined` | Optional | The ID of your API Key. |
| `name` | `string \| undefined` | Optional | The name of your API Key. |

## Example (as JSON)

```json
{
  "api_key_id": "qfTQ6KG0QBiwWdJ0-pCLCA",
  "name": "Mail Send",
  "scopes": [
    "mail.send",
    "mail.batch.create",
    "mail.batch.read",
    "mail.batch.update",
    "mail.batch.delete",
    "user.scheduled_sends.create",
    "user.scheduled_sends.read",
    "user.scheduled_sends.update",
    "user.scheduled_sends.delete",
    "sender_verification_eligible",
    "sender_verification_legacy",
    "2fa_required"
  ]
}
```

