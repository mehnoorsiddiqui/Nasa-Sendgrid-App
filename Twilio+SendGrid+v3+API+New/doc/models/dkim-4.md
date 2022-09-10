
# Dkim 4

## Structure

`Dkim4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `host` | `string` | Required | The DNS labels for the DKIM signature. |
| `type` | `string` | Required | The type of data in the DKIM record. |
| `data` | `string` | Required | The DKIM record. |
| `valid` | `boolean` | Required | Indicates if the DKIM record is valid. |

## Example (as JSON)

```json
{
  "host": "host8",
  "type": "type0",
  "data": "data0",
  "valid": false
}
```

