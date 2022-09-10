# Stats

```ts
const statsController = new StatsController(client);
```

## Class Name

`StatsController`

## Methods

* [GET Stats](../../doc/controllers/stats.md#get-stats)
* [GET Geo-Stats](../../doc/controllers/stats.md#get-geo-stats)
* [GET Devices-Stats](../../doc/controllers/stats.md#get-devices-stats)
* [GET Clients-Stats](../../doc/controllers/stats.md#get-clients-stats)
* [GET Clients-Client Type-Stats](../../doc/controllers/stats.md#get-clients-client-type-stats)
* [GET Mailbox Providers-Stats](../../doc/controllers/stats.md#get-mailbox-providers-stats)
* [GET Browsers-Stats](../../doc/controllers/stats.md#get-browsers-stats)


# GET Stats

**This endpoint allows you to retrieve all of your global email statistics between a given date range.**

Parent accounts can see either aggregated stats for the parent account or aggregated stats for a subuser specified in the `on-behalf-of` header. Subuser accounts will see only their own stats.

```ts
async gETStats(
  startDate: string,
  onBehalfOf?: string,
  limit?: number,
  offset?: number,
  aggregatedBy?: AggregatedBy2Enum,
  endDate?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3StatsResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string` | Query, Required | The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `limit` | `number \| undefined` | Query, Optional | The number of results to return. |
| `offset` | `number \| undefined` | Query, Optional | The point in the list to begin retrieving results. |
| `aggregatedBy` | [`AggregatedBy2Enum \| undefined`](../../doc/models/aggregated-by-2-enum.md) | Query, Optional | How to group the statistics. Must be either "day", "week", or "month". |
| `endDate` | `string \| undefined` | Query, Optional | The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3StatsResponse[]`](../../doc/models/v3-stats-response.md)

## Example Usage

```ts
const startDate = 'start_date6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await statsController.gETStats(startDate, onBehalfOf);
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
    "date": "2015-11-03",
    "stats": [
      {
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
    "date": "2015-11-04",
    "stats": [
      {
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
    "date": "2015-11-05",
    "stats": [
      {
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
    "date": "2015-11-06",
    "stats": [
      {
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
    "date": "2015-11-07",
    "stats": [
      {
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
    "date": "2015-11-08",
    "stats": [
      {
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
    "date": "2015-11-09",
    "stats": [
      {
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


# GET Geo-Stats

**This endpoint allows you to retrieve your email statistics segmented by country and state/province.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).

```ts
async gETGeoStats(
  startDate: string,
  country?: Country1Enum,
  onBehalfOf?: string,
  limit?: number,
  offset?: number,
  aggregatedBy?: AggregatedBy2Enum,
  endDate?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3GeoStatsResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string` | Query, Required | The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. |
| `country` | [`Country1Enum \| undefined`](../../doc/models/country-1-enum.md) | Query, Optional | The country you would like to see statistics for. Currently only supported for US and CA. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `limit` | `number \| undefined` | Query, Optional | The number of results to return. |
| `offset` | `number \| undefined` | Query, Optional | The point in the list to begin retrieving results. |
| `aggregatedBy` | [`AggregatedBy2Enum \| undefined`](../../doc/models/aggregated-by-2-enum.md) | Query, Optional | How to group the statistics. Must be either "day", "week", or "month". |
| `endDate` | `string \| undefined` | Query, Optional | The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3GeoStatsResponse[]`](../../doc/models/v3-geo-stats-response.md)

## Example Usage

```ts
const startDate = 'start_date6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await statsController.gETGeoStats(startDate, None, onBehalfOf);
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
    "date": "2015-10-11",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-12",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-13",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-14",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-15",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-16",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-17",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-18",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-19",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-20",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-21",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 1,
          "unique_clicks": 0,
          "unique_opens": 1
        }
      }
    ]
  },
  {
    "date": "2015-10-22",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-23",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-24",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-25",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-26",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-27",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-28",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-29",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-30",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-31",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-01",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-02",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-03",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-04",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-05",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-06",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-07",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-08",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-09",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-10",
    "stats": [
      {
        "type": "province",
        "name": "TX",
        "metrics": {
          "clicks": 0,
          "opens": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  }
]
```


# GET Devices-Stats

**This endpoint allows you to retrieve your email statistics segmented by the device type.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

## Available Device Types

| **Device** | **Description** | **Example** |
|---|---|---|
| Desktop | Email software on desktop computer. | I.E., Outlook, Sparrow, or Apple Mail. |
| Webmail |	A web-based email client. | I.E., Yahoo, Google, AOL, or Outlook.com. |
| Phone | A smart phone. | iPhone, Android, Blackberry, etc.
| Tablet | A tablet computer. | iPad, android based tablet, etc. |
| Other | An unrecognized device. |

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [Statistics Overview](https://sendgrid.com/docs/ui/analytics-and-reporting/stats-overview/).

```ts
async gETDevicesStats(
  startDate: string,
  onBehalfOf?: string,
  limit?: number,
  offset?: number,
  aggregatedBy?: AggregatedBy2Enum,
  endDate?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3DevicesStatsResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string` | Query, Required | The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `limit` | `number \| undefined` | Query, Optional | The number of results to return. |
| `offset` | `number \| undefined` | Query, Optional | The point in the list to begin retrieving results. |
| `aggregatedBy` | [`AggregatedBy2Enum \| undefined`](../../doc/models/aggregated-by-2-enum.md) | Query, Optional | How to group the statistics. Must be either "day", "week", or "month". |
| `endDate` | `string \| undefined` | Query, Optional | The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3DevicesStatsResponse[]`](../../doc/models/v3-devices-stats-response.md)

## Example Usage

```ts
const startDate = 'start_date6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await statsController.gETDevicesStats(startDate, onBehalfOf);
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
    "date": "2015-10-11",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-12",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-13",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-14",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-15",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-16",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-17",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-18",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-19",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-20",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-21",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 1,
          "unique_opens": 1
        }
      }
    ]
  },
  {
    "date": "2015-10-22",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-23",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-24",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-25",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-26",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 2,
          "unique_opens": 2
        }
      }
    ]
  },
  {
    "date": "2015-10-27",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-28",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-29",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-30",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-31",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-01",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-02",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-03",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-04",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-05",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-06",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-07",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-08",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-09",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-10",
    "stats": [
      {
        "type": "device",
        "name": "Webmail",
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        }
      }
    ]
  }
]
```


# GET Clients-Stats

**This endpoint allows you to retrieve your email statistics segmented by client type.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [Statistics Overview](https://sendgrid.com/docs/ui/analytics-and-reporting/stats-overview/).

```ts
async gETClientsStats(
  startDate: string,
  onBehalfOf?: string,
  endDate?: string,
  aggregatedBy?: AggregatedBy2Enum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ClientsStatsResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string` | Query, Required | The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `endDate` | `string \| undefined` | Query, Optional | The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. |
| `aggregatedBy` | [`AggregatedBy2Enum \| undefined`](../../doc/models/aggregated-by-2-enum.md) | Query, Optional | How to group the statistics. Must be either "day", "week", or "month". |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ClientsStatsResponse[]`](../../doc/models/v3-clients-stats-response.md)

## Example Usage

```ts
const startDate = 'start_date6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await statsController.gETClientsStats(startDate, onBehalfOf);
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
    "date": "2014-10-01",
    "stats": [
      {
        "metrics": {
          "opens": 1,
          "unique_opens": 1
        },
        "name": "Gmail",
        "type": "client"
      }
    ]
  },
  {
    "date": "2014-10-02",
    "stats": [
      {
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        },
        "name": "Gmail",
        "type": "client"
      }
    ]
  }
]
```


# GET Clients-Client Type-Stats

**This endpoint allows you to retrieve your email statistics segmented by a specific client type.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

## Available Client Types

- phone
- tablet
- webmail
- desktop

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [Statistics Overview](https://sendgrid.com/docs/ui/analytics-and-reporting/stats-overview/).

```ts
async gETClientsClientTypeStats(
  clientType: ClientType1Enum,
  startDate: string,
  onBehalfOf?: string,
  endDate?: string,
  aggregatedBy?: AggregatedBy2Enum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ClientsStatsResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientType` | [`ClientType1Enum`](../../doc/models/client-type-1-enum.md) | Template, Required | Specifies the type of client to retrieve stats for. Must be either "phone", "tablet", "webmail", or "desktop". |
| `startDate` | `string` | Query, Required | The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `endDate` | `string \| undefined` | Query, Optional | The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. |
| `aggregatedBy` | [`AggregatedBy2Enum \| undefined`](../../doc/models/aggregated-by-2-enum.md) | Query, Optional | How to group the statistics. Must be either "day", "week", or "month". |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ClientsStatsResponse[]`](../../doc/models/v3-clients-stats-response.md)

## Example Usage

```ts
const clientType = 'webmail';
const startDate = 'start_date6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await statsController.gETClientsClientTypeStats(clientType, startDate, onBehalfOf);
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
    "date": "2014-10-01",
    "stats": [
      {
        "metrics": {
          "opens": 1,
          "unique_opens": 1
        },
        "name": "Gmail",
        "type": "client"
      }
    ]
  },
  {
    "date": "2014-10-02",
    "stats": [
      {
        "metrics": {
          "opens": 0,
          "unique_opens": 0
        },
        "name": "Gmail",
        "type": "client"
      }
    ]
  }
]
```


# GET Mailbox Providers-Stats

**This endpoint allows you to retrieve your email statistics segmented by recipient mailbox provider.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [Statistics Overview](https://sendgrid.com/docs/ui/analytics-and-reporting/stats-overview/).

```ts
async gETMailboxProvidersStats(
  startDate: string,
  mailboxProviders?: string,
  onBehalfOf?: string,
  limit?: number,
  offset?: number,
  aggregatedBy?: AggregatedBy2Enum,
  endDate?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MailboxProvidersStatsResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string` | Query, Required | The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. |
| `mailboxProviders` | `string \| undefined` | Query, Optional | The mail box providers to get statistics for. You can include up to 10 by including this parameter multiple times. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `limit` | `number \| undefined` | Query, Optional | The number of results to return. |
| `offset` | `number \| undefined` | Query, Optional | The point in the list to begin retrieving results. |
| `aggregatedBy` | [`AggregatedBy2Enum \| undefined`](../../doc/models/aggregated-by-2-enum.md) | Query, Optional | How to group the statistics. Must be either "day", "week", or "month". |
| `endDate` | `string \| undefined` | Query, Optional | The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MailboxProvidersStatsResponse[]`](../../doc/models/v3-mailbox-providers-stats-response.md)

## Example Usage

```ts
const startDate = 'start_date6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await statsController.gETMailboxProvidersStats(startDate, None, onBehalfOf);
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
    "date": "2015-10-11",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-12",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-13",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-14",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-15",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-16",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-17",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-18",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-19",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-20",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-21",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 1,
          "drops": 0,
          "opens": 1,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 1
        }
      }
    ]
  },
  {
    "date": "2015-10-22",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-23",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-24",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-25",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-26",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 2,
          "drops": 0,
          "opens": 2,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 2
        }
      }
    ]
  },
  {
    "date": "2015-10-27",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-28",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-29",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-30",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-31",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-01",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-02",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-03",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-04",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-05",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-06",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-07",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-08",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-09",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-10",
    "stats": [
      {
        "type": "mailbox_provider",
        "name": "Gmail",
        "metrics": {
          "blocks": 0,
          "bounces": 0,
          "clicks": 0,
          "deferred": 0,
          "delivered": 0,
          "drops": 0,
          "opens": 0,
          "processed": 0,
          "requests": 0,
          "spam_reports": 0,
          "unique_clicks": 0,
          "unique_opens": 0
        }
      }
    ]
  }
]
```


# GET Browsers-Stats

**This endpoint allows you to retrieve your email statistics segmented by browser type.**

**We only store up to 7 days of email activity in our database.** By default, 500 items will be returned per request via the Advanced Stats API endpoints.

Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your recipients. You can segment these statistics by geographic location, device type, client type, browser, and mailbox provider. For more information about statistics, please see our [Statistics Overview](https://sendgrid.com/docs/ui/analytics-and-reporting/stats-overview/).

```ts
async gETBrowsersStats(
  startDate: string,
  browsers?: string,
  onBehalfOf?: string,
  limit?: number,
  offset?: number,
  aggregatedBy?: AggregatedBy2Enum,
  endDate?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3BrowsersStatsResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string` | Query, Required | The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. |
| `browsers` | `string \| undefined` | Query, Optional | The browsers to get statistics for. You can include up to 10 different browsers by including this parameter multiple times. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `limit` | `number \| undefined` | Query, Optional | The number of results to return. |
| `offset` | `number \| undefined` | Query, Optional | The point in the list to begin retrieving results. |
| `aggregatedBy` | [`AggregatedBy2Enum \| undefined`](../../doc/models/aggregated-by-2-enum.md) | Query, Optional | How to group the statistics. Must be either "day", "week", or "month". |
| `endDate` | `string \| undefined` | Query, Optional | The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3BrowsersStatsResponse[]`](../../doc/models/v3-browsers-stats-response.md)

## Example Usage

```ts
const startDate = 'start_date6';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await statsController.gETBrowsersStats(startDate, None, onBehalfOf);
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
    "date": "2014-10-01",
    "stats": [
      {
        "metrics": {
          "clicks": 0,
          "unique_clicks": 0
        },
        "name": "Chrome",
        "type": "browser"
      },
      {
        "metrics": {
          "clicks": 1,
          "unique_clicks": 1
        },
        "name": "Firefox",
        "type": "browser"
      }
    ]
  },
  {
    "date": "2014-10-02",
    "stats": [
      {
        "metrics": {
          "clicks": 0,
          "unique_clicks": 0
        },
        "name": "Chrome",
        "type": "browser"
      },
      {
        "metrics": {
          "clicks": 1,
          "unique_clicks": 1
        },
        "name": "Firefox",
        "type": "browser"
      }
    ]
  }
]
```

