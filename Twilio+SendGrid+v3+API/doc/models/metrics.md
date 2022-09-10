
# Metrics

## Structure

`Metrics`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `blocks` | `number \| undefined` | Optional | The number of emails that were not allowed to be delivered by ISPs. |
| `bounceDrops` | `number \| undefined` | Optional | The number of emails that were dropped because of a bounce. |
| `bounces` | `number \| undefined` | Optional | The number of emails that bounced instead of being delivered. |
| `clicks` | `number \| undefined` | Optional | The number of links that were clicked in your emails. |
| `deferred` | `number \| undefined` | Optional | The number of emails that temporarily could not be delivered. |
| `delivered` | `number \| undefined` | Optional | The number of emails SendGrid was able to confirm were actually delivered to a recipient. |
| `invalidEmails` | `number \| undefined` | Optional | The number of recipients who had malformed email addresses or whose mail provider reported the address as invalid. |
| `opens` | `number \| undefined` | Optional | The total number of times your emails were opened by recipients. |
| `processed` | `number \| undefined` | Optional | Requests from your website, application, or mail client via SMTP Relay or the API that SendGrid processed. |
| `requests` | `number \| undefined` | Optional | The number of emails that were requested to be delivered. |
| `spamReportDrops` | `number \| undefined` | Optional | The number of emails that were dropped due to a recipient previously marking your emails as spam. |
| `spamReports` | `number \| undefined` | Optional | The number of recipients who marked your email as spam. |
| `uniqueClicks` | `number \| undefined` | Optional | The number of unique recipients who clicked links in your emails. |
| `uniqueOpens` | `number \| undefined` | Optional | The number of unique recipients who opened your emails. |
| `unsubscribeDrops` | `number \| undefined` | Optional | The number of emails dropped due to a recipient unsubscribing from your emails. |
| `unsubscribes` | `number \| undefined` | Optional | The number of recipients who unsubscribed from your emails. |

## Example (as JSON)

```json
{
  "blocks": null,
  "bounce_drops": null,
  "bounces": null,
  "clicks": null,
  "deferred": null,
  "delivered": null,
  "invalid_emails": null,
  "opens": null,
  "processed": null,
  "requests": null,
  "spam_report_drops": null,
  "spam_reports": null,
  "unique_clicks": null,
  "unique_opens": null,
  "unsubscribe_drops": null,
  "unsubscribes": null
}
```

