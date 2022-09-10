# Subuser Monitor Settings

```ts
const subuserMonitorSettingsController = new SubuserMonitorSettingsController(client);
```

## Class Name

`SubuserMonitorSettingsController`

## Methods

* [GET Subusers-Subuser Name-Monitor](../../doc/controllers/subuser-monitor-settings.md#get-subusers-subuser-name-monitor)
* [POST Subusers-Subuser Name-Monitor](../../doc/controllers/subuser-monitor-settings.md#post-subusers-subuser-name-monitor)
* [PUT Subusers-Subuser Name-Monitor](../../doc/controllers/subuser-monitor-settings.md#put-subusers-subuser-name-monitor)
* [DELETE Subusers-Subuser Name-Monitor](../../doc/controllers/subuser-monitor-settings.md#delete-subusers-subuser-name-monitor)


# GET Subusers-Subuser Name-Monitor

Retrieve monitor settings for a subuser

```ts
async gETSubusersSubuserNameMonitor(
  subuserName: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Createmonitorsettingsrequest>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subuserName` | `string` | Template, Required | The name of the subuser for which to retrieve monitor settings. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Createmonitorsettingsrequest`](../../doc/models/createmonitorsettingsrequest.md)

## Example Usage

```ts
const subuserName = 'subuser_name0';
try {
  const { result, ...httpResponse } = await subuserMonitorSettingsController.gETSubusersSubuserNameMonitor(subuserName);
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
  "email": "example@example.com",
  "frequency": 500
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# POST Subusers-Subuser Name-Monitor

Create monitor settings

```ts
async pOSTSubusersSubuserNameMonitor(
  subuserName: string,
  body?: Createmonitorsettingsrequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Createmonitorsettingsrequest>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subuserName` | `string` | Template, Required | The name of the subuser for which to retrieve monitor settings. |
| `body` | [`Createmonitorsettingsrequest \| undefined`](../../doc/models/createmonitorsettingsrequest.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Createmonitorsettingsrequest`](../../doc/models/createmonitorsettingsrequest.md)

## Example Usage

```ts
const subuserName = 'subuser_name0';
const contentType = null;
const body: Createmonitorsettingsrequest = {
  email: 'example@example.com',
  frequency: 74.28,
};

try {
  const { result, ...httpResponse } = await subuserMonitorSettingsController.pOSTSubusersSubuserNameMonitor(subuserName, body);
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
  "email": "example@example.com",
  "frequency": 50000
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# PUT Subusers-Subuser Name-Monitor

Update Monitor Settings for a subuser

```ts
async pUTSubusersSubuserNameMonitor(
  subuserName: string,
  body?: Createmonitorsettingsrequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Createmonitorsettingsrequest>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subuserName` | `string` | Template, Required | The name of the subuser for which to retrieve monitor settings. |
| `body` | [`Createmonitorsettingsrequest \| undefined`](../../doc/models/createmonitorsettingsrequest.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Createmonitorsettingsrequest`](../../doc/models/createmonitorsettingsrequest.md)

## Example Usage

```ts
const subuserName = 'subuser_name0';
const contentType = null;
const body: Createmonitorsettingsrequest = {
  email: 'example@example.com',
  frequency: 74.28,
};

try {
  const { result, ...httpResponse } = await subuserMonitorSettingsController.pUTSubusersSubuserNameMonitor(subuserName, body);
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
  "email": "example@example.com",
  "frequency": 500
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# DELETE Subusers-Subuser Name-Monitor

Delete monitor settings

```ts
async dELETESubusersSubuserNameMonitor(
  subuserName: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subuserName` | `string` | Template, Required | The name of the subuser for which to retrieve monitor settings. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const subuserName = 'subuser_name0';
try {
  const { result, ...httpResponse } = await subuserMonitorSettingsController.dELETESubusersSubuserNameMonitor(subuserName);
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
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |

