
# Result 1

## Structure

`Result1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowed` | `boolean` | Required | Indicates if the IP address was granted access to the account. |
| `authMethod` | `string` | Required | The authentication method used when attempting access. |
| `firstAt` | `number` | Required | A Unix timestamp indicating when the first access attempt was made. |
| `ip` | `string` | Required | The IP addressed used during the access attempt. |
| `lastAt` | `number` | Required | A Unix timestamp indicating when the most recent access attempt was made |
| `location` | `string` | Required | The geographic location from which the access attempt originated. |

## Example (as JSON)

```json
{
  "allowed": false,
  "auth_method": "auth_method6",
  "first_at": 98,
  "ip": "ip4",
  "last_at": 170,
  "location": "location4"
}
```

