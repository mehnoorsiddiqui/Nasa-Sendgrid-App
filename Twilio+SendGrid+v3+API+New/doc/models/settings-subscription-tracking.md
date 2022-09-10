
# Settings Subscription Tracking

## Structure

`SettingsSubscriptionTracking`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean \| undefined` | Optional | Indicates if subscription tracking is enabled. |
| `htmlContent` | `string \| undefined` | Optional | The information and HTML for your unsubscribe link. |
| `landing` | `string \| undefined` | Optional | The HTML that will be displayed on the page that your customers will see after clicking unsubscribe, hosted on SendGrid’s server. |
| `plainContent` | `string \| undefined` | Optional | The information in plain text for your unsubscribe link. You should have the “<% %>” tag in your content, otherwise the user will have no URL for unsubscribing. |
| `replace` | `string \| undefined` | Optional | Your custom defined replacement tag for your templates. Use this tag to place your unsubscribe content anywhere in your emailtemplate. |
| `url` | `string \| undefined` | Optional | The URL where you would like your users sent to unsubscribe. |

## Example (as JSON)

```json
{
  "enabled": null,
  "html_content": null,
  "landing": null,
  "plain_content": null,
  "replace": null,
  "url": null
}
```

