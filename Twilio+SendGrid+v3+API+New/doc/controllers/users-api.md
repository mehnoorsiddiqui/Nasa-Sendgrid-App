# Users API

```ts
const usersAPIController = new UsersAPIController(client);
```

## Class Name

`UsersAPIController`

## Methods

* [GET User-Profile](../../doc/controllers/users-api.md#get-user-profile)
* [PATCH User-Profile](../../doc/controllers/users-api.md#patch-user-profile)
* [GET User-Account](../../doc/controllers/users-api.md#get-user-account)
* [GET User-Email](../../doc/controllers/users-api.md#get-user-email)
* [PUT User-Email](../../doc/controllers/users-api.md#put-user-email)
* [GET User-Username](../../doc/controllers/users-api.md#get-user-username)
* [PUT User-Username](../../doc/controllers/users-api.md#put-user-username)
* [GET User-Credits](../../doc/controllers/users-api.md#get-user-credits)
* [PUT User-Password](../../doc/controllers/users-api.md#put-user-password)


# GET User-Profile

Get a user's profile

```ts
async gETUserProfile(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GETUserProfileresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GETUserProfileresponse`](../../doc/models/get-user-profileresponse.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await usersAPIController.gETUserProfile(onBehalfOf);
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
  "address": "814 West Chapman Avenue",
  "address2": "",
  "city": "Orange",
  "company": "SendGrid",
  "country": "US",
  "first_name": "Test",
  "last_name": "User",
  "phone": "555-555-5555",
  "state": "CA",
  "website": "http://www.sendgrid.com",
  "zip": "92868"
}
```


# PATCH User-Profile

**This endpoint allows you to update your current profile details.**

Any one or more of the parameters can be updated via the PATCH `/user/profile` endpoint. You must include at least one when you PATCH.

```ts
async pATCHUserProfile(
  onBehalfOf?: string,
  body?: UserProfile,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserProfile>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`UserProfile \| undefined`](../../doc/models/user-profile.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserProfile`](../../doc/models/user-profile.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: UserProfile = {};
body.address = '1451 Larimer Street, 3rd floor';
body.address2 = '';
body.city = 'Denver, CO';
body.company = 'SendGrid';
body.country = 'US';
body.firstName = 'Matthew';
body.lastName = 'Bernier';
body.phone = '7208788003';
body.state = 'CO';
body.website = 'http://sendgrid.com';
body.zip = '80202';

try {
  const { result, ...httpResponse } = await usersAPIController.pATCHUserProfile(onBehalfOf, body);
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
  "address": "814 West Chapman Avenue",
  "address2": "",
  "city": "Orange",
  "company": "SendGrid",
  "country": "US",
  "first_name": "Example",
  "last_name": "User",
  "phone": "555-555-5555",
  "state": "CA",
  "website": "http://www.sendgrid.com",
  "zip": "92868"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET User-Account

**This endpoint allows you to retrieve your user account details.**

Your user's account information includes the user's account type and reputation.

```ts
async gETUserAccount(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GETUserAccountresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GETUserAccountresponse`](../../doc/models/get-user-accountresponse.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await usersAPIController.gETUserAccount(onBehalfOf);
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
  "reputation": 100,
  "type": "paid"
}
```


# GET User-Email

**This endpoint allows you to retrieve the email address currently on file for your account.**

```ts
async gETUserEmail(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3UserEmailResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3UserEmailResponse`](../../doc/models/v3-user-email-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await usersAPIController.gETUserEmail(onBehalfOf);
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
  "email": "test@example.com"
}
```


# PUT User-Email

**This endpoint allows you to update the email address currently on file for your account.**

```ts
async pUTUserEmail(
  onBehalfOf?: string,
  body?: V3UserEmailRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3UserEmailResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3UserEmailRequest \| undefined`](../../doc/models/v3-user-email-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3UserEmailResponse1`](../../doc/models/v3-user-email-response-1.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3UserEmailRequest = {};
body.email = 'example@example.com';

try {
  const { result, ...httpResponse } = await usersAPIController.pUTUserEmail(onBehalfOf, body);
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
  "email": "example@example.com"
}
```


# GET User-Username

**This endpoint allows you to retrieve your current account username.**

```ts
async gETUserUsername(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3UserUsernameResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3UserUsernameResponse`](../../doc/models/v3-user-username-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await usersAPIController.gETUserUsername(onBehalfOf);
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
  "username": "test_username",
  "user_id": 1
}
```


# PUT User-Username

**This endpoint allows you to update the username for your account.**

```ts
async pUTUserUsername(
  onBehalfOf?: string,
  body?: V3UserUsernameRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3UserUsernameResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3UserUsernameRequest \| undefined`](../../doc/models/v3-user-username-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3UserUsernameResponse1`](../../doc/models/v3-user-username-response-1.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3UserUsernameRequest = {};
body.username = 'test_username';

try {
  const { result, ...httpResponse } = await usersAPIController.pUTUserUsername(onBehalfOf, body);
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
  "username": "test_username"
}
```


# GET User-Credits

**This endpoint allows you to retrieve the current credit balance for your account.**

Each account has a credit balance, which is a base number of emails it can send before receiving per-email charges. For more information about credits and billing, see [Billing and Plan details information](https://sendgrid.com/docs/ui/account-and-settings/billing/).

```ts
async gETUserCredits(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3UserCreditsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3UserCreditsResponse`](../../doc/models/v3-user-credits-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await usersAPIController.gETUserCredits(onBehalfOf);
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
  "remain": 200,
  "total": 200,
  "overage": 0,
  "used": 0,
  "last_reset": "2013-01-01",
  "next_reset": "2013-02-01",
  "reset_frequency": "monthly"
}
```


# PUT User-Password

**This endpoint allows you to update your password.**

```ts
async pUTUserPassword(
  onBehalfOf?: string,
  body?: V3UserPasswordRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3UserPasswordRequest \| undefined`](../../doc/models/v3-user-password-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3UserPasswordRequest = {
  newPassword: 'new_password',
  oldPassword: 'old_password',
};

try {
  const { result, ...httpResponse } = await usersAPIController.pUTUserPassword(onBehalfOf, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

