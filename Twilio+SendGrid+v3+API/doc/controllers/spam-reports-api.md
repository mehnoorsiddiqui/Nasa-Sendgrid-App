# Spam Reports API

```ts
const spamReportsAPIController = new SpamReportsAPIController(client);
```

## Class Name

`SpamReportsAPIController`

## Methods

* [GET Suppression-Spam Reports](../../doc/controllers/spam-reports-api.md#get-suppression-spam-reports)
* [DELETE Suppression-Spam Reports](../../doc/controllers/spam-reports-api.md#delete-suppression-spam-reports)
* [GET Suppression-Spam Reports-Email](../../doc/controllers/spam-reports-api.md#get-suppression-spam-reports-email)
* [DELETE Suppression-Spam Reports-Email](../../doc/controllers/spam-reports-api.md#delete-suppression-spam-reports-email)


# GET Suppression-Spam Reports

**This endpoint allows you to retrieve all spam reports.**

```ts
async gETSuppressionSpamReports(
  startTime?: number,
  endTime?: number,
  limit?: number,
  offset?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SpamReportsResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startTime` | `number \| undefined` | Query, Optional | The start of the time range when a spam report was created (inclusive). This is a unix timestamp. |
| `endTime` | `number \| undefined` | Query, Optional | The end of the time range when a spam report was created (inclusive). This is a unix timestamp. |
| `limit` | `number \| undefined` | Query, Optional | Limit the number of results to be displayed per page. |
| `offset` | `number \| undefined` | Query, Optional | Paging offset. The point in the list to begin displaying results. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SpamReportsResponse[]`](../../doc/models/spam-reports-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await spamReportsAPIController.gETSuppressionSpamReports(None, None, None, None, onBehalfOf);
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
    "email": "user1@example.com",
    "ip": "10.63.202.100"
  },
  {
    "created": 1443651154,
    "email": "user2@example.com",
    "ip": "10.63.202.100"
  }
]
```


# DELETE Suppression-Spam Reports

**This endpoint allows you to delete your spam reports.**

Deleting a spam report will remove the suppression, meaning email will once again be sent to the previously suppressed address. This should be avoided unless a recipient indicates they wish to receive email from you again. You can use our [bypass filters](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) to deliver messages to otherwise suppressed addresses when exceptions are required.

There are two options for deleting spam reports:

1. You can delete all spam reports by setting the `delete_all` field to `true` in the request body.
2. You can delete a list of select spam reports by specifying the email addresses in the `emails` array of the request body.

```ts
async dELETESuppressionSpamReports(
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
  const { result, ...httpResponse } = await spamReportsAPIController.dELETESuppressionSpamReports(contentType, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# GET Suppression-Spam Reports-Email

**This endpoint allows you to retrieve a specific spam report by email address.**

```ts
async gETSuppressionSpamReportsEmail(
  email: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SpamReportsResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Template, Required | The email address of a specific spam report that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SpamReportsResponse[]`](../../doc/models/spam-reports-response.md)

## Example Usage

```ts
const email = 'email6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await spamReportsAPIController.gETSuppressionSpamReportsEmail(email, onBehalfOf);
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
    "email": "user1@example.com",
    "ip": "10.63.202.100"
  },
  {
    "created": 1443651154,
    "email": "user2@example.com",
    "ip": "10.63.202.100"
  }
]
```


# DELETE Suppression-Spam Reports-Email

**This endpoint allows you to delete a specific spam report by email address.**

Deleting a spam report will remove the suppression, meaning email will once again be sent to the previously suppressed address. This should be avoided unless a recipient indicates they wish to receive email from you again. You can use our [bypass filters](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) to deliver messages to otherwise suppressed addresses when exceptions are required.

```ts
async dELETESuppressionSpamReportsEmail(
  email: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Template, Required | The email address of a specific spam report that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const email = 'email6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await spamReportsAPIController.dELETESuppressionSpamReportsEmail(email, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

