
# Updatea Campaignrequest

## Structure

`UpdateaCampaignrequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string` | Required | The title of the campaign. |
| `subject` | `string` | Required | The subject line for your campaign. |
| `categories` | `string[]` | Required | The categories you want to tag on this campaign. |
| `htmlContent` | `string` | Required | The HTML content of this campaign. |
| `plainContent` | `string` | Required | The plain content of this campaign. |

## Example (as JSON)

```json
{
  "title": "May Newsletter",
  "subject": "New Products for Summer!",
  "categories": [
    "summer line"
  ],
  "html_content": "<html><head><title></title></head><body><p>Check out our summer line!</p></body></html>",
  "plain_content": "Check out our summer line!"
}
```

