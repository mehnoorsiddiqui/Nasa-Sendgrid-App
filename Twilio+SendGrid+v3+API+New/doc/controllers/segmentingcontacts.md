# Segmentingcontacts

```ts
const segmentingcontactsController = new SegmentingcontactsController(client);
```

## Class Name

`SegmentingcontactsController`

## Methods

* [POST Marketing-Segments](../../doc/controllers/segmentingcontacts.md#post-marketing-segments)
* [GET Marketing-Segments](../../doc/controllers/segmentingcontacts.md#get-marketing-segments)
* [GET Marketing-Segments-Segment Id](../../doc/controllers/segmentingcontacts.md#get-marketing-segments-segment-id)
* [PATCH Marketing-Segments-Segment Id](../../doc/controllers/segmentingcontacts.md#patch-marketing-segments-segment-id)
* [DELETE Marketing-Segments-Segment Id](../../doc/controllers/segmentingcontacts.md#delete-marketing-segments-segment-id)


# POST Marketing-Segments

**This endpoint allows you to create a segment.**

```ts
async pOSTMarketingSegments(
  body?: V3MarketingSegmentsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FullSegment>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3MarketingSegmentsRequest \| undefined`](../../doc/models/v3-marketing-segments-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FullSegment`](../../doc/models/full-segment.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await segmentingContactsController.pOSTMarketingSegments();
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
  "id": "864feb2e-5e93-47bf-b63e-21746c988105",
  "contacts_count": 0,
  "created_at": "2921-01-27T19:33:36.479Z",
  "sample_updated_at": "3407-09-25T04:25:02.140Z",
  "updated_at": "4389-06-21T16:59:51.403Z",
  "contact_summary": {
    "contact_id": "1a541ca7-9fef-42c8-8947-f3f8a3b33ffe",
    "primary_email": "D8OsYF5ok@YtX.kcg",
    "first_name": "exercitation Duis nisi",
    "last_name": "aut",
    "address_line_1": "ut sunt Duis eu",
    "address_line_2": "in culpa esse non",
    "city": "ÔXƫɋƄř",
    "state_province_region": "consequat culpa in",
    "postal_code": -88086402,
    "country": "eiusmod",
    "custom_fields": {
      "custom_field_name2": "dolore cillum",
      "custom_field_name1": "est mollit officia adipisicing dolo"
    },
    "list_ids": [
      "c856a255-12f1-4b55-8564-218fd7eb34a7",
      "130c8813-0d6f-4b9e-b154-736bb9db2ff8",
      "c245021d-4444-4086-a498-3ffee7fa8cdf"
    ]
  },
  "contacts_sample": [
    {
      "id": "e70eac25-1431-4231-bccd-1cfab432301e",
      "email": "KLTF@SurgGzlAxCPOqhOUHYNBLsfpfE.trh",
      "alternate_emails": [
        "dTeJZgU5uN9UYSo@nfIB.ijxg"
      ],
      "first_name": "ullamco esse culpa do",
      "last_name": "officia laboris veniam consequat",
      "address_line_1": "in occaecat labore est tempor",
      "address_line_2": "magna adipisicing",
      "city": "ƞó",
      "state_province_region": "culpa ut",
      "postal_code": -75218567,
      "country": "voluptate in in reprehenderit aliquip",
      "custom_fields": {
        "custom_field_name1": "amet deserunt mollit",
        "custom_field_name2": "minim consequat id"
      }
    },
    {
      "id": "db637d33-bce1-462c-ae9c-91ec4f761de6",
      "email": "t7N5TjDmKhC0@gfdifW.ua",
      "alternate_emails": [
        "gQol@Xcfilli.hc",
        "n4K7OdaVQh@YfsnF.ie",
        "TdnvS3nMStREn@miFjGzNDCPZWhiswJNxrFnOYdUAZEpesQ.yxpu",
        "xRzGDTTzzbYK@eJ.wpgb",
        "iI1rOpx2ct@aZhuYGZBxJLZ.phr"
      ],
      "first_name": "ea et eu",
      "last_name": "velit Ut laborum ipsu",
      "address_line_1": "labore",
      "address_line_2": "non",
      "city": "ĔȸąÂ¸ȠɏbɄ",
      "state_province_region": "deserunt dolore",
      "postal_code": -95171713,
      "country": "do",
      "list_ids": [
        "c712288b-2300-4069-bef4-2e05b5948ec3",
        "9003ef29-5eb7-4951-898b-1b102e490d6e"
      ],
      "custom_fields": {
        "custom_field_name1": "amet deserunt mollit",
        "custom_field_name2": "minim consequat id"
      }
    }
  ],
  "name": "aute amet deserunt adipisicing",
  "query_dsl": "email LIKE %twilio.com",
  "next_sample_update": "culpa sit occaecat fugiat quis"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MarketingSegments500Error1Error`](../../doc/models/v3-marketing-segments-500-error-1-error.md) |


# GET Marketing-Segments

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
async gETMarketingSegments(
  ids?: string[],
  parentListIds?: string,
  noParentListId?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingSegmentsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string[] \| undefined` | Query, Optional | A list of segment IDs to retrieve. When this parameter is included, the `no_parent_list_ids` and `parent_list_ids` parameters are ignored and only segments with given IDs are returned. |
| `parentListIds` | `string \| undefined` | Query, Optional | A comma separated list of list ids to be used when searching for segments with the specified parent_list_id, no more than 50 is allowed |
| `noParentListId` | `boolean \| undefined` | Query, Optional | If set to `true` segments with an empty value of `parent_list_id` will be returned in the filter.  If the value is not present it defaults to 'false'.<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingSegmentsResponse`](../../doc/models/v3-marketing-segments-response.md)

## Example Usage

```ts
const noParentListId = false;
try {
  const { result, ...httpResponse } = await segmentingContactsController.gETMarketingSegments(None, None, noParentListId);
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
  "results": [
    {
      "id": "12099613-91e5-4d09-a900-df7626325288",
      "contacts_count": 78434802,
      "created_at": "2921-01-27T19:33:36.479Z",
      "sample_updated_at": "4685-11-26T07:05:04.660Z",
      "updated_at": "2883-07-10T13:13:37.697Z"
    },
    {
      "id": "60c37015-3734-4c8e-b293-68cfa2ae4fa5",
      "contacts_count": 34177253,
      "created_at": "2575-07-26T23:17:20.984Z",
      "sample_updated_at": "3074-09-04T09:49:58.127Z",
      "updated_at": "5116-10-15T07:37:40.838Z",
      "parent_list_id": "fd38af3d-3f69-4947-8dca-5fa967e7be82",
      "name": "amet"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | error | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | error | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | error | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | error | [`V3MarketingSegments500Error1Error`](../../doc/models/v3-marketing-segments-500-error-1-error.md) |


# GET Marketing-Segments-Segment Id

**This endpoint allows you to retrieve a single segment by ID.**

```ts
async gETMarketingSegmentsSegmentId(
  segmentId: string,
  queryJson?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FullSegment>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentId` | `string` | Template, Required | - |
| `queryJson` | `boolean \| undefined` | Query, Optional | Defaults to `false`.  Set to `true` to return the parsed SQL AST as a JSON object in the field `query_json` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FullSegment`](../../doc/models/full-segment.md)

## Example Usage

```ts
const segmentId = '00002034-0000-0000-0000-000000000000';
try {
  const { result, ...httpResponse } = await segmentingContactsController.gETMarketingSegmentsSegmentId(segmentId);
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
  "id": "3b049926-0a54-4a91-83f0-086ace63c530",
  "contacts_count": -83213117,
  "created_at": "2921-01-27T19:33:36.479Z",
  "sample_updated_at": "3407-09-25T04:25:02.140Z",
  "updated_at": "4389-06-21T16:59:51.403Z",
  "contacts_sample": [
    {
      "id": "e70eac25-1431-4231-bccd-1cfab432301e",
      "email": "KLTF@SurgGzlAxCPOqhOUHYNBLsfpfE.trh",
      "alternate_emails": [
        "dTeJZgU5uN9UYSo@nfIB.ijxg"
      ],
      "first_name": "ullamco esse culpa do",
      "last_name": "officia laboris veniam consequat",
      "address_line_1": "in occaecat labore est tempor",
      "address_line_2": "magna adipisicing",
      "city": "ƞó",
      "state_province_region": "culpa ut",
      "postal_code": -75218567,
      "country": "voluptate in in reprehenderit aliquip",
      "custom_fields": {
        "custom_field_name1": "amet deserunt mollit",
        "custom_field_name2": "minim consequat id"
      }
    },
    {
      "id": "db637d33-bce1-462c-ae9c-91ec4f761de6",
      "email": "t7N5TjDmKhC0@gfdifW.ua",
      "alternate_emails": [
        "gQol@Xcfilli.hc",
        "n4K7OdaVQh@YfsnF.ie",
        "TdnvS3nMStREn@miFjGzNDCPZWhiswJNxrFnOYdUAZEpesQ.yxpu",
        "xRzGDTTzzbYK@eJ.wpgb",
        "iI1rOpx2ct@aZhuYGZBxJLZ.phr"
      ],
      "first_name": "ea et eu",
      "last_name": "velit Ut laborum ipsu",
      "address_line_1": "labore",
      "address_line_2": "non",
      "city": "ĔȸąÂ¸ȠɏbɄ",
      "state_province_region": "deserunt dolore",
      "postal_code": -95171713,
      "country": "do",
      "list_ids": [
        "c712288b-2300-4069-bef4-2e05b5948ec3",
        "9003ef29-5eb7-4951-898b-1b102e490d6e"
      ],
      "custom_fields": {
        "custom_field_name1": "amet deserunt mollit",
        "custom_field_name2": "minim consequat id"
      }
    }
  ],
  "name": "enim et anim",
  "query_dsl": "nostrud"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`V3MarketingSegments404Error1Error`](../../doc/models/v3-marketing-segments-404-error-1-error.md) |
| 500 | - | [`V3MarketingSegments500Error1Error`](../../doc/models/v3-marketing-segments-500-error-1-error.md) |


# PATCH Marketing-Segments-Segment Id

**This endpoint allows you to update a segment.**

Segment `name` needs to be unique. A user can not update a segment name to an existing one.

```ts
async pATCHMarketingSegmentsSegmentId(
  segmentId: string,
  body?: SegmentWrite,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FullSegment>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentId` | `string` | Template, Required | - |
| `body` | [`SegmentWrite \| undefined`](../../doc/models/segment-write.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FullSegment`](../../doc/models/full-segment.md)

## Example Usage

```ts
const segmentId = '00002034-0000-0000-0000-000000000000';
const contentType = null;
try {
  const { result, ...httpResponse } = await segmentingContactsController.pATCHMarketingSegmentsSegmentId(segmentId);
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
  "id": "5fff6250-b766-4959-a183-2e1fa565c4ce",
  "contacts_count": -35493018,
  "created_at": "2014-12-23T17:18:52.907Z",
  "sample_updated_at": "2146-04-13T16:46:32.328Z",
  "updated_at": "4389-06-21T16:59:51.403Z",
  "contacts_sample": [
    {
      "id": "4cff9fdf-1bee-44f7-95dc-a101f9ed3cfe",
      "email": "exmS@KIzibBSmaUUHQa.uvv",
      "alternate_emails": [
        "qXP-RD97fLl@oEDaUynqnNRHJHdoJAWVGXwvI.qlv",
        "W0ngFWmR@WcQuSbPFVPZvLrjCFadfimFi.eqf",
        "mYBC0ea5UxFI@qwO.jh",
        "Nhf1OmY@KCSjTQsXYpbKrBUsQFHrnLuY.oef"
      ],
      "first_name": "consequat nulla in",
      "last_name": "irure nostrud elit eu",
      "address_line_1": "deserunt cillum aliqua nostrud ullamco",
      "address_line_2": "sint",
      "city": "ŷ(ç",
      "state_province_region": "minim",
      "postal_code": 62721676,
      "country": "consectetur quis voluptate",
      "custom_fields": {
        "custom_field_name1": "dolor aute irure Excepteur"
      },
      "list_ids": [
        "f9d5987d-7a01-4a66-b77e-1f08a392304b",
        "b4e3b028-01d4-428b-9ef5-24bcd90fa02c",
        "fedab84f-9aa5-449d-99e2-7b1361f8ee61"
      ]
    },
    {
      "id": "093a66b8-bca8-4d8a-b32a-091d939c1928",
      "email": "atNeYGC4nbF42@VOCUWuGaYr.ystm",
      "alternate_emails": [
        "Zs6vnQbMU@XTamDsXEGJWBMMEacOc.hitv",
        "Epl@ySBrQCFJZnjggkAYLu.ppta"
      ],
      "first_name": "est",
      "last_name": "in",
      "address_line_1": "culpa eu eiusmod sint",
      "address_line_2": "sed velit sint",
      "city": "BĊJ",
      "state_province_region": "Lorem Ut aliqua elit",
      "postal_code": 33736880,
      "country": "in laboris Excepteur consequat",
      "custom_fields": {
        "custom_field_name2": "culpa Excepteur",
        "custom_field_name1": "esse magna Ut"
      }
    },
    {
      "id": "08939f9c-2c87-4639-bd07-16d41f90a5eb",
      "email": "Jx660QHClqRrC@SavQvcdRpJlLqepwoEUCm.ar",
      "alternate_emails": [
        "S8u@ZVGjHsXdSWtlhhad.ximc",
        "GA1MN72v3uA@MPDvMUmTYjwFCsEaGnFnvVzJVqUTl.ehws"
      ],
      "first_name": "sed eu veli",
      "last_name": "aliqua sit culpa",
      "address_line_1": "occaecat aute enim",
      "address_line_2": "ipsum quis in",
      "city": "ɌſĕĝȤ¶Ǖ",
      "state_province_region": "ut nisi sed esse",
      "postal_code": -66445052,
      "custom_fields": {
        "custom_field_name1": "dolor aute irure Excepteur"
      },
      "country": "occaecat veniam"
    },
    {
      "id": "0667ed97-7b7b-44aa-a115-0301067660d7",
      "email": "AnoFtJq@IolRDmfj.njt",
      "alternate_emails": [
        "F5WhHCA3oL6Ix@wOKzwIsvHbFi.mrlc"
      ],
      "first_name": "do mollit velit",
      "last_name": "voluptate dolor",
      "address_line_1": "et incididunt",
      "address_line_2": "veniam quis non exercitation Duis",
      "city": "ǲƐȹŲǆ",
      "state_province_region": "occaecat",
      "postal_code": -19694583,
      "country": "reprehenderit",
      "custom_fields": {
        "custom_field_name1": "dolor aute irure Excepteur"
      },
      "list_ids": [
        "ffd225a8-2008-4457-87af-1cffff5b1ccb"
      ]
    },
    {
      "id": "449767ca-d446-45f1-aa9b-432f441b5ca1",
      "email": "kF4@gYYdAxzetJrWszLAHuBUTu.rzq",
      "alternate_emails": [
        "ksqbx6BInlB@ouWBjjxwFBwVQjdnEKXy.xi",
        "TAe7F2m8dFlF@SirYykzbe.aj",
        "T9c2Y@HjVQY.zz",
        "p7ShfET@vMMnTUqoqngPSEqbpyoeWN.jlqn",
        "0VJSIhIUT2k@mJXVtdZVKKswW.xoca"
      ],
      "first_name": "irure laboris minim",
      "last_name": "id nostrud aliqua sit",
      "address_line_1": "dolor",
      "address_line_2": "elit ex labore sunt aliquip",
      "city": "ÝǘźƝǝƉƝ",
      "state_province_region": "nostrud Duis non nulla laborum",
      "postal_code": 60466925,
      "country": "id sunt nisi",
      "custom_fields": {
        "custom_field_name2": "enim quis",
        "custom_field_name1": "amet"
      },
      "list_ids": [
        "2870627c-b9ea-4dcf-bde0-36c3e0e3eca9",
        "575d86aa-4dcc-4b7d-b7de-ded856913198",
        "fb82a17f-5777-439d-9b8c-2c565c8ddf20"
      ]
    }
  ],
  "name": "List Name",
  "query_dsl": "Email LIKE %twilio.com"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`V3MarketingSegments404Error1Error`](../../doc/models/v3-marketing-segments-404-error-1-error.md) |
| 500 | - | [`V3MarketingSegments500Error1Error`](../../doc/models/v3-marketing-segments-500-error-1-error.md) |


# DELETE Marketing-Segments-Segment Id

**This endpoint allows you to delete a segment by `segment_id`.**

Note that deleting a segment does not delete the contacts associated with the segment by default. Contacts associated with a deleted segment will remain in your list of all contacts and any other segments they belong to.

```ts
async dELETEMarketingSegmentsSegmentId(
  segmentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const segmentId = '00002034-0000-0000-0000-000000000000';
try {
  const { result, ...httpResponse } = await segmentingContactsController.dELETEMarketingSegmentsSegmentId(segmentId);
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
| 400 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`V3MarketingSegments404Error1Error`](../../doc/models/v3-marketing-segments-404-error-1-error.md) |
| 500 | - | [`V3MarketingSegments500Error1Error`](../../doc/models/v3-marketing-segments-500-error-1-error.md) |

