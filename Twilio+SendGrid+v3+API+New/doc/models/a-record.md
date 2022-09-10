
# A Record

## Structure

`ARecord`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `valid` | `boolean` | Required | Indicates if the a_record is valid. |
| `type` | `string` | Required | The type of DNS record. |
| `host` | `string` | Required | This is the web address that will be mapped to the IP address. |
| `data` | `string` | Required | The IP address being set up with Reverse DNS. |

## Example (as JSON)

```json
{
  "valid": false,
  "type": "type0",
  "host": "host8",
  "data": "data0"
}
```

