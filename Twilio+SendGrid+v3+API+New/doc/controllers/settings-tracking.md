# Settings-Tracking

```ts
const settingsTrackingController = new SettingsTrackingController(client);
```

## Class Name

`SettingsTrackingController`

## Methods

* [GET Tracking Settings](../../doc/controllers/settings-tracking.md#get-tracking-settings)
* [GET Tracking Settings-Click](../../doc/controllers/settings-tracking.md#get-tracking-settings-click)
* [PATCH Tracking Settings-Click](../../doc/controllers/settings-tracking.md#patch-tracking-settings-click)
* [GET Tracking Settings-Google Analytics](../../doc/controllers/settings-tracking.md#get-tracking-settings-google-analytics)
* [PATCH Tracking Settings-Google Analytics](../../doc/controllers/settings-tracking.md#patch-tracking-settings-google-analytics)
* [GET Tracking Settings-Open](../../doc/controllers/settings-tracking.md#get-tracking-settings-open)
* [PATCH Tracking Settings-Open](../../doc/controllers/settings-tracking.md#patch-tracking-settings-open)
* [GET Tracking Settings-Subscription](../../doc/controllers/settings-tracking.md#get-tracking-settings-subscription)
* [PATCH Tracking Settings-Subscription](../../doc/controllers/settings-tracking.md#patch-tracking-settings-subscription)


# GET Tracking Settings

**This endpoint allows you to retrieve a list of all tracking settings on your account.**

```ts
async gETTrackingSettings(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3TrackingSettingsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3TrackingSettingsResponse`](../../doc/models/v3-tracking-settings-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsTrackingController.gETTrackingSettings(onBehalfOf);
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
      "name": "open",
      "title": "Open Tracking",
      "description": "lorem ipsum... .",
      "enabled": true
    }
  ]
}
```


# GET Tracking Settings-Click

**This endpoint allows you to retrieve your current click tracking setting.**

Click Tracking overrides all the links and URLs in your emails and points them to either SendGrid’s servers or the domain with which you branded your link. When a customer clicks a link, SendGrid tracks those [clicks](https://sendgrid.com/docs/glossary/clicks/).

Click tracking helps you understand how users are engaging with your communications. SendGrid can track up to 1000 links per email

```ts
async gETTrackingSettingsClick(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SettingsClickTracking>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SettingsClickTracking`](../../doc/models/settings-click-tracking.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsTrackingController.gETTrackingSettingsClick(onBehalfOf);
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
  "enable_text": false,
  "enabled": true
}
```


# PATCH Tracking Settings-Click

**This endpoint allows you to enable or disable your current click tracking setting.**

Click Tracking overrides all the links and URLs in your emails and points them to either SendGrid’s servers or the domain with which you branded your link. When a customer clicks a link, SendGrid tracks those [clicks](https://sendgrid.com/docs/glossary/clicks/).

Click tracking helps you understand how users are engaging with your communications. SendGrid can track up to 1000 links per email

```ts
async pATCHTrackingSettingsClick(
  onBehalfOf?: string,
  body?: V3TrackingSettingsClickRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SettingsClickTracking>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3TrackingSettingsClickRequest \| undefined`](../../doc/models/v3-tracking-settings-click-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SettingsClickTracking`](../../doc/models/settings-click-tracking.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3TrackingSettingsClickRequest = {};
body.enabled = true;

try {
  const { result, ...httpResponse } = await settingsTrackingController.pATCHTrackingSettingsClick(onBehalfOf, body);
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
  "enable_text": false,
  "enabled": true
}
```


# GET Tracking Settings-Google Analytics

**This endpoint allows you to retrieve your current setting for Google Analytics.**

Google Analytics helps you understand how users got to your site and what they're doing there. For more information about using Google Analytics, please refer to [Google’s URL Builder](https://support.google.com/analytics/answer/1033867?hl=en) and their article on ["Best Practices for Campaign Building"](https://support.google.com/analytics/answer/1037445).

We default the settings to Google’s recommendations. For more information, see [Google Analytics Demystified](https://sendgrid.com/docs/ui/analytics-and-reporting/google-analytics/).

```ts
async gETTrackingSettingsGoogleAnalytics(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SettingsGoogleAnalytics>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SettingsGoogleAnalytics`](../../doc/models/settings-google-analytics.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsTrackingController.gETTrackingSettingsGoogleAnalytics(onBehalfOf);
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
  "utm_campaign": "",
  "utm_content": "lotsandlotsofcontent",
  "utm_medium": "",
  "utm_source": "",
  "utm_term": ""
}
```


# PATCH Tracking Settings-Google Analytics

**This endpoint allows you to update your current setting for Google Analytics.**

Google Analytics helps you understand how users got to your site and what they're doing there. For more information about using Google Analytics, please refer to [Google’s URL Builder](https://support.google.com/analytics/answer/1033867?hl=en) and their article on ["Best Practices for Campaign Building"](https://support.google.com/analytics/answer/1037445).

We default the settings to Google’s recommendations. For more information, see [Google Analytics Demystified](https://sendgrid.com/docs/ui/analytics-and-reporting/google-analytics/).

```ts
async pATCHTrackingSettingsGoogleAnalytics(
  onBehalfOf?: string,
  body?: SettingsGoogleAnalytics,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SettingsGoogleAnalytics>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`SettingsGoogleAnalytics \| undefined`](../../doc/models/settings-google-analytics.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SettingsGoogleAnalytics`](../../doc/models/settings-google-analytics.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: SettingsGoogleAnalytics = {};
body.enabled = true;
body.utmCampaign = 'website';
body.utmContent = '';
body.utmMedium = 'email';
body.utmSource = 'sendgrid.com';
body.utmTerm = '';

try {
  const { result, ...httpResponse } = await settingsTrackingController.pATCHTrackingSettingsGoogleAnalytics(onBehalfOf, body);
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
  "utm_campaign": "",
  "utm_content": "lotsandlotsofcontent",
  "utm_medium": "",
  "utm_source": "",
  "utm_term": ""
}
```


# GET Tracking Settings-Open

**This endpoint allows you to retrieve your current settings for open tracking.**

Open Tracking adds an invisible image at the end of the email which can track email opens.

If the email recipient has images enabled on their email client, a request to SendGrid’s server for the invisible image is executed and an open event is logged.

These events are logged in the Statistics portal, Email Activity interface, and are reported by the Event Webhook.

```ts
async gETTrackingSettingsOpen(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3TrackingSettingsOpenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3TrackingSettingsOpenResponse`](../../doc/models/v3-tracking-settings-open-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsTrackingController.gETTrackingSettingsOpen(onBehalfOf);
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
  "enabled": true
}
```


# PATCH Tracking Settings-Open

**This endpoint allows you to update your current settings for open tracking.**

Open Tracking adds an invisible image at the end of the email which can track email opens.

If the email recipient has images enabled on their email client, a request to SendGrid’s server for the invisible image is executed and an open event is logged.

These events are logged in the Statistics portal, Email Activity interface, and are reported by the Event Webhook.

```ts
async pATCHTrackingSettingsOpen(
  onBehalfOf?: string,
  body?: V3TrackingSettingsOpenRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3TrackingSettingsOpenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3TrackingSettingsOpenRequest \| undefined`](../../doc/models/v3-tracking-settings-open-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3TrackingSettingsOpenResponse`](../../doc/models/v3-tracking-settings-open-response.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3TrackingSettingsOpenRequest = {};
body.enabled = true;

try {
  const { result, ...httpResponse } = await settingsTrackingController.pATCHTrackingSettingsOpen(onBehalfOf, body);
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
  "enabled": true
}
```


# GET Tracking Settings-Subscription

**This endpoint allows you to retrieve your current settings for subscription tracking.**

Subscription tracking adds links to the bottom of your emails that allows your recipients to subscribe to, or unsubscribe from, your emails.

```ts
async gETTrackingSettingsSubscription(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SettingsSubscriptionTracking>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SettingsSubscriptionTracking`](../../doc/models/settings-subscription-tracking.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsTrackingController.gETTrackingSettingsSubscription(onBehalfOf);
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
  "html_content": "<p>Something something unsubscribe <% %> something something</p>\n",
  "landing": "<p>subscribehere</p>\n",
  "plain_content": "Something something unsubscribe <% %> something something",
  "replace": "thetag",
  "url": "http://mydomain.com/parse"
}
```


# PATCH Tracking Settings-Subscription

**This endpoint allows you to update your current settings for subscription tracking.**

Subscription tracking adds links to the bottom of your emails that allows your recipients to subscribe to, or unsubscribe from, your emails.

```ts
async pATCHTrackingSettingsSubscription(
  onBehalfOf?: string,
  body?: SettingsSubscriptionTracking,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SettingsSubscriptionTracking>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`SettingsSubscriptionTracking \| undefined`](../../doc/models/settings-subscription-tracking.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SettingsSubscriptionTracking`](../../doc/models/settings-subscription-tracking.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsTrackingController.pATCHTrackingSettingsSubscription(onBehalfOf);
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
  "landing": "landing page html",
  "url": "http://mydomain.com/parse",
  "replace": "replacement tag",
  "html_content": "html content",
  "plain_content": "text content"
}
```

