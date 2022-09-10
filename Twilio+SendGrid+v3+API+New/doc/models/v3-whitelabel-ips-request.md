
# V3 Whitelabel Ips Request

## Structure

`V3WhitelabelIpsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ip` | `string` | Required | The IP address for which you want to set up reverse DNS. |
| `subdomain` | `string \| undefined` | Optional | The subdomain that will be used to send emails from the IP address. This should be the same as the subdomain used to set up an authenticated domain. |
| `domain` | `string` | Required | The root, or sending, domain that will be used to send message from the IP address. |

## Example (as JSON)

```json
{
  "ip": "192.168.1.1",
  "subdomain": "email",
  "domain": "example.com"
}
```

