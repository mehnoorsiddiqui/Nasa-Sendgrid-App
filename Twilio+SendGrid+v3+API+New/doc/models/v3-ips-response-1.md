
# V3 Ips Response 1

## Structure

`V3IpsResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ip` | `string` | Required | An IP address. |
| `subusers` | `string[]` | Required | The subusers that are able to send email from this IP. |
| `rdns` | `string \| undefined` | Optional | The reverse DNS record for this IP address. |
| `pools` | `string[]` | Required | The IP pools that this IP has been added to. |
| `warmup` | `boolean` | Required | Indicates if this IP address is currently warming up. |
| `startDate` | `number \| null` | Required | The date that the IP address was entered into warmup. |
| `whitelabeled` | `boolean` | Required | Indicates if this IP address is associated with a reverse DNS record. |
| `assignedAt` | `number \| null` | Required | The date that the IP address was assigned to the user. |

## Example (as JSON)

```json
{
  "ip": "ip4",
  "subusers": [
    "subusers0",
    "subusers1",
    "subusers2"
  ],
  "rdns": null,
  "pools": [
    "pools3",
    "pools4",
    "pools5"
  ],
  "warmup": false,
  "start_date": 184.76,
  "whitelabeled": false,
  "assigned_at": 174
}
```

