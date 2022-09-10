# Teammates

```ts
const teammatesController = new TeammatesController(client);
```

## Class Name

`TeammatesController`

## Methods

* [POST V 3 -teammates](../../doc/controllers/teammates.md#post-v-3--teammates)
* [GET V 3 -teammates](../../doc/controllers/teammates.md#get-v-3--teammates)
* [POST V 3 -teammates-Pending-Token-Resend](../../doc/controllers/teammates.md#post-v-3--teammates-pending-token-resend)
* [GET V 3 -scopes-Requests](../../doc/controllers/teammates.md#get-v-3--scopes-requests)
* [GET V 3 -teammates-Pending](../../doc/controllers/teammates.md#get-v-3--teammates-pending)
* [GET V 3 -teammates-Username](../../doc/controllers/teammates.md#get-v-3--teammates-username)
* [PATCH V 3 -teammates-Username](../../doc/controllers/teammates.md#patch-v-3--teammates-username)
* [DELETE V 3 -teammates-Username](../../doc/controllers/teammates.md#delete-v-3--teammates-username)
* [PATCH V 3 -scopes-Requests-Approve-Id](../../doc/controllers/teammates.md#patch-v-3--scopes-requests-approve-id)
* [DELETE V 3 -scopes-Requests-Request Id](../../doc/controllers/teammates.md#delete-v-3--scopes-requests-request-id)
* [DELETE V 3 -teammates-Pending-Token](../../doc/controllers/teammates.md#delete-v-3--teammates-pending-token)


# POST V 3 -teammates

**This endpoint allows you to invite a Teammate to your account via email.**

You can set a Teammate's initial permissions using the `scopes` array in the request body. Teammate's will receive a minimum set of scopes from Twilio SendGrid that are necessary for the Teammate to function.

**Note:** A teammate invite will expire after 7 days, but you may resend the invitation at any time to reset the expiration date.

```ts
async pOSTV3Teammates(
  onBehalfOf?: string,
  body?: V3TeammatesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3TeammatesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3TeammatesRequest \| undefined`](../../doc/models/v3-teammates-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3TeammatesResponse`](../../doc/models/v3-teammates-response.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyScopes: string[] = ['user.profile.read', 'user.profile.update'];
const body: V3TeammatesRequest = {
  email: 'teammate1@example.com',
  scopes: bodyScopes,
  isAdmin: false,
};

try {
  const { result, ...httpResponse } = await teammatesController.pOSTV3Teammates(onBehalfOf, body);
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
  "email": "teammate1@example.com",
  "scopes": [
    "user.profile.read",
    "user.profile.update"
  ],
  "is_admin": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |


# GET V 3 -teammates

**This endpoint allows you to retrieve a list of all current Teammates.**

You can limit the number of results returned using the `limit` query paramater. To return results from a specific Teammate, use the `offset` paramter. The Response Headers will include pagination info.

```ts
async gETV3Teammates(
  limit?: number,
  offset?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3TeammatesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | Number of items to return<br>**Default**: `500`<br>**Constraints**: `>= 0`, `<= 500` |
| `offset` | `number \| undefined` | Query, Optional | Paging offset<br>**Default**: `0`<br>**Constraints**: `>= 0` |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3TeammatesResponse1`](../../doc/models/v3-teammates-response-1.md)

## Example Usage

```ts
const limit = 500;
const offset = 0;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await teammatesController.gETV3Teammates(limit, offset, onBehalfOf);
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
  "results": [
    {
      "username": "teammate1",
      "email": "teammate1@example.com",
      "first_name": "Jane",
      "last_name": "Doe",
      "user_type": "owner",
      "is_admin": true,
      "phone": "123-345-3453",
      "website": "www.example.com",
      "company": "ACME Inc.",
      "address": "123 Acme St",
      "address2": "",
      "city": "City",
      "state": "CA",
      "country": "USA",
      "zip": "12345"
    },
    {
      "username": "teammate2",
      "email": "teammate2@example.com",
      "first_name": "John",
      "last_name": "Doe",
      "user_type": "teammate",
      "is_admin": false,
      "phone": "123-345-3453",
      "website": "www.example.com",
      "company": "ACME Inc.",
      "address": "123 Acme St",
      "address2": "",
      "city": "City",
      "state": "CA",
      "country": "USA",
      "zip": "12345"
    },
    {
      "username": "teammate3",
      "email": "teammate3@example.com",
      "first_name": "Steve",
      "last_name": "Doe",
      "user_type": "admin",
      "is_admin": true,
      "phone": "123-345-3453",
      "website": "www.example.com",
      "company": "ACME Inc.",
      "address": "123 Acme St",
      "address2": "",
      "city": "City",
      "state": "CA",
      "country": "USA",
      "zip": "12345"
    }
  ]
}
```


# POST V 3 -teammates-Pending-Token-Resend

**This endpoint allows you to resend a Teammate invitation.**

Teammate invitations will expire after 7 days. Resending an invitation will reset the expiration date.

```ts
async pOSTV3TeammatesPendingTokenResend(
  token: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3TeammatesPendingResendResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string` | Template, Required | The token for the invite that you want to resend. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3TeammatesPendingResendResponse`](../../doc/models/v3-teammates-pending-resend-response.md)

## Example Usage

```ts
const token = 'token6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await teammatesController.pOSTV3TeammatesPendingTokenResend(token, onBehalfOf);
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
  "pending_id": "abc123abc",
  "email": "teammate1@example.com",
  "scopes": [
    "user.profile.read",
    "user.profile.update"
  ],
  "is_admin": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |


# GET V 3 -scopes-Requests

**This endpoint allows you to retrieve a list of all recent access requests.**

The Response Header's `link` parameter will include pagination info.

```ts
async gETV3ScopesRequests(
  limit?: number,
  offset?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ScopesRequestsResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | Optional field to limit the number of results returned.<br>**Default**: `50` |
| `offset` | `number \| undefined` | Query, Optional | Optional beginning point in the list to retrieve from.<br>**Default**: `0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ScopesRequestsResponse[]`](../../doc/models/v3-scopes-requests-response.md)

## Example Usage

```ts
const limit = 50;
const offset = 0;
try {
  const { result, ...httpResponse } = await teammatesController.gETV3ScopesRequests(limit, offset);
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
    "id": 1,
    "scope_group_name": "Mail Settings",
    "username": "teammate1",
    "email": "teammate1@example.com",
    "first_name": "Teammate",
    "last_name": "One"
  },
  {
    "id": 2,
    "scope_group_name": "Stats",
    "username": "teammate2",
    "email": "teammate2@example.com",
    "first_name": "Teammate",
    "last_name": "Two"
  }
]
```


# GET V 3 -teammates-Pending

**This endpoint allows you to retrieve a list of all pending Teammate invitations.**

Each teammate invitation is valid for 7 days. Users may resend the invitation to refresh the expiration date.

```ts
async gETV3TeammatesPending(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3TeammatesPendingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3TeammatesPendingResponse`](../../doc/models/v3-teammates-pending-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await teammatesController.gETV3TeammatesPending(onBehalfOf);
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
      "email": "user1@example.com",
      "scopes": [
        "user.profile.read",
        "user.profile.edit"
      ],
      "is_admin": false,
      "pending_id": "abcd123abc",
      "expiration_date": 1456424263
    },
    {
      "email": "user2@example.com",
      "scopes": [],
      "is_admin": true,
      "pending_id": "bcde234bcd",
      "expiration_date": 1456424263
    }
  ]
}
```


# GET V 3 -teammates-Username

**This endpoint allows you to retrieve a specific Teammate by username.**

You can retrieve the username's for each of your Teammates using the "Retrieve all Teammates" endpoint.

```ts
async gETV3TeammatesUsername(
  username: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3TeammatesResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Template, Required | The username of the teammate that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3TeammatesResponse2`](../../doc/models/v3-teammates-response-2.md)

## Example Usage

```ts
const username = 'username0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await teammatesController.gETV3TeammatesUsername(username, onBehalfOf);
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
  "username": "teammate1",
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "teammate1@example.com",
  "scopes": [
    "user.profile.read",
    "user.profile.update",
    "..."
  ],
  "user_type": "admin",
  "is_admin": true,
  "phone": "123-345-3453",
  "website": "www.example.com",
  "company": "ACME Inc.",
  "address": "123 Acme St",
  "address2": "",
  "city": "City",
  "state": "CA",
  "country": "USA",
  "zip": "12345"
}
```


# PATCH V 3 -teammates-Username

**This endpoint allows you to update a teammate’s permissions.**

To turn a teammate into an admin, the request body should contain an `is_admin` set to `true`. Otherwise, set `is_admin` to `false` and pass in all the scopes that a teammate should have.

**Only the parent user or other admin teammates can update another teammate’s permissions.**

**Admin users can only update permissions.**

```ts
async pATCHV3TeammatesUsername(
  username: string,
  onBehalfOf?: string,
  body?: V3TeammatesRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3TeammatesResponse3>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Template, Required | The username of the teammate that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3TeammatesRequest1 \| undefined`](../../doc/models/v3-teammates-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3TeammatesResponse3`](../../doc/models/v3-teammates-response-3.md)

## Example Usage

```ts
const username = 'username0';
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyScopes: string[] = ['user.profile.read', 'user.profile.edit'];
const body: V3TeammatesRequest1 = {
  scopes: bodyScopes,
  isAdmin: false,
};

try {
  const { result, ...httpResponse } = await teammatesController.pATCHV3TeammatesUsername(username, onBehalfOf, body);
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
  "username": "teammate1",
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "teammate1@example.com",
  "scopes": [
    "user.profile.read",
    "user.profile.edit"
  ],
  "user_type": "teammate",
  "is_admin": false,
  "phone": "123-345-3453",
  "website": "www.example.com",
  "company": "ACME Inc.",
  "address": "123 Acme St",
  "address2": "",
  "city": "City",
  "state": "CA",
  "country": "USA",
  "zip": "12345"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |
| 404 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |


# DELETE V 3 -teammates-Username

**This endpoint allows you to delete a teammate.**

**Only the parent user or an admin teammate can delete another teammate.**

```ts
async dELETEV3TeammatesUsername(
  username: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3TeammatesResponse4>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Template, Required | The username of the teammate that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3TeammatesResponse4`](../../doc/models/v3-teammates-response-4.md)

## Example Usage

```ts
const username = 'username0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await teammatesController.dELETEV3TeammatesUsername(username, onBehalfOf);
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
| 404 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |


# PATCH V 3 -scopes-Requests-Approve-Id

**This endpoint allows you to approve an access attempt.**

**Note:** Only teammate admins may approve another teammate’s access request.

```ts
async pATCHV3ScopesRequestsApproveId(
  requestId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ScopesRequestsApproveResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Template, Required | The ID of the request that you want to approve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ScopesRequestsApproveResponse`](../../doc/models/v3-scopes-requests-approve-response.md)

## Example Usage

```ts
const requestId = 'request_id8';
try {
  const { result, ...httpResponse } = await teammatesController.pATCHV3ScopesRequestsApproveId(requestId);
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
  "scope_group_name": "Stats"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | `ApiError` |
| 404 | - | [`V3ScopesRequestsApprove404Error1Error`](../../doc/models/v3-scopes-requests-approve-404-error-1-error.md) |


# DELETE V 3 -scopes-Requests-Request Id

**This endpoint allows you to deny an attempt to access your account.**

**Note:** Only teammate admins may delete a teammate's access request.

```ts
async dELETEV3ScopesRequestsRequestId(
  requestId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Template, Required | The ID of the request that you want to deny. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const requestId = 'request_id8';
try {
  const { result, ...httpResponse } = await teammatesController.dELETEV3ScopesRequestsRequestId(requestId);
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
| 401 | - | `ApiError` |
| 404 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |


# DELETE V 3 -teammates-Pending-Token

**This endpoint allows you to delete a pending teammate invite.**

```ts
async dELETEV3TeammatesPendingToken(
  token: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string` | Template, Required | The token for the invite you want to delete. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const token = 'token6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await teammatesController.dELETEV3TeammatesPendingToken(token, onBehalfOf);
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
| 404 | - | [`V3TeammatesPending404Error1Error`](../../doc/models/v3-teammates-pending-404-error-1-error.md) |

