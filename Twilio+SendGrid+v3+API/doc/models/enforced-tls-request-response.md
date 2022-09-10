
# Enforced TLS Request Response

## Structure

`EnforcedTLSRequestResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requireTls` | `boolean \| undefined` | Optional | Indicates if you want to require your recipients to support TLS. |
| `requireValidCert` | `boolean \| undefined` | Optional | Indicates if you want to require your recipients to have a valid certificate. |
| `version` | [`VersionEnum \| undefined`](../../doc/models/version-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "require_tls": null,
  "require_valid_cert": null,
  "version": null
}
```

