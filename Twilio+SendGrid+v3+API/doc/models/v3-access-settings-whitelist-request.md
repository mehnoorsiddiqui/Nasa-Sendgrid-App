
# V3 Access Settings Whitelist Request

## Structure

`V3AccessSettingsWhitelistRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ips` | [`Ip[]`](../../doc/models/ip.md) | Required | An array containing the IP(s) you want to allow. |

## Example (as JSON)

```json
{
  "ips": [
    {
      "ip": "192.168.1.1"
    },
    {
      "ip": "192.*.*.*"
    },
    {
      "ip": "192.168.1.3/32"
    }
  ]
}
```

