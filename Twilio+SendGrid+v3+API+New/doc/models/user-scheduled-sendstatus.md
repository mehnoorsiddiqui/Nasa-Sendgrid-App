
# User Scheduled Sendstatus

## Structure

`UserScheduledSendstatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `batchId` | `string` | Required | **Constraints**: *Pattern*: `^[a-zA-Z0-9\-\_]` |
| `status` | [`Status8Enum`](../../doc/models/status-8-enum.md) | Required | - |

## Example (as JSON)

```json
{
  "batch_id": "batch_id8",
  "status": "cancel"
}
```

