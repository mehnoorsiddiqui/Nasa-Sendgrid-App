
# Verified Sender Response Schema

## Structure

`VerifiedSenderResponseSchema`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `nickname` | `string \| undefined` | Optional | - |
| `fromEmail` | `string \| undefined` | Optional | - |
| `fromName` | `string \| undefined` | Optional | - |
| `replyTo` | `string \| undefined` | Optional | - |
| `replyToName` | `string \| undefined` | Optional | - |
| `address` | `string \| undefined` | Optional | - |
| `address2` | `string \| undefined` | Optional | - |
| `state` | `string \| undefined` | Optional | - |
| `city` | `string \| undefined` | Optional | - |
| `zip` | `string \| undefined` | Optional | - |
| `country` | `string \| undefined` | Optional | - |
| `verified` | `boolean \| undefined` | Optional | - |
| `locked` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 1234,
  "nickname": "Example Orders",
  "from_email": "orders@example.com",
  "from_name": "Example Orders",
  "reply_to": "orders@example.com",
  "reply_to_name": "Example Orders",
  "address": "1234 Fake St.",
  "address2": "PO Box 1234",
  "state": "CA",
  "city": "San Francisco",
  "country": "USA",
  "zip": "94105",
  "verified": true,
  "locked": false
}
```

