
# V3 Ips Response 2

## Structure

`V3IpsResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ip` | `string` | Required | The IP address. |
| `subusers` | `string[]` | Required | The subusers that can send email using this IP address. |
| `rdns` | `string` | Required | The reverse DNS record for this IP address. |
| `pools` | `string[]` | Required | The list of IP pools that this IP address belongs to. |
| `warmup` | `boolean` | Required | Indicates if this IP address is currently warming up. |
| `startDate` | `number \| null` | Required | The date that the IP address was entered into warmup. |
| `whitelabeled` | `boolean` | Required | Indicates if this IP address is associated with a reverse DNS record. |

## Example (as JSON)

```json
{
  "ip": "ip4",
  "subusers": [
    "subusers0",
    "subusers1",
    "subusers2"
  ],
  "rdns": "rdns2",
  "pools": [
    "pools3",
    "pools4",
    "pools5"
  ],
  "warmup": false,
  "start_date": 44,
  "whitelabeled": false
}
```

