
# Mail Server 2

## Structure

`MailServer2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `host` | `string` | Required | The domain sending the messages. |
| `type` | `string` | Required | They type of DNS record. |
| `data` | `string` | Required | The mail server responsible for accepting messages from the sending domain. |
| `valid` | `boolean` | Required | Indicates if this is a valid DNS record. |

## Example (as JSON)

```json
{
  "host": "host8",
  "type": "type0",
  "data": "data0",
  "valid": false
}
```

