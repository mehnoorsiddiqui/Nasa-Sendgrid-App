# API Keys

```ts
const aPIKeysController = new APIKeysController(client);
```

## Class Name

`APIKeysController`

## Methods

* [Create-Api-Keys](../../doc/controllers/api-keys.md#create-api-keys)
* [GET Api Keys](../../doc/controllers/api-keys.md#get-api-keys)
* [GET Api Keys-Api Key Id](../../doc/controllers/api-keys.md#get-api-keys-api-key-id)
* [PATCH Api Keys-Api Key Id](../../doc/controllers/api-keys.md#patch-api-keys-api-key-id)
* [PUT Api Keys-Api Key Id](../../doc/controllers/api-keys.md#put-api-keys-api-key-id)
* [DELETE Api Keys-Api Key Id](../../doc/controllers/api-keys.md#delete-api-keys-api-key-id)


# Create-Api-Keys

**This endpoint allows you to create a new API Key for the user.**

To create your initial SendGrid API Key, you should [use the SendGrid App](https://app.sendgrid.com/settings/api_keys). Once you have created a first key with scopes to manage additional API keys, you can use this API for all other key management.

> There is a limit of 100 API Keys on your account.

A JSON request body containing a `name` property is required when making requests to this endpoint. If the number of maximum keys, 100, is reached, a `403` status will be returned.

Though the `name` field is required, it does not need to be unique. A unique API key ID will be generated for each key you create and returned in the response body.

It is not necessary to pass a `scopes` field to the API when creating a key, but you should be aware that omitting the `scopes` field from your request will create a key with "Full Access" permissions by default.

See the [API Key Permissions List](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-authorization) for all available scopes. An API key's scopes can be updated after creation using the "Update API keys" endpoint.

```ts
async createApiKeys(
  onBehalfOf?: string,
  body?: V3ApiKeysRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ApiKeysResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3ApiKeysRequest \| undefined`](../../doc/models/v3-api-keys-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ApiKeysResponse`](../../doc/models/v3-api-keys-response.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyScopes: string[] = ['mail.send', 'alerts.create', 'alerts.read'];
const body: V3ApiKeysRequest = {
  name: 'My API Key',
};
body.scopes = bodyScopes;

try {
  const { result, ...httpResponse } = await aPIKeysController.createApiKeys(onBehalfOf, body);
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
  "api_key": "SG.xxxxxxxx.yyyyyyyy",
  "api_key_id": "xxxxxxxx",
  "name": "My API Key",
  "scopes": [
    "mail.send",
    "alerts.create",
    "alerts.read"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET Api Keys

**This endpoint allows you to retrieve all API Keys that belong to the authenticated user.**

A successful response from this API will include all available API keys' names and IDs.

For security reasons, there is not a way to retrieve the key itself after it's created. If you lose your API key, you must create a new one. Only the "Create API keys" endpoint will return a key to you and only at the time of creation.

An `api_key_id` can be used to update or delete the key, as well as retrieve the key's details, such as its scopes.

```ts
async gETApiKeys(
  limit?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ApiKeysResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ApiKeysResponse1`](../../doc/models/v3-api-keys-response-1.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await aPIKeysController.gETApiKeys(None, onBehalfOf);
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
  "result": [
    {
      "name": "API Key Name",
      "api_key_id": "some-apikey-id"
    },
    {
      "name": "API Key Name 2",
      "api_key_id": "another-apikey-id"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET Api Keys-Api Key Id

**This endpoint allows you to retrieve a single API key using an `api_key_id`.**

The endpoint will return a key's name, ID, and scopes. If the API Key ID does not, exist a `404` status will be returned.

See the [API Key Permissions List](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-authorization) for all available scopes. An API key's scopes can be updated after creation using the "Update API keys" endpoint.

```ts
async gETApiKeysApiKeyId(
  apiKeyId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ApiKeysResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKeyId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ApiKeysResponse2`](../../doc/models/v3-api-keys-response-2.md)

## Example Usage

```ts
const apiKeyId = 'api_key_id4';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await aPIKeysController.gETApiKeysApiKeyId(apiKeyId, onBehalfOf);
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
  "result": [
    {
      "name": "API Key Name",
      "api_key_id": "some-apikey-id"
    },
    {
      "name": "API Key Name 2",
      "api_key_id": "another-apikey-id"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# PATCH Api Keys-Api Key Id

**This endpoint allows you to update the name of an existing API Key.**

You must pass this endpoint a JSON request body with a `name` property, which will be used to rename the key associated with the `api_key_id` passed in the URL.

```ts
async pATCHApiKeysApiKeyId(
  apiKeyId: string,
  onBehalfOf?: string,
  body?: V3ApiKeysRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<APIKeyNameandID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKeyId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3ApiKeysRequest1 \| undefined`](../../doc/models/v3-api-keys-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`APIKeyNameandID`](../../doc/models/api-key-nameand-id.md)

## Example Usage

```ts
const apiKeyId = 'api_key_id4';
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3ApiKeysRequest1 = {
  name: 'A New Hope',
};

try {
  const { result, ...httpResponse } = await aPIKeysController.pATCHApiKeysApiKeyId(apiKeyId, onBehalfOf, body);
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
  "api_key_id": "qfTQ6KG0QBiwWdJ0-pCLCA",
  "name": "A New Hope"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# PUT Api Keys-Api Key Id

**This endpoint allows you to update the name and scopes of a given API key.**

You must pass this endpoint a JSON request body with a `name` field and a `scopes` array containing at least one scope. The `name` and `scopes` fields will be used to update the key associated with the `api_key_id` in the request URL.

If you need to update a key's scopes only, pass the `name` field with the key's existing name; the `name` will not be modified. If you need to update a key's name only, use the "Update API key name" endpoint.

See the [API Key Permissions List](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-authorization) for all available scopes.

```ts
async pUTApiKeysApiKeyId(
  apiKeyId: string,
  onBehalfOf?: string,
  body?: V3ApiKeysRequest2,
  requestOptions?: RequestOptions
): Promise<ApiResponse<APIKeyNameIDandScopes>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKeyId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3ApiKeysRequest2 \| undefined`](../../doc/models/v3-api-keys-request-2.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`APIKeyNameIDandScopes`](../../doc/models/api-key-name-i-dand-scopes.md)

## Example Usage

```ts
const apiKeyId = 'api_key_id4';
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyScopes: string[] = ['user.profile.read', 'user.profile.update'];
const body: V3ApiKeysRequest2 = {
  name: 'Profiles key',
};
body.scopes = bodyScopes;

try {
  const { result, ...httpResponse } = await aPIKeysController.pUTApiKeysApiKeyId(apiKeyId, onBehalfOf, body);
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
  "api_key_id": "qfTQ6KG0QBiwWdJ0-pCLCA",
  "name": "Profiles Key",
  "scopes": [
    "user.profile.read",
    "user.profile.update"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# DELETE Api Keys-Api Key Id

**This endpoint allows you to revoke an existing API Key using an `api_key_id`**

Authentications using a revoked API Key will fail after after some small propogation delay. If the API Key ID does not exist, a `404` status will be returned.

```ts
async dELETEApiKeysApiKeyId(
  apiKeyId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKeyId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const apiKeyId = 'api_key_id4';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await aPIKeysController.dELETEApiKeysApiKeyId(apiKeyId, onBehalfOf);
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
| 400 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |

