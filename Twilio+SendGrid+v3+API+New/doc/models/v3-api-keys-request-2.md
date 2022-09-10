
# V3 Api Keys Request 2

## Structure

`V3ApiKeysRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `scopes` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "Profiles key",
  "scopes": [
    "user.profile.read",
    "user.profile.update"
  ]
}
```

