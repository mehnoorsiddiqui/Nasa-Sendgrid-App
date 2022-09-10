# Settings-Enforced TLS

```ts
const settingsEnforcedTLSController = new SettingsEnforcedTLSController(client);
```

## Class Name

`SettingsEnforcedTLSController`

## Methods

* [GET User-Settings-Enforced Tls](../../doc/controllers/settings-enforced-tls.md#get-user-settings-enforced-tls)
* [PATCH User-Settings-Enforced Tls](../../doc/controllers/settings-enforced-tls.md#patch-user-settings-enforced-tls)


# GET User-Settings-Enforced Tls

**This endpoint allows you to retrieve your current Enforced TLS settings.**

The Enforced TLS settings specify whether or not the recipient is required to support TLS or have a valid certificate.

If either `require_tls` or `require_valid_cert` is set to `true`, the recipient must support TLS 1.1 or higher or have a valid certificate. If these conditions are not met, Twilio SendGrid will drop the message and send a block event with “TLS required but not supported” as the description.

```ts
async gETUserSettingsEnforcedTls(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EnforcedTLSRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EnforcedTLSRequestResponse`](../../doc/models/enforced-tls-request-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsEnforcedTLSController.gETUserSettingsEnforcedTls(onBehalfOf);
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
  "require_tls": false,
  "require_valid_cert": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# PATCH User-Settings-Enforced Tls

**This endpoint allows you to update your Enforced TLS settings.**

To require TLS from recipients, set `require_tls` to `true`. If either `require_tls` or `require_valid_cert` is set to `true`, the recipient must support TLS 1.1 or higher or have a valid certificate. If these conditions are not met, Twilio SendGrid will drop the message and send a block event with “TLS required but not supported” as the description.

> Twilio SendGrid supports TLS 1.1 and higher and does not support older versions of TLS due to security vulnerabilities.

```ts
async pATCHUserSettingsEnforcedTls(
  onBehalfOf?: string,
  body?: EnforcedTLSRequestResponse,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EnforcedTLSRequestResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`EnforcedTLSRequestResponse \| undefined`](../../doc/models/enforced-tls-request-response.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EnforcedTLSRequestResponse`](../../doc/models/enforced-tls-request-response.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsEnforcedTLSController.pATCHUserSettingsEnforcedTls(onBehalfOf);
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
  "require_tls": true,
  "require_valid_cert": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |

