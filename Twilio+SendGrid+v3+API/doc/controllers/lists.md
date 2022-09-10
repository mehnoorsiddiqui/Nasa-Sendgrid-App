# Lists

```ts
const listsController = new ListsController(client);
```

## Class Name

`ListsController`

## Methods

* [POST Mc-Lists](../../doc/controllers/lists.md#post-mc-lists)
* [GET Mc-Lists](../../doc/controllers/lists.md#get-mc-lists)
* [GET Mc-Lists-Id-Contacts-Count](../../doc/controllers/lists.md#get-mc-lists-id-contacts-count)
* [GET Mc-Lists-Id](../../doc/controllers/lists.md#get-mc-lists-id)
* [PATCH Mc-Lists-Id](../../doc/controllers/lists.md#patch-mc-lists-id)
* [DELETE Lists-Id](../../doc/controllers/lists.md#delete-lists-id)
* [DELETE Mc-Lists-Id-Contacts](../../doc/controllers/lists.md#delete-mc-lists-id-contacts)


# POST Mc-Lists

**This endpoint creates a new contacts list.**

Once you create a list, you can use the UI to [trigger an automation](https://sendgrid.com/docs/ui/sending-email/getting-started-with-automation/#create-an-automation) every time you add a new contact to the list.

A link to the newly created object is in `_metadata`.

```ts
async pOSTMcLists(
  body?: V3MarketingListsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<List1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3MarketingListsRequest \| undefined`](../../doc/models/v3-marketing-lists-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`List1`](../../doc/models/list-1.md)

## Example Usage

```ts
const contentType = null;
const body: V3MarketingListsRequest = {
  name: 'list-name',
};

try {
  const { result, ...httpResponse } = await listsController.pOSTMcLists(body);
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
  "id": "ca7a3796-e8a8-4029-9ccb-df8937940562",
  "name": "list-name",
  "contact_count": 0,
  "_metadata": {
    "self": "https://api.sendgrid.com/v3/marketing/lists/ca7a3796-e8a8-4029-9ccb-df8937940562"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3MarketingLists400Error1Error`](../../doc/models/v3-marketing-lists-400-error-1-error.md) |


# GET Mc-Lists

**This endpoint returns an array of all of your contact lists.**

```ts
async gETMcLists(
  pageSize?: number,
  pageToken?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingListsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pageSize` | `number \| undefined` | Query, Optional | Maximum number of elements to return. Defaults to 100, returns 1000 max<br>**Default**: `100`<br>**Constraints**: `>= 1`, `<= 1000` |
| `pageToken` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingListsResponse`](../../doc/models/v3-marketing-lists-response.md)

## Example Usage

```ts
const pageSize = 148.38;
try {
  const { result, ...httpResponse } = await listsController.gETMcLists(pageSize);
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
      "id": "abc12312-x3y4-1234-abcd-123qwe456rty",
      "name": "list-name",
      "contact_count": 0,
      "_metadata": {
        "self": "https://api.sendgrid.com/v3/marketing/lists/abc12312-x3y4-1234-abcd-123qwe456rty"
      }
    }
  ],
  "_metadata": {
    "self": "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token="
  }
}
```


# GET Mc-Lists-Id-Contacts-Count

**This endpoint returns the number of contacts on a specific list.**

```ts
async gETMcListsIdContactsCount(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingListsContactsCountResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingListsContactsCountResponse`](../../doc/models/v3-marketing-lists-contacts-count-response.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await listsController.gETMcListsIdContactsCount(id);
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
  "contact_count": 0,
  "billable_count:": 0
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | `ApiError` |


# GET Mc-Lists-Id

**This endpoint returns data about a specific list.**

Setting the optional parameter `contact_sample=true` returns the `contact_sample` in the response body. Up to fifty of the most recent contacts uploaded or attached to a list will be returned, sorted alphabetically, by email address.

The full contact count is also returned.

```ts
async gETMcListsId(
  id: string,
  contactSample?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingListsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `contactSample` | `boolean \| undefined` | Query, Optional | Setting this parameter to the true  will cause the contact_sample to be returned<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingListsResponse1`](../../doc/models/v3-marketing-lists-response-1.md)

## Example Usage

```ts
const id = 'id0';
const contactSample = false;
try {
  const { result, ...httpResponse } = await listsController.gETMcListsId(id, contactSample);
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
  "contact_count": 2,
  "contact_sample": {
    "id": "c3445f88-5c69-4237-86e6-9ec9de958050",
    "list_ids": [
      "199abb98-0af3-4a8d-b371-6811ff85d062"
    ],
    "created_at": "2620-06-16T17:03:54.867Z",
    "updated_at": "4780-12-06T06:51:30.024Z"
  },
  "_metadata": {
    "self": "https://api.sendgrid.com/v3/marketing/lists/199abb98-0af3-4a8d-b371-6811ff85d062"
  },
  "id": "199abb98-0af3-4a8d-b371-6811ff85d062",
  "name": "list-name"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | [`Error10Error`](../../doc/models/error-10-error.md) |


# PATCH Mc-Lists-Id

**This endpoint updates the name of a list.**

```ts
async pATCHMcListsId(
  id: string,
  body?: V3MarketingListsRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<List1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`V3MarketingListsRequest1 \| undefined`](../../doc/models/v3-marketing-lists-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`List1`](../../doc/models/list-1.md)

## Example Usage

```ts
const id = 'id0';
const contentType = null;
const body: V3MarketingListsRequest1 = {};
body.name = 'updated-list-name';

try {
  const { result, ...httpResponse } = await listsController.pATCHMcListsId(id, body);
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
  "id": "abc12312-x3y4-1234-abcd-123qwe456rty",
  "name": "updated-list-name",
  "contact_count": 0,
  "_metadata": {
    "self": "https://api.sendgrid.com/v3/marketing/lists/abc12312-x3y4-1234-abcd-123qwe456rty"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3MarketingLists400Error1Error`](../../doc/models/v3-marketing-lists-400-error-1-error.md) |
| 404 | - | `ApiError` |


# DELETE Lists-Id

**This endpoint allows you to deletes a specific list.**

Optionally, you can also delete contacts associated to the list. The query parameter, `delete_contacts=true`, will delete the list and start an asynchronous job to delete associated contacts.

```ts
async dELETEListsId(
  id: string,
  deleteContacts?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingListsResponse7>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `deleteContacts` | `boolean \| undefined` | Query, Optional | Flag indicates that all contacts on the list are also to be deleted.<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingListsResponse7`](../../doc/models/v3-marketing-lists-response-7.md)

## Example Usage

```ts
const id = 'id0';
const deleteContacts = false;
try {
  const { result, ...httpResponse } = await listsController.dELETEListsId(id, deleteContacts);
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
  "job_id": "abc12312-x3y4-1234-abcd-123qwe456rty"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | [`V3MarketingLists404Error1Error`](../../doc/models/v3-marketing-lists-404-error-1-error.md) |


# DELETE Mc-Lists-Id-Contacts

**This endpoint allows you to remove contacts from a given list.**

The contacts will not be deleted. Only their list membership will be changed.

```ts
async dELETEMcListsIdContacts(
  id: string,
  contactIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingListsContactsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `contactIds` | `string` | Query, Required | comma separated list of contact ids<br>**Constraints**: *Minimum Length*: `1` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingListsContactsResponse1`](../../doc/models/v3-marketing-lists-contacts-response-1.md)

## Example Usage

```ts
const id = 'id0';
const contactIds = 'contact_ids2';
try {
  const { result, ...httpResponse } = await listsController.dELETEMcListsIdContacts(id, contactIds);
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
| 400 | - | [`Error10Error`](../../doc/models/error-10-error.md) |
| 404 | - | `ApiError` |

