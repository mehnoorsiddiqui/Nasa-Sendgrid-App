
# Campaigns Response

## Structure

`CampaignsResponse`

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
| `status` | `string` | Required | The status of your campaign. |
| `id` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "title": "title4",
  "subject": null,
  "sender_id": null,
  "list_ids": null,
  "segment_ids": null,
  "categories": null,
  "suppression_group_id": null,
  "custom_unsubscribe_url": null,
  "ip_pool": null,
  "html_content": null,
  "plain_content": null,
  "editor": null,
  "status": "status8",
  "id": null
}
```

