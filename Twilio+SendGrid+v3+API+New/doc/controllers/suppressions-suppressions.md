# Suppressions-Suppressions

```ts
const suppressionsSuppressionsController = new SuppressionsSuppressionsController(client);
```

## Class Name

`SuppressionsSuppressionsController`

## Methods

* [POST Asm-Groups-Group Id-Suppressions](../../doc/controllers/suppressions-suppressions.md#post-asm-groups-group-id-suppressions)
* [GET Asm-Groups-Group Id-Suppressions](../../doc/controllers/suppressions-suppressions.md#get-asm-groups-group-id-suppressions)
* [POST Asm-Groups-Group Id-Suppressions-Search](../../doc/controllers/suppressions-suppressions.md#post-asm-groups-group-id-suppressions-search)
* [GET Asm-Suppressions](../../doc/controllers/suppressions-suppressions.md#get-asm-suppressions)
* [GET Asm-Suppressions-Email](../../doc/controllers/suppressions-suppressions.md#get-asm-suppressions-email)
* [DELETE Asm-Groups-Group Id-Suppressions-Email](../../doc/controllers/suppressions-suppressions.md#delete-asm-groups-group-id-suppressions-email)


# POST Asm-Groups-Group Id-Suppressions

**This endpoint allows you to add email addresses to an unsubscribe group.**

If you attempt to add suppressions to a group that has been deleted or does not exist, the suppressions will be added to the global suppressions list.

```ts
async pOSTAsmGroupsGroupIdSuppressions(
  groupId: string,
  onBehalfOf?: string,
  body?: SuppressionsRequestBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3AsmGroupsSuppressionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | The id of the unsubscribe group that you are adding suppressions to. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`SuppressionsRequestBody \| undefined`](../../doc/models/suppressions-request-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3AsmGroupsSuppressionsResponse`](../../doc/models/v3-asm-groups-suppressions-response.md)

## Example Usage

```ts
const groupId = 'group_id0';
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyRecipientEmails: string[] = ['test1@example.com', 'test2@example.com'];
const body: SuppressionsRequestBody = {
  recipientEmails: bodyRecipientEmails,
};

try {
  const { result, ...httpResponse } = await suppressionsSuppressionsController.pOSTAsmGroupsGroupIdSuppressions(groupId, onBehalfOf, body);
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


# GET Asm-Groups-Group Id-Suppressions

**This endpoint allows you to retrieve all suppressed email addresses belonging to the given group.**

```ts
async gETAsmGroupsGroupIdSuppressions(
  groupId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<string[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | The id of the unsubscribe group that you are adding suppressions to. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string[]`

## Example Usage

```ts
const groupId = 'group_id0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await suppressionsSuppressionsController.gETAsmGroupsGroupIdSuppressions(groupId, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
[
  "example@example.com",
  "example2@example.com"
]
```


# POST Asm-Groups-Group Id-Suppressions-Search

**This endpoint allows you to search a suppression group for multiple suppressions.**

When given a list of email addresses and a group ID, this endpoint will only return the email addresses that have been unsubscribed from the given group.

```ts
async pOSTAsmGroupsGroupIdSuppressionsSearch(
  groupId: string,
  onBehalfOf?: string,
  body?: SuppressionsRequestBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<string[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | The ID of the suppression group that you would like to search. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`SuppressionsRequestBody \| undefined`](../../doc/models/suppressions-request-body.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string[]`

## Example Usage

```ts
const groupId = 'group_id0';
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyRecipientEmails: string[] = ['test1@example.com', 'test2@example.com'];
const body: SuppressionsRequestBody = {
  recipientEmails: bodyRecipientEmails,
};

try {
  const { result, ...httpResponse } = await suppressionsSuppressionsController.pOSTAsmGroupsGroupIdSuppressionsSearch(groupId, onBehalfOf, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
[
  "exists1@example.com",
  "exists2@example.com"
]
```


# GET Asm-Suppressions

**This endpoint allows you to retrieve a list of all suppressions.**

```ts
async gETAsmSuppressions(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3AsmSuppressionsResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3AsmSuppressionsResponse[]`](../../doc/models/v3-asm-suppressions-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await suppressionsSuppressionsController.gETAsmSuppressions(onBehalfOf);
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
    "email": "test1@example.com",
    "group_id": 1,
    "group_name": "Weekly News",
    "created_at": 1410986704
  },
  {
    "email": "test1@example.com",
    "group_id": 2,
    "group_name": "Daily News",
    "created_at": 1411493671
  },
  {
    "email": "test2@example.com",
    "group_id": 2,
    "group_name": "Daily News",
    "created_at": 1411493671
  }
]
```


# GET Asm-Suppressions-Email

**This endpoint returns a list of all groups from which the given email address has been unsubscribed.**

```ts
async gETAsmSuppressionsEmail(
  email: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3AsmSuppressionsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Template, Required | The email address that you want to search suppression groups for. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3AsmSuppressionsResponse1`](../../doc/models/v3-asm-suppressions-response-1.md)

## Example Usage

```ts
const email = 'email6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await suppressionsSuppressionsController.gETAsmSuppressionsEmail(email, onBehalfOf);
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
  "suppressions": [
    {
      "description": "Optional description.",
      "id": 1,
      "is_default": true,
      "name": "Weekly News",
      "suppressed": true
    },
    {
      "description": "Some daily news.",
      "id": 2,
      "is_default": true,
      "name": "Daily News",
      "suppressed": true
    },
    {
      "description": "An old group.",
      "id": 2,
      "is_default": false,
      "name": "Old News",
      "suppressed": false
    }
  ]
}
```


# DELETE Asm-Groups-Group Id-Suppressions-Email

**This endpoint allows you to remove a suppressed email address from the given suppression group.**

Removing an address will remove the suppression, meaning email will once again be sent to the previously suppressed addresses. This should be avoided unless a recipient indicates they wish to receive email from you again. You can use our [bypass filters](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) to deliver messages to otherwise suppressed addresses when exceptions are required.

```ts
async dELETEAsmGroupsGroupIdSuppressionsEmail(
  groupId: string,
  email: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `string` | Template, Required | The id of the suppression group that you are removing an email address from. |
| `email` | `string` | Template, Required | The email address that you want to remove from the suppression group. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const groupId = 'group_id0';
const email = 'email6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await suppressionsSuppressionsController.dELETEAsmGroupsGroupIdSuppressionsEmail(groupId, email, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

