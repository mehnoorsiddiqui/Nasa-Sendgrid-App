
# Sender ID Request

## Structure

`SenderIDRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nickname` | `string \| undefined` | Optional | A nickname for the sender identity. Not used for sending. |
| `from` | [`From1 \| undefined`](../../doc/models/from-1.md) | Optional | - |
| `replyTo` | [`ReplyTo1 \| undefined`](../../doc/models/reply-to-1.md) | Optional | - |
| `address` | `string \| undefined` | Optional | The physical address of the sender identity. |
| `address2` | `string \| undefined` | Optional | Additional sender identity address information. |
| `city` | `string \| undefined` | Optional | The city of the sender identity. |
| `state` | `string \| undefined` | Optional | The state of the sender identity. |
| `zip` | `string \| undefined` | Optional | The zipcode of the sender identity. |
| `country` | `string \| undefined` | Optional | The country of the sender identity. |

## Example (as JSON)

```json
{
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
  "country": "United States"
}
```

