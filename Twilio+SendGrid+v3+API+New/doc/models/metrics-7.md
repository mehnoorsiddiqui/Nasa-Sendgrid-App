
# Metrics 7

## Structure

`Metrics7`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clicks` | `number \| undefined` | Optional | The number of links that were clicked in your emails. |
| `uniqueClicks` | `number \| undefined` | Optional | The number of unique recipients who clicked links in your emails. |
| `opens` | `number \| undefined` | Optional | The total number of times your emails were opened by recipients. |
| `uniqueOpens` | `number \| undefined` | Optional | The number of unique recipients who opened your emails. |
| `blocks` | `number \| undefined` | Optional | The number of emails that were not allowed to be delivered by ISPs. |
| `bounces` | `number \| undefined` | Optional | The number of emails that bounced instead of being delivered. |
| `deferred` | `number \| undefined` | Optional | The number of emails that temporarily could not be delivered. |
| `delivered` | `number \| undefined` | Optional | The number of emails SendGrid was able to confirm were actually delivered to a recipient. |
| `drops` | `number \| undefined` | Optional | The number of emails that were not delivered due to the recipient email address being on a suppression list. |
| `requests` | `number \| undefined` | Optional | The number of emails that were requested to be delivered. |
| `processed` | `number \| undefined` | Optional | Requests from your website, application, or mail client via SMTP Relay or the Web API that SendGrid processed. |
| `spamReports` | `number \| undefined` | Optional | The number of recipients who marked your email as spam. |

## Example (as JSON)

```json
{
  "clicks": null,
  "unique_clicks": null,
  "opens": null,
  "unique_opens": null,
  "blocks": null,
  "bounces": null,
  "deferred": null,
  "delivered": null,
  "drops": null,
  "requests": null,
  "processed": null,
  "spam_reports": null
}
```

