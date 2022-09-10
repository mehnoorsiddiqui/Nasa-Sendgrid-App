
# Subscription Tracking 2

## Structure

`SubscriptionTracking2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enable` | `boolean \| undefined` | Optional | Indicates if this setting is enabled. |
| `text` | `string \| undefined` | Optional | Text to be appended to the email with the subscription tracking link. You may control where the link is by using the tag <% %> |
| `html` | `string \| undefined` | Optional | HTML to be appended to the email with the subscription tracking link. You may control where the link is by using the tag <% %> |
| `substitutionTag` | `string \| undefined` | Optional | A tag that will be replaced with the unsubscribe URL. for example: `[unsubscribe_url]`. If this parameter is used, it will override both the `text` and `html` parameters. The URL of the link will be placed at the substitution tag’s location with no additional formatting. |

## Example (as JSON)

```json
{
  "enable": null,
  "text": null,
  "html": null,
  "substitution_tag": null
}
```

