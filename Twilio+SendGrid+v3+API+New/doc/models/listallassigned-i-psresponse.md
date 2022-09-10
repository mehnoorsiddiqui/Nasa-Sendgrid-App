
# Listallassigned I Psresponse

## Structure

`ListallassignedIPsresponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ip` | `string` | Required | The IP address. |
| `pools` | `string[]` | Required | The IP pools that this IP address has been added to. |
| `warmup` | `boolean` | Required | Indicates if this IP address is currently warming up. |
| `startDate` | `number` | Required | The start date that this IP address was entered into warmup. |

## Example (as JSON)

```json
{
  "ip": "ip4",
  "pools": [
    "pools3",
    "pools4",
    "pools5"
  ],
  "warmup": false,
  "start_date": 44
}
```

