
# V3 Alerts Request

## Structure

`V3AlertsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type2Enum`](../../doc/models/type-2-enum.md) | Required | - |
| `emailTo` | `string \| null` | Required | The email address the alert will be sent to.<br>Example: test@example.com |
| `frequency` | `string \| undefined` | Optional | Required for stats_notification. How frequently the alert will be sent.<br>Example: daily |
| `percentage` | `number \| undefined` | Optional | Required for usage_alert. When this usage threshold is reached, the alert will be sent.<br>Example: 90 |

## Example (as JSON)

```json
{
  "type": "stats_notification",
  "email_to": "example@example.com",
  "frequency": "daily"
}
```

