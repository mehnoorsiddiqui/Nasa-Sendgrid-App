
# Link Branding 200 Response

## Structure

`LinkBranding200Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The ID of the branded link. |
| `domain` | `string` | Required | The root domain of the branded link. |
| `subdomain` | `string \| undefined` | Optional | The subdomain used to generate the DNS records for this link branding. This subdomain must be different from the subdomain used for your authenticated domain. |
| `username` | `string` | Required | The username of the account that this link branding is associated with. |
| `userId` | `number` | Required | The ID of the user that this link branding is associated with. |
| `mDefault` | `boolean` | Required | Indicates if this is the default link branding. |
| `valid` | `boolean` | Required | Indicates if this link branding is valid. |
| `legacy` | `boolean` | Required | Indicates if this link branding was created using the legacy whitelabel tool. If it is a legacy whitelabel, it will still function, but you'll need to create new link branding if you need to update it. |
| `dns` | [`Dns5`](../../doc/models/dns-5.md) | Required | - |

## Example (as JSON)

```json
{
  "id": 112,
  "domain": "domain6",
  "subdomain": null,
  "username": "username0",
  "user_id": 208,
  "default": false,
  "valid": false,
  "legacy": false,
  "dns": {
    "domain_cname": {
      "valid": false,
      "type": "mx",
      "host": "host0",
      "data": "data8"
    },
    "owner_cname": null
  }
}
```

