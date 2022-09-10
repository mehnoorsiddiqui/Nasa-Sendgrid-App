
# Single Sign on Teammate Request

## Structure

`SingleSignOnTeammateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The Teammate’s first name. |
| `lastName` | `string` | Required | The Teammate’s last name. |
| `email` | `string` | Required | The Teammate’s email address. This email address will also function as the Teammate’s username and must match the address assigned to the user in your IdP. This address cannot be changed after the Teammate is created. |
| `isAdmin` | `boolean \| undefined` | Optional | Indicates if the Teammate has admin permissions. |
| `isReadOnly` | `boolean \| undefined` | Optional | Indicates if the Teammate has read_only permissions. |
| `scopes` | `string[]` | Required | The permission scopes assigned to the Teammate. |

## Example (as JSON)

```json
{
  "first_name": "first_name0",
  "last_name": "last_name8",
  "email": "email6",
  "is_admin": null,
  "is_read_only": null,
  "scopes": [
    "scopes2"
  ]
}
```

