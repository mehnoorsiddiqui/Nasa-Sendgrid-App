# Cancel Scheduled Sends

```ts
const cancelScheduledSendsController = new CancelScheduledSendsController(client);
```

## Class Name

`CancelScheduledSendsController`

## Methods

* [POST Mail-Batch](../../doc/controllers/cancel-scheduled-sends.md#post-mail-batch)
* [POST User-Scheduled Sends](../../doc/controllers/cancel-scheduled-sends.md#post-user-scheduled-sends)
* [GET User-Scheduled Sends](../../doc/controllers/cancel-scheduled-sends.md#get-user-scheduled-sends)
* [GET Mail-Batch-Batch Id](../../doc/controllers/cancel-scheduled-sends.md#get-mail-batch-batch-id)
* [GET User-Scheduled Sends-Batch Id](../../doc/controllers/cancel-scheduled-sends.md#get-user-scheduled-sends-batch-id)
* [PATCH User-Scheduled Sends-Batch Id](../../doc/controllers/cancel-scheduled-sends.md#patch-user-scheduled-sends-batch-id)
* [DELETE User-Scheduled Sends-Batch Id](../../doc/controllers/cancel-scheduled-sends.md#delete-user-scheduled-sends-batch-id)


# POST Mail-Batch

**This endpoint allows you to generate a new batch ID.**

Once a `batch_id` is created, you can associate it with a scheduled send using the `/mail/send` endpoint. Passing the `batch_id` as a field in the `/mail/send` request body will assign the ID to the send you are creating.

Once an ID is associated with a scheduled send, the send can be accessed and its send status can be modified using the `batch_id`.

```ts
async pOSTMailBatch(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MailBatchID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MailBatchID`](../../doc/models/mail-batch-id.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await cancelScheduledSendsController.pOSTMailBatch(onBehalfOf);
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
| 400 | - | [`V3MailBatch400Error1Error`](../../doc/models/v3-mail-batch-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# POST User-Scheduled Sends

**This endpoint allows you to cancel or pause a scheduled send associated with a `batch_id`.**

Passing this endpoint a `batch_id` and status will cancel or pause the scheduled send.

Once a scheduled send is set to `pause` or `cancel` you must use the "Update a scheduled send" endpoint to change its status or the "Delete a cancellation or pause from a scheduled send" endpoint to remove the status. Passing a status change to a scheduled send that has already been paused or cancelled will result in a `400` level status code.

If the maximum number of cancellations/pauses are added to a send, a `400` level status code will be returned.

```ts
async pOSTUserScheduledSends(
  onBehalfOf?: string,
  body?: Cancelorpauseascheduledsendrequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserScheduledSendstatus>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`Cancelorpauseascheduledsendrequest \| undefined`](../../doc/models/cancelorpauseascheduledsendrequest.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserScheduledSendstatus`](../../doc/models/user-scheduled-sendstatus.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: Cancelorpauseascheduledsendrequest = {
  batchId: 'YOUR_BATCH_ID',
  status: 'pause',
};

try {
  const { result, ...httpResponse } = await cancelScheduledSendsController.pOSTUserScheduledSends(onBehalfOf, body);
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
| 400 | - | [`V3MailBatch400Error1Error`](../../doc/models/v3-mail-batch-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET User-Scheduled Sends

**This endpoint allows you to retrieve all cancelled and paused scheduled send information.**

This endpoint will return only the scheduled sends that are associated with a `batch_id`. If you have scheduled a send using the `/mail/send` endpoint and the `send_at` field but no `batch_id`, the send will be scheduled for delivery; however, it will not be returned by this endpoint. For this reason, you should assign a `batch_id` to any scheduled send you may need to pause or cancel in the future.

```ts
async gETUserScheduledSends(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserScheduledSendstatus[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserScheduledSendstatus[]`](../../doc/models/user-scheduled-sendstatus.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await cancelScheduledSendsController.gETUserScheduledSends(onBehalfOf);
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
| 400 | - | [`V3MailBatch400Error1Error`](../../doc/models/v3-mail-batch-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET Mail-Batch-Batch Id

**This endpoint allows you to validate a batch ID.**

When you pass a valid `batch_id` to this endpoint, it will return a `200` status code and the batch ID itself.

If you pass an invalid `batch_id` to the endpoint, you will receive a `400` level status code and an error message.

A `batch_id` does not need to be assigned to a scheduled send to be considered valid. A successful response means only that the `batch_id` has been created, but it does not indicate that it has been associated with a send.

```ts
async gETMailBatchBatchId(
  batchId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MailBatchID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `batchId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MailBatchID`](../../doc/models/mail-batch-id.md)

## Example Usage

```ts
const batchId = 'batch_id8';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await cancelScheduledSendsController.gETMailBatchBatchId(batchId, onBehalfOf);
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
| 400 | - | [`V3MailBatch400Error1Error`](../../doc/models/v3-mail-batch-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET User-Scheduled Sends-Batch Id

**This endpoint allows you to retrieve the cancel/paused scheduled send information for a specific `batch_id`.**

```ts
async gETUserScheduledSendsBatchId(
  batchId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserScheduledSendstatus[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `batchId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserScheduledSendstatus[]`](../../doc/models/user-scheduled-sendstatus.md)

## Example Usage

```ts
const batchId = 'batch_id8';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await cancelScheduledSendsController.gETUserScheduledSendsBatchId(batchId, onBehalfOf);
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
| 400 | - | [`V3MailBatch400Error1Error`](../../doc/models/v3-mail-batch-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# PATCH User-Scheduled Sends-Batch Id

**This endpoint allows you to update the status of a scheduled send for the given `batch_id`.**

If you have already set a `cancel` or `pause` status on a scheduled send using the "Cancel or pause a scheduled send" endpoint, you can update it's status using this endpoint. Attempting to update a status once it has been set with the "Cancel or pause a scheduled send" endpoint will result in a `400` error.

```ts
async pATCHUserScheduledSendsBatchId(
  batchId: string,
  onBehalfOf?: string,
  body?: V3UserScheduledSendsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `batchId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3UserScheduledSendsRequest \| undefined`](../../doc/models/v3-user-scheduled-sends-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const batchId = 'batch_id8';
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3UserScheduledSendsRequest = {
  status: 'pause',
};

try {
  const { result, ...httpResponse } = await cancelScheduledSendsController.pATCHUserScheduledSendsBatchId(batchId, onBehalfOf, body);
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
| 400 | - | [`V3MailBatch400Error1Error`](../../doc/models/v3-mail-batch-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# DELETE User-Scheduled Sends-Batch Id

**This endpoint allows you to delete the cancellation/pause of a scheduled send.**

Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.

```ts
async dELETEUserScheduledSendsBatchId(
  batchId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `batchId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const batchId = 'batch_id8';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await cancelScheduledSendsController.dELETEUserScheduledSendsBatchId(batchId, onBehalfOf);
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
| 400 | - | [`V3MailBatch400Error1Error`](../../doc/models/v3-mail-batch-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |

