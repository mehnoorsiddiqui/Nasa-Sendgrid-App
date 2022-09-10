# IP Warmup

```ts
const iPWarmupController = new IPWarmupController(client);
```

## Class Name

`IPWarmupController`

## Methods

* [POST Ips-Warmup](../../doc/controllers/ip-warmup.md#post-ips-warmup)
* [GET Ips-Warmup](../../doc/controllers/ip-warmup.md#get-ips-warmup)
* [GET Ips-Warmup-Ip Address](../../doc/controllers/ip-warmup.md#get-ips-warmup-ip-address)
* [DELETE Ips-Warmup-Ip Address](../../doc/controllers/ip-warmup.md#delete-ips-warmup-ip-address)


# POST Ips-Warmup

**This endpoint allows you to put an IP address into warmup mode.**

```ts
async pOSTIpsWarmup(
  body?: V3IpsWarmupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IPWarmupIP[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3IpsWarmupRequest \| undefined`](../../doc/models/v3-ips-warmup-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IPWarmupIP[]`](../../doc/models/ip-warmup-ip.md)

## Example Usage

```ts
const contentType = null;
const body: V3IpsWarmupRequest = {};
body.ip = '0.0.0.0';

try {
  const { result, ...httpResponse } = await iPWarmupController.pOSTIpsWarmup(body);
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
    "ip": "0.0.0.0",
    "start_date": 1409616000
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | [`V3IpsWarmup404Error`](../../doc/models/v3-ips-warmup-404-error.md) |


# GET Ips-Warmup

**This endpoint allows you to retrieve all of your IP addresses that are currently warming up.**

```ts
async gETIpsWarmup(
  requestOptions?: RequestOptions
): Promise<ApiResponse<IPWarmupIP[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IPWarmupIP[]`](../../doc/models/ip-warmup-ip.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await iPWarmupController.gETIpsWarmup();
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
    "ip": "0.0.0.0",
    "start_date": 1409616000
  }
]
```


# GET Ips-Warmup-Ip Address

**This endpoint allows you to retrieve the warmup status for a specific IP address.**

You can retrieve all of your warming IPs using the "Retrieve all IPs currently in warmup" endpoint.

```ts
async gETIpsWarmupIpAddress(
  ipAddress: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IPWarmupIP[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ipAddress` | `string` | Template, Required | The IP address that you want to retrieve the warmup status for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IPWarmupIP[]`](../../doc/models/ip-warmup-ip.md)

## Example Usage

```ts
const ipAddress = 'ip_address0';
try {
  const { result, ...httpResponse } = await iPWarmupController.gETIpsWarmupIpAddress(ipAddress);
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
    "ip": "0.0.0.0",
    "start_date": 1409616000
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | [`V3IpsWarmup404Error3Error`](../../doc/models/v3-ips-warmup-404-error-3-error.md) |


# DELETE Ips-Warmup-Ip Address

**This endpoint allows you to remove an IP address from warmup mode.**

Your request will return a 204 status code if the specified IP was successfully removed from warmup mode. To retrieve details of the IP’s warmup status *before* removing it from warmup mode, call the  "Retrieve the warmpup status for a specific IP address" endpoint.

```ts
async dELETEIpsWarmupIpAddress(
  ipAddress: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ipAddress` | `string` | Template, Required | The IP address that you want to retrieve the warmup status for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const ipAddress = 'ip_address0';
try {
  const { result, ...httpResponse } = await iPWarmupController.dELETEIpsWarmupIpAddress(ipAddress);
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
| 404 | - | [`V3IpsWarmup404Error4Error`](../../doc/models/v3-ips-warmup-404-error-4-error.md) |

