
# V3 Marketing Test Send Email Request

## Structure

`V3MarketingTestSendEmailRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Required | The ID of the template that you would like to use. If you use a template that contains a subject and content (either text or HTML), then those values specified at the personalizations or message level will not be used. |
| `versionIdOverride` | `string \| undefined` | Optional | You can override the active template with an alternative template version by passing the version ID in this field. If this field is blank, the active template version will be used. |
| `senderId` | `number \| undefined` | Optional | This ID must belong to a verified sender. Alternatively, you may supply a `from_address` email. |
| `customUnsubscribeUrl` | `string \| undefined` | Optional | A custom unsubscribe URL. |
| `suppressionGroupId` | `number \| undefined` | Optional | - |
| `emails` | `string[]` | Required | An array of email addresses you want to send the test message to.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10`, *Unique Items Required* |
| `fromAddress` | `string \| undefined` | Optional | You can either specify this address or specify a verified sender ID. |

## Example (as JSON)

```json
{
  "template_id": "f8f77db8-b9fa-4b3c-9ee8-de3d582016b8",
  "version_id_override": "7734f757-8eb8-4d22-b7f0-779a72f32986",
  "sender_id": 6060664,
  "custom_unsubscribe_url": "https://example.com/unsubscribe",
  "suppression_group_id": 21865513,
  "emails": [
    "janedoe@example.com",
    "tiramisu@example.com",
    "bundt@example.com"
  ]
}
```

