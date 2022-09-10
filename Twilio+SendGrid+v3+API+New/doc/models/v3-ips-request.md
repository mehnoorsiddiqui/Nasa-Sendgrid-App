
# V3 Ips Request

## Structure

`V3IpsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `count` | `number` | Required | The amount of IPs to add to the account. |
| `subusers` | `string[] \| undefined` | Optional | Array of usernames to be assigned a send IP. |
| `warmup` | `boolean \| undefined` | Optional | Whether or not to warmup the IPs being added.<br>**Default**: `false` |

## Example (as JSON)

```json
{
  "count": 90323478,
  "subusers": [
    "subuser1",
    "subuser2"
  ],
  "warmup": true,
  "user_can_send": true
}
```

