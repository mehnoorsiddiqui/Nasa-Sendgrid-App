# Suppressions-Global Suppressions

```ts
const suppressionsGlobalSuppressionsController = new SuppressionsGlobalSuppressionsController(client);
```

## Class Name

`SuppressionsGlobalSuppressionsController`

## Methods

* [POST Asm-Suppressions-Global](../../doc/controllers/suppressions-global-suppressions.md#post-asm-suppressions-global)
* [GET Suppression-Unsubscribes](../../doc/controllers/suppressions-global-suppressions.md#get-suppression-unsubscribes)
* [GET Asm-Suppressions-Global-Email](../../doc/controllers/suppressions-global-suppressions.md#get-asm-suppressions-global-email)
* [DELETE Asm-Suppressions-Global-Email](../../doc/controllers/suppressions-global-suppressions.md#delete-asm-suppressions-global-email)


# POST Asm-Suppressions-Global

**This endpoint allows you to add one or more email addresses to the global suppressions group.**

```ts
async pOSTAsmSuppressionsGlobal(
  onBehalfOf?: string,
  body?: SuppressionsRequestBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3AsmSuppressionsGlobalResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`SuppressionsRequestBody \| undefined`](../../doc/models/suppressions-request-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3AsmSuppressionsGlobalResponse`](../../doc/models/v3-asm-suppressions-global-response.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyRecipientEmails: string[] = ['test1@example.com', 'test2@example.com'];
const body: SuppressionsRequestBody = {
  recipientEmails: bodyRecipientEmails,
};

try {
  const { result, ...httpResponse } = await suppressionsGlobalSuppressionsController.pOSTAsmSuppressionsGlobal(onBehalfOf, body);
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
  "recipient_emails": [
    "test1@example.com",
    "test2@example.com"
  ]
}
```


# GET Suppression-Unsubscribes

**This endpoint allows you to retrieve a list of all email address that are globally suppressed.**

```ts
async gETSuppressionUnsubscribes(
  startTime?: number,
  endTime?: number,
  limit?: number,
  offset?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3SuppressionUnsubscribesResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startTime` | `number \| undefined` | Query, Optional | Refers start of the time range in unix timestamp when an unsubscribe email was created (inclusive). |
| `endTime` | `number \| undefined` | Query, Optional | Refers end of the time range in unix timestamp when an unsubscribe email was created (inclusive). |
| `limit` | `number \| undefined` | Query, Optional | The number of results to display on each page. |
| `offset` | `number \| undefined` | Query, Optional | The point in the list of results to begin displaying global suppressions. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3SuppressionUnsubscribesResponse[]`](../../doc/models/v3-suppression-unsubscribes-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await suppressionsGlobalSuppressionsController.gETSuppressionUnsubscribes(None, None, None, None, onBehalfOf);
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
    "created": 1443651141,
    "email": "user1@example.com"
  },
  {
    "created": 1443651154,
    "email": "user2@example.com"
  }
]
```


# GET Asm-Suppressions-Global-Email

**This endpoint allows you to retrieve a global suppression. You can also use this endpoint to confirm if an email address is already globally suppresed.**

If the email address you include in the URL path parameter `{email}` is already globally suppressed, the response will include that email address. If the address you enter for `{email}` is not globally suppressed, an empty JSON object `{}` will be returned.

```ts
async gETAsmSuppressionsGlobalEmail(
  email: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveaGlobalSuppressionresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Template, Required | The email address of the global suppression you want to retrieve. Or, if you want to check if an email address is on the global suppressions list, enter that email address here. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveaGlobalSuppressionresponse`](../../doc/models/retrievea-global-suppressionresponse.md)

## Example Usage

```ts
const email = 'email6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await suppressionsGlobalSuppressionsController.gETAsmSuppressionsGlobalEmail(email, onBehalfOf);
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
  "recipient_email": "test@example.com"
}
```


# DELETE Asm-Suppressions-Global-Email

**This endpoint allows you to remove an email address from the global suppressions group.**

Deleting a suppression group will remove the suppression, meaning email will once again be sent to the previously suppressed addresses. This should be avoided unless a recipient indicates they wish to receive email from you again. You can use our [bypass filters](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) to deliver messages to otherwise suppressed addresses when exceptions are required.

```ts
async dELETEAsmSuppressionsGlobalEmail(
  email: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Template, Required | The email address of the global suppression you want to retrieve. Or, if you want to check if an email address is on the global suppressions list, enter that email address here. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const email = 'email6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await suppressionsGlobalSuppressionsController.dELETEAsmSuppressionsGlobalEmail(email, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

