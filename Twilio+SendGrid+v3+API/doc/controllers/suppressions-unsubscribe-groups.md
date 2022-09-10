# Suppressions-Unsubscribe Groups

```ts
const suppressionsUnsubscribeGroupsController = new SuppressionsUnsubscribeGroupsController(client);
```

## Class Name

`SuppressionsUnsubscribeGroupsController`

## Methods

* [POST Asm-Groups](../../doc/controllers/suppressions-unsubscribe-groups.md#post-asm-groups)
* [GET Asm-Groups](../../doc/controllers/suppressions-unsubscribe-groups.md#get-asm-groups)
* [GET Asm-Groups-Group Id](../../doc/controllers/suppressions-unsubscribe-groups.md#get-asm-groups-group-id)
* [PATCH Asm-Groups-Group Id](../../doc/controllers/suppressions-unsubscribe-groups.md#patch-asm-groups-group-id)
* [DELETE Asm-Groups-Group Id](../../doc/controllers/suppressions-unsubscribe-groups.md#delete-asm-groups-group-id)


# POST Asm-Groups

**This endpoint allows you to create a new suppression group.**

To add an email address to the suppression group, [create a Suppression](https://sendgrid.api-docs.io/v3.0/suppressions-suppressions/add-suppressions-to-a-suppression-group).

```ts
async pOSTAsmGroups(
  onBehalfOf?: string,
  body?: SuppressionGroupRequestBase,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3AsmGroupsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`SuppressionGroupRequestBase \| undefined`](../../doc/models/suppression-group-request-base.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3AsmGroupsResponse`](../../doc/models/v3-asm-groups-response.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await suppressionsUnsubscribeGroupsController.pOSTAsmGroups(onBehalfOf);
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
  "id": 103,
  "name": "Product Suggestions",
  "description": "Suggestions for products our users might like.",
  "is_default": false
}
```


# GET Asm-Groups

**This endpoint allows you to retrieve a list of all suppression groups created by this user.**

This endpoint can also return information for multiple group IDs that you include in your request. To add a group ID to your request, simply append `?id=123456&id=123456`, with the appropriate group IDs.

```ts
async gETAsmGroups(
  id?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuppressionsSuppressionGroup[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Query, Optional | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SuppressionsSuppressionGroup[]`](../../doc/models/suppressions-suppression-group.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await suppressionsUnsubscribeGroupsController.gETAsmGroups(None, onBehalfOf);
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
    "id": 1234,
    "name": "Unsubscribe Group",
    "description": "An Unsubscribe Group",
    "last_email_sent_at": null,
    "is_default": true,
    "unsubscribes": 1234
  },
  {
    "id": 1234,
    "name": "Unsubscribe Group",
    "description": "An Unsubscribe Group",
    "last_email_sent_at": null,
    "is_default": true,
    "unsubscribes": 1234
  }
]
```


# GET Asm-Groups-Group Id

**This endpoint allows you to retrieve a single suppression group.**

```ts
async gETAsmGroupsGroupId(
  groupId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3AsmGroupsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | The ID of the suppression group you would like to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3AsmGroupsResponse1`](../../doc/models/v3-asm-groups-response-1.md)

## Example Usage

```ts
const groupId = 'group_id0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await suppressionsUnsubscribeGroupsController.gETAsmGroupsGroupId(groupId, onBehalfOf);
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
  "description": "Our monthly newsletter.",
  "id": 100,
  "is_default": true,
  "last_email_sent_at": null,
  "name": "Newsletters",
  "unsubscribes": 400
}
```


# PATCH Asm-Groups-Group Id

**This endpoint allows you to update or change a suppression group.**

```ts
async pATCHAsmGroupsGroupId(
  groupId: string,
  onBehalfOf?: string,
  body?: SuppressionGroupRequestBase,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuppressionsSuppressionGroup>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | The ID of the suppression group you would like to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`SuppressionGroupRequestBase \| undefined`](../../doc/models/suppression-group-request-base.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SuppressionsSuppressionGroup`](../../doc/models/suppressions-suppression-group.md)

## Example Usage

```ts
const groupId = 'group_id0';
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await suppressionsUnsubscribeGroupsController.pATCHAsmGroupsGroupId(groupId, onBehalfOf);
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
  "id": 103,
  "name": "Item Suggestions",
  "description": "Suggestions for items our users might like."
}
```


# DELETE Asm-Groups-Group Id

**This endpoint allows you to delete a suppression group.**

If a recipient uses the "one-click unsubscribe" option on an email associated with a deleted group, that recipient will be added to the global suppression list.

Deleting a suppression group will remove the suppression, meaning email will once again be sent to the previously suppressed addresses. This should be avoided unless a recipient indicates they wish to receive email from you again. You can use our [bypass filters](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) to deliver messages to otherwise suppressed addresses when exceptions are required.

```ts
async dELETEAsmGroupsGroupId(
  groupId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | The ID of the suppression group you would like to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const groupId = 'group_id0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await suppressionsUnsubscribeGroupsController.dELETEAsmGroupsGroupId(groupId, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

