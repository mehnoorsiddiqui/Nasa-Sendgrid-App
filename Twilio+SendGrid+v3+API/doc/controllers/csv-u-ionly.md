# CSV U Ionly

```ts
const cSVUIonlyController = new CSVUIonlyController(client);
```

## Class Name

`CSVUIonlyController`

## Methods

* [POST V 3 -messages-Download](../../doc/controllers/csv-u-ionly.md#post-v-3--messages-download)
* [GET V 3 -messages-Download-Download Uuid](../../doc/controllers/csv-u-ionly.md#get-v-3--messages-download-download-uuid)


# POST V 3 -messages-Download

This request will kick off a backend process to generate a CSV file. Once generated, the worker will then send an email for the user download the file. The link will expire in 3 days.

The CSV fill contain the last 1 million messages. This endpoint will be rate limited to 1 request every 12 hours (rate limit may change).

This endpoint is similar to the GET Single Message endpoint - the only difference is that /download is added to indicate that this is a CSV download requests but the same query is used to determine what the CSV should contain.

```ts
async pOSTV3MessagesDownload(
  authorization: string,
  query?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MessagesDownloadResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | - |
| `query` | `string \| undefined` | Query, Optional | Uses a SQL like syntax to indicate which messages to include in the CSV |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MessagesDownloadResponse`](../../doc/models/v3-messages-download-response.md)

## Example Usage

```ts
const authorization = 'Authorization8';
try {
  const { result, ...httpResponse } = await cSVUIOnlyController.pOSTV3MessagesDownload(authorization);
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
  "status": "pending",
  "message": "An email will be sent to jane_doe@example.com when the CSV is ready to download."
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3MarketingContactsSearch500Error1Error`](../../doc/models/v3-marketing-contacts-search-500-error-1-error.md) |
| 429 | - | [`V3MarketingContactsSearch500Error1Error`](../../doc/models/v3-marketing-contacts-search-500-error-1-error.md) |
| 500 | - | [`V3MarketingContactsSearch500Error1Error`](../../doc/models/v3-marketing-contacts-search-500-error-1-error.md) |


# GET V 3 -messages-Download-Download Uuid

**This endpoint will return a presigned URL that can be used to download the CSV that was requested from the "Request a CSV" endpoint.**

```ts
async gETV3MessagesDownloadDownloadUuid(
  downloadUuid: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MessagesDownloadResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `downloadUuid` | `string` | Template, Required | UUID used to locate the download csv request entry in the DB.<br><br>This is the UUID provided in the email sent to the user when their csv file is ready to download |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MessagesDownloadResponse1`](../../doc/models/v3-messages-download-response-1.md)

## Example Usage

```ts
const downloadUuid = '0000183c-0000-0000-0000-000000000000';
const authorization = 'Authorization8';
try {
  const { result, ...httpResponse } = await cSVUIOnlyController.gETV3MessagesDownloadDownloadUuid(downloadUuid, authorization);
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
  "presigned_url": "https://example.com",
  "csv": "https://s3-us-west-2.amazonaws.com/sendgrid-rts-development-queries/013c31af-7c9a-49e6-922c-d990f4aff151.csv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=3600&X-Amz-Credential=AKIAI4NOW7APZHRFYGWQ%2F20170728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Date=20170728T223936Z&X-Amz-Signature=5c13ede58b211799ab1a556280bd316c404eac3aef1450c47906a077166c4ab4"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | [`V3MarketingContactsSearch500Error1Error`](../../doc/models/v3-marketing-contacts-search-500-error-1-error.md) |
| 500 | - | [`V3MarketingContactsSearch500Error1Error`](../../doc/models/v3-marketing-contacts-search-500-error-1-error.md) |

