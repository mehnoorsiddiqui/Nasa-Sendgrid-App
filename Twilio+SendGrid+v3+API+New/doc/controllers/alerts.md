# Alerts

```ts
const alertsController = new AlertsController(client);
```

## Class Name

`AlertsController`

## Methods

* [POST Alerts](../../doc/controllers/alerts.md#post-alerts)
* [GET Alerts](../../doc/controllers/alerts.md#get-alerts)
* [GET Alerts-Alert Id](../../doc/controllers/alerts.md#get-alerts-alert-id)
* [DELETE Alerts-Alert Id](../../doc/controllers/alerts.md#delete-alerts-alert-id)
* [PATCH Alerts-Alert Id](../../doc/controllers/alerts.md#patch-alerts-alert-id)


# POST Alerts

**This endpoint allows you to create a new alert.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics. There are two types of alerts that can be created with this endpoint:

* `usage_limit` allows you to set the threshold at which an alert will be sent.
* `stats_notification` allows you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [Alerts documentation](https://sendgrid.com/docs/ui/account-and-settings/alerts/).

```ts
async pOSTAlerts(
  authorization?: string,
  onBehalfOf?: string,
  body?: V3AlertsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3AlertsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string \| undefined` | Header, Optional | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | - |
| `body` | [`V3AlertsRequest \| undefined`](../../doc/models/v3-alerts-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3AlertsResponse`](../../doc/models/v3-alerts-response.md)

## Example Usage

```ts
const contentType = null;
const body: V3AlertsRequest = {
  type: 'stats_notification',
  emailTo: 'example@example.com',
};
body.frequency = 'daily';

try {
  const { result, ...httpResponse } = await alertsController.pOSTAlerts(None, None, body);
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
  "created_at": 1451520930,
  "email_to": "test@example.com",
  "frequency": "daily",
  "id": 48,
  "type": "stats_notification",
  "updated_at": 1451520930
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3Alerts400Error1Error`](../../doc/models/v3-alerts-400-error-1-error.md) |


# GET Alerts

**This endpoint allows you to retrieve all of your alerts.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics.

* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [Alerts documentation](https://sendgrid.com/docs/ui/account-and-settings/alerts/).

```ts
async gETAlerts(
  authorization?: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3AlertsResponse1[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string \| undefined` | Header, Optional | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3AlertsResponse1[]`](../../doc/models/v3-alerts-response-1.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await alertsController.gETAlerts(None, onBehalfOf);
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
    "created_at": 1451498784,
    "email_to": "example1@example.com",
    "id": 46,
    "percentage": 90,
    "type": "usage_limit",
    "updated_at": 1451498784
  },
  {
    "created_at": 1451498812,
    "email_to": "example2@example.com",
    "frequency": "monthly",
    "id": 47,
    "type": "stats_notification",
    "updated_at": 1451498812
  },
  {
    "created_at": 1451520930,
    "email_to": "example3@example.com",
    "frequency": "daily",
    "id": 48,
    "type": "stats_notification",
    "updated_at": 1451520930
  }
]
```


# GET Alerts-Alert Id

**This endpoint allows you to retrieve a specific alert.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics.

* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [Alerts documentation](https://sendgrid.com/docs/ui/account-and-settings/alerts/).

```ts
async gETAlertsAlertId(
  alertId: number,
  authorization?: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3AlertsResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `alertId` | `number` | Template, Required | The ID of the alert you would like to retrieve. |
| `authorization` | `string \| undefined` | Header, Optional | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3AlertsResponse2`](../../doc/models/v3-alerts-response-2.md)

## Example Usage

```ts
const alertId = 86;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await alertsController.gETAlertsAlertId(alertId, None, onBehalfOf);
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
  "created_at": 1451520930,
  "email_to": "example@example.com",
  "frequency": "daily",
  "id": 48,
  "type": "stats_notification",
  "updated_at": 1451520930
}
```


# DELETE Alerts-Alert Id

**This endpoint allows you to delete an alert.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics.

* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [Alerts documentation](https://sendgrid.com/docs/ui/account-and-settings/alerts/).

```ts
async dELETEAlertsAlertId(
  alertId: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `alertId` | `number` | Template, Required | The ID of the alert you would like to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const alertId = 86;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await alertsController.dELETEAlertsAlertId(alertId, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# PATCH Alerts-Alert Id

**This endpoint allows you to update an alert.**

Alerts allow you to specify an email address to receive notifications regarding your email usage or statistics.

* Usage alerts allow you to set the threshold at which an alert will be sent.
* Stats notifications allow you to set how frequently you would like to receive email statistics reports. For example, "daily", "weekly", or "monthly".

For more information about alerts, please see our [Alerts documentation](https://sendgrid.com/docs/ui/account-and-settings/alerts/).

```ts
async pATCHAlertsAlertId(
  alertId: number,
  onBehalfOf?: string,
  body?: V3AlertsRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3AlertsResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `alertId` | `number` | Template, Required | The ID of the alert you would like to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3AlertsRequest1 \| undefined`](../../doc/models/v3-alerts-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3AlertsResponse2`](../../doc/models/v3-alerts-response-2.md)

## Example Usage

```ts
const alertId = 86;
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3AlertsRequest1 = {};
body.emailTo = 'example@example.com';

try {
  const { result, ...httpResponse } = await alertsController.pATCHAlertsAlertId(alertId, onBehalfOf, body);
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
  "created_at": 1451520930,
  "email_to": "example@example.com",
  "frequency": "daily",
  "id": 48,
  "type": "stats_notification",
  "updated_at": 1451522691
}
```

