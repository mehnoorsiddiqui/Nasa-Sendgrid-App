
# V3 Ips Pools Ips Response

## Structure

`V3IpsPoolsIpsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ip` | `string` | Required | The IP address. |
| `pools` | `string[]` | Required | The IP pools that this IP address has been added to. |
| `startDate` | `number` | Required | A Unix timestamp indicating when the warmup process began for the added IP address. |
| `warmup` | `boolean` | Required | Indicates if the IP address is in warmup. |

## Example (as JSON)

```json
{
  "ip": "ip4",
  "pools": [
    "pools3",
    "pools4",
    "pools5"
  ],
  "start_date": 44,
  "warmup": false
}
```

