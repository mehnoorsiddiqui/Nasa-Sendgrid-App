
# V3 Teammates Request

## Structure

`V3TeammatesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | New teammate's email<br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `255`, *Pattern*: `^.*@.*\..*` |
| `scopes` | `string[]` | Required | Set to specify list of scopes that teammate should have. Should be empty if teammate is an admin. |
| `isAdmin` | `boolean` | Required | Set to true if teammate should be an admin user |

## Example (as JSON)

```json
{
  "email": "teammate1@example.com",
  "scopes": [
    "user.profile.read",
    "user.profile.update"
  ],
  "is_admin": false
}
```

