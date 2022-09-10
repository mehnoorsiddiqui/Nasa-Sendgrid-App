
# Cancelorpauseascheduledsendrequest

## Structure

`Cancelorpauseascheduledsendrequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `batchId` | `string` | Required | The batch ID is the identifier that your scheduled mail sends share.<br>**Constraints**: *Pattern*: `^[a-zA-Z0-9]` |
| `status` | [`Status7Enum`](../../doc/models/status-7-enum.md) | Required | - |

## Example (as JSON)

```json
{
  "batch_id": "YOUR_BATCH_ID",
  "status": "pause"
}
```

