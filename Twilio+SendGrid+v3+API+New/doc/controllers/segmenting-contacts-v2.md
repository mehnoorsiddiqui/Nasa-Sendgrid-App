# Segmenting Contacts V2

```ts
const segmentingContactsV2Controller = new SegmentingContactsV2Controller(client);
```

## Class Name

`SegmentingContactsV2Controller`

## Methods

* [POST Segments](../../doc/controllers/segmenting-contacts-v2.md#post-segments)
* [GET Segments](../../doc/controllers/segmenting-contacts-v2.md#get-segments)
* [PATCH Segments-Segment Id](../../doc/controllers/segmenting-contacts-v2.md#patch-segments-segment-id)
* [GET Segments-Segment Id](../../doc/controllers/segmenting-contacts-v2.md#get-segments-segment-id)
* [DELETE Segments-Segment Id](../../doc/controllers/segmenting-contacts-v2.md#delete-segments-segment-id)


# POST Segments

Segment `name` has to be unique. A user can not create a new segment with an existing segment name.

```ts
async pOSTSegments(
  body?: SegmentWrite,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SegmentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SegmentWrite \| undefined`](../../doc/models/segment-write.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SegmentResponse`](../../doc/models/segment-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await segmentingContactsV2Controller.pOSTSegments();
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
| 400 | - | [`V3MarketingSegments20400Error`](../../doc/models/v3-marketing-segments-20400-error.md) |
| 404 | - | `ApiError` |
| 429 | - | `ApiError` |
| 500 | - | [`V3MarketingSegments20500Error`](../../doc/models/v3-marketing-segments-20500-error.md) |


# GET Segments

**This endpoint allows you to retrieve a list of segments.**

The query param `parent_list_ids` is treated as a filter.  Any match will be returned.  Zero matches will return a response code of 200 with an empty `results` array.

`parent_list_ids` | `no_parent_list_id` | `ids` | `result`
-----------------:|:--------------------:|:-------------:|:-------------:
empty | false | empty | all segments values
list_ids | false | empty | segments filtered by list_ids values
list_ids |true | empty | segments filtered by list_ids and segments with no parent list_ids empty
empty | true | empty | segments with no parent list_ids
anything | anything | ids | segments with matching segment ids |

```ts
async gETSegments(
  ids?: string[],
  parentListIds?: string,
  noParentListId?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AllSegmentsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string[] \| undefined` | Query, Optional | A list of segment IDs to retrieve. When this parameter is included, the `no_parent_list_ids` and `parent_list_ids` parameters are ignored and only segments with given IDs are returned. |
| `parentListIds` | `string \| undefined` | Query, Optional | A comma separated list up to 50 in size, to filter segments on.  Only segments that have any of these list ids as the parent list will be retrieved. This is different from the parameter of the same name used when creating a segment. |
| `noParentListId` | `boolean \| undefined` | Query, Optional | If set to `true`, segments with an empty value of `parent_list_id` will be returned in the filter.  If the value is not present, it defaults to 'false'.<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AllSegmentsResponse`](../../doc/models/all-segments-response.md)

## Example Usage

```ts
const noParentListId = false;
try {
  const { result, ...httpResponse } = await segmentingContactsV2Controller.gETSegments(None, None, noParentListId);
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
| 400 | 401 error | [`V3MarketingSegments20400Error`](../../doc/models/v3-marketing-segments-20400-error.md) |
| 404 | 404 error | `ApiError` |
| 500 | 500 error | [`V3MarketingSegments20500Error`](../../doc/models/v3-marketing-segments-20500-error.md) |


# PATCH Segments-Segment Id

Segment `name` has to be unique. A user can not create a new segment with an existing segment name.

```ts
async pATCHSegmentsSegmentId(
  segmentId: string,
  body?: SegmentUpdate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SegmentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentId` | `string` | Template, Required | - |
| `body` | [`SegmentUpdate \| undefined`](../../doc/models/segment-update.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SegmentResponse`](../../doc/models/segment-response.md)

## Example Usage

```ts
const segmentId = 'segment_id4';
const contentType = null;
try {
  const { result, ...httpResponse } = await segmentingContactsV2Controller.pATCHSegmentsSegmentId(segmentId);
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
| 400 | - | [`V3MarketingSegments20400Error`](../../doc/models/v3-marketing-segments-20400-error.md) |
| 429 | - | `ApiError` |
| 500 | - | [`V3MarketingSegments20500Error`](../../doc/models/v3-marketing-segments-20500-error.md) |


# GET Segments-Segment Id

Get Segment by ID

```ts
async gETSegmentsSegmentId(
  segmentId: string,
  contactsSample?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SegmentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentId` | `string` | Template, Required | - |
| `contactsSample` | `boolean \| undefined` | Query, Optional | Defaults to `true`. Set to `false` to exclude the contacts_sample in the response. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SegmentResponse`](../../doc/models/segment-response.md)

## Example Usage

```ts
const segmentId = 'segment_id4';
try {
  const { result, ...httpResponse } = await segmentingContactsV2Controller.gETSegmentsSegmentId(segmentId);
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
| 400 | - | [`V3MarketingSegments20400Error`](../../doc/models/v3-marketing-segments-20400-error.md) |
| 500 | - | [`V3MarketingSegments20500Error`](../../doc/models/v3-marketing-segments-20500-error.md) |


# DELETE Segments-Segment Id

**This endpoint allows you to delete a segment by ID.**

```ts
async dELETESegmentsSegmentId(
  segmentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const segmentId = 'segment_id4';
try {
  const { result, ...httpResponse } = await segmentingContactsV2Controller.dELETESegmentsSegmentId(segmentId);
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
| 400 | - | [`V3MarketingSegments20400Error`](../../doc/models/v3-marketing-segments-20400-error.md) |
| 404 | - | `ApiError` |
| 500 | - | [`V3MarketingSegments20500Error`](../../doc/models/v3-marketing-segments-20500-error.md) |

