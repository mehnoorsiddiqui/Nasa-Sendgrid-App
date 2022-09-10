
# Domain Authentication 200 Response

## Structure

`DomainAuthentication200Response`

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
| `subusers` | [`Subuser[] \| undefined`](../../doc/models/subuser.md) | Optional | - |
| `lastValidationAttemptAt` | `number \| undefined` | Optional | A Unix epoch timestamp representing the last time of a validation attempt. |

## Example (as JSON)

```json
{
  "id": 60.0,
  "user_id": 66.08,
  "subdomain": "subdomain4",
  "domain": "domain6",
  "username": "username0",
  "ips": [
    "ips4",
    "ips5"
  ],
  "custom_spf": false,
  "default": false,
  "legacy": false,
  "automatic_security": false,
  "valid": false,
  "dns": {
    "mail_cname": {
      "valid": false,
      "type": "type4",
      "host": "host2",
      "data": "data6"
    },
    "dkim1": {
      "valid": false,
      "type": "type0",
      "host": "host8",
      "data": "data0"
    },
    "dkim2": {
      "valid": false,
      "type": "type6",
      "host": "host4",
      "data": "data4"
    }
  },
  "subusers": null,
  "last_validation_attempt_at": null
}
```

