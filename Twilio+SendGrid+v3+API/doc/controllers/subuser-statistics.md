# Subuser Statistics

```ts
const subuserStatisticsController = new SubuserStatisticsController(client);
```

## Class Name

`SubuserStatisticsController`

## Methods

* [GET Subusers-Subuser Name-Stats-Monthly](../../doc/controllers/subuser-statistics.md#get-subusers-subuser-name-stats-monthly)
* [GET Subusers-Stats-Monthly](../../doc/controllers/subuser-statistics.md#get-subusers-stats-monthly)
* [GET Subusers-Stats-Sums](../../doc/controllers/subuser-statistics.md#get-subusers-stats-sums)
* [GET Subusers-Stats](../../doc/controllers/subuser-statistics.md#get-subusers-stats)


# GET Subusers-Subuser Name-Stats-Monthly

**This endpoint allows you to retrive the monthly email statistics for a specific subuser.**

When using the `sort_by_metric` to sort your stats by a specific metric, you can not sort by the following metrics:
`bounce_drops`, `deferred`, `invalid_emails`, `processed`, `spam_report_drops`, `spam_reports`, or `unsubscribe_drops`.

```ts
async gETSubusersSubuserNameStatsMonthly(
  subuserName: string,
  date: string,
  sortByMetric?: string,
  sortByDirection?: SortByDirection1Enum,
  limit?: number,
  offset?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubuserStats>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subuserName` | `string` | Template, Required | - |
| `date` | `string` | Query, Required | The date of the month to retrieve statistics for. Must be formatted YYYY-MM-DD |
| `sortByMetric` | `string \| undefined` | Query, Optional | The metric that you want to sort by. Metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`.'<br>**Default**: `'delivered'` |
| `sortByDirection` | [`SortByDirection1Enum \| undefined`](../../doc/models/sort-by-direction-1-enum.md) | Query, Optional | The direction you want to sort. |
| `limit` | `number \| undefined` | Query, Optional | Optional field to limit the number of results returned.<br>**Default**: `5` |
| `offset` | `number \| undefined` | Query, Optional | Optional beginning point in the list to retrieve from.<br>**Default**: `0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubuserStats`](../../doc/models/subuser-stats.md)

## Example Usage

```ts
const subuserName = 'subuser_name0';
const date = 'date4';
const sortByMetric = 'delivered';
const limit = 5;
const offset = 0;
try {
  const { result, ...httpResponse } = await subuserStatisticsController.gETSubusersSubuserNameStatsMonthly(subuserName, date, sortByMetric, None, limit, offset);
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
  "date": "2016-02-01",
  "stats": [
    {
      "first_name": "John",
      "last_name": "Doe",
      "metrics": {
        "blocks": 0,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 5,
        "deferred": 0,
        "delivered": 0,
        "invalid_emails": 0,
        "opens": 10,
        "processed": 10,
        "requests": 10,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 0,
        "unique_opens": 0,
        "unsubscribe_drops": 0,
        "unsubscribes": 0
      },
      "name": "user1",
      "type": "subuser"
    }
  ]
}
```


# GET Subusers-Stats-Monthly

**This endpoint allows you to retrieve the monthly email statistics for all subusers over the given date range.**

When using the `sort_by_metric` to sort your stats by a specific metric, you can not sort by the following metrics:
`bounce_drops`, `deferred`, `invalid_emails`, `processed`, `spam_report_drops`, `spam_reports`, or `unsubscribe_drops`.

```ts
async gETSubusersStatsMonthly(
  date: string,
  subuser?: string,
  sortByMetric?: SortByMetric1Enum,
  sortByDirection?: SortByDirection1Enum,
  limit?: number,
  offset?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubuserStats>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string` | Query, Required | The date of the month to retrieve statistics for. Must be formatted YYYY-MM-DD |
| `subuser` | `string \| undefined` | Query, Optional | A substring search of your subusers. |
| `sortByMetric` | [`SortByMetric1Enum \| undefined`](../../doc/models/sort-by-metric-1-enum.md) | Query, Optional | The metric that you want to sort by. Metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`.' |
| `sortByDirection` | [`SortByDirection1Enum \| undefined`](../../doc/models/sort-by-direction-1-enum.md) | Query, Optional | The direction you want to sort. |
| `limit` | `number \| undefined` | Query, Optional | Optional field to limit the number of results returned.<br>**Default**: `5` |
| `offset` | `number \| undefined` | Query, Optional | Optional beginning point in the list to retrieve from.<br>**Default**: `0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SubuserStats`](../../doc/models/subuser-stats.md)

## Example Usage

```ts
const date = 'date4';
const limit = 5;
const offset = 0;
try {
  const { result, ...httpResponse } = await subuserStatisticsController.gETSubusersStatsMonthly(date, None, None, None, limit, offset);
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
  "date": "2016-02-01",
  "stats": [
    {
      "first_name": "John",
      "last_name": "Doe",
      "metrics": {
        "blocks": 0,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 0,
        "deferred": 0,
        "delivered": 0,
        "invalid_emails": 0,
        "opens": 1,
        "processed": 0,
        "requests": 100,
        "spam_report_drops": 0,
        "spam_reports": 99,
        "unique_clicks": 0,
        "unique_opens": 0,
        "unsubscribe_drops": 0,
        "unsubscribes": 0
      },
      "name": "user1",
      "type": "subuser"
    },
    {
      "first_name": "Jane",
      "last_name": "Doe",
      "metrics": {
        "blocks": 0,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 5,
        "deferred": 0,
        "delivered": 0,
        "invalid_emails": 0,
        "opens": 10,
        "processed": 10,
        "requests": 10,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 0,
        "unique_opens": 0,
        "unsubscribe_drops": 0,
        "unsubscribes": 0
      },
      "name": "user2",
      "type": "subuser"
    }
  ]
}
```


# GET Subusers-Stats-Sums

**This endpoint allows you to retrieve the total sums of each email statistic metric for all subusers over the given date range.**

```ts
async gETSubusersStatsSums(
  startDate: string,
  sortByDirection?: SortByDirection1Enum,
  endDate?: string,
  limit?: number,
  offset?: number,
  aggregatedBy?: string,
  sortByMetric?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatsCategoryStats>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string` | Query, Required | The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. |
| `sortByDirection` | [`SortByDirection1Enum \| undefined`](../../doc/models/sort-by-direction-1-enum.md) | Query, Optional | The direction you want to sort. |
| `endDate` | `string \| undefined` | Query, Optional | The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. |
| `limit` | `number \| undefined` | Query, Optional | Limits the number of results returned per page.<br>**Default**: `5` |
| `offset` | `number \| undefined` | Query, Optional | The point in the list to begin retrieving results from.<br>**Default**: `0` |
| `aggregatedBy` | `string \| undefined` | Query, Optional | How to group the statistics. Defaults to today. Must follow format YYYY-MM-DD. |
| `sortByMetric` | `string \| undefined` | Query, Optional | The metric that you want to sort by.  Must be a single metric.<br>**Default**: `'delivered'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StatsCategoryStats`](../../doc/models/stats-category-stats.md)

## Example Usage

```ts
const startDate = 'start_date6';
const limit = 5;
const offset = 0;
const sortByMetric = 'delivered';
try {
  const { result, ...httpResponse } = await subuserStatisticsController.gETSubusersStatsSums(startDate, None, None, limit, offset, None, sortByMetric);
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
  "date": "2015-10-11",
  "stats": []
}
```


# GET Subusers-Stats

**This endpoint allows you to retrieve the email statistics for the given subusers.**

You may retrieve statistics for up to 10 different subusers by including an additional _subusers_ parameter for each additional subuser.

```ts
async gETSubusersStats(
  subusers: string,
  startDate: string,
  limit?: number,
  offset?: number,
  aggregatedBy?: AggregatedBy2Enum,
  endDate?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatsCategoryStats[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subusers` | `string` | Query, Required | The subuser you want to retrieve statistics for. You may include this parameter up to 10 times to retrieve statistics for multiple subusers. |
| `startDate` | `string` | Query, Required | The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. |
| `limit` | `number \| undefined` | Query, Optional | Limits the number of results returned per page. |
| `offset` | `number \| undefined` | Query, Optional | The point in the list to begin retrieving results from. |
| `aggregatedBy` | [`AggregatedBy2Enum \| undefined`](../../doc/models/aggregated-by-2-enum.md) | Query, Optional | How to group the statistics. Must be either "day", "week", or "month". |
| `endDate` | `string \| undefined` | Query, Optional | The end date of the statistics to retrieve. Defaults to today. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StatsCategoryStats[]`](../../doc/models/stats-category-stats.md)

## Example Usage

```ts
const subusers = 'subusers0';
const startDate = 'start_date6';
try {
  const { result, ...httpResponse } = await subuserStatisticsController.gETSubusersStats(subusers, startDate);
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
    "date": "2015-10-01",
    "stats": [
      {
        "type": "subuser",
        "name": "Matt_subuser",
        "metrics": {
          "blocks": 0,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "invalid_emails": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-02",
    "stats": [
      {
        "type": "subuser",
        "name": "Matt_subuser",
        "metrics": {
          "blocks": 0,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "invalid_emails": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-03",
    "stats": [
      {
        "type": "subuser",
        "name": "Matt_subuser",
        "metrics": {
          "blocks": 0,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "invalid_emails": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-04",
    "stats": [
      {
        "type": "subuser",
        "name": "Matt_subuser",
        "metrics": {
          "blocks": 0,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "invalid_emails": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-05",
    "stats": [
      {
        "type": "subuser",
        "name": "Matt_subuser",
        "metrics": {
          "blocks": 0,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "invalid_emails": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-06",
    "stats": [
      {
        "type": "subuser",
        "name": "Matt_subuser",
        "metrics": {
          "blocks": 0,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "invalid_emails": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-07",
    "stats": [
      {
        "type": "subuser",
        "name": "Matt_subuser",
        "metrics": {
          "blocks": 0,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "invalid_emails": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-08",
    "stats": [
      {
        "type": "subuser",
        "name": "Matt_subuser",
        "metrics": {
          "blocks": 0,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "invalid_emails": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-09",
    "stats": [
      {
        "type": "subuser",
        "name": "Matt_subuser",
        "metrics": {
          "blocks": 0,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "invalid_emails": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-10",
    "stats": [
      {
        "type": "subuser",
        "name": "Matt_subuser",
        "metrics": {
          "blocks": 0,
          "bounce_drops": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "invalid_emails": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_report_drops": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0,
          "unsubscribe_drops": 0,
          "unsubscribes": 0
        }
      }
    ]
  }
]
```

