
# V3 Whitelabel Domains Request

## Structure

`V3WhitelabelDomainsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domain` | `string` | Required | Domain being authenticated. |
| `subdomain` | `string \| undefined` | Optional | The subdomain to use for this authenticated domain. |
| `username` | `string \| undefined` | Optional | The username associated with this domain. |
| `ips` | `string[] \| undefined` | Optional | The IP addresses that will be included in the custom SPF record for this authenticated domain. |
| `customSpf` | `boolean \| undefined` | Optional | Specify whether to use a custom SPF or allow SendGrid to manage your SPF. This option is only available to authenticated domains set up for manual security. |
| `mDefault` | `boolean \| undefined` | Optional | Whether to use this authenticated domain as the fallback if no authenticated domains match the sender's domain. |
| `automaticSecurity` | `boolean \| undefined` | Optional | Whether to allow SendGrid to manage your SPF records, DKIM keys, and DKIM key rotation. |
| `customDkimSelector` | `string \| undefined` | Optional | Add a custom DKIM selector. Accepts three letters or numbers. |

## Example (as JSON)

```json
{
  "domain": "example.com",
  "subdomain": "news",
  "username": "john@example.com",
  "ips": [
    "192.168.1.1",
    "192.168.1.2"
  ],
  "custom_spf": true,
  "default": true,
  "automatic_security": false
}
```

