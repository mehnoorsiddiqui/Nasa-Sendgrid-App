
# V3 Marketing Singlesends Schedule Request

## Structure

`V3MarketingSinglesendsScheduleRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sendAt` | `string` | Required | The ISO 8601 time at which to send the Single Send. This must be in future or the string "now". Emails can be scheduled up to 72 hours in advance. However, this scheduling constraint does not apply to campaigns sent via [Marketing Campaigns](https://docs.sendgrid.com/ui/sending-email/how-to-send-email-with-marketing-campaigns/). |

## Example (as JSON)

```json
{
  "send_at": "3752-01-28T23:21:52.575Z"
}
```

