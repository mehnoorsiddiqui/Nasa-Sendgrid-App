# Subusers API

```ts
const subusersAPIController = new SubusersAPIController(client);
```

## Class Name

`SubusersAPIController`

## Methods

* [GET Subusers](../../doc/controllers/subusers-api.md#get-subusers)
* [POST Subusers](../../doc/controllers/subusers-api.md#post-subusers)
* [PATCH Subusers-Subuser Name](../../doc/controllers/subusers-api.md#patch-subusers-subuser-name)
* [DELETE Subusers-Subuser Name](../../doc/controllers/subusers-api.md#delete-subusers-subuser-name)
* [GET Subusers-Reputations](../../doc/controllers/subusers-api.md#get-subusers-reputations)
* [PUT Subusers-Subuser Name-Ips](../../doc/controllers/subusers-api.md#put-subusers-subuser-name-ips)


# GET Subusers

**This endpoint allows you to retrieve a list of all of your subusers.**

You can choose to retrieve specific subusers as well as limit the results that come back from the API.

```ts
async gETSubusers(
  username?: string,
  limit?: number,
  offset?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListallSubusersforaparentresponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string \| undefined` | Query, Optional | The username of this subuser. |
| `limit` | `number \| undefined` | Query, Optional | The number of results you would like to get in each request. |
| `offset` | `number \| undefined` | Query, Optional | The number of subusers to skip. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListallSubusersforaparentresponse[]`](../../doc/models/listall-subusersforaparentresponse.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await subusersAPIController.gETSubusers();
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
    "disabled": false,
    "email": "example@example.com",
    "id": 1234,
    "username": "example_subuser"
  },
  {
    "disabled": false,
    "email": "example2@example.com",
    "id": 1234,
    "username": "example_subuser2"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unexpected error in API call. See HTTP response body for details. | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# POST Subusers

**This endpoint allows you to create a new subuser.**

```ts
async pOSTSubusers(
  body?: V3SubusersRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubuserPOST>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3SubusersRequest \| undefined`](../../doc/models/v3-subusers-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubuserPOST`](../../doc/models/subuser-post.md)

## Example Usage

```ts
const contentType = null;
const bodyIps: string[] = ['1.1.1.1', '2.2.2.2'];
const body: V3SubusersRequest = {
  username: 'John@example.com',
  email: 'John@example.com',
  password: 'johns_password',
  ips: bodyIps,
};

try {
  const { result, ...httpResponse } = await subusersAPIController.pOSTSubusers(body);
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
  "username": "example_subuser",
  "user_id": 1234,
  "email": "example@example.com",
  "signup_session_token": "",
  "authorization_token": "",
  "credit_allocation": {
    "type": "unlimited"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | `ApiError` |


# PATCH Subusers-Subuser Name

**This endpoint allows you to enable or disable a subuser.**

```ts
async pATCHSubusersSubuserName(
  subuserName: string,
  body?: V3SubusersRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subuserName` | `string` | Template, Required | - |
| `body` | [`V3SubusersRequest1 \| undefined`](../../doc/models/v3-subusers-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const subuserName = 'subuser_name0';
const contentType = null;
const body: V3SubusersRequest1 = {};
body.disabled = false;

try {
  const { result, ...httpResponse } = await subusersAPIController.pATCHSubusersSubuserName(subuserName, body);
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
| 500 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# DELETE Subusers-Subuser Name

**This endpoint allows you to delete a subuser.**

This is a permanent action. Once deleted, a subuser cannot be retrieved.

```ts
async dELETESubusersSubuserName(
  subuserName: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subuserName` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const subuserName = 'subuser_name0';
try {
  const { result, ...httpResponse } = await subusersAPIController.dELETESubusersSubuserName(subuserName);
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
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Subusers-Reputations

**This endpoint allows you to request the reputations for your subusers.**

Subuser sender reputations give a good idea how well a sender is doing with regards to how recipients and recipient servers react to the mail that is being received. When a bounce, spam report, or other negative action happens on a sent email, it will affect your sender rating.

```ts
async gETSubusersReputations(
  usernames?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3SubusersReputationsResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `usernames` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3SubusersReputationsResponse[]`](../../doc/models/v3-subusers-reputations-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await subusersAPIController.gETSubusersReputations();
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
    "username": "example_subuser",
    "reputation": 99
  },
  {
    "username": "example_subuser2",
    "reputation": 95.2
  }
]
```


# PUT Subusers-Subuser Name-Ips

**This endpoint allows you update your subusers' assigned IP.**

Each subuser should be assigned to an IP address from which all of this subuser's mail will be sent. Often, this is the same IP as the parent account, but each subuser can have one or more of their own IP addresses as well.

More information:

* [How to request more IPs](https://sendgrid.com/docs/ui/account-and-settings/dedicated-ip-addresses/)
* [Setup Reverse DNS](https://sendgrid.com/docs/ui/account-and-settings/how-to-set-up-reverse-dns/)

```ts
async pUTSubusersSubuserNameIps(
  subuserName: string,
  body?: string[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3SubusersIpsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subuserName` | `string` | Template, Required | - |
| `body` | `string[] \| undefined` | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3SubusersIpsResponse`](../../doc/models/v3-subusers-ips-response.md)

## Example Usage

```ts
const subuserName = 'subuser_name0';
const contentType = null;
try {
  const { result, ...httpResponse } = await subusersAPIController.pUTSubusersSubuserNameIps(subuserName);
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
  "ips": [
    "127.0.0.1"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |

