
# Dns 4

## Structure

`Dns4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mailServer` | [`MailServer2`](../../doc/models/mail-server-2.md) | Required | - |
| `subdomainSpf` | [`SubdomainSpf2`](../../doc/models/subdomain-spf-2.md) | Required | - |
| `domainSpf` | [`DomainSpf2`](../../doc/models/domain-spf-2.md) | Required | - |
| `dkim` | [`Dkim4`](../../doc/models/dkim-4.md) | Required | - |

## Example (as JSON)

```json
{
  "mail_server": {
    "host": "host8",
    "type": "type0",
    "data": "data0",
    "valid": false
  },
  "subdomain_spf": {
    "host": "host2",
    "type": "type4",
    "data": "data6",
    "valid": false
  },
  "domain_spf": {
    "host": "host2",
    "type": "type4",
    "data": "data6",
    "valid": false
  },
  "dkim": {
    "host": "host2",
    "type": "type4",
    "data": "data6",
    "valid": false
  }
}
```

