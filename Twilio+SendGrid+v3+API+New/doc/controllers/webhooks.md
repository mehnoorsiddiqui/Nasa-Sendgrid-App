# Webhooks

```ts
const webhooksController = new WebhooksController(client);
```

## Class Name

`WebhooksController`

## Methods

* [GET User-Webhooks-Parse-Settings](../../doc/controllers/webhooks.md#get-user-webhooks-parse-settings)
* [GET User-Webhooks-Event-Settings](../../doc/controllers/webhooks.md#get-user-webhooks-event-settings)
* [PATCH User-Webhooks-Event-Settings](../../doc/controllers/webhooks.md#patch-user-webhooks-event-settings)
* [GET User-Webhooks-Parse-Stats](../../doc/controllers/webhooks.md#get-user-webhooks-parse-stats)
* [GET User-Webhooks-Event-Settings-Signed](../../doc/controllers/webhooks.md#get-user-webhooks-event-settings-signed)
* [PATCH User-Webhooks-Event-Settings-Signed](../../doc/controllers/webhooks.md#patch-user-webhooks-event-settings-signed)
* [POST User-Webhooks-Event-Test](../../doc/controllers/webhooks.md#post-user-webhooks-event-test)


# GET User-Webhooks-Parse-Settings

**This endpoint allows you to retrieve all of your current inbound parse settings.**

```ts
async gETUserWebhooksParseSettings(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3UserWebhooksParseSettingsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3UserWebhooksParseSettingsResponse`](../../doc/models/v3-user-webhooks-parse-settings-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await webhooksController.gETUserWebhooksParseSettings(onBehalfOf);
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
      "url": "http://mydomain.com/parse",
      "hostname": "mail.mydomain.com",
      "spam_check": true,
      "send_raw": true
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET User-Webhooks-Event-Settings

**This endpoint allows you to retrieve your current event webhook settings.**

If an event type is marked as `true`, then the event webhook will include information about that event.

SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.

Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.

```ts
async gETUserWebhooksEventSettings(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhooksEventWebhookResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebhooksEventWebhookResponse`](../../doc/models/webhooks-event-webhook-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await webhooksController.gETUserWebhooksEventSettings(onBehalfOf);
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
  "enabled": false,
  "url": "incididunt reprehenderit",
  "group_resubscribe": false,
  "delivered": false,
  "group_unsubscribe": false,
  "spam_report": false,
  "bounce": false,
  "deferred": false,
  "unsubscribe": true,
  "processed": false,
  "open": true,
  "click": true,
  "dropped": true,
  "oauth_client_id": "est fugiat",
  "oauth_token_url": "Duis in laborum sunt"
}
```


# PATCH User-Webhooks-Event-Settings

**This endpoint allows you to update your current event webhook settings.**

If an event type is marked as `true`, then the event webhook will include information about that event.

SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.

Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.

```ts
async pATCHUserWebhooksEventSettings(
  onBehalfOf?: string,
  body?: WebhooksEventWebhookUpdatewithOAuthRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WebhooksEventWebhookResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`WebhooksEventWebhookUpdatewithOAuthRequest \| undefined`](../../doc/models/webhooks-event-webhook-updatewith-o-auth-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WebhooksEventWebhookResponse`](../../doc/models/webhooks-event-webhook-response.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await webhooksController.pATCHUserWebhooksEventSettings(onBehalfOf);
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
  "enabled": true,
  "url": "mollit laborum",
  "group_resubscribe": false,
  "delivered": true,
  "group_unsubscribe": true,
  "spam_report": true,
  "bounce": true,
  "deferred": true,
  "unsubscribe": true,
  "processed": true,
  "open": true,
  "click": false,
  "dropped": true,
  "oauth_client_id": "anim sunt",
  "oauth_token_url": "ex"
}
```


# GET User-Webhooks-Parse-Stats

**This endpoint allows you to retrieve the statistics for your Parse Webhook useage.**

SendGrid's Inbound Parse Webhook allows you to parse the contents and attachments of incomming emails. The Parse API can then POST the parsed emails to a URL that you specify. The Inbound Parse Webhook cannot parse messages greater than 30MB in size, including all attachments.

There are a number of pre-made integrations for the SendGrid Parse Webhook which make processing events easy. You can find these integrations in the [Library Index](https://sendgrid.com/docs/Integrate/libraries.html#-Webhook-Libraries).

```ts
async gETUserWebhooksParseStats(
  startDate: string,
  limit?: string,
  offset?: string,
  aggregatedBy?: AggregatedBy3Enum,
  endDate?: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3UserWebhooksParseStatsResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string` | Query, Required | The starting date of the statistics you want to retrieve. Must be in the format YYYY-MM-DD |
| `limit` | `string \| undefined` | Query, Optional | The number of statistics to return on each page. |
| `offset` | `string \| undefined` | Query, Optional | The number of statistics to skip. |
| `aggregatedBy` | [`AggregatedBy3Enum \| undefined`](../../doc/models/aggregated-by-3-enum.md) | Query, Optional | How you would like the statistics to by grouped. |
| `endDate` | `string \| undefined` | Query, Optional | The end date of the statistics you want to retrieve. Must be in the format YYYY-MM-DD<br>**Default**: `'The day the request is made.'` |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3UserWebhooksParseStatsResponse[]`](../../doc/models/v3-user-webhooks-parse-stats-response.md)

## Example Usage

```ts
const startDate = 'start_date6';
const endDate = 'The day the request is made.';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await webhooksController.gETUserWebhooksParseStats(startDate, None, None, None, endDate, onBehalfOf);
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
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-12",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-13",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-14",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-15",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-16",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-17",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-18",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-19",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-20",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-21",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-22",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-23",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-24",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-25",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-26",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-27",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-28",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-29",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-30",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-10-31",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-01",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-02",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-03",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-04",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-05",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-06",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-07",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-08",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-09",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  },
  {
    "date": "2015-11-10",
    "stats": [
      {
        "metrics": {
          "received": 0
        }
      }
    ]
  }
]
```


# GET User-Webhooks-Event-Settings-Signed

**This endpoint allows you to retrieve your signed webhook's public key.**

Once you have enabled signing of the Event Webhook, you will need the public key provided to verify the signatures on requests coming from Twilio SendGrid. You can retrieve the public key from this endpoint at any time.

For more information about cryptographically signing the Event Webhook, see [Getting Started with the Event Webhook Security Features](https://sendgrid.com/docs/for-developers/tracking-events/getting-started-event-webhook-security-features).

```ts
async gETUserWebhooksEventSettingsSigned(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3UserWebhooksEventSettingsSignedResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3UserWebhooksEventSettingsSignedResponse`](../../doc/models/v3-user-webhooks-event-settings-signed-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await webhooksController.gETUserWebhooksEventSettingsSigned(onBehalfOf);
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
  "public_key": "anim quis in sint"
}
```


# PATCH User-Webhooks-Event-Settings-Signed

**This endpoint allows you to enable or disable signing of the Event Webhook.**

This endpoint takes a single boolean request parameter, `enabled`. You may either enable or disable signing of the Event Webhook using this endpoint. Once enabled, you can retrieve your public key using the `/webhooks/event/settings/signed` endpoint.

For more information about cryptographically signing the Event Webhook, see [Getting Started with the Event Webhook Security Features](https://sendgrid.com/docs/for-developers/tracking-events/getting-started-event-webhook-security-features).

```ts
async pATCHUserWebhooksEventSettingsSigned(
  onBehalfOf?: string,
  body?: V3UserWebhooksEventSettingsSignedRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3UserWebhooksEventSettingsSignedResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3UserWebhooksEventSettingsSignedRequest \| undefined`](../../doc/models/v3-user-webhooks-event-settings-signed-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3UserWebhooksEventSettingsSignedResponse`](../../doc/models/v3-user-webhooks-event-settings-signed-response.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3UserWebhooksEventSettingsSignedRequest = {
  enabled: true,
};

try {
  const { result, ...httpResponse } = await webhooksController.pATCHUserWebhooksEventSettingsSigned(onBehalfOf, body);
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
  "public_key": "voluptate id Excepteur proident"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3UserWebhooksEventSettingsSigned400Error`](../../doc/models/v3-user-webhooks-event-settings-signed-400-error.md) |
| 401 | - | [`V3UserWebhooksEventSettingsSigned401Error`](../../doc/models/v3-user-webhooks-event-settings-signed-401-error.md) |
| 500 | - | [`V3UserWebhooksEventSettingsSigned500Error`](../../doc/models/v3-user-webhooks-event-settings-signed-500-error.md) |


# POST User-Webhooks-Event-Test

**This endpoint allows you to test your event webhook by sending a fake event notification post to the provided URL.**

SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about events that occur as SendGrid processes your email.

Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged recipients, identify bounced email addresses, or create advanced analytics of your email program.

> **Tip**: Retry logic for this endpoint differs from other endpoints, which use a rolling 24-hour retry.

If your web server does not return a 2xx response type, we will retry a POST request until we receive a 2xx response or the maximum time of 10 minutes has expired.

```ts
async pOSTUserWebhooksEventTest(
  onBehalfOf?: string,
  body?: V3UserWebhooksEventTestRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3UserWebhooksEventTestRequest \| undefined`](../../doc/models/v3-user-webhooks-event-test-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3UserWebhooksEventTestRequest = {};
body.url = 'mollit non ipsum magna';
body.oauthClientId = 'nisi';
body.oauthClientSecret = 'veniam commodo ex sunt';
body.oauthTokenUrl = 'dolor Duis';

try {
  const { result, ...httpResponse } = await webhooksController.pOSTUserWebhooksEventTest(onBehalfOf, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

