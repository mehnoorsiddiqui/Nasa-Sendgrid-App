# Bounces API

```ts
const bouncesAPIController = new BouncesAPIController(client);
```

## Class Name

`BouncesAPIController`

## Methods

* [GET Suppression-Bounces](../../doc/controllers/bounces-api.md#get-suppression-bounces)
* [DELETE Suppression-Bounces](../../doc/controllers/bounces-api.md#delete-suppression-bounces)
* [GET Suppression-Bounces-Email](../../doc/controllers/bounces-api.md#get-suppression-bounces-email)
* [DELETE Suppression-Bounces-Email](../../doc/controllers/bounces-api.md#delete-suppression-bounces-email)
* [GET Suppression-Bounces-Classifications](../../doc/controllers/bounces-api.md#get-suppression-bounces-classifications)
* [GET Suppressions-Bounces-Classifications-Classification](../../doc/controllers/bounces-api.md#get-suppressions-bounces-classifications-classification)


# GET Suppression-Bounces

**This endpoint allows you to retrieve all of your bounces. A maximum of 500 bounces will be returned per query. You can use the `offset` and `limit` parameters to retrieve more or less than 500 results.**

```ts
async gETSuppressionBounces(
  accept: string,
  startTime?: number,
  endTime?: number,
  limit?: number,
  offset?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BounceResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `startTime` | `number \| undefined` | Query, Optional | Refers start of the time range in unix timestamp when a bounce was created (inclusive). |
| `endTime` | `number \| undefined` | Query, Optional | Refers end of the time range in unix timestamp when a bounce was created (inclusive). |
| `limit` | `number \| undefined` | Query, Optional | Limit the number of results to be displayed per page. |
| `offset` | `number \| undefined` | Query, Optional | The point in the list to begin displaying results. To retrieve more than 500 results, you can make multiple requests to the API, using the `offset` to begin at the next result in the list. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BounceResponse[]`](../../doc/models/bounce-response.md)

## Example Usage

```ts
const accept = 'Accept0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await bouncesAPIController.gETSuppressionBounces(accept, None, None, None, None, onBehalfOf);
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
    "created": 1250337600,
    "email": "example@example.com",
    "reason": "550 5.1.1 The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for typos or unnecessary spaces. Learn more at  https://support.google.com/mail/answer/6596 o186si2389584ioe.63 - gsmtp ",
    "status": "5.1.1"
  },
  {
    "created": 1250337600,
    "email": "example@example.com",
    "reason": "550 5.1.1 <testemail2@testing.com>: Recipient address rejected: User unknown in virtual alias table ",
    "status": "5.1.1"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# DELETE Suppression-Bounces

**This endpoint allows you to delete all emails on your bounces list.**

There are two options for deleting bounced emails:

1. You can delete all bounced emails by setting `delete_all` to `true` in the request body.
2. You can delete a selection of bounced emails by specifying the email addresses in the `emails` array of the request body.

**WARNING:** You can not have both `emails` and `delete_all` set.

```ts
async dELETESuppressionBounces(
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
  const { result, ...httpResponse } = await bouncesAPIController.dELETESuppressionBounces(contentType, onBehalfOf);
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


# GET Suppression-Bounces-Email

**This endpoint allows you to retrieve a specific bounce by email address.**

```ts
async gETSuppressionBouncesEmail(
  email: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BounceResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BounceResponse[]`](../../doc/models/bounce-response.md)

## Example Usage

```ts
const email = 'email6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await bouncesAPIController.gETSuppressionBouncesEmail(email, onBehalfOf);
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
    "created": 1443651125,
    "email": "bounce1@test.com",
    "reason": "550 5.1.1 The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for typos or unnecessary spaces. Learn more at  https://support.google.com/mail/answer/6596 o186si2389584ioe.63 - gsmtp ",
    "status": "5.1.1"
  }
]
```


# DELETE Suppression-Bounces-Email

**This endpoint allows you to remove an email address from your bounce list.**

```ts
async dELETESuppressionBouncesEmail(
  email: string,
  emailAddress: string,
  contentType: ContentTypeEnum,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Template, Required | - |
| `emailAddress` | `string` | Query, Required | The email address you would like to remove from the bounce list. |
| `contentType` | [`ContentTypeEnum`](../../doc/models/content-type-enum.md) | Header, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const email = 'email6';
const emailAddress = 'email_address2';
const contentType = 'application/json';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await bouncesAPIController.dELETESuppressionBouncesEmail(email, emailAddress, contentType, onBehalfOf);
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


# GET Suppression-Bounces-Classifications

This endpoint will return the total number of bounces by classification in descending order for each day. You can retrieve the bounce classification totals in CSV format by specifying `"text/csv"` in the Accept header.

```ts
async gETSuppressionBouncesClassifications(
  accept: Accept1Enum,
  startDate?: string,
  endDate?: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3SuppressionBouncesClassificationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | [`Accept1Enum`](../../doc/models/accept-1-enum.md) | Header, Required | Specifies the content type to be returned by this endpoint. You can choose to receive CSV-formatted data by passing "text/csv" in the header. |
| `startDate` | `string \| undefined` | Query, Optional | The start of the time range, in YYYY-MM-DD format, when a bounce was created (inclusive). |
| `endDate` | `string \| undefined` | Query, Optional | The end of the time range, in YYYY-MM-DD format, when a bounce was created (inclusive). |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3SuppressionBouncesClassificationsResponse`](../../doc/models/v3-suppression-bounces-classifications-response.md)

## Example Usage

```ts
const accept = 'application/json';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await bouncesAPIController.gETSuppressionBouncesClassifications(accept, None, None, onBehalfOf);
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
      "date": "2022-01-01",
      "stats": [
        {
          "classification": "Unclassified",
          "count": 35
        },
        {
          "classification": "Invalid Address",
          "count": 14
        }
      ]
    },
    {
      "date": "2022-01-02",
      "stats": [
        {
          "classification": "Unclassified",
          "count": 23
        },
        {
          "classification": "Content",
          "count": 4
        }
      ]
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Suppressions-Bounces-Classifications-Classification

This endpoint will return the number of bounces for the classification specified in descending order for each day. You can retrieve the bounce classification totals in CSV format by specifying `"text/csv"` in the Accept header.

```ts
async gETSuppressionsBouncesClassificationsClassification(
  accept: Accept1Enum,
  classification: Classification1Enum,
  startDate?: string,
  endDate?: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3SuppressionBouncesClassificationsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | [`Accept1Enum`](../../doc/models/accept-1-enum.md) | Header, Required | Specifies the content type to be returned by this endpoint. You can choose to receive CSV-formatted data by passing "text/csv" in the header. |
| `classification` | [`Classification1Enum`](../../doc/models/classification-1-enum.md) | Template, Required | The classification you want to filter by. Possible values are: `Content`, `Frequency or Volume Too High`, `Invalid Address`, `Mailbox Unavailable`, `Reputation`, `Technical Failure`, `Unclassified`. |
| `startDate` | `string \| undefined` | Query, Optional | The start of the time range, in YYYY-MM-DD format, when a bounce was created (inclusive). |
| `endDate` | `string \| undefined` | Query, Optional | The end of the time range, in YYYY-MM-DD format, when a bounce was created (inclusive). |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3SuppressionBouncesClassificationsResponse1`](../../doc/models/v3-suppression-bounces-classifications-response-1.md)

## Example Usage

```ts
const accept = 'application/json';
const classification = 'Frequency or Volume Too High';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await bouncesAPIController.gETSuppressionsBouncesClassificationsClassification(accept, classification, None, None, onBehalfOf);
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
      "date": "2022-01-01",
      "stats": [
        {
          "domain": "example.com",
          "count": 35
        },
        {
          "domain": "one.example.com",
          "count": 14
        }
      ]
    },
    {
      "date": "2022-01-02",
      "stats": [
        {
          "domain": "example.com",
          "count": 23
        },
        {
          "domain": "one.example.com",
          "count": 4
        }
      ]
    }
  ]
}
```

