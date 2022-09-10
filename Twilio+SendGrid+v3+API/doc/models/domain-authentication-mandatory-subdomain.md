
# Domain Authentication Mandatory Subdomain

## Structure

`DomainAuthenticationMandatorySubdomain`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The ID of the authenticated domain. |
| `userId` | `number` | Required | The ID of the user that this domain is associated with. |
| `subdomain` | `string` | Required | The subdomain to use for this authenticated domain. |
| `domain` | `string` | Required | The domain to be authenticated. |
| `username` | `string` | Required | The username that this domain will be associated with. |
| `ips` | `string[]` | Required | The IPs to be included in the custom SPF record for this authenticated domain. |
| `customSpf` | `boolean` | Required | Indicates whether this authenticated domain uses custom SPF. |
| `mDefault` | `boolean` | Required | Indicates if this is the default authenticated domain. |
| `legacy` | `boolean` | Required | Indicates if this authenticated domain was created using the legacy whitelabel tool. If it is a legacy whitelabel, it will still function, but you'll need to create a new authenticated domain if you need to update it. |
| `automaticSecurity` | `boolean` | Required | Indicates if this authenticated domain uses automated security. |
| `valid` | `boolean` | Required | Indicates if this is a valid authenticated domain. |
| `dns` | [`Dns3`](../../doc/models/dns-3.md) | Required | - |

## Example (as JSON)

```json
{
  "id": 45373692,
  "user_id": 66036447,
  "subdomain": "sub",
  "domain": "example.com",
  "username": "jdoe",
  "ips": [
    "127.0.0.1"
  ],
  "custom_spf": false,
  "default": true,
  "legacy": false,
  "automatic_security": true,
  "valid": true,
  "dns": {
    "mail_cname": {
      "valid": true,
      "type": "cname",
      "host": "mail.example.com",
      "data": "u7.wl.sendgrid.net"
    },
    "dkim1": {
      "valid": true,
      "type": "cname",
      "host": "s1._domainkey.example.com",
      "data": "s1._domainkey.u7.wl.sendgrid.net"
    },
    "dkim2": {
      "valid": true,
      "type": "cname",
      "host": "s2._domainkey.example.com",
      "data": "s2._domainkey.u7.wl.sendgrid.net"
    }
  }
}
```

