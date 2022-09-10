
# V3 Subusers Request

## Structure

`V3SubusersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Required | The username for this subuser. |
| `email` | `string` | Required | The email address of the subuser. |
| `password` | `string` | Required | The password this subuser will use when logging into SendGrid. |
| `ips` | `string[]` | Required | The IP addresses that should be assigned to this subuser. |

## Example (as JSON)

```json
{
  "username": "John@example.com",
  "email": "John@example.com",
  "password": "johns_password",
  "ips": [
    "1.1.1.1",
    "2.2.2.2"
  ]
}
```

