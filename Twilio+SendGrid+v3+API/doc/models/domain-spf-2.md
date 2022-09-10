
# Domain Spf 2

## Structure

`DomainSpf2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `host` | `string` | Required | The root domain that this SPF record will be used to authenticate. |
| `type` | `string` | Required | The type of data in the SPF record. |
| `data` | `string` | Required | The SPF record. |
| `valid` | `boolean` | Required | Indicates if the SPF record is valid. |

## Example (as JSON)

```json
{
  "host": "host8",
  "type": "type0",
  "data": "data0",
  "valid": false
}
```

