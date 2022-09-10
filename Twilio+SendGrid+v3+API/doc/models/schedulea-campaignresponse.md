
# Schedulea Campaignresponse

## Structure

`ScheduleaCampaignresponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The campaign ID. |
| `sendAt` | `number` | Required | The date time you scheduled your campaign to be sent. |
| `status` | `string` | Required, Constant | The status of your campaign.<br>**Default**: `'Scheduled'` |

## Example (as JSON)

```json
{
  "id": null,
  "send_at": null,
  "status": "Scheduled"
}
```

