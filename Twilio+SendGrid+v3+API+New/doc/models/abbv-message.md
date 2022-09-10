
# Abbv Message

## Structure

`AbbvMessage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fromEmail` | `string` | Required | - |
| `msgId` | `string` | Required | - |
| `subject` | `string` | Required | - |
| `toEmail` | `string` | Required | - |
| `status` | [`Status10Enum`](../../doc/models/status-10-enum.md) | Required | - |
| `opensCount` | `number` | Required | - |
| `clicksCount` | `number` | Required | - |
| `lastEventTime` | `string` | Required | iso 8601 format |

## Example (as JSON)

```json
{
  "from_email": "from@test.com",
  "msg_id": "abc123",
  "subject": "anim Duis sint veniam",
  "to_email": "test@test.com",
  "status": "processed",
  "opens_count": 1,
  "clicks_count": 2,
  "last_event_time": "2017-10-13T18:56:21Z"
}
```

