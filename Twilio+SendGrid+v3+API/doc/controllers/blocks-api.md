# Blocks API

```ts
const blocksAPIController = new BlocksAPIController(client);
```

## Class Name

`BlocksAPIController`

## Methods

* [GET Suppression-Blocks](../../doc/controllers/blocks-api.md#get-suppression-blocks)
* [DELETE Suppression-Blocks](../../doc/controllers/blocks-api.md#delete-suppression-blocks)
* [GET Suppression-Blocks-Email](../../doc/controllers/blocks-api.md#get-suppression-blocks-email)
* [DELETE Suppression-Blocks-Email](../../doc/controllers/blocks-api.md#delete-suppression-blocks-email)


# GET Suppression-Blocks

**This endpoint allows you to retrieve all email addresses that are currently on your blocks list. A maximum of 500 blocks will be returned per query. You can use the `offset` and `limit` parameters to retrieve more or less than 500 results.**

```ts
async gETSuppressionBlocks(
  startTime?: number,
  endTime?: number,
  limit?: number,
  offset?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BlocksResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startTime` | `number \| undefined` | Query, Optional | The start of the time range when a blocked email was created (inclusive). This is a unix timestamp. |
| `endTime` | `number \| undefined` | Query, Optional | The end of the time range when a blocked email was created (inclusive). This is a unix timestamp. |
| `limit` | `number \| undefined` | Query, Optional | Limit the number of results to be displayed per page. |
| `offset` | `number \| undefined` | Query, Optional | The point in the list to begin displaying results. To retrieve more than 500 results, you can make multiple requests to the API, using the `offset` to begin at the next result in the list. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BlocksResponse[]`](../../doc/models/blocks-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await blocksAPIController.gETSuppressionBlocks(None, None, None, None, onBehalfOf);
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
    "created": 1443651154,
    "email": "example@example.com",
    "reason": "error dialing remote address: dial tcp 10.57.152.165:25: no route to host",
    "status": "4.0.0"
  }
]
```


# DELETE Suppression-Blocks

**This endpoint allows you to delete all email addresses on your blocks list.**

There are two options for deleting blocked emails:

1. You can delete all blocked emails by setting `delete_all` to `true` in the request body.
2. You can delete a selection of blocked emails by specifying the email addresses in the `emails` array of the request body.

```ts
async dELETESuppressionBlocks(
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
  const { result, ...httpResponse } = await blocksAPIController.dELETESuppressionBlocks(contentType, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# GET Suppression-Blocks-Email

**This endpoint allows you to retrieve a specific email address from your blocks list.**

```ts
async gETSuppressionBlocksEmail(
  email: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BlocksResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Template, Required | The email address of the specific block. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BlocksResponse[]`](../../doc/models/blocks-response.md)

## Example Usage

```ts
const email = 'email6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await blocksAPIController.gETSuppressionBlocksEmail(email, onBehalfOf);
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
    "created": 1443651154,
    "email": "example@example.com",
    "reason": "error dialing remote address: dial tcp 10.57.152.165:25: no route to host",
    "status": "4.0.0"
  }
]
```


# DELETE Suppression-Blocks-Email

**This endpoint allows you to delete a specific email address from your blocks list.**

```ts
async dELETESuppressionBlocksEmail(
  email: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Template, Required | The email address of the specific block. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const email = 'email6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await blocksAPIController.dELETESuppressionBlocksEmail(email, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

