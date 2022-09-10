
# Single Sign on Certificate Body

## Structure

`SingleSignOnCertificateBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publicCertificate` | `string \| undefined` | Optional | This certificate is used by Twilio SendGrid to verify that SAML requests are coming from Okta. This is called the X509 certificate in the Twilio SendGrid UI. |
| `id` | `number \| undefined` | Optional | A unique ID assigned to the certificate by SendGrid. |
| `notBefore` | `number \| undefined` | Optional | A unix timestamp (e.g., 1603915954) that indicates the time before which the certificate is not valid. |
| `notAfter` | `number \| undefined` | Optional | A unix timestamp (e.g., 1603915954) that indicates the time after which the certificate is no longer valid. |
| `intergrationId` | `string \| undefined` | Optional | An ID that matches a certificate to a specific IdP integration. |

## Example (as JSON)

```json
{
  "public_certificate": "<your x509 certificate>",
  "id": 66138975,
  "not_before": 1621289880,
  "not_after": 1621289880,
  "intergration_id": "b0b98502-9408-4b24-9e3d-31ed7cb15312"
}
```

