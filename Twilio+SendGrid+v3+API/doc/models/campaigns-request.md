
# Campaigns Request

## Structure

`CampaignsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string` | Required | The display title of your campaign. This will be viewable by you in the Marketing Campaigns UI. |
| `subject` | `string \| undefined` | Optional | The subject of your campaign that your recipients will see. |
| `senderId` | `number \| undefined` | Optional | The ID of the "sender" identity that you have created. Your recipients will see this as the "from" on your marketing emails. |
| `listIds` | `number[] \| undefined` | Optional | The IDs of the lists you are sending this campaign to. You can have both segment IDs and list IDs |
| `segmentIds` | `number[] \| undefined` | Optional | The segment IDs that you are sending this list to. You can have both segment IDs and list IDs. Segments are limited to 10 segment IDs. |
| `categories` | `string[] \| undefined` | Optional | The categories you would like associated to this campaign. |
| `suppressionGroupId` | `number \| undefined` | Optional | The suppression group that this marketing email belongs to, allowing recipients to opt-out of emails of this type. |
| `customUnsubscribeUrl` | `string \| undefined` | Optional | This is the url of the custom unsubscribe page that you provide for customers to unsubscribe from your suppression groups. |
| `ipPool` | `string \| undefined` | Optional | The pool of IPs that you would like to send this email from. |
| `htmlContent` | `string \| undefined` | Optional | The HTML of your marketing email. |
| `plainContent` | `string \| undefined` | Optional | The plain text content of your emails. |
| `editor` | [`EditorEnum \| undefined`](../../doc/models/editor-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": 986724,
  "title": "May Newsletter",
  "subject": "New Products for Summer!",
  "sender_id": 124451,
  "list_ids": [
    110,
    124
  ],
  "segment_ids": [
    110
  ],
  "categories": [
    "summer line"
  ],
  "suppression_group_id": 42,
  "custom_unsubscribe_url": "",
  "ip_pool": "marketing",
  "html_content": "<html><head><title></title></head><body><p>Check out our summer line!</p></body></html>",
  "plain_content": "Check out our summer line!",
  "status": "Draft"
}
```

