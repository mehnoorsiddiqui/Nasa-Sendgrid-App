
# Sender ID

## Structure

`SenderID`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nickname` | `string` | Required | A nickname for the sender identity. Not used for sending. |
| `from` | [`From1 \| undefined`](../../doc/models/from-1.md) | Optional | - |
| `replyTo` | [`ReplyTo1 \| undefined`](../../doc/models/reply-to-1.md) | Optional | - |
| `address` | `string` | Required | The physical address of the sender identity. |
| `address2` | `string \| undefined` | Optional | Additional sender identity address information. |
| `city` | `string` | Required | The city of the sender identity. |
| `state` | `string \| undefined` | Optional | The state of the sender identity. |
| `zip` | `string \| undefined` | Optional | The zipcode of the sender identity. |
| `country` | `string` | Required | The country of the sender identity. |
| `id` | `number \| undefined` | Optional | The unique identifier of the sender identity. |
| `verified` | `boolean \| undefined` | Optional | If the sender identity is verified or not. Only verified sender identities can be used to send email. |
| `updatedAt` | `number \| undefined` | Optional | The time the sender identity was last updated. |
| `createdAt` | `number \| undefined` | Optional | The time the sender identity was created. |
| `locked` | `boolean \| undefined` | Optional | True when the sender id is associated to a campaign in the Draft, Scheduled, or In Progress status. You cannot update or delete a locked sender identity. |

## Example (as JSON)

```json
{
  "id": 1,
  "nickname": "My Sender ID",
  "from": {
    "email": "from@example.com",
    "name": "Example INC"
  },
  "reply_to": {
    "email": "replyto@example.com",
    "name": "Example INC"
  },
  "address": "123 Elm St.",
  "address_2": "Apt. 456",
  "city": "Denver",
  "state": "Colorado",
  "zip": "80202",
  "country": "United States",
  "verified": true,
  "updated_at": 1449872165,
  "created_at": 1449872165,
  "locked": false
}
```

