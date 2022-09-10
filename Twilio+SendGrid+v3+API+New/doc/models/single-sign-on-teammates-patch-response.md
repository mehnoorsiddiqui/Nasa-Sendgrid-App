
# Single Sign on Teammates PATCH Response

## Structure

`SingleSignOnTeammatesPATCHResponse`

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
| `address` | `string \| undefined` | Optional | The Teammate’s street address. |
| `address2` | `string \| undefined` | Optional | The Teammate’s apartment number, suite number, or other secondary address information that is not part of the physical street address. |
| `city` | `string \| undefined` | Optional | The Teammate's city. |
| `company` | `string \| undefined` | Optional | The Teammate’s company name. |
| `country` | `string \| undefined` | Optional | The Teammate’s country of residence. |
| `phone` | `string \| undefined` | Optional | The Teammate’s stored phone number. |
| `scopes` | `string[] \| undefined` | Optional | The permission scopes assigned to the Teammate. |
| `state` | `string \| undefined` | Optional | The Teammate’s state or province. |
| `userType` | [`UserTypeEnum \| undefined`](../../doc/models/user-type-enum.md) | Optional | - |
| `website` | `string \| undefined` | Optional | A website associated with the Teammate |
| `zip` | `string \| undefined` | Optional | The Teammate’s zip code. |

## Example (as JSON)

```json
{
  "first_name": "first_name0",
  "last_name": "last_name8",
  "email": "email6",
  "is_admin": null,
  "is_read_only": null,
  "username": null,
  "is_sso": null,
  "address": null,
  "address2": null,
  "city": null,
  "company": null,
  "country": null,
  "phone": null,
  "scopes": null,
  "state": null,
  "user_type": null,
  "website": null,
  "zip": null
}
```

