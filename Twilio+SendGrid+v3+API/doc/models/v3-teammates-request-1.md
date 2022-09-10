
# V3 Teammates Request 1

## Structure

`V3TeammatesRequest1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scopes` | `string[]` | Required | Provide list of scopes that should be given to teammate. If specifying list of scopes, is_admin should be set to False. |
| `isAdmin` | `boolean` | Required | Set to True if this teammate should be promoted to an admin user. If True, scopes should be an empty array. |

## Example (as JSON)

```json
{
  "scopes": [
    "user.profile.read",
    "user.profile.edit"
  ],
  "is_admin": false
}
```

