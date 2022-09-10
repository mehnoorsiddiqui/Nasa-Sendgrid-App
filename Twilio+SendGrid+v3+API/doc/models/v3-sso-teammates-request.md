
# V3 Sso Teammates Request

## Structure

`V3SsoTeammatesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `scopes` | `string[] \| undefined` | Optional | - |
| `isAdmin` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "jane_doe@example.com",
  "scopes": [
    "mail.batch.create",
    "mail.batch.delete",
    "mail.batch.read",
    "mail.batch.update",
    "mail.send"
  ],
  "is_admin": false
}
```

