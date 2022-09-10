
# Result 7

## Structure

`Result7`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string \| undefined` | Optional | Email address teammate invite will be sent to |
| `scopes` | `string[] \| undefined` | Optional | List of permissions to give teammate if they accept |
| `isAdmin` | `boolean \| undefined` | Optional | Set to true to indicate teammate should have the same set of permissions as parent user |
| `token` | `string \| undefined` | Optional | Invitation token used to identify user |
| `expirationDate` | `number \| undefined` | Optional | timestamp indicates when invite will expire. Expiration is 7 days after invite creation |

## Example (as JSON)

```json
{
  "email": null,
  "scopes": null,
  "is_admin": null,
  "token": null,
  "expiration_date": null
}
```

