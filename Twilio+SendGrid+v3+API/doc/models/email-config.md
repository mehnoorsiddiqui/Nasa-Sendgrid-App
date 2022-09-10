
# Email Config

## Structure

`EmailConfig`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subject` | `string \| undefined` | Optional | The subject line of the Single Send. Do not include this field when using a `design_id`. |
| `htmlContent` | `string \| undefined` | Optional | The HTML content of the Single Send. Do not include this field when using a `design_id`. |
| `plainContent` | `string \| undefined` | Optional | The plain text content of the Single Send. Do not include this field when using a `design_id`. |
| `generatePlainContent` | `boolean \| undefined` | Optional | If set to `true`, `plain_content` is always generated from `html_content`. If set to false, `plain_content` is not altered.<br>**Default**: `true` |
| `designId` | `string \| undefined` | Optional | A `design_id` can be used in place of `html_content`, `plain_content`, and/or `subject`. You can retrieve a design's ID from the ["List Designs" endpoint](https://sendgrid.api-docs.io/v3.0/designs-api/list-designs) or by pulling it from the design's detail page URL in the Marketing Campaigns App. |
| `editor` | [`Editor4Enum \| undefined`](../../doc/models/editor-4-enum.md) | Optional | - |
| `suppressionGroupId` | `number \| undefined` | Optional | The ID of the Suppression Group to allow recipients to unsubscribe — you must provide this or the `custom_unsubscribe_url`. |
| `customUnsubscribeUrl` | `string \| undefined` | Optional | The URL allowing recipients to unsubscribe — you must provide this or the `suppression_group_id`. |
| `senderId` | `number \| undefined` | Optional | The ID of the verified Sender. You can retrieve a verified Sender's ID from the ["Get Verified Senders" endpoint](https://sendgrid.api-docs.io/v3.0/sender-verification/get-verified-senders) or by pulling it from the Sender's detail page URL in the SendGrid App. |
| `ipPool` | `string \| undefined` | Optional | The name of the IP Pool from which the Single Send emails are sent. |

## Example (as JSON)

```json
{
  "subject": null,
  "html_content": null,
  "plain_content": null,
  "generate_plain_content": null,
  "design_id": null,
  "editor": null,
  "suppression_group_id": null,
  "custom_unsubscribe_url": null,
  "sender_id": null,
  "ip_pool": null
}
```

