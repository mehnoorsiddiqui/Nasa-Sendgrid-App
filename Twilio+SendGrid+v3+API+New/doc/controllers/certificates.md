# Certificates

```ts
const certificatesController = new CertificatesController(client);
```

## Class Name

`CertificatesController`

## Methods

* [POST Sso-Certificates](../../doc/controllers/certificates.md#post-sso-certificates)
* [GET Sso-Integrations-Integration Id-Certificates](../../doc/controllers/certificates.md#get-sso-integrations-integration-id-certificates)
* [GET Sso-Certificates-Cert Id](../../doc/controllers/certificates.md#get-sso-certificates-cert-id)
* [PATCH Sso-Certificates-Cert Id](../../doc/controllers/certificates.md#patch-sso-certificates-cert-id)
* [DELETE Sso-Certificates-Cert Id](../../doc/controllers/certificates.md#delete-sso-certificates-cert-id)


# POST Sso-Certificates

**This endpoint allows you to create an SSO certificate.**

```ts
async pOSTSsoCertificates(
  body?: V3SsoCertificatesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SingleSignOnCertificateBody>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3SsoCertificatesRequest \| undefined`](../../doc/models/v3-sso-certificates-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SingleSignOnCertificateBody`](../../doc/models/single-sign-on-certificate-body.md)

## Example Usage

```ts
const contentType = null;
const body: V3SsoCertificatesRequest = {
  publicCertificate: '<your x509 certificate>',
  integrationId: 'b0b98502-9408-4b24-9e3d-31ed7cb15312',
};
body.enabled = false;

try {
  const { result, ...httpResponse } = await certificatesController.pOSTSsoCertificates(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "public_certificate": "<your x509 certificate>",
  "id": 66138975,
  "not_before": 1621289880,
  "not_after": 1621289880,
  "intergration_id": "b0b98502-9408-4b24-9e3d-31ed7cb15312"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 401 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 403 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 429 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 500 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |


# GET Sso-Integrations-Integration Id-Certificates

**This endpoint allows you to retrieve all your IdP configurations by configuration ID.**

The `integration_id` expected by this endpoint is the `id` returned in the response by the "Get All SSO Integrations" endpoint.

```ts
async gETSsoIntegrationsIntegrationIdCertificates(
  integrationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SingleSignOnCertificateBody[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `integrationId` | `string` | Template, Required | An ID that matches a certificate to a specific IdP integration. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SingleSignOnCertificateBody[]`](../../doc/models/single-sign-on-certificate-body.md)

## Example Usage

```ts
const integrationId = 'integration_id2';
try {
  const { result, ...httpResponse } = await certificatesController.gETSsoIntegrationsIntegrationIdCertificates(integrationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
[
  {
    "public_certificate": "<your x509 certificate>",
    "id": 66138975,
    "not_before": 1621289880,
    "not_after": 1621289880,
    "intergration_id": "b0b98502-9408-4b24-9e3d-31ed7cb15312"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 401 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 403 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 429 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 500 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |


# GET Sso-Certificates-Cert Id

**This endpoint allows you to retrieve an individual SSO certificate.**

```ts
async gETSsoCertificatesCertId(
  certId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SingleSignOnCertificateBody>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `certId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SingleSignOnCertificateBody`](../../doc/models/single-sign-on-certificate-body.md)

## Example Usage

```ts
const certId = 'cert_id0';
try {
  const { result, ...httpResponse } = await certificatesController.gETSsoCertificatesCertId(certId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "public_certificate": "<your x509 certificate>",
  "id": 66138975,
  "not_before": 1621289880,
  "not_after": 1621289880,
  "intergration_id": "b0b98502-9408-4b24-9e3d-31ed7cb15312"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 401 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 403 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 429 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 500 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |


# PATCH Sso-Certificates-Cert Id

**This endpoint allows you to update an existing certificate by ID.**

You can retrieve a certificate's ID from the response provided by the "Get All SSO Integrations" endpoint.

```ts
async pATCHSsoCertificatesCertId(
  certId: string,
  body?: V3SsoCertificatesRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `certId` | `string` | Template, Required | - |
| `body` | [`V3SsoCertificatesRequest1 \| undefined`](../../doc/models/v3-sso-certificates-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const certId = 'cert_id0';
const contentType = null;
const body: V3SsoCertificatesRequest1 = {};
body.publicCertificate = '<your x509 certificate>';
body.enabled = false;

try {
  const { result, ...httpResponse } = await certificatesController.pATCHSsoCertificatesCertId(certId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 401 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 403 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 429 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 500 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |


# DELETE Sso-Certificates-Cert Id

**This endpoint allows you to delete an SSO certificate.**

You can retrieve a certificate's ID from the response provided by the "Get All SSO Integrations" endpoint.

```ts
async dELETESsoCertificatesCertId(
  certId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SingleSignOnCertificateBody>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `certId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SingleSignOnCertificateBody`](../../doc/models/single-sign-on-certificate-body.md)

## Example Usage

```ts
const certId = 'cert_id0';
try {
  const { result, ...httpResponse } = await certificatesController.dELETESsoCertificatesCertId(certId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "public_certificate": "<your x509 certificate>",
  "id": 66138975,
  "not_before": 1621289880,
  "not_after": 1621289880,
  "intergration_id": "b0b98502-9408-4b24-9e3d-31ed7cb15312"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 401 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 403 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 429 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |
| 500 | - | [`SSOErrorResponse1Error`](../../doc/models/sso-error-response-1-error.md) |

