# Sender Identities API

```ts
const senderIdentitiesAPIController = new SenderIdentitiesAPIController(client);
```

## Class Name

`SenderIdentitiesAPIController`

## Methods

* [POST Senders](../../doc/controllers/sender-identities-api.md#post-senders)
* [GET V 3 -senders](../../doc/controllers/sender-identities-api.md#get-v-3--senders)
* [GET V 3 -senders-Sender Id](../../doc/controllers/sender-identities-api.md#get-v-3--senders-sender-id)
* [PATCH V 3 -senders-Sender Id](../../doc/controllers/sender-identities-api.md#patch-v-3--senders-sender-id)
* [DELETE V 3 -senders-Sender Id](../../doc/controllers/sender-identities-api.md#delete-v-3--senders-sender-id)
* [POST V 3 -senders-Sender Id-Resend Verification](../../doc/controllers/sender-identities-api.md#post-v-3--senders-sender-id-resend-verification)


# POST Senders

**This endpoint allows you to create a new sender identity.**

You may create up to 100 unique sender identities.

```ts
async pOSTSenders(
  onBehalfOf?: string,
  body?: V3SendersRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SenderID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3SendersRequest \| undefined`](../../doc/models/v3-senders-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SenderID`](../../doc/models/sender-id.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyFrom: From2 = {
  email: 'from@example.com',
};
bodyFrom.name = 'Example INC';

const bodyReplyTo: ReplyTo2 = {
  email: 'replyto@example.com',
};
bodyReplyTo.name = 'Example INC';

const body: V3SendersRequest = {
  nickname: 'My Sender ID',
  address: '123 Elm St.',
  city: 'Denver',
  country: 'United States',
};
body.from = bodyFrom;
body.replyTo = bodyReplyTo;
body.address2 = 'Apt. 456';
body.state = 'Colorado';
body.zip = '80202';

try {
  const { result, ...httpResponse } = await senderIdentitiesAPIController.pOSTSenders(onBehalfOf, body);
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
  "id": 1,
  "nickname": "My Sender ID",
  "from": {
    "email": "from@example.com",
    "name": "Example INC"
  },
  "reply_to": {
    "email": "replyto@example.com",
    "name": "Example INC"
  },
  "address": "123 Elm St.",
  "address_2": "Apt. 456",
  "city": "Denver",
  "state": "Colorado",
  "zip": "80202",
  "country": "United States",
  "verified": true,
  "updated_at": 1449872165,
  "created_at": 1449872165,
  "locked": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |


# GET V 3 -senders

**This endpoint allows you to retrieve a list of all sender identities that have been created for your account.**

```ts
async gETV3Senders(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3SendersResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3SendersResponse`](../../doc/models/v3-senders-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await senderIdentitiesAPIController.gETV3Senders(onBehalfOf);
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
      "id": 1,
      "nickname": "My Sender ID",
      "from": {
        "email": "from@example.com",
        "name": "Example INC"
      },
      "reply_to": {
        "email": "replyto@example.com",
        "name": "Example INC"
      },
      "address": "123 Elm St.",
      "address_2": "Apt. 456",
      "city": "Denver",
      "state": "Colorado",
      "zip": "80202",
      "country": "United States",
      "verified": true,
      "updated_at": 1449872165,
      "created_at": 1449872165,
      "locked": false
    }
  ]
}
```


# GET V 3 -senders-Sender Id

**This endpoint allows you to retrieve a specific sender identity.**

```ts
async gETV3SendersSenderId(
  senderId: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SenderID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `senderId` | `number` | Template, Required | The ID of the sender identity that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SenderID`](../../doc/models/sender-id.md)

## Example Usage

```ts
const senderId = 36;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await senderIdentitiesAPIController.gETV3SendersSenderId(senderId, onBehalfOf);
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
  "id": 1,
  "nickname": "My Sender ID",
  "from": {
    "email": "from@example.com",
    "name": "Example INC"
  },
  "reply_to": {
    "email": "replyto@example.com",
    "name": "Example INC"
  },
  "address": "123 Elm St.",
  "address_2": "Apt. 456",
  "city": "Denver",
  "state": "Colorado",
  "zip": "80202",
  "country": "United States",
  "verified": true,
  "updated_at": 1449872165,
  "created_at": 1449872165,
  "locked": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |


# PATCH V 3 -senders-Sender Id

**This endpoint allows you to update a sender identity.**

Updates to `from.email` require re-verification.

Partial updates are allowed, but fields that are marked as "required" in the POST (create) endpoint must not be nil if that field is included in the PATCH request.

```ts
async pATCHV3SendersSenderId(
  senderId: number,
  onBehalfOf?: string,
  body?: SenderIDRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SenderID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `senderId` | `number` | Template, Required | The ID of the sender identity that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`SenderIDRequest \| undefined`](../../doc/models/sender-id-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SenderID`](../../doc/models/sender-id.md)

## Example Usage

```ts
const senderId = 36;
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyFrom: From1 = {};
bodyFrom.email = 'from@example.com';
bodyFrom.name = 'Example INC';

const bodyReplyTo: ReplyTo1 = {};
bodyReplyTo.email = 'replyto@example.com';
bodyReplyTo.name = 'Example INC';

const body: SenderIDRequest = {};
body.nickname = 'My Sender ID';
body.from = bodyFrom;
body.replyTo = bodyReplyTo;
body.address = '123 Elm St.';
body.address2 = 'Apt. 456';
body.city = 'Denver';
body.state = 'Colorado';
body.zip = '80202';
body.country = 'United States';

try {
  const { result, ...httpResponse } = await senderIdentitiesAPIController.pATCHV3SendersSenderId(senderId, onBehalfOf, body);
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
  "id": 1,
  "nickname": "My Sender ID",
  "from": {
    "email": "from@example.com",
    "name": "Example INC"
  },
  "reply_to": {
    "email": "replyto@example.com",
    "name": "Example INC"
  },
  "address": "123 Elm St.",
  "address_2": "Apt. 456",
  "city": "Denver",
  "state": "Colorado",
  "zip": "80202",
  "country": "United States",
  "verified": true,
  "updated_at": 1449872165,
  "created_at": 1449872165,
  "locked": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |
| 403 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |
| 404 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |


# DELETE V 3 -senders-Sender Id

**This endoint allows you to delete one of your sender identities.**

```ts
async dELETEV3SendersSenderId(
  senderId: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `senderId` | `number` | Template, Required | The ID of the sender identity that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const senderId = 36;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await senderIdentitiesAPIController.dELETEV3SendersSenderId(senderId, onBehalfOf);
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
| 403 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |
| 404 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |


# POST V 3 -senders-Sender Id-Resend Verification

**This enpdoint allows you to resend a sender identity verification email.**

```ts
async pOSTV3SendersSenderIdResendVerification(
  senderId: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `senderId` | `number` | Template, Required | The ID of the sender identity for which you would like to resend a verification email. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const senderId = 36;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await senderIdentitiesAPIController.pOSTV3SendersSenderIdResendVerification(senderId, onBehalfOf);
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
| 400 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |
| 404 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |

