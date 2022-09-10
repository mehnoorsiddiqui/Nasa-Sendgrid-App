
# Dkim 1

A DNS record.

## Structure

`Dkim1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `valid` | `boolean` | Required | Indicates if this is a valid DNS record. |
| `type` | `string` | Required | The type of DNS record. |
| `host` | `string` | Required | The domain that this DNS record was created for. |
| `data` | `string` | Required | The DNS record. |

## Example (as JSON)

```json
{
  "valid": false,
  "type": "type0",
  "host": "host8",
  "data": "data0"
}
```

