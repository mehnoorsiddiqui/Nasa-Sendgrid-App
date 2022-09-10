
# Single Sign on Teammate Response

## Structure

`SingleSignOnTeammateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The Teammate’s first name. |
| `lastName` | `string` | Required | The Teammate’s last name. |
| `email` | `string` | Required | The Teammate’s email address. This email address will also function as the Teammate’s username and must match the address assigned to the user in your IdP. This address cannot be changed after the Teammate is created. |
| `isAdmin` | `boolean \| undefined` | Optional | Indicates if the Teammate has admin permissions. |
| `isReadOnly` | `boolean \| undefined` | Optional | Indicates if the Teammate has read_only permissions. |
| `username` | `string \| undefined` | Optional | This should be set to the Teammate's email address. |
| `isSso` | `boolean \| undefined` | Optional | Indicates if the Teammate authenticates with SendGrid using SSO or with a username and password. |

## Example (as JSON)

```json
{
  "first_name": "first_name0",
  "last_name": "last_name8",
  "email": "email6",
  "is_admin": null,
  "is_read_only": null,
  "username": null,
  "is_sso": null
}
```

