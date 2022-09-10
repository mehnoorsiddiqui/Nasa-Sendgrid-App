# Single Sign-On Teammates

```ts
const singleSignOnTeammatesController = new SingleSignOnTeammatesController(client);
```

## Class Name

`SingleSignOnTeammatesController`

## Methods

* [POST Sso-Teammates](../../doc/controllers/single-sign-on-teammates.md#post-sso-teammates)
* [PATCH Sso-Teammates-Username](../../doc/controllers/single-sign-on-teammates.md#patch-sso-teammates-username)


# POST Sso-Teammates

**This endpoint allows you to create an SSO Teammate.**

The email provided for this user will also function as the Teammate’s username.

```ts
async pOSTSsoTeammates(
  body?: SingleSignOnTeammateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SingleSignOnTeammateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SingleSignOnTeammateRequest \| undefined`](../../doc/models/single-sign-on-teammate-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SingleSignOnTeammateResponse`](../../doc/models/single-sign-on-teammate-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await singleSignOnTeammatesController.pOSTSsoTeammates();
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
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "jane_doe@example.com",
  "is_read_only": true,
  "username": "jane_doe@example.com",
  "is_sso": true
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


# PATCH Sso-Teammates-Username

**This endpoint allows you to modify an existing SSO Teammate.**

To turn a teammate into an admin, the request body should contain the `is_admin` field set to `true`. Otherwise, set `is_admin` to false and pass in all the scopes that a teammate should have.

Only the parent user and Teammates with admin permissions can update another Teammate’s permissions. Admin users can only update permissions.

```ts
async pATCHSsoTeammatesUsername(
  username: string,
  body?: V3SsoTeammatesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SingleSignOnTeammatesPATCHResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Template, Required | This email address must be the same address assigned to the teammate in your IdP |
| `body` | [`V3SsoTeammatesRequest \| undefined`](../../doc/models/v3-sso-teammates-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SingleSignOnTeammatesPATCHResponse`](../../doc/models/single-sign-on-teammates-patch-response.md)

## Example Usage

```ts
const username = 'username0';
const contentType = null;
const bodyScopes: string[] = ['mail.batch.create', 'mail.batch.delete', 'mail.batch.read', 'mail.batch.update', 'mail.send'];
const body: V3SsoTeammatesRequest = {};
body.firstName = 'Jane';
body.lastName = 'Doe';
body.scopes = bodyScopes;
body.isAdmin = false;

try {
  const { result, ...httpResponse } = await singleSignOnTeammatesController.pATCHSsoTeammatesUsername(username, body);
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
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "jane_doe@example.com",
  "is_admin": false,
  "username": "jane_doe@example.com",
  "is_sso": true,
  "address": "1234 Fake St.",
  "address2": "Suite 5",
  "city": "San Francisco",
  "state": "CA",
  "zip": "94105",
  "Country": "United States",
  "phone": "+15555555555",
  "user_type": "teammate"
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

