
# Subuser POST

## Structure

`SubuserPOST`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Required | The username of the subuser. |
| `userId` | `number` | Required | The user ID for this subuser. |
| `email` | `string` | Required | The email address for this subuser. |
| `signupSessionToken` | `string \| undefined` | Optional | - |
| `authorizationToken` | `string \| undefined` | Optional | - |
| `creditAllocation` | [`CreditAllocation \| undefined`](../../doc/models/credit-allocation.md) | Optional | - |

## Example (as JSON)

```json
{
  "username": "example_subuser",
  "user_id": 1234,
  "email": "example@example.com",
  "signup_session_token": "",
  "authorization_token": "",
  "credit_allocation": {
    "type": "unlimited"
  }
}
```

