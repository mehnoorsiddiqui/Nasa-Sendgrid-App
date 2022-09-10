
# V3 Alerts Response 2

## Structure

`V3AlertsResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdAt` | `number` | Required | A Unix timestamp indicating when the alert was created. |
| `emailTo` | `string` | Required | The email address that the alert will be sent to. |
| `frequency` | `string \| undefined` | Optional | If the alert is of type stats_notification, this indicates how frequently the stats notifications will be sent. For example: "daily", "weekly", or "monthly". |
| `id` | `number` | Required | The ID of the alert. |
| `type` | [`Type4Enum`](../../doc/models/type-4-enum.md) | Required | - |
| `updatedAt` | `number` | Required | A Unix timestamp indicating when the alert was last modified. |
| `percentage` | `number \| undefined` | Optional | If the alert is of type usage_limit, this indicates the percentage of email usage that must be reached before the alert will be sent. |

## Example (as JSON)

```json
{
  "created_at": 6,
  "email_to": "email_to4",
  "frequency": null,
  "id": 112,
  "type": "usage_alert",
  "updated_at": 162,
  "percentage": null
}
```

