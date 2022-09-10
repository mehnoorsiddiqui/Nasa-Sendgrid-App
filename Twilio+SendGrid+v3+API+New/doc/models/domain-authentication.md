
# Domain Authentication

## Structure

`DomainAuthentication`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The ID of the authenticated domain. |
| `domain` | `string` | Required | The domain authenticated. |
| `subdomain` | `string \| undefined` | Optional | The subdomain that was used to create this authenticated domain. |
| `username` | `string` | Required | The username of the account that this authenticated domain is associated with. |
| `userId` | `number` | Required | The user_id of the account that this authenticated domain is associated with. |
| `ips` | `unknown[]` | Required | The IP addresses that are included in the SPF record for this authenticated domain. |
| `customSpf` | `boolean` | Required | Indicates if this authenticated domain uses custom SPF. |
| `mDefault` | `boolean` | Required | Indicates if this is the default domain. |
| `legacy` | `boolean` | Required | Indicates if this authenticated domain was created using the legacy whitelabel tool. If it is a legacy whitelabel, it will still function, but you'll need to create a new authenticated domain if you need to update it. |
| `automaticSecurity` | `boolean` | Required | Indicates if this authenticated domain uses automated security. |
| `valid` | `boolean` | Required | Indicates if this is a valid authenticated domain . |
| `dns` | [`Dns4`](../../doc/models/dns-4.md) | Required | - |

## Example (as JSON)

```json
{
  "id": 112,
  "domain": "domain6",
  "subdomain": null,
  "username": "username0",
  "user_id": 208,
  "ips": [
    {
      "key1": "val1",
      "key2": "val2"
    },
    {
      "key1": "val1",
      "key2": "val2"
    }
  ],
  "custom_spf": false,
  "default": false,
  "legacy": false,
  "automatic_security": false,
  "valid": false,
  "dns": {
    "mail_server": {
      "host": "host4",
      "type": "type2",
      "data": "data2",
      "valid": false
    },
    "subdomain_spf": {
      "host": "host4",
      "type": "type6",
      "data": "data4",
      "valid": false
    },
    "domain_spf": {
      "host": "host0",
      "type": "type2",
      "data": "data8",
      "valid": false
    },
    "dkim": {
      "host": "host0",
      "type": "type8",
      "data": "data8",
      "valid": false
    }
  }
}
```

