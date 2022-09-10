
# V3 Whitelabel Links Request

## Structure

`V3WhitelabelLinksRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domain` | `string` | Required | The root domain for the subdomain that you are creating the link branding for. This should match your FROM email address. |
| `subdomain` | `string \| undefined` | Optional | The subdomain to create the link branding for. Must be different from the subdomain you used for authenticating your domain. |
| `mDefault` | `boolean \| undefined` | Optional | Indicates if you want to use this link branding as the default or fallback. When setting a new default, the existing default link branding will have its default status removed automatically. |

## Example (as JSON)

```json
{
  "domain": "example.com",
  "subdomain": "mail",
  "default": true
}
```

