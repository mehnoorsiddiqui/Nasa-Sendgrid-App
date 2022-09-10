
# V3 Ips Response

## Structure

`V3IpsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ips` | [`Ip1[]`](../../doc/models/ip-1.md) | Required | List of IP objects. |
| `remainingIps` | `number` | Required | The number of IPs that can still be added to the user. |
| `warmup` | `boolean` | Required | Whether or not the IPs are being warmed up. |

## Example (as JSON)

```json
{
  "ips": [
    {
      "ip": "ip8",
      "subusers": [
        "subusers4",
        "subusers5"
      ]
    },
    {
      "ip": "ip9",
      "subusers": [
        "subusers5",
        "subusers6",
        "subusers7"
      ]
    }
  ],
  "remaining_ips": 98,
  "warmup": false
}
```

