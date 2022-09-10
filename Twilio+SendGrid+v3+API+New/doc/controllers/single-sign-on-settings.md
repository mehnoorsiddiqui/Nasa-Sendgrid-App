# Single Sign-On Settings

```ts
const singleSignOnSettingsController = new SingleSignOnSettingsController(client);
```

## Class Name

`SingleSignOnSettingsController`

## Methods

* [POST Sso-Integrations](../../doc/controllers/single-sign-on-settings.md#post-sso-integrations)
* [GET Sso-Integrations](../../doc/controllers/single-sign-on-settings.md#get-sso-integrations)
* [GET Sso-Integrations-Id](../../doc/controllers/single-sign-on-settings.md#get-sso-integrations-id)
* [PATCH Sso-Integrations-Id](../../doc/controllers/single-sign-on-settings.md#patch-sso-integrations-id)
* [DELETE Sso-Integrations-Id](../../doc/controllers/single-sign-on-settings.md#delete-sso-integrations-id)


# POST Sso-Integrations

**This endpoint allows you to create an SSO integration.**

```ts
async pOSTSsoIntegrations(
  body?: CreateIntegrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SingleSignOnIntegration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateIntegrationRequest \| undefined`](../../doc/models/create-integration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SingleSignOnIntegration`](../../doc/models/single-sign-on-integration.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await singleSignOnSettingsController.pOSTSsoIntegrations();
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
  "name": "Twilio SendGrid",
  "enabled": true,
  "signin_url": "https://example.okta.com/home/examplecompany/yokpGWsmpRUcuvXFb4x6/nfaVADNhuHvvReAEV4x6",
  "signout_url": "https://example.okta.com/login/signout?fromURI=exampleappurl",
  "entity_id": "http://www.okta.com/${org.externalKey}",
  "last_updated": 1621288964
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


# GET Sso-Integrations

**This endpoint allows you to retrieve all SSO integrations tied to your Twilio SendGrid account.**

The IDs returned by this endpoint can be used by the APIs additional endpoints to modify your SSO integrations.

```ts
async gETSsoIntegrations(
  si?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SingleSignOnIntegration[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `si` | `boolean \| undefined` | Query, Optional | If this parameter is set to `true`, the response will include the `completed_integration` field. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SingleSignOnIntegration[]`](../../doc/models/single-sign-on-integration.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await singleSignOnSettingsController.gETSsoIntegrations();
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
    "name": "Twilio SendGrid",
    "enabled": true,
    "signin_url": "https://example.okta.com/home/examplecompany/yokpGWsmpRUcuvXFb4x6/nfaVADNhuHvvReAEV4x6",
    "signout_url": "https://example.okta.com/login/signout?fromURI=exampleappurl",
    "entity_id": "http://www.okta.com/${org.externalKey}",
    "last_updated": 1621288520,
    "completed_integration": true,
    "id": "b0b98502-9408-4b24-9e3d-31ed7cb15312",
    "single_signon_url": "https://api.sendgrid.com/v3/public/sso/saml/response/id/b0b98502-9408-4b24-9e3d-31ed7cb15312",
    "audience_url": "https://api.sendgrid.com/v3/public/sso/saml/response/id/b0b98502-9408-4b24-9e3d-31ed7cb15312"
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


# GET Sso-Integrations-Id

**This endpoint allows you to retrieve an SSO integration by ID.**

You can retrieve the IDs for your configurations from the response provided by the "Get All SSO Integrations" endpoint.

```ts
async gETSsoIntegrationsId(
  id: string,
  si?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SingleSignOnIntegration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `si` | `boolean \| undefined` | Query, Optional | If this parameter is set to `true`, the response will include the `completed_integration` field. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SingleSignOnIntegration`](../../doc/models/single-sign-on-integration.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await singleSignOnSettingsController.gETSsoIntegrationsId(id);
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
  "name": "Twilio SendGrid",
  "enabled": true,
  "signin_url": "https://example.okta.com/home/examplecompany/yokpGWsmpRUcuvXFb4x6/nfaVADNhuHvvReAEV4x6",
  "signout_url": "https://example.okta.com/login/signout?fromURI=exampleappurl",
  "entity_id": "http://www.okta.com/${org.externalKey}",
  "last_updated": 1621288964,
  "completed_integration": true,
  "id": "b0b98502-9408-4b24-9e3d-31ed7cb15312",
  "audience_url": "https://api.sendgrid.com/v3/public/sso/saml/response/id/b0b98502-9408-4b24-9e3d-31ed7cb15312"
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


# PATCH Sso-Integrations-Id

**This endpoint allows you to modify an exisiting SSO integration.**

You can retrieve the IDs for your configurations from the response provided by the "Get All SSO Integrations" endpoint.

```ts
async pATCHSsoIntegrationsId(
  id: string,
  si?: boolean,
  body?: CreateIntegrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SingleSignOnIntegration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `si` | `boolean \| undefined` | Query, Optional | If this parameter is set to `true`, the response will include the `completed_integration` field. |
| `body` | [`CreateIntegrationRequest \| undefined`](../../doc/models/create-integration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SingleSignOnIntegration`](../../doc/models/single-sign-on-integration.md)

## Example Usage

```ts
const id = 'id0';
const contentType = null;
try {
  const { result, ...httpResponse } = await singleSignOnSettingsController.pATCHSsoIntegrationsId(id);
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
  "name": "Twilio SendGrid",
  "enabled": true,
  "signin_url": "https://example.okta.com/home/examplecompany/yokpGWsmpRUcuvXFb4x6/nfaVADNhuHvvReAEV4x6",
  "signout_url": "https://example.okta.com/login/signout?fromURI=exampleappurl",
  "entity_id": "http://www.okta.com/${org.externalKey}",
  "last_updated": 1621288964,
  "id": "b0b98502-9408-4b24-9e3d-31ed7cb15312",
  "single_signon_url": "https://api.sendgrid.com/v3/public/sso/saml/response/id/b0b98502-9408-4b24-9e3d-31ed7cb15312",
  "audience_url": "https://api.sendgrid.com/v3/public/sso/saml/response/id/b0b98502-9408-4b24-9e3d-31ed7cb15312"
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


# DELETE Sso-Integrations-Id

**This endpoint allows you to delete an IdP configuration by ID.**

You can retrieve the IDs for your configurations from the response provided by the "Get All SSO Integrations" endpoint.

```ts
async dELETESsoIntegrationsId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await singleSignOnSettingsController.dELETESsoIntegrationsId(id);
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

