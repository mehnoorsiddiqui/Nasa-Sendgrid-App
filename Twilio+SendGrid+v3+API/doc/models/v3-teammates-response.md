
# V3 Teammates Response

## Structure

`V3TeammatesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Optional | Token to identify invite |
| `email` | `string \| undefined` | Optional | Teammate's email address |
| `scopes` | `unknown[] \| undefined` | Optional | Initial set of permissions to give to teammate if they accept the invite |
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

