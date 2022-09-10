
# Dns 3

## Structure

`Dns3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mailCname` | [`MailCname3`](../../doc/models/mail-cname-3.md) | Required | - |
| `dkim1` | [`Dkim2`](../../doc/models/dkim-2.md) | Required | - |
| `dkim2` | [`Dkim2`](../../doc/models/dkim-2.md) | Required | - |

## Example (as JSON)

```json
{
  "mail_cname": {
    "valid": false,
    "type": "type4",
    "host": "host2",
    "data": "data6"
  },
  "dkim1": {
    "valid": false,
    "type": "type8",
    "host": "host6",
    "data": "data2"
  },
  "dkim2": {
    "valid": false,
    "type": "type6",
    "host": "host8",
    "data": "data6"
  }
}
```

