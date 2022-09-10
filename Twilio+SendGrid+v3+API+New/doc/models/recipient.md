
# Recipient

## Structure

`Recipient`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The ID of this recipient. |
| `createdAt` | `number \| undefined` | Optional | The time this record was created in your contactdb, in unixtime. |
| `customFields` | [`ContactDBCustomfieldschema[] \| undefined`](../../doc/models/contact-db-customfieldschema.md) | Optional | The custom fields assigned to this recipient and their values. |
| `email` | `string` | Required | The email address of this recipient. This is a default custom field that SendGrid provides. |
| `firstName` | `string \| undefined` | Optional | The first name of this recipient. This is a default custom field that SendGrid provides. |
| `lastName` | `string \| undefined` | Optional | The last name of the recipient. |
| `lastClicked` | `number \| undefined` | Optional | The last time this recipient clicked a link from one of your campaigns, in unixtime. |
| `lastEmailed` | `number \| undefined` | Optional | The last time this user was emailed by one of your campaigns, in unixtime. |
| `lastOpened` | `number \| undefined` | Optional | The last time this recipient opened an email from you, in unixtime. |
| `updatedAt` | `number \| undefined` | Optional | The last update date for this recipient's record. |

## Example (as JSON)

```json
{
  "id": null,
  "created_at": null,
  "custom_fields": null,
  "email": "email6",
  "first_name": null,
  "last_name": null,
  "last_clicked": null,
  "last_emailed": null,
  "last_opened": null,
  "updated_at": null
}
```

