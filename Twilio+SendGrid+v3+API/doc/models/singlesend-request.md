
# Singlesend Request

## Structure

`SinglesendRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of the Single Send.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `categories` | `string[] \| undefined` | Optional | The categories to associate with this Single Send.<br>**Constraints**: *Maximum Items*: `10`, *Unique Items Required* |
| `sendAt` | `string \| undefined` | Optional | The ISO 8601 time at which to send the Single Send. This must be in future or the string "now". Emails can be scheduled up to 72 hours in advance. However, this scheduling constraint does not apply to campaigns sent via [Marketing Campaigns](https://docs.sendgrid.com/ui/sending-email/how-to-send-email-with-marketing-campaigns/). |
| `sendTo` | [`SendTo \| undefined`](../../doc/models/send-to.md) | Optional | - |
| `emailConfig` | [`EmailConfig \| undefined`](../../doc/models/email-config.md) | Optional | - |

## Example (as JSON)

```json
{
  "name": "name0",
  "categories": null,
  "send_at": null,
  "send_to": null,
  "email_config": null
}
```

