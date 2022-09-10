# Contacts API-Segments

```ts
const contactsAPISegmentsController = new ContactsAPISegmentsController(client);
```

## Class Name

`ContactsAPISegmentsController`

## Methods

* [POST Contactdb-Segments](../../doc/controllers/contacts-api-segments.md#post-contactdb-segments)
* [GET Contactdb-Segments](../../doc/controllers/contacts-api-segments.md#get-contactdb-segments)
* [GET Contactdb-Segments-Segment Id](../../doc/controllers/contacts-api-segments.md#get-contactdb-segments-segment-id)
* [PATCH Contactdb-Segments-Segment Id](../../doc/controllers/contacts-api-segments.md#patch-contactdb-segments-segment-id)
* [DELETE Contactdb-Segments-Segment Id](../../doc/controllers/contacts-api-segments.md#delete-contactdb-segments-segment-id)
* [GET Contactdb-Segments-Segment Id-Recipients](../../doc/controllers/contacts-api-segments.md#get-contactdb-segments-segment-id-recipients)


# POST Contactdb-Segments

**This endpoint allows you to create a new segment.**

Valid operators for create and update depend on the type of the field for which you are searching.

**Dates**

- "eq", "ne", "lt" (before), "gt" (after)
  - You may use MM/DD/YYYY for day granularity or an epoch for second granularity.
- "empty", "not_empty"
- "is within"
  - You may use an [ISO 8601 date format](https://en.wikipedia.org/wiki/ISO_8601) or the # of days.

**Text**

- "contains"
- "eq" (is/equals - matches the full field)
- "ne" (is not/not equals - matches any field where the entire field is not the condition value)
- "empty"
- "not_empty"

**Numbers**

- "eq" (is/equals)
- "lt" (is less than)
- "gt" (is greater than)
- "empty"
- "not_empty"

**Email Clicks and Opens**

- "eq" (opened)
- "ne" (not opened)

All field values must be a string.

Conditions using "eq" or "ne" for email clicks and opens should provide a "field" of either `clicks.campaign_identifier` or `opens.campaign_identifier`.
The condition value should be a string containing the id of a completed campaign.

The conditions list may contain multiple conditions, joined by an "and" or "or" in the "and_or" field.

The first condition in the conditions list must have an empty "and_or", and subsequent conditions must all specify an "and_or".

```ts
async pOSTContactdbSegments(
  onBehalfOf?: string,
  body?: CreateaSegmentrequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ContactDBSegmentswithID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`CreateaSegmentrequest \| undefined`](../../doc/models/createa-segmentrequest.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ContactDBSegmentswithID`](../../doc/models/contact-db-segmentswith-id.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPISegmentsController.pOSTContactdbSegments(onBehalfOf);
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
| 400 | "name" : "Returned if the name is not valid"<br>"list_id" : "Returned if the list_id is not valid"<br>"and_or" : "Returned if and_or and set value is not passed into the request body"<br>"and_or" : "Returned if and_or is set on the only condition passed"<br>"and_or" : "Returned if and_or is set on all conditions"<br>"and_or" : "Returned if and_or is not set on more than one condition and less than all conditions"<br>"operator" : "Returned if operator and set value is not passed into the request body"<br>"value" : "Returned if value and set value is not passed into the request body"<br>"field" : "Returned if field and set value is not passed into the request body"<br>"" : "Returned if request body is not valid json"<br>"" : "Returned if invalid value is passed into one of the request body parameters" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Segments

**This endpoint allows you to retrieve all of your segments.**

```ts
async gETContactdbSegments(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListAllSegmentsresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListAllSegmentsresponse`](../../doc/models/list-all-segmentsresponse.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPISegmentsController.gETContactdbSegments(onBehalfOf);
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
  "segments": [
    {
      "id": 1234,
      "name": "Age segments < 25",
      "conditions": [
        {
          "field": "age",
          "value": "25",
          "operator": "lt"
        }
      ],
      "recipient_count": 8
    },
    {
      "id": 2345,
      "name": "email address - gmail",
      "conditions": [
        {
          "field": "email",
          "value": "@gmail.com",
          "operator": "contains"
        }
      ],
      "recipient_count": 0
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Segments-Segment Id

**This endpoint allows you to retrieve a single segment with the given ID.**

```ts
async gETContactdbSegmentsSegmentId(
  segmentId: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateaSegmentrequest>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentId` | `number` | Template, Required | The ID of the segment you want to request. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateaSegmentrequest`](../../doc/models/createa-segmentrequest.md)

## Example Usage

```ts
const segmentId = 132;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPISegmentsController.gETContactdbSegmentsSegmentId(segmentId, onBehalfOf);
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
| 400 | "segment_id" : "Returned if segment_id is not valid" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "segment_id" : "Returned if segment_id does not exist" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# PATCH Contactdb-Segments-Segment Id

**This endpoint allows you to update a segment.**

```ts
async pATCHContactdbSegmentsSegmentId(
  segmentId: string,
  onBehalfOf?: string,
  body?: V3ContactdbSegmentsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateaSegmentrequest>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentId` | `string` | Template, Required | The ID of the segment you are updating. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3ContactdbSegmentsRequest \| undefined`](../../doc/models/v3-contactdb-segments-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateaSegmentrequest`](../../doc/models/createa-segmentrequest.md)

## Example Usage

```ts
const contentType = null;
const segmentId = 'segment_id4';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPISegmentsController.pATCHContactdbSegmentsSegmentId(segmentId, onBehalfOf);
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
| 400 | 400 error | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | 401 error | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# DELETE Contactdb-Segments-Segment Id

**This endpoint allows you to delete a segment from your recipients database.**

You also have the option to delete all the contacts from your Marketing Campaigns recipient database who were in this segment.

```ts
async dELETEContactdbSegmentsSegmentId(
  segmentId: string,
  contentType: ContentTypeEnum,
  deleteContacts?: boolean,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentId` | `string` | Template, Required | - |
| `contentType` | [`ContentTypeEnum`](../../doc/models/content-type-enum.md) | Header, Required | - |
| `deleteContacts` | `boolean \| undefined` | Query, Optional | True to delete all contacts matching the segment in addition to deleting the segment |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const segmentId = 'segment_id4';
const contentType = 'application/json';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPISegmentsController.dELETEContactdbSegmentsSegmentId(segmentId, contentType, None, onBehalfOf);
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
| 400 | "segment_id" : "Returned if segment_id is not valid"<br>"delete_contacts" : "Returned if delete_contacts is not a valid boolean" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "segment_id" : "Returned if segment_id does not exist" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Segments-Segment Id-Recipients

**This endpoint allows you to retrieve all of the recipients in a segment with the given ID.**

```ts
async gETContactdbSegmentsSegmentIdRecipients(
  segmentId: number,
  page?: number,
  pageSize?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListRecipientsOnaSegmentresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentId` | `number` | Template, Required | The ID of the segment from which you want to retrieve recipients. |
| `page` | `number \| undefined` | Query, Optional | - |
| `pageSize` | `number \| undefined` | Query, Optional | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListRecipientsOnaSegmentresponse`](../../doc/models/list-recipients-ona-segmentresponse.md)

## Example Usage

```ts
const segmentId = 132;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPISegmentsController.gETContactdbSegmentsSegmentIdRecipients(segmentId, None, None, onBehalfOf);
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
          "value": "Indiana",
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
| 400 | "page" : "Returned if page is not a valid integer"<br>"page" : "Returned if page is less than 1"<br>"page_size" : "Returned if page_size is not a valid integer" | `ApiError` |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "segment_id" : "Returned if segment_id is not valid"<br>"segment_id" : "Returned if segment_id does not exist" | `ApiError` |

