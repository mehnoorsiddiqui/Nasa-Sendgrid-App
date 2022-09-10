# Contacts API-Lists

```ts
const contactsAPIListsController = new ContactsAPIListsController(client);
```

## Class Name

`ContactsAPIListsController`

## Methods

* [POST Contactdb-Lists](../../doc/controllers/contacts-api-lists.md#post-contactdb-lists)
* [GET Contactdb-Lists](../../doc/controllers/contacts-api-lists.md#get-contactdb-lists)
* [DELETE Contactdb-Lists](../../doc/controllers/contacts-api-lists.md#delete-contactdb-lists)
* [GET Contactdb-Lists-List Id](../../doc/controllers/contacts-api-lists.md#get-contactdb-lists-list-id)
* [PATCH Contactdb-Lists-List Id](../../doc/controllers/contacts-api-lists.md#patch-contactdb-lists-list-id)
* [DELETE Contactdb-Lists-List Id](../../doc/controllers/contacts-api-lists.md#delete-contactdb-lists-list-id)
* [GET Contactdb-Lists-List Id-Recipients](../../doc/controllers/contacts-api-lists.md#get-contactdb-lists-list-id-recipients)
* [POST Contactdb-Lists-List Id-Recipients](../../doc/controllers/contacts-api-lists.md#post-contactdb-lists-list-id-recipients)
* [POST Contactdb-Lists-List Id-Recipients-Recipient Id](../../doc/controllers/contacts-api-lists.md#post-contactdb-lists-list-id-recipients-recipient-id)
* [DELETE Contactdb-Lists-List Id-Recipients-Recipient Id](../../doc/controllers/contacts-api-lists.md#delete-contactdb-lists-list-id-recipients-recipient-id)


# POST Contactdb-Lists

**This endpoint allows you to create a list for your recipients.**

```ts
async pOSTContactdbLists(
  onBehalfOf?: string,
  body?: CreateaListrequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ContactDBlists>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`CreateaListrequest \| undefined`](../../doc/models/createa-listrequest.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ContactDBlists`](../../doc/models/contact-d-blists.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: CreateaListrequest = {
  name: 'your list name',
};

try {
  const { result, ...httpResponse } = await contactsAPIListsController.pOSTContactdbLists(onBehalfOf, body);
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
  "name": "your list name",
  "recipient_count": 0
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | "name" : "Returned if list name is a duplicate of an existing list or segment"<br>"name" : "Returned if list name is not a string"<br>"" : "Returned if request body is invalid JSON" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Lists

**This endpoint allows you to retrieve all of your recipient lists. If you don't have any lists, an empty array will be returned.**

```ts
async gETContactdbLists(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListAllListsresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListAllListsresponse`](../../doc/models/list-all-listsresponse.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIListsController.gETContactdbLists(onBehalfOf);
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
  "lists": [
    {
      "id": 1,
      "name": "the jones",
      "recipient_count": 1
    }
  ]
}
```


# DELETE Contactdb-Lists

**This endpoint allows you to delete multiple recipient lists.**

```ts
async dELETEContactdbLists(
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
  const { result, ...httpResponse } = await contactsAPIListsController.dELETEContactdbLists(contentType, onBehalfOf);
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
| 400 | "id" : "Returned if all list ids are not valid" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Lists-List Id

**This endpoint allows you to retrieve a single recipient list.**

```ts
async gETContactdbListsListId(
  listId: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ContactDBlists>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `listId` | `number` | Template, Required | The ID of the list to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ContactDBlists`](../../doc/models/contact-d-blists.md)

## Example Usage

```ts
const listId = 102;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIListsController.gETContactdbListsListId(listId, onBehalfOf);
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
  "name": "listname",
  "recipient_count": 0
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | "list_id" : "Returned if list_id is not valid" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | error | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "list_id" : "Returned if list_id does not exist" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# PATCH Contactdb-Lists-List Id

**This endpoint allows you to update the name of one of your recipient lists.**

```ts
async pATCHContactdbListsListId(
  listId: number,
  onBehalfOf?: string,
  body?: UpdateaListrequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ContactdbListsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `listId` | `number` | Template, Required | The ID of the list you are updating. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`UpdateaListrequest \| undefined`](../../doc/models/updatea-listrequest.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ContactdbListsResponse`](../../doc/models/v3-contactdb-lists-response.md)

## Example Usage

```ts
const listId = 102;
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: UpdateaListrequest = {
  name: 'newlistname',
};

try {
  const { result, ...httpResponse } = await contactsAPIListsController.pATCHContactdbListsListId(listId, onBehalfOf, body);
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
  "name": "2016 iPhone Users",
  "recipient_count": 0
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | "name" : "Returned if list name is a duplicate of existing list or segment"<br>"name" : "Returned if list name is invalid or not provided"<br>"list_id" : "Returned if list_id is not valid"<br>"" : "Returned if request body is invalid JSON" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "list_id" : "Returned if list_id does not exist" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# DELETE Contactdb-Lists-List Id

**This endpoint allows you to delete a specific recipient list with the given ID.**

```ts
async dELETEContactdbListsListId(
  listId: string,
  contentType: ContentTypeEnum,
  deleteContacts?: boolean,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `listId` | `string` | Template, Required | - |
| `contentType` | [`ContentTypeEnum`](../../doc/models/content-type-enum.md) | Header, Required | - |
| `deleteContacts` | `boolean \| undefined` | Query, Optional | Adds the ability to delete all contacts on the list in addition to deleting the list. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const listId = 'list_id2';
const contentType = 'application/json';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIListsController.dELETEContactdbListsListId(listId, contentType, None, onBehalfOf);
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
| 400 | "list_id" : "Returned if list_id is not valid"<br>"delete_contacts" : "Returned if delete_contacts is not valid" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "list_id" : "Returned if list_id does not exist" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Lists-List Id-Recipients

**This endpoint allows you to retrieve all recipients on the list with the given ID.**

```ts
async gETContactdbListsListIdRecipients(
  listId: number,
  page?: number,
  pageSize?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ContactdbListsRecipientsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `listId` | `number` | Template, Required | The ID of the list whose recipients you are requesting. |
| `page` | `number \| undefined` | Query, Optional | Page index of first recipient to return (must be a positive integer) |
| `pageSize` | `number \| undefined` | Query, Optional | Number of recipients to return at a time (must be a positive integer between 1 and 1000) |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ContactdbListsRecipientsResponse`](../../doc/models/v3-contactdb-lists-recipients-response.md)

## Example Usage

```ts
const listId = 102;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIListsController.gETContactdbListsListIdRecipients(listId, None, None, onBehalfOf);
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
  "recipients": [
    {
      "created_at": 1433348344,
      "custom_fields": [
        {
          "id": 6234,
          "name": "age",
          "type": "number",
          "value": null
        },
        {
          "id": 6233,
          "name": "country",
          "type": "text",
          "value": null
        },
        {
          "id": 6235,
          "name": "fname",
          "type": "text",
          "value": "Example"
        },
        {
          "id": 6239,
          "name": "lname",
          "type": "text",
          "value": "User"
        },
        {
          "id": 6240,
          "name": "lname",
          "type": "text",
          "value": null
        }
      ],
      "email": "example@example.com",
      "first_name": "Example",
      "id": "ZGVWfyZWsuYmFpbmVzQHNlbmRmCmLkLmNv==",
      "last_clicked": 1438616117,
      "last_emailed": 1438613272,
      "last_name": "User",
      "last_opened": 1438616109,
      "updated_at": 1438616119
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | "list_id" : "Returned if list_id is not a valid integer"<br>"page" : "Returned if page is not a valid integer"<br>"page" : "Returned if page is less than 1"<br>"page_size" : "Returned if page_size is not a valid integer"<br>"page_size" : "Returned if page_size is less than 1 or greater than 1000" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "list_id" : "Returned if list_id does not exist" | `ApiError` |


# POST Contactdb-Lists-List Id-Recipients

**This endpoint allows you to add multiple recipients to a list.**

Adds existing recipients to a list, passing in the recipient IDs to add. Recipient IDs should be passed exactly as they are returned from recipient endpoints.

```ts
async pOSTContactdbListsListIdRecipients(
  listId: number,
  onBehalfOf?: string,
  body?: number[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `listId` | `number` | Template, Required | The id of the list of recipients you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | `number[] \| undefined` | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const listId = 102;
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIListsController.pOSTContactdbListsListIdRecipients(listId, onBehalfOf);
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
| 400 | "list_id" : "Returned if list_id is not a valid integer"<br>"" : "Returned if no valid recipient ids were passed"<br>"" : "Returned if no recipients were added"<br>"" : "Returned if request body is invalid JSON" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "list_id": "Returned if list_id does not exist" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# POST Contactdb-Lists-List Id-Recipients-Recipient Id

**This endpoint allows you to add a single recipient to a list.**

```ts
async pOSTContactdbListsListIdRecipientsRecipientId(
  listId: number,
  recipientId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `listId` | `number` | Template, Required | The ID of the list that you want to add the recipient to. |
| `recipientId` | `string` | Template, Required | The ID of the recipient you are adding to the list. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const listId = 102;
const recipientId = 'recipient_id0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIListsController.pOSTContactdbListsListIdRecipientsRecipientId(listId, recipientId, onBehalfOf);
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
| 400 | "list_id" : "Returned if list_id is invalid"<br>"recipient_id" : "Returned if recipient_id is invalid" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "list_id" : "Returned if list_id does not exist"<br>"recipient_id" : "Returned if recipient_id does not exist" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# DELETE Contactdb-Lists-List Id-Recipients-Recipient Id

**This endpoint allows you to delete a single recipient from a list.**

```ts
async dELETEContactdbListsListIdRecipientsRecipientId(
  listId: number,
  recipientId: number,
  contentType: ContentTypeEnum,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `listId` | `number` | Template, Required | The ID of the list you are taking this recipient away from. |
| `recipientId` | `number` | Template, Required | The ID of the recipient to take off the list. |
| `contentType` | [`ContentTypeEnum`](../../doc/models/content-type-enum.md) | Header, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const listId = 102;
const recipientId = 234;
const contentType = 'application/json';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIListsController.dELETEContactdbListsListIdRecipientsRecipientId(listId, recipientId, contentType, onBehalfOf);
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
| 400 | "list_id" : "Returned if list_id is not valid"<br>"recipient_id" : "Returned if recipient_id is not valid" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "list_id" : "Returned if list_id does not exist"<br>"recipient_id" : "Returned if recipient_id does not exist" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |

