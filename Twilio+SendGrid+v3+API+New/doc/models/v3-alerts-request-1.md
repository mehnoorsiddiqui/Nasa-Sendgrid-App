
# V3 Alerts Request 1

## Structure

`V3AlertsRequest1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailTo` | `string \| undefined` | Optional | The new email address you want your alert to be sent to.<br>Example: test@example.com |
| `frequency` | `string \| undefined` | Optional | The new frequency at which to send the stats_notification alert.<br>Example: monthly |
| `percentage` | `number \| undefined` | Optional | The new percentage threshold at which the usage_limit alert will be sent.<br>Example: 90 |

## Example (as JSON)

```json
{
  "email_to": "example@example.com"
}
```

