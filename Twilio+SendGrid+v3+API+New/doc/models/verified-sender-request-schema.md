
# Verified Sender Request Schema

## Structure

`VerifiedSenderRequestSchema`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nickname` | `string` | Required | **Constraints**: *Maximum Length*: `100` |
| `fromEmail` | `string` | Required | **Constraints**: *Maximum Length*: `256` |
| `fromName` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `256` |
| `replyTo` | `string` | Required | **Constraints**: *Maximum Length*: `256` |
| `replyToName` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `256` |
| `address` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `100` |
| `address2` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `100` |
| `state` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `2` |
| `city` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `150` |
| `zip` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `10` |
| `country` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `100` |

## Example (as JSON)

```json
{
  "nickname": "Orders",
  "from_email": "orders@example.com",
  "from_name": "Example Orders",
  "reply_to": "orders@example.com",
  "reply_to_name": "Example Orders",
  "address": "1234 Fake St",
  "address2": "PO Box 1234",
  "state": "CA",
  "city": "San Francisco",
  "country": "USA",
  "zip": "94105"
}
```

