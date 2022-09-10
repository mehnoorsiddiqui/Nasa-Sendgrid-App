
# Reverse DNS

## Structure

`ReverseDNS`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The ID of the Reverse DNS. |
| `ip` | `string` | Required | The IP address that this Reverse DNS was created for. |
| `rdns` | `string` | Required | The reverse DNS record for the IP address. This points to the Reverse DNS subdomain. |
| `users` | [`User[]`](../../doc/models/user.md) | Required | The users who are able to send mail from the IP address. |
| `subdomain` | `string \| undefined` | Optional | The subdomain created for this reverse DNS. This is where the rDNS record points. |
| `domain` | `string` | Required | The root, or sending, domain. |
| `valid` | `boolean` | Required | Indicates if this is a valid Reverse DNS. |
| `legacy` | `boolean` | Required | Indicates if this Reverse DNS was created using the legacy whitelabel tool. If it is a legacy whitelabel, it will still function, but you'll need to create a new Reverse DNS if you need to update it. |
| `lastValidationAttemptAt` | `number \| undefined` | Optional | A Unix epoch timestamp representing the last time of a validation attempt. |
| `aRecord` | [`ARecord`](../../doc/models/a-record.md) | Required | - |

## Example (as JSON)

```json
{
  "id": 1,
  "ip": "192.168.1.1",
  "rdns": "o1.email.example.com",
  "users": [
    {
      "username": "john@example.com",
      "user_id": 7
    },
    {
      "username": "jane@example.com",
      "user_id": 8
    }
  ],
  "subdomain": "email",
  "domain": "example.com",
  "valid": true,
  "legacy": false,
  "a_record": {
    "valid": true,
    "type": "a",
    "host": "o1.email.example.com",
    "data": "192.168.1.1"
  }
}
```

