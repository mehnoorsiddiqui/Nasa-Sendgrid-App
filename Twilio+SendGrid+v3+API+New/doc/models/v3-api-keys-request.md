
# V3 Api Keys Request

## Structure

`V3ApiKeysRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name you will use to describe this API Key. |
| `scopes` | `string[] \| undefined` | Optional | The individual permissions that you are giving to this API Key. |

## Example (as JSON)

```json
{
  "name": "My API Key",
  "scopes": [
    "mail.send",
    "alerts.create",
    "alerts.read"
  ]
}
```

