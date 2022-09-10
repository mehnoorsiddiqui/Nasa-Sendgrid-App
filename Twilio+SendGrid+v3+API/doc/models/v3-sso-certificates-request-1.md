
# V3 Sso Certificates Request 1

## Structure

`V3SsoCertificatesRequest1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publicCertificate` | `string \| undefined` | Optional | This public certificate allows SendGrid to verify that SAML requests it receives are signed by an IdP that it recognizes. |
| `enabled` | `boolean \| undefined` | Optional | Indicates whether or not the certificate is enabled. |
| `integrationId` | `string \| undefined` | Optional | An ID that matches a certificate to a specific IdP integration. |

## Example (as JSON)

```json
{
  "public_certificate": "<your x509 certificate>",
  "enabled": false,
  "intergration_id": "b0b98502-9408-4b24-9e3d-31ed7cb15312"
}
```

