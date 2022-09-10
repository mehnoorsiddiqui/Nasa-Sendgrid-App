# Marketing Campaigns Stats

```ts
const marketingCampaignsStatsController = new MarketingCampaignsStatsController(client);
```

## Class Name

`MarketingCampaignsStatsController`

## Methods

* [Getall-Automation-Stats](../../doc/controllers/marketing-campaigns-stats.md#getall-automation-stats)
* [Get-Automation-Stat](../../doc/controllers/marketing-campaigns-stats.md#get-automation-stat)
* [Getall-Singlesend-Stats](../../doc/controllers/marketing-campaigns-stats.md#getall-singlesend-stats)
* [Get-Singlesend-Stat](../../doc/controllers/marketing-campaigns-stats.md#get-singlesend-stat)
* [Get-Automation-Link-Stat](../../doc/controllers/marketing-campaigns-stats.md#get-automation-link-stat)
* [Get-Singlesend-Link-Stat](../../doc/controllers/marketing-campaigns-stats.md#get-singlesend-link-stat)
* [Get-Singlesend-Stats-Export](../../doc/controllers/marketing-campaigns-stats.md#get-singlesend-stats-export)
* [Get-Automations-Stats-Export](../../doc/controllers/marketing-campaigns-stats.md#get-automations-stats-export)


# Getall-Automation-Stats

**This endpoint allows you to retrieve stats for all your Automations.**

By default, all of your Automations will be returned, but you can specify a selection by passing in a comma-separated list of Automation IDs as the value of the query string parameter `automation_ids`.

Responses are paginated. You can limit the number of responses returned per batch using the `page_size` query string parameter. The default is 50, but you specify a value between 1 and 100.

You can retrieve a specific page of responses with the `page_token` query string parameter.

```ts
async getallAutomationStats(
  automationIds?: string[],
  pageSize?: number,
  pageToken?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AutomationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `automationIds` | `string[] \| undefined` | Query, Optional | This endpoint returns all automation IDs if no `automation_ids` are specified.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `25` |
| `pageSize` | `number \| undefined` | Query, Optional | The number of elements you want returned on each page.<br>**Default**: `50`<br>**Constraints**: `>= 1`, `<= 100` |
| `pageToken` | `string \| undefined` | Query, Optional | The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AutomationsResponse`](../../doc/models/automations-response.md)

## Example Usage

```ts
const pageSize = 50;
try {
  const { result, ...httpResponse } = await marketingCampaignsStatsController.getallAutomationStats(None, pageSize);
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


# Get-Automation-Stat

**This endpoint allows you to retrieve stats for a single Automation using its ID.**

Multiple Automation IDs can be retrieved using the "Get All Automation Stats" endpoint. Once you have an ID, this endpoint will return detailed stats for the single automation specified.

You may constrain the stats returned using the `start_date` and `end_date` query string parameters. You can also use the `group_by` and `aggregated_by` query string parameters to further refine the stats returned.

```ts
async getAutomationStat(
  id: string,
  groupBy?: GroupByEnum[],
  stepIds?: string[],
  aggregatedBy?: AggregatedBy11Enum,
  startDate?: string,
  endDate?: string,
  timezone?: string,
  pageSize?: number,
  pageToken?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AutomationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `groupBy` | [`GroupByEnum[] \| undefined`](../../doc/models/group-by-enum.md) | Query, Optional | Automations can have multiple steps. Including `step_id` as a `group_by` metric allows further granularity of stats. |
| `stepIds` | `string[] \| undefined` | Query, Optional | Comma-separated list of `step_ids` that you want the link stats for.<br>**Constraints**: *Unique Items Required* |
| `aggregatedBy` | [`AggregatedBy11Enum \| undefined`](../../doc/models/aggregated-by-11-enum.md) | Query, Optional | Dictates how the stats are time-sliced. Currently, `"total"` and `"day"` are supported. |
| `startDate` | `string \| undefined` | Query, Optional | Format: `YYYY-MM-DD`. If this parameter is included, the stats' start date is included in the search. |
| `endDate` | `string \| undefined` | Query, Optional | Format: `YYYY-MM-DD`.If this parameter is included, the stats' end date is included in the search. |
| `timezone` | `string \| undefined` | Query, Optional | [IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones) string representing the timezone in which the stats are to be presented, e.g., "America/Chicago".<br>**Default**: `'UTC'` |
| `pageSize` | `number \| undefined` | Query, Optional | The number of elements you want returned on each page.<br>**Default**: `50`<br>**Constraints**: `>= 1`, `<= 100` |
| `pageToken` | `string \| undefined` | Query, Optional | The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AutomationsResponse`](../../doc/models/automations-response.md)

## Example Usage

```ts
const id = 'id0';
const timezone = 'UTC';
const pageSize = 50;
try {
  const { result, ...httpResponse } = await marketingCampaignsStatsController.getAutomationStat(id, None, None, None, None, None, timezone, pageSize);
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
| 404 | - | `ApiError` |


# Getall-Singlesend-Stats

**This endpoint allows you to retrieve stats for all your Single Sends.**

By default, all of your Single Sends will be returned, but you can specify a selection by passing in a comma-separated list of Single Send IDs as the value of the query string parameter `singlesend_ids`.

Responses are paginated. You can limit the number of responses returned per batch using the `page_size` query string parameter. The default is 50, but you specify a value between 1 and 100.

You can retrieve a specific page of responses with the `page_token` query string parameter.

```ts
async getallSinglesendStats(
  singlesendIds?: string[],
  pageSize?: number,
  pageToken?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SinglesendsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `singlesendIds` | `string[] \| undefined` | Query, Optional | This endpoint returns all Single Send IDs if no IDs are included in `singlesend_ids`.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `25` |
| `pageSize` | `number \| undefined` | Query, Optional | The number of elements you want returned on each page.<br>**Default**: `50`<br>**Constraints**: `>= 1`, `<= 100` |
| `pageToken` | `string \| undefined` | Query, Optional | The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SinglesendsResponse`](../../doc/models/singlesends-response.md)

## Example Usage

```ts
const pageSize = 50;
try {
  const { result, ...httpResponse } = await marketingCampaignsStatsController.getallSinglesendStats(None, pageSize);
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


# Get-Singlesend-Stat

**This endpoint allows you to retrieve stats for an individual Single Send using a Single Send ID.**

Multiple Single Send IDs can be retrieved using the "Get All Single Sends Stats" endpoint. Once you have an ID, this endpoint will return detailed stats for the Single Send specified.

You may constrain the stats returned using the `start_date` and `end_date` query string parameters. You can also use the `group_by` and `aggregated_by` query string parameters to further refine the stats returned.

```ts
async getSinglesendStat(
  id: string,
  aggregatedBy?: AggregatedBy11Enum,
  startDate?: string,
  endDate?: string,
  timezone?: string,
  pageSize?: number,
  pageToken?: string,
  groupBy?: GroupBy1Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<SinglesendsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `aggregatedBy` | [`AggregatedBy11Enum \| undefined`](../../doc/models/aggregated-by-11-enum.md) | Query, Optional | Dictates how the stats are time-sliced. Currently, `"total"` and `"day"` are supported. |
| `startDate` | `string \| undefined` | Query, Optional | Format: `YYYY-MM-DD`. If this parameter is included, the stats' start date is included in the search. |
| `endDate` | `string \| undefined` | Query, Optional | Format: `YYYY-MM-DD`.If this parameter is included, the stats' end date is included in the search. |
| `timezone` | `string \| undefined` | Query, Optional | [IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones) string representing the timezone in which the stats are to be presented, e.g., "America/Chicago".<br>**Default**: `'UTC'` |
| `pageSize` | `number \| undefined` | Query, Optional | The number of elements you want returned on each page.<br>**Default**: `50`<br>**Constraints**: `>= 1`, `<= 100` |
| `pageToken` | `string \| undefined` | Query, Optional | The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page. |
| `groupBy` | [`GroupBy1Enum[] \| undefined`](../../doc/models/group-by-1-enum.md) | Query, Optional | A/B Single Sends have multiple variation IDs and phase IDs. Including these additional fields allows further granularity of stats by these fields. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SinglesendsResponse`](../../doc/models/singlesends-response.md)

## Example Usage

```ts
const id = 'id0';
const timezone = 'UTC';
const pageSize = 50;
try {
  const { result, ...httpResponse } = await marketingCampaignsStatsController.getSinglesendStat(id, None, None, None, timezone, pageSize);
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
| 404 | - | `ApiError` |


# Get-Automation-Link-Stat

**This endpoint lets you retrieve click-tracking stats for a single Automation**.

The stats returned list the URLs embedded in your Automation and the number of clicks each one received.

Responses are paginated. You can limit the number of responses returned per batch using the `page_size` query string parameter. The default is 50, but you specify a value between 1 and 100.

You can retrieve a specific page of responses with the `page_token` query string parameter.

```ts
async getAutomationLinkStat(
  id: string,
  groupBy?: GroupByEnum[],
  stepIds?: string[],
  pageSize?: number,
  pageToken?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AutomationsLinkStatsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the Automation you want to get click tracking stats for. |
| `groupBy` | [`GroupByEnum[] \| undefined`](../../doc/models/group-by-enum.md) | Query, Optional | Automations can have multiple steps. Including `step_id` as a `group_by` metric allows further granularity of stats. |
| `stepIds` | `string[] \| undefined` | Query, Optional | Comma-separated list of `step_ids` that you want the link stats for.<br>**Constraints**: *Unique Items Required* |
| `pageSize` | `number \| undefined` | Query, Optional | The number of elements you want returned on each page.<br>**Default**: `50`<br>**Constraints**: `>= 1`, `<= 100` |
| `pageToken` | `string \| undefined` | Query, Optional | The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AutomationsLinkStatsResponse`](../../doc/models/automations-link-stats-response.md)

## Example Usage

```ts
const id = '00001770-0000-0000-0000-000000000000';
const pageSize = 50;
try {
  const { result, ...httpResponse } = await marketingCampaignsStatsController.getAutomationLinkStat(id, None, None, pageSize);
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
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# Get-Singlesend-Link-Stat

**This endpoint lets you retrieve click-tracking stats for one Single Send**.

The stats returned list the URLs embedded in the specified Single Send and the number of clicks each one received.

Responses are paginated. You can limit the number of responses returned per batch using the `page_size` query string parameter. The default is 50, but you specify a value between 1 and 100.

You can retrieve a specific page of responses with the `page_token` query string parameter.

```ts
async getSinglesendLinkStat(
  id: string,
  pageSize?: number,
  pageToken?: string,
  groupBy?: GroupBy1Enum[],
  abVariationId?: string,
  abPhaseId?: AbPhaseIdEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SinglesendsLinkStatsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `pageSize` | `number \| undefined` | Query, Optional | The number of elements you want returned on each page.<br>**Default**: `50`<br>**Constraints**: `>= 1`, `<= 100` |
| `pageToken` | `string \| undefined` | Query, Optional | The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page. |
| `groupBy` | [`GroupBy1Enum[] \| undefined`](../../doc/models/group-by-1-enum.md) | Query, Optional | A/B Single Sends have multiple variation IDs and phase IDs. Including these additional fields allows further granularity of stats by these fields. |
| `abVariationId` | `string \| undefined` | Query, Optional | - |
| `abPhaseId` | [`AbPhaseIdEnum \| undefined`](../../doc/models/ab-phase-id-enum.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SinglesendsLinkStatsResponse`](../../doc/models/singlesends-link-stats-response.md)

## Example Usage

```ts
const id = 'id0';
const pageSize = 50;
try {
  const { result, ...httpResponse } = await marketingCampaignsStatsController.getSinglesendLinkStat(id, pageSize);
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
| 404 | - | `ApiError` |


# Get-Singlesend-Stats-Export

**This endpoint allows you to export Single Send stats as .CSV data**.

You can specify one Single Send or many: include as many Single Send IDs as you need, separating them with commas, as the value of the `ids` query string paramter.

The data is returned as plain text response but in .CSV format, so your application making the call can present the information in whatever way is most appropriate, or just save the data as a .csv file.

```ts
async getSinglesendStatsExport(
  ids?: string[],
  timezone?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string[] \| undefined` | Query, Optional | The IDs of Single Sends for which to export stats.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `50` |
| `timezone` | `string \| undefined` | Query, Optional | The [IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones) string representing the timezone in which the stats are to be presented; i.e. `"America/Chicago"`. This parameter changes the timezone format only; it does not alter which stats are returned.<br>**Default**: `'UTC'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
const timezone = 'UTC';
try {
  const { result, ...httpResponse } = await marketingCampaignsStatsController.getSinglesendStatsExport(None, timezone);
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
| 400 | - | `ApiError` |


# Get-Automations-Stats-Export

**This endpoint allows you to export Automation stats as CSV data**.

You can specify one Automation or many: include as many Automation IDs as you need, separating them with commas, as the value of the `ids` query string paramter.

The data is returned as plain text response but in CSV format, so your application making the call can present the information in whatever way is most appropriate, or just save the data as a `.csv` file.

```ts
async getAutomationsStatsExport(
  ids?: string[],
  timezone?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string[] \| undefined` | Query, Optional | The IDs of Automations for which to export stats.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `50` |
| `timezone` | `string \| undefined` | Query, Optional | The [IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones) string representing the timezone in which the stats are to be presented; i.e. `"America/Chicago"`. This parameter changes the timezone format only; it does not alter which stats are returned.<br>**Default**: `'UTC'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
const timezone = 'UTC';
try {
  const { result, ...httpResponse } = await marketingCampaignsStatsController.getAutomationsStatsExport(None, timezone);
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

