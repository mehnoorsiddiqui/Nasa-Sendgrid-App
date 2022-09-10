
# Singlesend Response

## Structure

`SinglesendResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of the Single Send.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `categories` | `string[] \| undefined` | Optional | The categories to associate with this Single Send.<br>**Constraints**: *Maximum Items*: `10`, *Unique Items Required* |
| `sendAt` | `string \| undefined` | Optional | The ISO 8601 time at which to send the Single Send. This must be in future or the string "now". Emails can be scheduled up to 72 hours in advance. However, this scheduling constraint does not apply to campaigns sent via [Marketing Campaigns](https://docs.sendgrid.com/ui/sending-email/how-to-send-email-with-marketing-campaigns/). |
| `sendTo` | [`SendTo \| undefined`](../../doc/models/send-to.md) | Optional | - |
| `emailConfig` | [`EmailConfig \| undefined`](../../doc/models/email-config.md) | Optional | - |
| `id` | `string` | Required | - |
| `status` | [`Status1Enum`](../../doc/models/status-1-enum.md) | Required | - |
| `updatedAt` | `string \| undefined` | Optional | the ISO 8601 time at which the Single Send was last updated |
| `createdAt` | `string` | Required | the ISO 8601 time at which the Single Send was created |
| `warnings` | [`Warning[] \| undefined`](../../doc/models/warning.md) | Optional | - |

## Example (as JSON)

```json
{
  "name": "Example API Created Single Send",
  "id": "27c21bbf-a12c-440b-b8bf-c526975328ca",
  "status": "scheduled",
  "created_at": "2020-05-18T17:28:27.272Z",
  "send_at": "2020-06-16T00:19:55.106Z",
  "categories": [
    "unique opens"
  ],
  "email_config": {
    "subject": "",
    "html_content": "",
    "plain_content": "",
    "generate_plain_content": true,
    "editor": "code",
    "suppression_group_id": null,
    "custom_unsubscribe_url": null,
    "sender_id": null,
    "ip_pool": null
  },
  "send_to": {
    "list_ids": [
      "f2fe66a1-43f3-4e3a-87b1-c6a600d805f0"
    ]
  }
}
```

