# Contacts

```ts
const contactsController = new ContactsController(client);
```

## Class Name

`ContactsController`

## Methods

* [PUT Mc-Contacts](../../doc/controllers/contacts.md#put-mc-contacts)
* [DELETE Mc-Contacts](../../doc/controllers/contacts.md#delete-mc-contacts)
* [GET Mc-Contats](../../doc/controllers/contacts.md#get-mc-contats)
* [GET Mc-Contacts-Count](../../doc/controllers/contacts.md#get-mc-contacts-count)
* [GET Mc-Contacts-Id](../../doc/controllers/contacts.md#get-mc-contacts-id)
* [POST Mc-Contacts-Search](../../doc/controllers/contacts.md#post-mc-contacts-search)
* [PUT Mc-Contacts-Imports](../../doc/controllers/contacts.md#put-mc-contacts-imports)
* [GET Marketing-Contacts-Imports-Id](../../doc/controllers/contacts.md#get-marketing-contacts-imports-id)
* [POST Mc-Contacts-Exports](../../doc/controllers/contacts.md#post-mc-contacts-exports)
* [GET Marketing-Contacts-Exports](../../doc/controllers/contacts.md#get-marketing-contacts-exports)
* [GET Mc-Contacts-Exports-Id](../../doc/controllers/contacts.md#get-mc-contacts-exports-id)
* [POST Marketing-Contacts-Batch](../../doc/controllers/contacts.md#post-marketing-contacts-batch)
* [POST Marketing-Contacts-Search-Emails](../../doc/controllers/contacts.md#post-marketing-contacts-search-emails)


# PUT Mc-Contacts

**This endpoint allows the [upsert](https://en.wiktionary.org/wiki/upsert) (insert or update) of up to 30,000 contacts, or 6MB of data, whichever is lower**.

Because the creation and update of contacts is an asynchronous process, the response will not contain immediate feedback on the processing of your upserted contacts. Rather, it will contain an HTTP 202 response indicating the contacts are queued for processing or an HTTP 4XX error containing validation errors. Should you wish to get the resulting contact's ID or confirm your contacts have been updated or added, you can use the "Get Contacts by Emails" endpoint.

Please note that custom fields need to have been already created if you wish to set their values for the contacts being upserted. To do this, please use the "Create Custom Field Definition" endpoint.

You will see a `job_id` in the response to your request. This can be used to check the status of your upsert job. To do so, please use the "Import Contacts Status" endpoint.

If the contact already exists in the system, any entries submitted via this endpoint will update the existing contact. The contact to update will be determined only by the `email` field and any fields omitted from the request will remain as they were. A contact's ID cannot be used to update the contact.

The email field will be changed to all lower-case. If a contact is added with an email that exists but contains capital letters, the existing contact with the all lower-case email will be updated.

```ts
async pUTMcContacts(
  body?: V3MarketingContactsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingContactsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3MarketingContactsRequest \| undefined`](../../doc/models/v3-marketing-contacts-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingContactsResponse`](../../doc/models/v3-marketing-contacts-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await contactsController.pUTMcContacts();
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
| 400 | - | [`V3MarketingContacts400Error1Error`](../../doc/models/v3-marketing-contacts-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# DELETE Mc-Contacts

**This endpoint can be used to delete one or more contacts**.

The query parameter `ids` must set to a comma-separated list of contact IDs for bulk contact deletion.

The query parameter `delete_all_contacts` must be set to `"true"` to delete **all** contacts.

You must set either `ids` or `delete_all_contacts`.

Deletion jobs are processed asynchronously.

Twilio SendGrid recommends exporting your contacts regularly as a backup to avoid issues or lost data.

```ts
async dELETEMcContacts(
  deleteAllContacts?: string,
  ids?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingContactsResponse3>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deleteAllContacts` | `string \| undefined` | Query, Optional | Must be set to `"true"` to delete all contacts. |
| `ids` | `string \| undefined` | Query, Optional | A comma-separated list of contact IDs. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingContactsResponse3`](../../doc/models/v3-marketing-contacts-response-3.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await contactsController.dELETEMcContacts();
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
| 400 | - | [`V3MarketingContacts400Error21Error`](../../doc/models/v3-marketing-contacts-400-error-21-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET Mc-Contats

**This endpoint will return up to 50 of the most recent contacts uploaded or attached to a list**.

This list will then be sorted by email address.

The full contact count is also returned.

Please note that pagination of the contacts has been deprecated.

Twilio SendGrid recommends exporting your contacts regularly as a backup to avoid issues or lost data.

```ts
async gETMcContats(
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingContactsResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingContactsResponse2`](../../doc/models/v3-marketing-contacts-response-2.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await contactsController.gETMcContats();
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
| 400 | - | [`V3MarketingContacts400Error1Error`](../../doc/models/v3-marketing-contacts-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | `ApiError` |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET Mc-Contacts-Count

**This endpoint returns the total number of contacts you have stored.**

Twilio SendGrid recommends exporting your contacts regularly as a backup to avoid issues or lost data.

```ts
async gETMcContactsCount(
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingContactsCountResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingContactsCountResponse`](../../doc/models/v3-marketing-contacts-count-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await contactsController.gETMcContactsCount();
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
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET Mc-Contacts-Id

**This endpoint returns the full details and all fields for the specified contact**.

The "Get Contacts by Emails" endpoint can be used to get the ID of a contact.

```ts
async gETMcContactsId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ContactDetails3>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ContactDetails3`](../../doc/models/contact-details-3.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await contactsController.gETMcContactsId(id);
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
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | `ApiError` |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# POST Mc-Contacts-Search

**Use this endpoint to locate contacts**.

The request body's `query` field accepts valid [SGQL](https://sendgrid.com/docs/for-developers/sending-email/segmentation-query-language/) for searching for a contact.

Because contact emails are stored in lower case, using SGQL to search by email address requires the provided email address to be in lower case. The SGQL `lower()` function can be used for this.

Only the first 50 contacts that meet the search criteria will be returned.

If the query takes longer than 20 seconds, a `408 Request Timeout` status will be returned.

Formatting the `created_at` and `updated_at` values as Unix timestamps is deprecated. Instead they are returned as ISO format as string.

```ts
async pOSTMcContactsSearch(
  body?: V3MarketingContactsSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingContactsSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3MarketingContactsSearchRequest \| undefined`](../../doc/models/v3-marketing-contacts-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingContactsSearchResponse`](../../doc/models/v3-marketing-contacts-search-response.md)

## Example Usage

```ts
const contentType = null;
const body: V3MarketingContactsSearchRequest = {
  query: 'email LIKE \'ENTER_COMPLETE_OR_PARTIAL_EMAIL_ADDRESS_HERE%\' AND CONTAINS(list_ids, \'YOUR_LIST_IDs\')',
};

try {
  const { result, ...httpResponse } = await contactsController.pOSTMcContactsSearch(body);
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
| 400 | - | [`V3MarketingContactsSearch400Error1Error`](../../doc/models/v3-marketing-contacts-search-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 408 | - | `ApiError` |
| 500 | - | [`V3MarketingContactsSearch500Error1Error`](../../doc/models/v3-marketing-contacts-search-500-error-1-error.md) |


# PUT Mc-Contacts-Imports

**This endpoint allows a CSV upload containing up to one million contacts or 5GB of data, whichever is smaller.**

Imports take place asynchronously: the endpoint returns a URL (`upload_uri`) and HTTP headers (`upload_headers`) which can subsequently be used to `PUT` a file of contacts to be  imported into our system.

Uploaded CSV files may also be [gzip-compressed](https://en.wikipedia.org/wiki/Gzip).

In either case, you must include the field `file_type` with the value `csv` in your request body.

The `field_mappings` paramter is a respective list of field definition IDs to map the uploaded CSV columns to. It allows you to use CSVs where one or more columns are skipped (`null`) or remapped to the contact field.

For example, if `field_mappings` is set to `[null, "w1", "_rf1"]`, this means skip column 0, map column 1 to the custom field with the ID `w1`, and map column 2 to the reserved field with the ID `_rf1`. See the "Get All Field Definitions" endpoint to fetch your custom and reserved field IDs to use with `field_mappings`.

Once you recieve the response body you can then initiate a **second** API call where you use the supplied URL and HTTP header to upload your file. For example:

`curl --upload-file "file/path.csv" "URL_GIVEN" -H 'HEADER_GIVEN'`

If you'd like to monitor the status of your import job, use the `job_id` and the "Import Contacts Status" endpoint.

Twilio SendGrid recommends exporting your contacts regularly as a backup to avoid issues or lost data.

```ts
async pUTMcContactsImports(
  body?: V3MarketingContactsImportsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingContactsImportsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3MarketingContactsImportsRequest \| undefined`](../../doc/models/v3-marketing-contacts-imports-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingContactsImportsResponse`](../../doc/models/v3-marketing-contacts-imports-response.md)

## Example Usage

```ts
const contentType = null;
const bodyFieldMappings: unknown[] = ['{"key1":"val1","key2":"val2"}', '{"key1":"val1","key2":"val2"}'];
const body: V3MarketingContactsImportsRequest = {
  fileType: null,
  fieldMappings: bodyFieldMappings,
};

try {
  const { result, ...httpResponse } = await contactsController.pUTMcContactsImports(body);
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
| 400 | - | [`V3MarketingContactsImports400Error1Error`](../../doc/models/v3-marketing-contacts-imports-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`V3MarketingFieldDefinitions400Error1Error`](../../doc/models/v3-marketing-field-definitions-400-error-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET Marketing-Contacts-Imports-Id

**This endpoint can be used to check the status of a contact import job**.

Use the `job_id` from the "Import Contacts," "Add or Update a Contact," or "Delete Contacts" endpoints as the `id` in the path parameter.

If there is an error with your `PUT` request, download the `errors_url` file and open it to view more details.

The job `status` field indicates whether the job is `pending`, `completed`, `errored`, or `failed`.

Pending means not started. Completed means finished without any errors. Errored means finished with some errors. Failed means finshed with all errors, or the job was entirely unprocessable: for example, if you attempt to import file format we do not support.

The `results` object will have fields depending on the job type.

Twilio SendGrid recommends exporting your contacts regularly as a backup to avoid issues or lost data.

```ts
async gETMarketingContactsImportsId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ContactImport>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ContactImport`](../../doc/models/contact-import.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await contactsController.gETMarketingContactsImportsId(id);
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
| 400 | - | [`V3MarketingContactsImports400Error21Error`](../../doc/models/v3-marketing-contacts-imports-400-error-21-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# POST Mc-Contacts-Exports

**Use this endpoint to export lists or segments of contacts**.

If you would just like to have a link to the exported list sent to your email set the `notifications.email` option to `true` in the `POST` payload.

If you would like to download the list, take the `id` that is returned and use the "Export Contacts Status" endpoint to get the `urls`. Once you have the list of URLs, make a `GET` request to each URL provided to download your CSV file(s).

You specify the segements and or/contact lists you wish to export by providing the relevant IDs in, respectively, the `segment_ids` and `list_ids` fields in the request body.

The lists will be provided in either JSON or CSV files. To specify which of these you would required, set the request body `file_type` field to `json` or `csv`.

You can also specify a maximum file size (in MB). If the export file is larger than this, it will be split into multiple files.

```ts
async pOSTMcContactsExports(
  body?: V3MarketingContactsExportsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingContactsExportsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3MarketingContactsExportsRequest \| undefined`](../../doc/models/v3-marketing-contacts-exports-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingContactsExportsResponse`](../../doc/models/v3-marketing-contacts-exports-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await contactsController.pOSTMcContactsExports();
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
| 400 | - | [`V3MarketingContactsExports400Error1Error`](../../doc/models/v3-marketing-contacts-exports-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET Marketing-Contacts-Exports

**Use this endpoint to retrieve details of all current exported jobs**.

It will return an array of objects, each of which records an export job in flight or recently completed.

Each object's `export_type` field will tell you which kind of export it is and its `status` field will indicate what stage of processing it has reached. Exports which are `ready` will be accompanied by a `urls` field which lists the URLs of the export's downloadable files — there will be more than one if you specified a maximum file size in your initial export request.

Use this endpoint if you have exports in flight but do not know their IDs, which are required for the "Export Contacts Status" endpoint.

```ts
async gETMarketingContactsExports(
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingContactsExportsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingContactsExportsResponse1`](../../doc/models/v3-marketing-contacts-exports-response-1.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await contactsController.gETMarketingContactsExports();
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
| 400 | - | [`V3MarketingContactsExports400Error21Error`](../../doc/models/v3-marketing-contacts-exports-400-error-21-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET Mc-Contacts-Exports-Id

**This endpoint can be used to check the status of a contact export job**.

To use this call, you will need the `id` from the "Export Contacts" call.

If you would like to download a list, take the `id` that is returned from the "Export Contacts" endpoint and make an API request here to get the `urls`. Once you have the list of URLs, make a `GET` request on each URL to download your CSV file(s).

Twilio SendGrid recommends exporting your contacts regularly as a backup to avoid issues or lost data.

```ts
async gETMcContactsExportsId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ContactExport>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ContactExport`](../../doc/models/contact-export.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await contactsController.gETMcContactsExportsId(id);
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
| 400 | - | [`V3MarketingContactsExports400Error1Error`](../../doc/models/v3-marketing-contacts-exports-400-error-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# POST Marketing-Contacts-Batch

**This endpoint is used to retrieve a set of contacts identified by their IDs.**

This can be more efficient endpoint to get contacts than making a series of individual `GET` requests to the "Get a Contact by ID" endpoint.

You can supply up to 100 IDs. Pass them into the `ids` field in your request body as an array or one or more strings.

Twilio SendGrid recommends exporting your contacts regularly as a backup to avoid issues or lost data.

```ts
async pOSTMarketingContactsBatch(
  body?: V3MarketingContactsBatchRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingContactsBatchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3MarketingContactsBatchRequest1 \| undefined`](../../doc/models/v3-marketing-contacts-batch-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingContactsBatchResponse`](../../doc/models/v3-marketing-contacts-batch-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await contactsController.pOSTMarketingContactsBatch();
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
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | `ApiError` |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# POST Marketing-Contacts-Search-Emails

**This endpoint allows you to retrieve up to 100 contacts matching the searched `email` address(es), including any `alternate_emails`.**

Email addresses are unique to a contact, meaning this endpoint can treat an email address as a primary key to search by. The contact object associated with the address, whether it is their `email` or one of their `alternate_emails` will be returned if matched.

Email addresses in the search request do not need to match the case in which they're stored, but the email addresses in the result will be all lower case. Empty strings are excluded from the search and will not be returned.

This endpoint should be used in place of the "Search Contacts" endpoint when you can provide exact email addresses and do not need to include other [Segmentation Query Language (SGQL)](https://sendgrid.com/docs/for-developers/sending-email/segmentation-query-language/) filters when searching.

If you need to access a large percentage of your contacts, we recommend exporting your contacts with the "Export Contacts" endpoint and filtering the results client side.

This endpoint returns a `200` status code when any contacts match the address(es) you supplied. When searching multiple addresses in a single request, it is possible that some addresses will match a contact while others will not. When a partially successful search like this is made, the matching contacts are returned in an object and an error message is returned for the email address(es) that are not found.

This endpoint returns a `404` status code when no contacts are found for the provided email address(es).

A `400` status code is returned if any searched addresses are invalid.

Twilio SendGrid recommends exporting your contacts regularly as a backup to avoid issues or lost data.

```ts
async pOSTMarketingContactsSearchEmails(
  body?: V3MarketingContactsSearchEmailsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingContactsSearchEmailsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3MarketingContactsSearchEmailsRequest \| undefined`](../../doc/models/v3-marketing-contacts-search-emails-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingContactsSearchEmailsResponse`](../../doc/models/v3-marketing-contacts-search-emails-response.md)

## Example Usage

```ts
const contentType = null;
const bodyEmails: string[] = ['jane_doe@example.com', 'john_doe@example.com', 'joann_doe@example.com'];
const body: V3MarketingContactsSearchEmailsRequest = {
  emails: bodyEmails,
};

try {
  const { result, ...httpResponse } = await contactsController.pOSTMarketingContactsSearchEmails(body);
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
  "result": {
    "jane_doe@example.com": {
      "contact": {
        "address_line_1": "",
        "address_line_2": "",
        "alternate_emails": [
          "janedoe@example1.com"
        ],
        "city": "",
        "country": "",
        "email": "jane_doe@example.com",
        "first_name": "Jane",
        "id": "asdf-Jkl-zxCvBNm",
        "last_name": "Doe",
        "list_ids": [],
        "segment_ids": [],
        "postal_code": "",
        "state_province_region": "",
        "phone_number": "",
        "whatsapp": "",
        "line": "",
        "facebook": "",
        "unique_name": "",
        "custom_fields": {},
        "created_at": "2021-03-02T15:25:47Z",
        "updated_at": "2021-03-30T15:26:16Z",
        "_metadata": {
          "self": "<metadata_url>"
        }
      }
    },
    "john_doe@example.com": {
      "contact": {
        "address_line_1": "",
        "address_line_2": "",
        "alternate_emails": [],
        "city": "",
        "country": "",
        "email": "john_doe@example.com",
        "first_name": "Jane",
        "id": "asdf-Jkl-qWeRTy",
        "last_name": "Doe",
        "list_ids": [],
        "segment_ids": [],
        "postal_code": "",
        "state_province_region": "",
        "phone_number": "",
        "whatsapp": "",
        "line": "",
        "facebook": "",
        "unique_name": "",
        "custom_fields": {},
        "created_at": "2020-01-02T15:25:47Z",
        "updated_at": "2020-12-20T15:26:16Z",
        "_metadata": {
          "self": "<metadata_url>"
        }
      }
    },
    "joann_doe@example.com": {
      "error": "contact not found"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MarketingContactsSearchEmails500Error1Error`](../../doc/models/v3-marketing-contacts-search-emails-500-error-1-error.md) |

