
# Mail Settings Template

## Structure

`MailSettingsTemplate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean \| undefined` | Optional | Indicates if the legacy email template setting is enabled. |
| `htmlContent` | `string \| undefined` | Optional | The HTML content that you want to use for your legacy email template. |

## Example (as JSON)

```json
{
  "enabled": false,
  "html_content": "<p><% body %>Example</p>\n"
}
```

