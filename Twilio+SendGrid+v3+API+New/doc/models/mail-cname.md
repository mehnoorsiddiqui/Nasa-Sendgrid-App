
# Mail Cname

The CNAME for your sending domain that points to sendgrid.net.

## Structure

`MailCname`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `valid` | `boolean` | Required | Indicates if this is a valid CNAME. |
| `type` | `string` | Required | The type of DNS record. |
| `host` | `string` | Required | The domain that this CNAME is created for. |
| `data` | `string` | Required | The CNAME record. |

## Example (as JSON)

```json
{
  "valid": false,
  "type": "type0",
  "host": "host8",
  "data": "data0"
}
```

