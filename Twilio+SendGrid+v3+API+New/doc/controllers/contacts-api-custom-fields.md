# Contacts API-Custom Fields

```ts
const contactsAPICustomFieldsController = new ContactsAPICustomFieldsController(client);
```

## Class Name

`ContactsAPICustomFieldsController`

## Methods

* [POST Contactdb-Custom Fields](../../doc/controllers/contacts-api-custom-fields.md#post-contactdb-custom-fields)
* [GET Contactdb-Custom Fields](../../doc/controllers/contacts-api-custom-fields.md#get-contactdb-custom-fields)
* [GET Contactdb-Custom Fields-Custom Field Id](../../doc/controllers/contacts-api-custom-fields.md#get-contactdb-custom-fields-custom-field-id)
* [DELETE Contactdb-Custom Fields-Custom Field Id](../../doc/controllers/contacts-api-custom-fields.md#delete-contactdb-custom-fields-custom-field-id)
* [GET Contactdb-Reserved Fields](../../doc/controllers/contacts-api-custom-fields.md#get-contactdb-reserved-fields)


# POST Contactdb-Custom Fields

**This endpoint allows you to create a custom field.**

**You can create up to 120 custom fields.**

```ts
async pOSTContactdbCustomFields(
  onBehalfOf?: string,
  body?: V3ContactdbCustomFieldsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ContactDBCustomfieldschemawithID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3ContactdbCustomFieldsRequest \| undefined`](../../doc/models/v3-contactdb-custom-fields-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ContactDBCustomfieldschemawithID`](../../doc/models/contact-db-customfieldschemawith-id.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3ContactdbCustomFieldsRequest = {};
body.name = 'pet';
body.type = 'text';

try {
  const { result, ...httpResponse } = await contactsAPICustomFieldsController.pOSTContactdbCustomFields(onBehalfOf, body);
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
  "name": "pet",
  "type": "text"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | "" : "Returned if request body is invalid JSON"<br>"type" : "Returned if custom field type is invalid or not provided"<br>"name" : "Returned if custom field name is not provided" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Custom Fields

**This endpoint allows you to retrieve all custom fields.**

```ts
async gETContactdbCustomFields(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListAllCustomFieldsresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListAllCustomFieldsresponse`](../../doc/models/list-all-custom-fieldsresponse.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPICustomFieldsController.gETContactdbCustomFields(onBehalfOf);
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
  "custom_fields": [
    {
      "id": 6234,
      "name": "age",
      "type": "number"
    },
    {
      "id": 6233,
      "name": "country",
      "type": "text"
    },
    {
      "id": 6235,
      "name": "favorite_color",
      "type": "text"
    },
    {
      "id": 6239,
      "name": "fname",
      "type": "text"
    },
    {
      "id": 6240,
      "name": "lname",
      "type": "text"
    },
    {
      "id": 49439,
      "name": "pet",
      "type": "text"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Custom Fields-Custom Field Id

**This endpoint allows you to retrieve a custom field by ID.**

```ts
async gETContactdbCustomFieldsCustomFieldId(
  customFieldId: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ContactDBCustomfieldschemawithID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customFieldId` | `number` | Template, Required | The ID of the custom field that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ContactDBCustomfieldschemawithID`](../../doc/models/contact-db-customfieldschemawith-id.md)

## Example Usage

```ts
const customFieldId = 66;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPICustomFieldsController.gETContactdbCustomFieldsCustomFieldId(customFieldId, onBehalfOf);
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
  "name": "pet",
  "type": "text"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "custom_field_id" : "Returned if custom_field_id does not exist" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# DELETE Contactdb-Custom Fields-Custom Field Id

**This endpoint allows you to delete a custom field by ID.**

```ts
async dELETEContactdbCustomFieldsCustomFieldId(
  customFieldId: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GlobalErrorResponseSchema1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customFieldId` | `number` | Template, Required | The ID of the custom field that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GlobalErrorResponseSchema1`](../../doc/models/global-error-response-schema-1.md)

## Example Usage

```ts
const customFieldId = 66;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPICustomFieldsController.dELETEContactdbCustomFieldsCustomFieldId(customFieldId, onBehalfOf);
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
  "message": "Custom Field delete is processing."
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | "id" : "Returned if custom_field_id is not valid" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "custom_field_id" : "Returned if custom_field_id does not exist" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Contactdb-Reserved Fields

**This endpoint allows you to list all fields that are reserved and can't be used for custom field names.**

```ts
async gETContactdbReservedFields(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ContactdbReservedFieldsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ContactdbReservedFieldsResponse`](../../doc/models/v3-contactdb-reserved-fields-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await contactsAPICustomFieldsController.gETContactdbReservedFields(onBehalfOf);
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
  "reserved_fields": [
    {
      "name": "first_name",
      "type": "text"
    },
    {
      "name": "last_name",
      "type": "text"
    },
    {
      "name": "email",
      "type": "text"
    },
    {
      "name": "created_at",
      "type": "date"
    },
    {
      "name": "updated_at",
      "type": "date"
    },
    {
      "name": "last_emailed",
      "type": "date"
    },
    {
      "name": "last_clicked",
      "type": "date"
    },
    {
      "name": "last_opened",
      "type": "date"
    },
    {
      "name": "lists",
      "type": "set"
    },
    {
      "name": "campaigns",
      "type": "set"
    },
    {
      "name": "my_custom_field",
      "type": "text"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |

