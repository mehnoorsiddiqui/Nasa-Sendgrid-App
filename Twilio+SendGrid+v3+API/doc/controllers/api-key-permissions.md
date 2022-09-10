# API Key Permissions

```ts
const aPIKeyPermissionsController = new APIKeyPermissionsController(client);
```

## Class Name

`APIKeyPermissionsController`


# GET Scopes

**This endpoint returns a list of all scopes that this user has access to.**

API Keys are used to authenticate with [SendGrid's v3 API](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-authorization).

API Keys may be assigned certain permissions, or scopes, that limit which API endpoints they are able to access.

This endpoint returns all the scopes assigned to the key you use to authenticate with it. To retrieve the scopes assigned to another key, you can pass an API key ID to the "Retrieve an existing API key" endpoint.

For a more detailed explanation of how you can use API Key permissions, please visit our [API Keys documentation](https://sendgrid.com/docs/ui/account-and-settings/api-keys/).

```ts
async gETScopes(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ScopesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ScopesResponse`](../../doc/models/v3-scopes-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await aPIKeyPermissionsController.gETScopes(onBehalfOf);
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
| 401 | - | [`V3Scopes401Error`](../../doc/models/v3-scopes-401-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |

