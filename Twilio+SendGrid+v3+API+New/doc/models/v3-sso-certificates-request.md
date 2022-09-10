
# V3 Sso Certificates Request

## Structure

`V3SsoCertificatesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publicCertificate` | `string` | Required | This public certificate allows SendGrid to verify that SAML requests it receives are signed by an IdP that it recognizes. |
| `enabled` | `boolean \| undefined` | Optional | Indicates if the certificate is enabled. |
| `integrationId` | `string` | Required | An ID that matches a certificate to a specific IdP integration. This is the `id` returned by the "Get All SSO Integrations" endpoint. |

## Example (as JSON)

```json
{
  "public_certificate": "<your x509 certificate>",
  "enabled": false,
  "integration_id": "b0b98502-9408-4b24-9e3d-31ed7cb15312"
}
```

