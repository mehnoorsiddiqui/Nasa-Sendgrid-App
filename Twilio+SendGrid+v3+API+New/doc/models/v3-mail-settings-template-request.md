
# V3 Mail Settings Template Request

## Structure

`V3MailSettingsTemplateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean \| undefined` | Optional | Indicates if you want to enable the legacy email template mail setting. |
| `htmlContent` | `string \| undefined` | Optional | The new HTML content for your legacy email template. |

## Example (as JSON)

```json
{
  "enabled": true,
  "html_content": "<% body %>"
}
```

