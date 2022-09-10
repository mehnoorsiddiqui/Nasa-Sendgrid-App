
# V3 Marketing Singlesends Schedule Response

## Structure

`V3MarketingSinglesendsScheduleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sendAt` | `string \| undefined` | Optional | The ISO 8601 time at which to send the Single Send. This must be in future or the string "now". Emails can be scheduled up to 72 hours in advance. However, this scheduling constraint does not apply to campaigns sent via [Marketing Campaigns](https://docs.sendgrid.com/ui/sending-email/how-to-send-email-with-marketing-campaigns/). |
| `status` | [`Status4Enum \| undefined`](../../doc/models/status-4-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "send_at": null,
  "status": null
}
```

