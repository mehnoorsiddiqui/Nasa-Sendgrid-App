
# Subdomain Spf

The SPF record for the subdomain used to create this authenticated domain.

## Structure

`SubdomainSpf`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `host` | `string` | Required | The domain that this SPF record will be used to authenticate. |
| `type` | `string` | Required | The type of data in the SPF record. |
| `data` | `string` | Required | The SPF record. |
| `valid` | `boolean` | Required | Indicates if this is a valid SPF record. |

## Example (as JSON)

```json
{
  "host": "host8",
  "type": "type0",
  "data": "data0",
  "valid": false
}
```

