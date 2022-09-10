
# V3 Alerts Response

## Structure

`V3AlertsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdAt` | `number` | Required | A Unix timestamp indicating when the alert was created. |
| `emailTo` | `string` | Required | The email address that the alert will be sent to. |
| `frequency` | `string \| undefined` | Optional | If the alert is of type stats_notification, this indicates how frequently the stats notifications will be sent. For example, "daily", "weekly", or "monthly". |
| `id` | `number` | Required | The ID of the alert. |
| `type` | `string` | Required | The type of alert. |
| `updatedAt` | `number` | Required | A Unix timestamp indicating when the alert was last modified. |
| `percentage` | `number \| undefined` | Optional | "If the alert is of type usage_limit, this indicates the percentage of email usage that must be reached before the alert will be sent. |

## Example (as JSON)

```json
{
  "created_at": 6,
  "email_to": "email_to4",
  "frequency": null,
  "id": 112,
  "type": "type0",
  "updated_at": 162,
  "percentage": null
}
```

