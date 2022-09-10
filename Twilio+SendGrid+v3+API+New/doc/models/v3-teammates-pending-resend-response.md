
# V3 Teammates Pending Resend Response

## Structure

`V3TeammatesPendingResendResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | ID to identify invite |
| `email` | `string \| undefined` | Optional | Teammate's email address |
| `scopes` | `string[] \| undefined` | Optional | Initial set of permissions to give to teammate if they accept the invite |
| `isAdmin` | `boolean \| undefined` | Optional | Set to true if teammate should have admin privileges |

## Example (as JSON)

```json
{
  "token": null,
  "email": null,
  "scopes": null,
  "is_admin": null
}
```

