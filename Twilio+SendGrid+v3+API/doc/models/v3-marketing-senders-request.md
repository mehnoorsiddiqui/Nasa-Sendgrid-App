
# V3 Marketing Senders Request

## Structure

`V3MarketingSendersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nickname` | `string` | Required | A nickname for the sender identity. Not used for sending. |
| `from` | [`From`](../../doc/models/from.md) | Required | - |
| `replyTo` | [`ReplyTo \| undefined`](../../doc/models/reply-to.md) | Optional | - |
| `address` | `string` | Required | The physical address of the sender identity. |
| `address2` | `string \| undefined` | Optional | Additional sender identity address information. |
| `city` | `string` | Required | The city of the sender identity. |
| `state` | `string \| undefined` | Optional | The state of the sender identity. |
| `zip` | `string \| undefined` | Optional | The zipcode of the sender identity. |
| `country` | `string` | Required | The country of the sender identity. |

## Example (as JSON)

```json
{
  "nickname": "Example Orders",
  "from": {
    "email": "orders@example.com",
    "name": "Example Orders"
  },
  "reply_to": {
    "email": "support@example.com",
    "name": "Example Support"
  },
  "address": "1234 Fake St.",
  "address_2": "",
  "city": "San Francisco",
  "state": "CA",
  "zip": "94105",
  "country": "United States"
}
```

