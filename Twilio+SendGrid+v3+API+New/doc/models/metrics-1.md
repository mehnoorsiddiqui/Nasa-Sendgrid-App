
# Metrics 1

## Structure

`Metrics1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `blocks` | `number` | Required | The number of emails that were not allowed to be delivered by ISPs. |
| `bounceDrops` | `number` | Required | The number of emails that were dropped because of a bounce. |
| `bounces` | `number` | Required | The number of emails that bounced instead of being delivered. |
| `clicks` | `number` | Required | The number of links that were clicked. |
| `deferred` | `number` | Required | The number of emails that temporarily could not be delivered. |
| `delivered` | `number` | Required | The number of emails SendGrid was able to confirm were actually delivered to a recipient. |
| `invalidEmails` | `number` | Required | The number of recipients who had malformed email addresses or whose mail provider reported the address as invalid. |
| `opens` | `number` | Required | The total number of times your emails were opened by recipients. |
| `processed` | `number` | Required | Requests from your website, application, or mail client via SMTP Relay or the API that SendGrid processed. |
| `requests` | `number` | Required | The number of emails that were requested to be delivered. |
| `spamReportDrops` | `number` | Required | The number of emails that were dropped due to a recipient previously marking your emails as spam. |
| `spamReports` | `number` | Required | The number of recipients who marked your email as spam. |
| `uniqueClicks` | `number` | Required | The number of unique recipients who clicked links in your emails. |
| `uniqueOpens` | `number` | Required | The number of unique recipients who opened your emails. |
| `unsubscribeDrops` | `number` | Required | The number of emails dropped due to a recipient unsubscribing from your emails. |
| `unsubscribes` | `number` | Required | The number of recipients who unsubscribed from your emails. |

## Example (as JSON)

```json
{
  "blocks": 206,
  "bounce_drops": 138,
  "bounces": 102,
  "clicks": 110,
  "deferred": 122,
  "delivered": 28,
  "invalid_emails": 240,
  "opens": 180,
  "processed": 58,
  "requests": 156,
  "spam_report_drops": 158,
  "spam_reports": 168,
  "unique_clicks": 70,
  "unique_opens": 152,
  "unsubscribe_drops": 210,
  "unsubscribes": 66
}
```

