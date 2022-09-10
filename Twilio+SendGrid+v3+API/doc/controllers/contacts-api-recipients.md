# Contacts API-Recipients

```ts
const contactsAPIRecipientsController = new ContactsAPIRecipientsController(client);
```

## Class Name

`ContactsAPIRecipientsController`

## Methods

* [POST Contactdb-Recipients](../../doc/controllers/contacts-api-recipients.md#post-contactdb-recipients)
* [PATCH Contactdb-Recipients](../../doc/controllers/contacts-api-recipients.md#patch-contactdb-recipients)
* [DELETE Contactdb-Recipients](../../doc/controllers/contacts-api-recipients.md#delete-contactdb-recipients)
* [GET Contactdb-Recipients](../../doc/controllers/contacts-api-recipients.md#get-contactdb-recipients)
* [GET Contactdb-Status](../../doc/controllers/contacts-api-recipients.md#get-contactdb-status)
* [GET Contactdb-Recipients-Recipient Id](../../doc/controllers/contacts-api-recipients.md#get-contactdb-recipients-recipient-id)
* [DELETE Contactdb-Recipients-Recipient Id](../../doc/controllers/contacts-api-recipients.md#delete-contactdb-recipients-recipient-id)
* [GET Contactdb-Recipients-Recipient Id-Lists](../../doc/controllers/contacts-api-recipients.md#get-contactdb-recipients-recipient-id-lists)
* [GET Contactdb-Recipients-Billable Count](../../doc/controllers/contacts-api-recipients.md#get-contactdb-recipients-billable-count)
* [GET Contactdb-Recipients-Count](../../doc/controllers/contacts-api-recipients.md#get-contactdb-recipients-count)
* [GET Contactdb-Recipients-Search](../../doc/controllers/contacts-api-recipients.md#get-contactdb-recipients-search)
* [POST Contactdb-Recipients-Search](../../doc/controllers/contacts-api-recipients.md#post-contactdb-recipients-search)


# POST Contactdb-Recipients

**This endpoint allows you to add a Marketing Campaigns recipient.**

You can add custom field data as a parameter on this endpoint. We have provided an example using some of the default custom fields SendGrid provides.

The rate limit is three requests every 2 seconds. You can upload 1000  contacts per request. So the maximum upload rate is 1500 recipients per second.

```ts
async pOSTContactdbRecipients(
  onBehalfOf?: string,
  body?: V3ContactdbRecipientsRequest[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ContactDBRecipientresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3ContactdbRecipientsRequest[] \| undefined`](../../doc/models/v3-contactdb-recipients-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ContactDBRecipientresponse`](../../doc/models/contact-db-recipientresponse.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIRecipientsController.pOSTContactdbRecipients(onBehalfOf);
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
  "error_count": 1,
  "error_indices": [
    2
  ],
  "new_count": 2,
  "persisted_recipients": [
    "YUBh",
    "bWlsbGVyQG1pbGxlci50ZXN0"
  ],
  "updated_count": 0,
  "errors": [
    {
      "message": "Invalid email.",
      "error_indices": [
        2
      ]
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | "" : "Returned if request body is not valid json" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# PATCH Contactdb-Recipients

**This endpoint allows you to update one or more recipients.**

The body of an API call to this endpoint must include an array of one or more recipient objects.

It is of note that you can add custom field data as parameters on recipient objects. We have provided an example using some of the default custom fields SendGrid provides.

```ts
async pATCHContactdbRecipients(
  onBehalfOf?: string,
  body?: V3ContactdbRecipientsRequest1[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ContactDBRecipientresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3ContactdbRecipientsRequest1[] \| undefined`](../../doc/models/v3-contactdb-recipients-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ContactDBRecipientresponse`](../../doc/models/contact-db-recipientresponse.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIRecipientsController.pATCHContactdbRecipients(onBehalfOf);
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
| 400 | "" : "Returned if request body is not valid json" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# DELETE Contactdb-Recipients

**This endpoint allows you to deletes one or more recipients.**

The body of an API call to this endpoint must include an array of recipient IDs of the recipients you want to delete.

```ts
async dELETEContactdbRecipients(
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
  const { result, ...httpResponse } = await contactsAPIRecipientsController.dELETEContactdbRecipients(contentType, onBehalfOf);
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
| 400 | "" : "Returned if no recipients are deleted"<br>"" : "Returned if all of the provided recipient ids are invalid"<br>"" : "Returned if request body is not valid json" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Recipients

**This endpoint allows you to retrieve all of your Marketing Campaigns recipients.**

Batch deletion of a page makes it possible to receive an empty page of recipients before reaching the end of
the list of recipients. To avoid this issue; iterate over pages until a 404 is retrieved.

```ts
async gETContactdbRecipients(
  page?: number,
  pageSize?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListRecipientsresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Page index of first recipients to return (must be a positive integer) |
| `pageSize` | `number \| undefined` | Query, Optional | Number of recipients to return at a time (must be a positive integer between 1 and 1000) |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListRecipientsresponse`](../../doc/models/list-recipientsresponse.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIRecipientsController.gETContactdbRecipients(None, None, onBehalfOf);
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
| 400 | "page" : "Returned if page is not a valid integer"<br>"page" : "Returned if page is less than 1"<br>"page_size" : "Returned if page_size is not a valid integer"<br>"page_size" : "Returned if page_size is less than 1 or greater than 1000" | `ApiError` |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Status

**This endpoint allows you to check the upload status of a Marketing Campaigns recipient.**

```ts
async gETContactdbStatus(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ContactdbStatusResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ContactdbStatusResponse`](../../doc/models/v3-contactdb-status-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIRecipientsController.gETContactdbStatus(onBehalfOf);
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
  "status": [
    {
      "id": "worker_delay",
      "value": "delayed"
    },
    {
      "id": "worker_delay_seconds",
      "value": "75.0"
    }
  ]
}
```


# GET Contactdb-Recipients-Recipient Id

**This endpoint allows you to retrieve a single recipient by ID from your contact database.**

```ts
async gETContactdbRecipientsRecipientId(
  recipientId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ContactDBRecipient>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | The ID of the recipient that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ContactDBRecipient`](../../doc/models/contact-db-recipient.md)

## Example Usage

```ts
const recipientId = 'recipient_id0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIRecipientsController.gETContactdbRecipientsRecipientId(recipientId, onBehalfOf);
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
| 400 | "recipient_id" : "Returned if recipient_id is not valid" | `ApiError` |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "recipient_id" : "Returned if record for recipient id does not exist" | `ApiError` |


# DELETE Contactdb-Recipients-Recipient Id

**This endpoint allows you to delete a single recipient with the given ID from your contact database.**

> Use this to permanently delete your recipients from all of your contact lists and all segments if required by applicable law.

```ts
async dELETEContactdbRecipientsRecipientId(
  recipientId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | The ID of the recipient that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const recipientId = 'recipient_id0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIRecipientsController.dELETEContactdbRecipientsRecipientId(recipientId, onBehalfOf);
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
| 400 | "recipient_id" : "Returned if recipient_id is not valid" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "recipient_id" : "Returned if record for recipient id does not exist" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Recipients-Recipient Id-Lists

**This endpoint allows you to retrieve the lists that a given recipient belongs to.**

Each recipient can be on many lists. This endpoint gives you all of the lists that any one recipient has been added to.

```ts
async gETContactdbRecipientsRecipientIdLists(
  recipientId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ContactdbRecipientsListsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientId` | `string` | Template, Required | The ID of the recipient for whom you are retrieving lists. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ContactdbRecipientsListsResponse`](../../doc/models/v3-contactdb-recipients-lists-response.md)

## Example Usage

```ts
const recipientId = 'recipient_id0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIRecipientsController.gETContactdbRecipientsRecipientIdLists(recipientId, onBehalfOf);
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
      "id": 1234,
      "name": "Example list",
      "recipient_count": 42
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | "recipient_id" : "Returned if recipient_id is not valid" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "recipient_id" : "Returned if record for the recipient id does not exist" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Recipients-Billable Count

**This endpoint allows you to retrieve the number of Marketing Campaigns recipients that you will be billed for.**

You are billed for marketing campaigns based on the highest number of recipients you have had in your account at one time. This endpoint will allow you to know the current billable count value.

```ts
async gETContactdbRecipientsBillableCount(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ContactDBRecipientCount>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ContactDBRecipientCount`](../../doc/models/contact-db-recipient-count.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIRecipientsController.gETContactdbRecipientsBillableCount(onBehalfOf);
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
  "recipient_count": 1234
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Recipients-Count

**This endpoint allows you to retrieve the total number of Marketing Campaigns recipients.**

```ts
async gETContactdbRecipientsCount(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ContactDBRecipientCount>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ContactDBRecipientCount`](../../doc/models/contact-db-recipient-count.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPIRecipientsController.gETContactdbRecipientsCount(onBehalfOf);
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
  "recipient_count": 1234
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Recipients-Search

**This endpoint allows you to perform a search on all of your Marketing Campaigns recipients.**

field_name:

* is a variable that is substituted for your actual custom field name from your recipient.
* Text fields must be url-encoded. Date fields are searchable only by unix timestamp (e.g. 2/2/2015 becomes 1422835200)
* If field_name is a 'reserved' date field, such as created_at or updated_at, the system will internally convert
  your epoch time to a date range encompassing the entire day. For example, an epoch time of 1422835600 converts to
  Mon, 02 Feb 2015 00:06:40 GMT, but internally the system will search from Mon, 02 Feb 2015 00:00:00 GMT through
  Mon, 02 Feb 2015 23:59:59 GMT.

```ts
async gETContactdbRecipientsSearch(
  fieldName?: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ContactdbListsRecipientsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fieldName` | `string \| undefined` | Query, Optional | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ContactdbListsRecipientsResponse`](../../doc/models/v3-contactdb-lists-recipients-response.md)

## Example Usage

```ts
Error parsing Liquid template. Please submit a ticket for this issue.
```

## Example Response *(as JSON)*

```json
{
  "recipients": [
    {
      "created_at": 1422313607,
      "email": "jones@example.com",
      "first_name": null,
      "id": "YUBh",
      "last_clicked": null,
      "last_emailed": null,
      "last_name": "Jones",
      "last_opened": null,
      "updated_at": 1422313790,
      "custom_fields": [
        {
          "id": 23,
          "name": "pet",
          "value": "Fluffy",
          "type": "text"
        }
      ]
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | "" : "Returned if no search params are specified"<br>"field" : "Returned if the provided field is invalid or does not exist" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# POST Contactdb-Recipients-Search

<p>
  Search using segment conditions without actually creating a segment.
  Body contains a JSON object with <code>conditions</code>, a list of conditions as described below, and an optional <code>list_id</code>, which is a valid list ID for a list to limit the search on.
</p>
<p>
  Valid operators for create and update depend on the type of the field for which you are searching.
</p>
<ul>
  <li>Dates:
    <ul>
      <li>"eq", "ne", "lt" (before), "gt" (after)
        <ul>
          <li>You may use MM/DD/YYYY for day granularity or an epoch for second granularity.</li>
        </ul>
      </li>
      <li>"empty", "not_empty"</li>
      <li>"is within"
        <ul>
          <li>You may use an <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 date format</a> or the # of days.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Text: "contains", "eq" (is - matches the full field), "ne" (is not - matches any field where the entire field is not the condition value), "empty", "not_empty"</li>
  <li>Numbers: "eq", "lt", "gt", "empty", "not_empty"</li>
  <li>Email Clicks and Opens: "eq" (opened), "ne" (not opened)</li>
</ul>
<p>
  Field values must all be a string.
</p>
<p>
  Search conditions using "eq" or "ne" for email clicks and opens should provide a "field" of either <code>clicks.campaign_identifier</code> or <code>opens.campaign_identifier</code>.
  The condition value should be a string containing the id of a completed campaign.
</p>
<p>
  Search conditions list may contain multiple conditions, joined by an "and" or "or" in the "and_or" field.
  The first condition in the conditions list must have an empty "and_or", and subsequent conditions must all specify an "and_or".
</p>


```ts
async pOSTContactdbRecipientsSearch(
  body?: V3ContactdbRecipientsSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ContactdbRecipientsSearchResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3ContactdbRecipientsSearchRequest \| undefined`](../../doc/models/v3-contactdb-recipients-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ContactdbRecipientsSearchResponse1`](../../doc/models/v3-contactdb-recipients-search-response-1.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await contactsAPIRecipientsController.pOSTContactdbRecipientsSearch();
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
      "created_at": -27901208,
      "email": "ut magna quis ipsum",
      "id": "fugiat ad adipisicing ullamco",
      "last_emailed": 21626657
    },
    {
      "created_at": 17466400,
      "email": "sunt irure",
      "id": "et",
      "last_clicked": -23135244,
      "last_opened": -44593357,
      "first_name": "est"
    },
    {
      "created_at": -34495329,
      "email": "reprehenderit incididunt velit Lorem esse",
      "id": "esse Ut ad dolore",
      "last_clicked": 10164083,
      "last_opened": 34443062
    },
    {
      "created_at": -37030673,
      "email": "amet deserunt fugiat voluptate",
      "id": "et exercitation commodo id laborum",
      "last_clicked": -10497425
    },
    {
      "created_at": 3658435,
      "email": "labore veniam",
      "id": "ad pariatur esse",
      "last_opened": -84227501,
      "custom_fields": [
        {
          "id": -5765608,
          "name": "proident pariatur",
          "value": "do in magna mollit",
          "type": "dolore ut"
        },
        {
          "id": -31131201,
          "name": "laborum mollit",
          "value": 84434696,
          "type": "veniam"
        }
      ],
      "updated_at": -56455352,
      "first_name": "Ut cupidatat nulla deserunt adipisicing",
      "last_clicked": -52862671
    }
  ],
  "recipient_count": 65190677
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | `ApiError` |

