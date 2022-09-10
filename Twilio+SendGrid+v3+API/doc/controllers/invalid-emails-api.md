# Invalid Emails API

```ts
const invalidEmailsAPIController = new InvalidEmailsAPIController(client);
```

## Class Name

`InvalidEmailsAPIController`

## Methods

* [GET Suppression-Invalid Emails](../../doc/controllers/invalid-emails-api.md#get-suppression-invalid-emails)
* [DELETE Suppression-Invalid Emails](../../doc/controllers/invalid-emails-api.md#delete-suppression-invalid-emails)
* [GET Suppression-Invalid Emails-Email](../../doc/controllers/invalid-emails-api.md#get-suppression-invalid-emails-email)
* [DELETE Suppression-Invalid Emails-Email](../../doc/controllers/invalid-emails-api.md#delete-suppression-invalid-emails-email)


# GET Suppression-Invalid Emails

**This endpoint allows you to retrieve a list of all invalid email addresses.**

```ts
async gETSuppressionInvalidEmails(
  startTime?: number,
  endTime?: number,
  limit?: number,
  offset?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InvalidEmail[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startTime` | `number \| undefined` | Query, Optional | Refers start of the time range in unix timestamp when an invalid email was created (inclusive). |
| `endTime` | `number \| undefined` | Query, Optional | Refers end of the time range in unix timestamp when an invalid email was created (inclusive). |
| `limit` | `number \| undefined` | Query, Optional | Limit the number of results to be displayed per page. |
| `offset` | `number \| undefined` | Query, Optional | Paging offset. The point in the list to begin displaying results. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`InvalidEmail[]`](../../doc/models/invalid-email.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await invalidEmailsAPIController.gETSuppressionInvalidEmails(None, None, None, None, onBehalfOf);
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
    "created": 1449953655,
    "email": "user1@example.com",
    "reason": "Mail domain mentioned in email address is unknown"
  },
  {
    "created": 1449939373,
    "email": "user2@example.com",
    "reason": "Mail domain mentioned in email address is unknown"
  }
]
```


# DELETE Suppression-Invalid Emails

**This endpoint allows you to remove email addresses from your invalid email address list.**

There are two options for deleting invalid email addresses:

1) You can delete all invalid email addresses by setting `delete_all` to true in the request body.
2) You can delete some invalid email addresses by specifying certain addresses in an array in the request body.

```ts
async dELETESuppressionInvalidEmails(
  contentType: ContentTypeEnum,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentTypeEnum`](../../doc/models/content-type-enum.md) | Header, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const contentType = 'application/json';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await invalidEmailsAPIController.dELETESuppressionInvalidEmails(contentType, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# GET Suppression-Invalid Emails-Email

**This endpoint allows you to retrieve a specific invalid email addresses.**

```ts
async gETSuppressionInvalidEmailsEmail(
  email: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InvalidEmail[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Template, Required | The specific email address of the invalid email entry that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`InvalidEmail[]`](../../doc/models/invalid-email.md)

## Example Usage

```ts
const email = 'email6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await invalidEmailsAPIController.gETSuppressionInvalidEmailsEmail(email, onBehalfOf);
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
    "created": 1454433146,
    "email": "test1@example.com",
    "reason": "Mail domain mentioned in email address is unknown"
  }
]
```


# DELETE Suppression-Invalid Emails-Email

**This endpoint allows you to remove a specific email address from the invalid email address list.**

```ts
async dELETESuppressionInvalidEmailsEmail(
  email: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Template, Required | The specific email address of the invalid email entry that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const email = 'email6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await invalidEmailsAPIController.dELETESuppressionInvalidEmailsEmail(email, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

