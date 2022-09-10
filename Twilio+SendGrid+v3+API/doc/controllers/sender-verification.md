# Sender Verification

```ts
const senderVerificationController = new SenderVerificationController(client);
```

## Class Name

`SenderVerificationController`

## Methods

* [GET Verified Senders-Domains](../../doc/controllers/sender-verification.md#get-verified-senders-domains)
* [GET Verified Senders-Steps Completed](../../doc/controllers/sender-verification.md#get-verified-senders-steps-completed)
* [GET Verified Senders-Verify-Token](../../doc/controllers/sender-verification.md#get-verified-senders-verify-token)
* [PATCH Verified Senders-Id](../../doc/controllers/sender-verification.md#patch-verified-senders-id)
* [DELETE Verified Senders-Id](../../doc/controllers/sender-verification.md#delete-verified-senders-id)
* [POST Verified Senders](../../doc/controllers/sender-verification.md#post-verified-senders)
* [GET Verified Senders](../../doc/controllers/sender-verification.md#get-verified-senders)
* [POST Verified Senders-Resend-Id](../../doc/controllers/sender-verification.md#post-verified-senders-resend-id)


# GET Verified Senders-Domains

**This endpoint returns a list of domains known to implement DMARC and categorizes them by failure type — hard failure or soft failure**.

Domains listed as hard failures will not deliver mail when used as a [Sender Identity](https://sendgrid.com/docs/for-developers/sending-email/sender-identity/) due to the domain's DMARC policy settings.

For example, using a `yahoo.com` email address as a Sender Identity will likely result in the rejection of your mail. For more information about DMARC, see [Everything about DMARC](https://sendgrid.com/docs/ui/sending-email/dmarc/).

```ts
async gETVerifiedSendersDomains(
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3VerifiedSendersDomainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3VerifiedSendersDomainsResponse`](../../doc/models/v3-verified-senders-domains-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await senderVerificationController.gETVerifiedSendersDomains();
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
  "results": {
    "soft_failures": [
      "gmail.com"
    ],
    "hard_failures": [
      "yahoo.com"
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET Verified Senders-Steps Completed

**This endpoint allows you to determine which of SendGrid’s verification processes have been completed for an account**.

This endpoint returns boolean values, `true` and `false`, for [Domain Authentication](https://sendgrid.com/docs/for-developers/sending-email/sender-identity/#domain-authentication), `domain_verified`, and [Single Sender Verification](https://sendgrid.com/docs/for-developers/sending-email/sender-identity/#single-sender-verification), `sender_verified`, for the account.

An account may have one, both, or neither verification steps completed. If you need to authenticate a domain rather than a Single Sender, see the "Authenticate a domain" endpoint.

```ts
async gETVerifiedSendersStepsCompleted(
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3VerifiedSendersStepsCompletedResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3VerifiedSendersStepsCompletedResponse`](../../doc/models/v3-verified-senders-steps-completed-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await senderVerificationController.gETVerifiedSendersStepsCompleted();
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
  "results": {
    "domain_verified": true,
    "sender_verified": true
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET Verified Senders-Verify-Token

**This endpoint allows you to verify a sender requests.**

The token is generated by SendGrid and included in a verification email delivered to the address that's pending verification.

```ts
async gETVerifiedSendersVerifyToken(
  token: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const token = 'token6';
try {
  const { result, ...httpResponse } = await senderVerificationController.gETVerifiedSendersVerifyToken(token);
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
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`V3VerifiedSendersVerify404Error1Error`](../../doc/models/v3-verified-senders-verify-404-error-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# PATCH Verified Senders-Id

**This endpoint allows you to update an existing Sender Identity**.

Pass the `id` assigned to a Sender Identity to this endpoint as a path parameter. Include any fields you wish to update in the request body in JSON format.

You can retrieve the IDs associated with Sender Identities by passing a `GET` request to the Get All Verified Senders endpoint, `/verified_senders`.

**Note:** Unlike a `PUT` request, `PATCH` allows you to update only the fields you wish to edit. Fields that are not passed as part of a request will remain unaltered.

```ts
async pATCHVerifiedSendersId(
  id: string,
  body?: VerifiedSenderRequestSchema,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VerifiedSenderResponseSchema>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`VerifiedSenderRequestSchema \| undefined`](../../doc/models/verified-sender-request-schema.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VerifiedSenderResponseSchema`](../../doc/models/verified-sender-response-schema.md)

## Example Usage

```ts
const id = 'id0';
const contentType = null;
const body: VerifiedSenderRequestSchema = {
  nickname: 'Orders',
  fromEmail: 'orders@example.com',
  replyTo: 'orders@example.com',
};
body.fromName = 'Example Orders';
body.replyToName = 'Example Orders';
body.address = '1234 Fake St';
body.address2 = 'PO Box 1234';
body.state = 'CA';
body.city = 'San Francisco';
body.zip = '94105';
body.country = 'USA';

try {
  const { result, ...httpResponse } = await senderVerificationController.pATCHVerifiedSendersId(id, body);
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
  "id": 1234,
  "nickname": "Example Orders",
  "from_email": "orders@example.com",
  "from_name": "Example Orders",
  "reply_to": "orders@example.com",
  "reply_to_name": "Example Orders",
  "address": "1234 Fake St.",
  "address2": "PO Box 1234",
  "state": "CA",
  "city": "San Francisco",
  "country": "USA",
  "zip": "94105",
  "verified": true,
  "locked": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3VerifiedSenders400Error1Error`](../../doc/models/v3-verified-senders-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`V3VerifiedSenders403Error1Error`](../../doc/models/v3-verified-senders-403-error-1-error.md) |
| 404 | - | [`V3VerifiedSenders404Error1Error`](../../doc/models/v3-verified-senders-404-error-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# DELETE Verified Senders-Id

**This endpoint allows you to delete a Sender Identity**.

Pass the `id` assigned to a Sender Identity to this endpoint to delete the Sender Identity from your account.

You can retrieve the IDs associated with Sender Identities using the "Get All Verified Senders" endpoint.

```ts
async dELETEVerifiedSendersId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await senderVerificationController.dELETEVerifiedSendersId(id);
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
| 403 | - | [`V3VerifiedSenders403Error21Error`](../../doc/models/v3-verified-senders-403-error-21-error.md) |
| 404 | - | [`V3VerifiedSenders404Error1Error`](../../doc/models/v3-verified-senders-404-error-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# POST Verified Senders

**This endpoint allows you to create a new Sender Identify**.

Upon successful submission of a `POST` request to this endpoint, an identity will be created, and a verification email will be sent to the address assigned to the `from_email` field. You must complete the verification process using the sent email to fully verify the sender.

If you need to resend the verification email, you can do so with the Resend Verified Sender Request, `/resend/{id}`, endpoint.

If you need to authenticate a domain rather than a Single Sender, see the [Domain Authentication API](https://sendgrid.api-docs.io/v3.0/domain-authentication/authenticate-a-domain).

```ts
async pOSTVerifiedSenders(
  body?: VerifiedSenderRequestSchema,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VerifiedSenderResponseSchema>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`VerifiedSenderRequestSchema \| undefined`](../../doc/models/verified-sender-request-schema.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VerifiedSenderResponseSchema`](../../doc/models/verified-sender-response-schema.md)

## Example Usage

```ts
const contentType = null;
const body: VerifiedSenderRequestSchema = {
  nickname: 'Orders',
  fromEmail: 'orders@example.com',
  replyTo: 'orders@example.com',
};
body.fromName = 'Example Orders';
body.replyToName = 'Example Orders';
body.address = '1234 Fake St';
body.address2 = 'PO Box 1234';
body.state = 'CA';
body.city = 'San Francisco';
body.zip = '94105';
body.country = 'USA';

try {
  const { result, ...httpResponse } = await senderVerificationController.pOSTVerifiedSenders(body);
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
  "id": 1234,
  "nickname": "Example Orders",
  "from_email": "orders@example.com",
  "from_name": "Example Orders",
  "reply_to": "orders@example.com",
  "reply_to_name": "Example Orders",
  "address": "1234 Fake St.",
  "address2": "PO Box 1234",
  "state": "CA",
  "city": "San Francisco",
  "country": "USA",
  "zip": "94105",
  "verified": true,
  "locked": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3VerifiedSenders400Error1Error`](../../doc/models/v3-verified-senders-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET Verified Senders

**This endpoint allows you to retrieve all the Sender Identities associated with an account.**

This endpoint will return both verified and unverified senders.

You can limit the number of results returned using the `limit`, `lastSeenID`, and `id` query string parameters.

* `limit` allows you to specify an exact number of Sender Identities to return.
* `lastSeenID` will return senders with an ID number occuring after the passed in ID. In other words, the `lastSeenID` provides a starting point from which SendGrid will iterate to find Sender Identities associated with your account.
* `id` will return information about only the Sender Identity passed in the request.

```ts
async gETVerifiedSenders(
  limit?: number,
  lastSeenID?: number,
  id?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3VerifiedSendersResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | - |
| `lastSeenID` | `number \| undefined` | Query, Optional | - |
| `id` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3VerifiedSendersResponse`](../../doc/models/v3-verified-senders-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await senderVerificationController.gETVerifiedSenders();
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
      "id": 1234,
      "nickname": "Example Orders",
      "from_email": "orders@example.com",
      "from_name": "Example Orders",
      "reply_to": "orders@example.com",
      "reply_to_name": "Example Orders",
      "address": "1234 Fake St.",
      "address2": "PO Box 1234",
      "state": "CA",
      "city": "San Francisco",
      "country": "USA",
      "zip": "94105",
      "verified": true,
      "locked": false
    },
    {
      "id": 1235,
      "nickname": "Example Support",
      "from_email": "support@example.com",
      "from_name": "Example Support",
      "reply_to": "support@example.com",
      "reply_to_name": "Example Support",
      "address": "1234 Fake St.",
      "address2": "PO Box 1234",
      "state": "CA",
      "city": "San Francisco",
      "country": "USA",
      "zip": "94105",
      "verified": true,
      "locked": false
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


# POST Verified Senders-Resend-Id

**This endpoint allows you to resend a verification email to a specified Sender Identity**.

Passing the `id` assigned to a Sender Identity to this endpoint will resend a verification email to the `from_address` associated with the Sender Identity. This can be useful if someone loses their verification email or needs to have it resent for any other reason.

You can retrieve the IDs associated with Sender Identities by passing a "Get All Verified Senders" endpoint.

```ts
async pOSTVerifiedSendersResendId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await senderVerificationController.pOSTVerifiedSendersResendId(id);
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
| 400 | - | [`V3VerifiedSendersResend400Error1Error`](../../doc/models/v3-verified-senders-resend-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`V3VerifiedSendersResend404Error1Error`](../../doc/models/v3-verified-senders-resend-404-error-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |

