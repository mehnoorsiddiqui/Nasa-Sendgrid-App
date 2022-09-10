# Categories

```ts
const categoriesController = new CategoriesController(client);
```

## Class Name

`CategoriesController`

## Methods

* [GET Categories](../../doc/controllers/categories.md#get-categories)
* [GET Categories-Stats-Sums](../../doc/controllers/categories.md#get-categories-stats-sums)
* [GET Categories-Stats](../../doc/controllers/categories.md#get-categories-stats)


# GET Categories

**This endpoint allows you to retrieve a list of all of your categories.**

```ts
async gETCategories(
  limit?: number,
  category?: string,
  offset?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3CategoriesResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | The number of categories to display per page.<br>**Default**: `50` |
| `category` | `string \| undefined` | Query, Optional | Allows you to perform a prefix search on this particular category. |
| `offset` | `number \| undefined` | Query, Optional | The point in the list that you would like to begin displaying results.<br>**Default**: `0` |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3CategoriesResponse[]`](../../doc/models/v3-categories-response.md)

## Example Usage

```ts
const limit = 50;
const offset = 0;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await categoriesController.gETCategories(limit, None, offset, onBehalfOf);
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
    "category": "category 1"
  },
  {
    "category": "category 2"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3Categories400Error`](../../doc/models/v3-categories-400-error.md) |


# GET Categories-Stats-Sums

**This endpoint allows you to retrieve the total sum of each email statistic for every category over the given date range.**

If you do not define any query parameters, this endpoint will return a sum for each category in groups of 10.

```ts
async gETCategoriesStatsSums(
  startDate: string,
  sortByMetric?: string,
  sortByDirection?: SortByDirection1Enum,
  endDate?: string,
  limit?: number,
  offset?: number,
  aggregatedBy?: AggregatedBy2Enum,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatsCategoryStats>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string` | Query, Required | The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. |
| `sortByMetric` | `string \| undefined` | Query, Optional | The metric that you want to sort by.  Must be a single metric.<br>**Default**: `'delivered'` |
| `sortByDirection` | [`SortByDirection1Enum \| undefined`](../../doc/models/sort-by-direction-1-enum.md) | Query, Optional | The direction you want to sort. |
| `endDate` | `string \| undefined` | Query, Optional | The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. |
| `limit` | `number \| undefined` | Query, Optional | Limits the number of results returned.<br>**Default**: `5` |
| `offset` | `number \| undefined` | Query, Optional | The point in the list to begin retrieving results.<br>**Default**: `0` |
| `aggregatedBy` | [`AggregatedBy2Enum \| undefined`](../../doc/models/aggregated-by-2-enum.md) | Query, Optional | How to group the statistics. Must be either "day", "week", or "month". |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StatsCategoryStats`](../../doc/models/stats-category-stats.md)

## Example Usage

```ts
const startDate = 'start_date6';
const sortByMetric = 'delivered';
const limit = 5;
const offset = 0;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await categoriesController.gETCategoriesStatsSums(startDate, sortByMetric, None, None, limit, offset, None, onBehalfOf);
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
  "date": "2015-01-01",
  "stats": [
    {
      "metrics": {
        "blocks": 0,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 20,
        "deferred": 0,
        "delivered": 20,
        "invalid_emails": 0,
        "opens": 20,
        "processed": 0,
        "requests": 20,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 20,
        "unique_opens": 20,
        "unsubscribe_drops": 0,
        "unsubscribes": 20
      },
      "name": "cat1",
      "type": "category"
    },
    {
      "metrics": {
        "blocks": 1,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 19,
        "deferred": 0,
        "delivered": 19,
        "invalid_emails": 0,
        "opens": 19,
        "processed": 0,
        "requests": 20,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 19,
        "unique_opens": 19,
        "unsubscribe_drops": 0,
        "unsubscribes": 19
      },
      "name": "cat2",
      "type": "category"
    },
    {
      "metrics": {
        "blocks": 0,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 5,
        "deferred": 0,
        "delivered": 5,
        "invalid_emails": 0,
        "opens": 5,
        "processed": 0,
        "requests": 5,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 5,
        "unique_opens": 5,
        "unsubscribe_drops": 0,
        "unsubscribes": 5
      },
      "name": "cat3",
      "type": "category"
    },
    {
      "metrics": {
        "blocks": 0,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 6,
        "deferred": 0,
        "delivered": 5,
        "invalid_emails": 0,
        "opens": 6,
        "processed": 0,
        "requests": 5,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 5,
        "unique_opens": 5,
        "unsubscribe_drops": 0,
        "unsubscribes": 6
      },
      "name": "cat4",
      "type": "category"
    },
    {
      "metrics": {
        "blocks": 10,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 0,
        "deferred": 0,
        "delivered": 0,
        "invalid_emails": 0,
        "opens": 0,
        "processed": 0,
        "requests": 10,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 0,
        "unique_opens": 0,
        "unsubscribe_drops": 0,
        "unsubscribes": 0
      },
      "name": "cat5",
      "type": "category"
    }
  ]
}
```


# GET Categories-Stats

**This endpoint allows you to retrieve all of your email statistics for each of your categories.**

If you do not define any query parameters, this endpoint will return a sum for each category in groups of 10.

```ts
async gETCategoriesStats(
  startDate: string,
  categories: string,
  endDate?: string,
  aggregatedBy?: AggregatedBy2Enum,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StatsCategoryStats[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string` | Query, Required | The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD |
| `categories` | `string` | Query, Required | The individual categories that you want to retrieve statistics for. You may include up to 10 different categories. |
| `endDate` | `string \| undefined` | Query, Optional | The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. |
| `aggregatedBy` | [`AggregatedBy2Enum \| undefined`](../../doc/models/aggregated-by-2-enum.md) | Query, Optional | How to group the statistics. Must be either "day", "week", or "month". |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StatsCategoryStats[]`](../../doc/models/stats-category-stats.md)

## Example Usage

```ts
const startDate = 'start_date6';
const categories = 'categories8';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await categoriesController.gETCategoriesStats(startDate, categories, None, None, onBehalfOf);
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
        "type": "category",
        "name": "docs",
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
      },
      {
        "type": "category",
        "name": "mattscategory",
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
    "date": "2015-11-01",
    "stats": [
      {
        "type": "category",
        "name": "docs",
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
      },
      {
        "type": "category",
        "name": "mattscategory",
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

