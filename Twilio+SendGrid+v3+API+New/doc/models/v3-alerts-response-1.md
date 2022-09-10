
# V3 Alerts Response 1

## Structure

`V3AlertsResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdAt` | `number` | Required | A Unix timestamp indicating when the alert was created. |
| `emailTo` | `string` | Required | The email address that the alert will be sent to. |
| `id` | `number` | Required | The ID of the alert. |
| `percentage` | `number \| undefined` | Optional | If the alert is of type usage_limit, this indicates the percentage of email usage that must be reached before the alert will be sent. |
| `type` | [`Type3Enum`](../../doc/models/type-3-enum.md) | Required | - |
| `updatedAt` | `number \| undefined` | Optional | A Unix timestamp indicating when the alert was last modified. |
| `frequency` | `string \| undefined` | Optional | If the alert is of type stats_notification, this indicates how frequently the stats notifications will be sent. For example, "daily", "weekly", or "monthly". |

## Example (as JSON)

```json
{
  "created_at": 6,
  "email_to": "email_to4",
  "id": 112,
  "percentage": null,
  "type": "usage_limit",
  "updated_at": null,
  "frequency": null
}
```

