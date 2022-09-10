
# Domain Cname

The DNS record generated to point to your link branding subdomain.

## Structure

`DomainCname`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `valid` | `boolean` | Required | Indicates if the DNS record is valid. |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | - |
| `host` | `string` | Required | The domain that this link branding will use for the links in your email. |
| `data` | `string` | Required | The domain that the DNS record points to. |

## Example (as JSON)

```json
{
  "valid": false,
  "type": "mx",
  "host": "host8",
  "data": "data0"
}
```

