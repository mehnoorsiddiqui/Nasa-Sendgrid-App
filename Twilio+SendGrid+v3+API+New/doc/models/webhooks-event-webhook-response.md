
# Webhooks Event Webhook Response

## Structure

`WebhooksEventWebhookResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean` | Required | Indicates if the event webhook is enabled. |
| `url` | `string` | Required | The URL that you want the event webhook to POST to. |
| `groupResubscribe` | `boolean` | Required | Recipient resubscribes to specific group by updating preferences. You need to enable Subscription Tracking for getting this type of event. |
| `delivered` | `boolean` | Required | Message has been successfully delivered to the receiving server. |
| `groupUnsubscribe` | `boolean` | Required | Recipient unsubscribe from specific group, by either direct link or updating preferences. You need to enable Subscription Tracking for getting this type of event. |
| `spamReport` | `boolean` | Required | Recipient marked a message as spam. |
| `bounce` | `boolean` | Required | Receiving server could not or would not accept message. |
| `deferred` | `boolean` | Required | Recipient's email server temporarily rejected message. |
| `unsubscribe` | `boolean` | Required | Recipient clicked on message's subscription management link. You need to enable Subscription Tracking for getting this type of event. |
| `processed` | `boolean` | Required | Message has been received and is ready to be delivered. |
| `open` | `boolean` | Required | Recipient has opened the HTML message. You need to enable Open Tracking for getting this type of event. |
| `click` | `boolean` | Required | Recipient clicked on a link within the message. You need to enable Click Tracking for getting this type of event. |
| `dropped` | `boolean` | Required | You may see the following drop reasons: Invalid SMTPAPI header, Spam Content (if spam checker app enabled), Unsubscribed Address, Bounced Address, Spam Reporting Address, Invalid, Recipient List over Package Quota |
| `oauthClientId` | `string \| undefined` | Optional | The client ID Twilio SendGrid sends to your OAuth server or service provider to generate an OAuth access token. |
| `oauthTokenUrl` | `string \| undefined` | Optional | The URL where Twilio SendGrid sends the Client ID and Client Secret to generate an access token. This should be your OAuth server or service provider. |

## Example (as JSON)

```json
{
  "enabled": false,
  "url": "url4",
  "group_resubscribe": false,
  "delivered": false,
  "group_unsubscribe": false,
  "spam_report": false,
  "bounce": false,
  "deferred": false,
  "unsubscribe": false,
  "processed": false,
  "open": false,
  "click": false,
  "dropped": false,
  "oauth_client_id": null,
  "oauth_token_url": null
}
```

