# Single Sends

```ts
const singleSendsController = new SingleSendsController(client);
```

## Class Name

`SingleSendsController`

## Methods

* [POST Marketing-Singlesends](../../doc/controllers/single-sends.md#post-marketing-singlesends)
* [GET Marketing-Singlesends](../../doc/controllers/single-sends.md#get-marketing-singlesends)
* [DELETE Marketing-Singlesends](../../doc/controllers/single-sends.md#delete-marketing-singlesends)
* [POST Marketing-Singlesends-Id](../../doc/controllers/single-sends.md#post-marketing-singlesends-id)
* [PATCH Marketing-Singlesends-Id](../../doc/controllers/single-sends.md#patch-marketing-singlesends-id)
* [GET Marketing-Singlesends-Id](../../doc/controllers/single-sends.md#get-marketing-singlesends-id)
* [DELETE Marketing-Singlesends-Id](../../doc/controllers/single-sends.md#delete-marketing-singlesends-id)
* [POST Marketing-Singlesends-Search](../../doc/controllers/single-sends.md#post-marketing-singlesends-search)
* [PUT Marketing-Singlesends-Id-Schedule](../../doc/controllers/single-sends.md#put-marketing-singlesends-id-schedule)
* [DELETE Marketing-Singlesends-Id-Schedule](../../doc/controllers/single-sends.md#delete-marketing-singlesends-id-schedule)
* [GET Marketing-Singlesends-Categories](../../doc/controllers/single-sends.md#get-marketing-singlesends-categories)


# POST Marketing-Singlesends

**This endpoint allows you to create a new Single Send.**

Please note that if you are migrating from the previous version of Single Sends, you no longer need to pass a template ID with your request to this endpoint. Instead, you will pass all template data in the `email_config` object.

```ts
async pOSTMarketingSinglesends(
  body?: SinglesendRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SinglesendResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SinglesendRequest \| undefined`](../../doc/models/singlesend-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SinglesendResponse`](../../doc/models/singlesend-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await singleSendsController.pOSTMarketingSinglesends();
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
  "name": "Example API Created Single Send",
  "id": "27c21bbf-a12c-440b-b8bf-c526975328ca",
  "status": "scheduled",
  "created_at": "2020-05-18T17:28:27.272Z",
  "send_at": "2020-06-16T00:19:55.106Z",
  "categories": [
    "unique opens"
  ],
  "email_config": {
    "subject": "",
    "html_content": "",
    "plain_content": "",
    "generate_plain_content": true,
    "editor": "code",
    "suppression_group_id": null,
    "custom_unsubscribe_url": null,
    "sender_id": null,
    "ip_pool": null
  },
  "send_to": {
    "list_ids": [
      "f2fe66a1-43f3-4e3a-87b1-c6a600d805f0"
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3MarketingSinglesends400Error1Error`](../../doc/models/v3-marketing-singlesends-400-error-1-error.md) |
| 500 | - | [`V3MarketingSinglesends500Error1Error`](../../doc/models/v3-marketing-singlesends-500-error-1-error.md) |


# GET Marketing-Singlesends

**This endpoint allows you to retrieve all your Single Sends.**

Returns all of your Single Sends with condensed details about each, including the Single Sends' IDs. For more details about an individual Single Send, pass the Single Send's ID to the `/marketing/singlesends/{id}` endpoint.

```ts
async gETMarketingSinglesends(
  pageSize?: number,
  pageToken?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingSinglesendsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pageSize` | `number \| undefined` | Query, Optional | - |
| `pageToken` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingSinglesendsResponse`](../../doc/models/v3-marketing-singlesends-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await singleSendsController.gETMarketingSinglesends();
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
| 500 | - | [`V3MarketingSinglesends500Error1Error`](../../doc/models/v3-marketing-singlesends-500-error-1-error.md) |


# DELETE Marketing-Singlesends

**This endpoint allows you to delete multiple Single Sends using an array of Single Sends IDs.**

To first retrieve all your Single Sends' IDs, you can make a GET request to the `/marketing/singlensends` endpoint.

Please note that a DELETE request is permanent, and your Single Sends will not be recoverable after deletion.

```ts
async dELETEMarketingSinglesends(
  ids?: string[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string[] \| undefined` | Query, Optional | Single Send IDs to delete<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `50` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await singleSendsController.dELETEMarketingSinglesends();
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
| 404 | - | [`V3MarketingSinglesends404Error1Error`](../../doc/models/v3-marketing-singlesends-404-error-1-error.md) |
| 500 | - | [`V3MarketingSinglesends500Error1Error`](../../doc/models/v3-marketing-singlesends-500-error-1-error.md) |


# POST Marketing-Singlesends-Id

**This endpoint allows you to duplicate an existing Single Send using its Single Send ID.**

Duplicating a Single Send is useful when you want to create a Single Send but don't want to start from scratch. Once duplicated, you can update or edit the Single Send by making a PATCH request to the `/marketing/singlesends/{id}` endpoint.

If you leave the `name` field blank, your duplicate will be assigned the name of the Single Send it was copied from with the text “Copy of ” prepended to it. The `name` field length is limited to 100 characters, so the end of the new Single Send name, including “Copy of ”, will be trimmed if the name exceeds this limit.

```ts
async pOSTMarketingSinglesendsId(
  id: string,
  body?: V3MarketingSinglesendsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SinglesendResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`V3MarketingSinglesendsRequest \| undefined`](../../doc/models/v3-marketing-singlesends-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SinglesendResponse`](../../doc/models/singlesend-response.md)

## Example Usage

```ts
const id = 'id0';
const contentType = null;
try {
  const { result, ...httpResponse } = await singleSendsController.pOSTMarketingSinglesendsId(id);
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
| 404 | - | [`V3MarketingSinglesends404Error1Error`](../../doc/models/v3-marketing-singlesends-404-error-1-error.md) |
| 500 | - | [`V3MarketingSinglesends500Error1Error`](../../doc/models/v3-marketing-singlesends-500-error-1-error.md) |


# PATCH Marketing-Singlesends-Id

**This endpoint allows you to update a Single Send using a Single Send ID.**

You only need to pass the fields you want to update. Any blank/missing fields will remain unaltered.

```ts
async pATCHMarketingSinglesendsId(
  id: string,
  body?: SinglesendRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SinglesendResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`SinglesendRequest \| undefined`](../../doc/models/singlesend-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SinglesendResponse`](../../doc/models/singlesend-response.md)

## Example Usage

```ts
const id = 'id0';
const contentType = null;
try {
  const { result, ...httpResponse } = await singleSendsController.pATCHMarketingSinglesendsId(id);
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
| 400 | - | [`V3MarketingSinglesends400Error1Error`](../../doc/models/v3-marketing-singlesends-400-error-1-error.md) |
| 404 | - | [`V3MarketingSinglesends404Error1Error`](../../doc/models/v3-marketing-singlesends-404-error-1-error.md) |
| 500 | - | [`V3MarketingSinglesends500Error1Error`](../../doc/models/v3-marketing-singlesends-500-error-1-error.md) |


# GET Marketing-Singlesends-Id

**This endpoint allows you to retrieve details about one Single Send using a Single Send ID.**

You can retrieve all of your Single Sends by making a GET request to the `/marketing/singlesends` endpoint.

```ts
async gETMarketingSinglesendsId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SinglesendResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SinglesendResponse`](../../doc/models/singlesend-response.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await singleSendsController.gETMarketingSinglesendsId(id);
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
  "name": "single-send-1",
  "id": "2f6dec81-43b9-4c67-a890-3a38cb63b54a",
  "status": "scheduled",
  "created_at": "2020-12-13T16:24:42.013Z",
  "send_to": {
    "segment_ids": [
      "dad84de3-bec4-4e04-b132-2cbfd4bb3789",
      "7dce758d-1155-4102-88d2-ca65565ac98b"
    ],
    "all": true
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | [`V3MarketingSinglesends404Error1Error`](../../doc/models/v3-marketing-singlesends-404-error-1-error.md) |
| 500 | - | [`V3MarketingSinglesends500Error1Error`](../../doc/models/v3-marketing-singlesends-500-error-1-error.md) |


# DELETE Marketing-Singlesends-Id

**This endpoint allows you to delete one Single Send using a Single Send ID.**

To first retrieve all your Single Sends' IDs, you can make a GET request to the `/marketing/singlensends` endpoint.

Please note that a `DELETE` request is permanent, and your Single Send will not be recoverable after deletion.

```ts
async dELETEMarketingSinglesendsId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await singleSendsController.dELETEMarketingSinglesendsId(id);
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
| 404 | - | [`V3MarketingSinglesends404Error1Error`](../../doc/models/v3-marketing-singlesends-404-error-1-error.md) |
| 500 | - | [`V3MarketingSinglesends500Error1Error`](../../doc/models/v3-marketing-singlesends-500-error-1-error.md) |


# POST Marketing-Singlesends-Search

**This endpoint allows you to search for Single Sends based on specified criteria.**

You can search for Single Sends by passing a combination of values using the `name`, `status`, and `categories` request body fields.

For example, if you want to search for all Single Sends that are "drafts" or "scheduled" and also associated with the category "shoes," your request body may look like the example below.

```javascript
{
  "status": [
    "draft",
    "scheduled"
  ],
  "categories": [
    "shoes"
  ],
}
```

```ts
async pOSTMarketingSinglesendsSearch(
  pageSize?: number,
  pageToken?: string,
  body?: SinglesendSearch,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingSinglesendsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pageSize` | `number \| undefined` | Query, Optional | - |
| `pageToken` | `string \| undefined` | Query, Optional | - |
| `body` | [`SinglesendSearch \| undefined`](../../doc/models/singlesend-search.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingSinglesendsResponse`](../../doc/models/v3-marketing-singlesends-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await singleSendsController.pOSTMarketingSinglesendsSearch();
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
      "id": "df25ffdf-6a96-458a-9419-6d87d3094c6b",
      "name": "single-send-1",
      "status": "triggered",
      "categories": [
        "shoes"
      ],
      "is_abtest": true,
      "abtest": null,
      "updated_at": "3263-04-09T09:05:08.193Z",
      "created_at": "4739-10-29T07:11:32.476Z",
      "send_at": "2471-05-31T15:46:18.797Z"
    }
  ],
  "_metadata": {
    "self": "https://a/nwNSrPSWt7d",
    "prev": "https://a/P0Enoayd",
    "next": "https://a/DYEsTUDww9-",
    "count": 1
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | [`V3MarketingSinglesendsSearch404Error1Error`](../../doc/models/v3-marketing-singlesends-search-404-error-1-error.md) |


# PUT Marketing-Singlesends-Id-Schedule

**This endpoint allows you to schedule a Single Send for future delivery using a Single Send ID.**

To schedule a Single Send, you must pass a date string in ISO 8601 time format (yyyy-MM-ddTHH:mm:ssZ)  using the required `send_at` field. For example, the ISO 8601 format for 9:00 AM UTC on May 6, 2020 would be `2020-05-06T09:00:00Z`. You may also pass the string `"now"` to send the Single Send immediately.

```ts
async pUTMarketingSinglesendsIdSchedule(
  id: string,
  body?: V3MarketingSinglesendsScheduleRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingSinglesendsScheduleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`V3MarketingSinglesendsScheduleRequest \| undefined`](../../doc/models/v3-marketing-singlesends-schedule-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingSinglesendsScheduleResponse`](../../doc/models/v3-marketing-singlesends-schedule-response.md)

## Example Usage

```ts
const id = 'id0';
const contentType = null;
const body: V3MarketingSinglesendsScheduleRequest = {
  sendAt: '3752-01-28T23:21:52.575Z',
};

try {
  const { result, ...httpResponse } = await singleSendsController.pUTMarketingSinglesendsIdSchedule(id, body);
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
  "send_at": "3752-01-28T23:21:52.575Z",
  "status": "scheduled"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | [`V3MarketingSinglesendsSchedule404Error1Error`](../../doc/models/v3-marketing-singlesends-schedule-404-error-1-error.md) |
| 500 | - | [`V3MarketingSinglesendsSchedule500Error1Error`](../../doc/models/v3-marketing-singlesends-schedule-500-error-1-error.md) |


# DELETE Marketing-Singlesends-Id-Schedule

**This endpoint allows you to cancel a scheduled Single Send using a Single Send ID.**

Making a DELETE request to this endpoint will cancel the scheduled sending of a Single Send. The request will not delete the Single Send itself. Deleting a Single Send can be done by passing a DELETE request to `/marketing/singlesends/{id}`.

```ts
async dELETEMarketingSinglesendsIdSchedule(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SinglesendSchedule>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SinglesendSchedule`](../../doc/models/singlesend-schedule.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await singleSendsController.dELETEMarketingSinglesendsIdSchedule(id);
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
| 404 | - | [`V3MarketingSinglesendsSchedule404Error1Error`](../../doc/models/v3-marketing-singlesends-schedule-404-error-1-error.md) |
| 500 | - | [`V3MarketingSinglesendsSchedule500Error1Error`](../../doc/models/v3-marketing-singlesends-schedule-500-error-1-error.md) |


# GET Marketing-Singlesends-Categories

**This endpoint allows you to retrieve all the categories associated with your Single Sends.**

This endpoint will return your latest 1,000 categories.

```ts
async gETMarketingSinglesendsCategories(
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingSinglesendsCategoriesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingSinglesendsCategoriesResponse`](../../doc/models/v3-marketing-singlesends-categories-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await singleSendsController.gETMarketingSinglesendsCategories();
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
  "categories": [
    "equipment",
    "shoes",
    "sports"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 500 | - | [`V3MarketingSinglesendsCategories500Error1Error`](../../doc/models/v3-marketing-singlesends-categories-500-error-1-error.md) |

