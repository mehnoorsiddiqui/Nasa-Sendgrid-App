# IP Pools

```ts
const iPPoolsController = new IPPoolsController(client);
```

## Class Name

`IPPoolsController`

## Methods

* [POST Ips-Pools](../../doc/controllers/ip-pools.md#post-ips-pools)
* [GET Ips-Pools](../../doc/controllers/ip-pools.md#get-ips-pools)
* [POST Ips-Pools-Pool Name-Ips](../../doc/controllers/ip-pools.md#post-ips-pools-pool-name-ips)
* [GET Ips-Pools-Pool Name](../../doc/controllers/ip-pools.md#get-ips-pools-pool-name)
* [PUT Ips-Pools-Pool Name](../../doc/controllers/ip-pools.md#put-ips-pools-pool-name)
* [DELETE Ips-Pools-Pool Name](../../doc/controllers/ip-pools.md#delete-ips-pools-pool-name)
* [DELETE Ips-Pools-Pool Name-Ips-Ip](../../doc/controllers/ip-pools.md#delete-ips-pools-pool-name-ips-ip)


# POST Ips-Pools

**This endpoint allows you to create an IP pool.**

Before you can create an IP pool, you need to activate the IP in your SendGrid account:

1. Log into your SendGrid account.
2. Navigate to **Settings** and then select **IP Addresses**.
3. Find the IP address you want to activate and then click **Edit**.
4. Check **Allow my account to send mail using this IP address**.
5. Click **Save**.

```ts
async pOSTIpsPools(
  body?: V3IpsPoolsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IPPoolsPoolResp>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3IpsPoolsRequest \| undefined`](../../doc/models/v3-ips-pools-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IPPoolsPoolResp`](../../doc/models/ip-pools-pool-resp.md)

## Example Usage

```ts
const contentType = null;
const body: V3IpsPoolsRequest = {
  name: 'marketing',
};

try {
  const { result, ...httpResponse } = await iPPoolsController.pOSTIpsPools(body);
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
  "name": "marketing"
}
```


# GET Ips-Pools

**This endpoint allows you to get all of your IP pools.**

```ts
async gETIpsPools(
  requestOptions?: RequestOptions
): Promise<ApiResponse<IPPoolsPoolResp[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IPPoolsPoolResp[]`](../../doc/models/ip-pools-pool-resp.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await iPPoolsController.gETIpsPools();
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
    "name": "marketing"
  },
  {
    "name": "transactional"
  }
]
```


# POST Ips-Pools-Pool Name-Ips

**This endpoint allows you to add an IP address to an IP pool.**

You can add the same IP address to multiple pools. It may take up to 60 seconds for your IP address to be added to a pool after your request is made.

Before you can add an IP to a pool, you need to activate it in your SendGrid account:

1. Log into your SendGrid account.
2. Navigate to **Settings** and then select **IP Addresses**.
3. Find the IP address you want to activate and then click **Edit**.
4. Check **Allow my account to send mail using this IP address**.
5. Click **Save**.

You can retrieve all of your available IP addresses from the "Retrieve all IP addresses" endpoint.

```ts
async pOSTIpsPoolsPoolNameIps(
  poolName: string,
  body?: V3IpsPoolsIpsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3IpsPoolsIpsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `poolName` | `string` | Template, Required | The name of the IP pool you want to add the address to. If the name contains spaces, they must be URL encoded (e.g., "Test Pool" becomes "Test%20Pool"). |
| `body` | [`V3IpsPoolsIpsRequest \| undefined`](../../doc/models/v3-ips-pools-ips-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3IpsPoolsIpsResponse`](../../doc/models/v3-ips-pools-ips-response.md)

## Example Usage

```ts
const poolName = 'pool_name2';
const contentType = null;
const body: V3IpsPoolsIpsRequest = {};
body.ip = '0.0.0.0';

try {
  const { result, ...httpResponse } = await iPPoolsController.pOSTIpsPoolsPoolNameIps(poolName, body);
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
  "ip": "000.00.00.0",
  "pools": [
    "test1"
  ],
  "start_date": 1409616000,
  "warmup": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | [`V3IpsPoolsIps404Error`](../../doc/models/v3-ips-pools-ips-404-error.md) |


# GET Ips-Pools-Pool Name

**This endpoint allows you to get all of the IP addresses that are in a specific IP pool.**

```ts
async gETIpsPoolsPoolName(
  poolName: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3IpsPoolsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `poolName` | `string` | Template, Required | The name of the IP pool that you want to retrieve the IP addresses for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3IpsPoolsResponse`](../../doc/models/v3-ips-pools-response.md)

## Example Usage

```ts
const poolName = 'pool_name2';
try {
  const { result, ...httpResponse } = await iPPoolsController.gETIpsPoolsPoolName(poolName);
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
  "pool_name": "Sample",
  "ips": [
    "192.168.1.1",
    "192.158.1.2",
    "192.138.2.1"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | [`V3IpsPools404Error`](../../doc/models/v3-ips-pools-404-error.md) |


# PUT Ips-Pools-Pool Name

**This endpoint allows you to update the name of an IP pool.**

```ts
async pUTIpsPoolsPoolName(
  poolName: string,
  body?: V3IpsPoolsRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IPPoolsPoolResp>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `poolName` | `string` | Template, Required | The name of the IP pool that you want to retrieve the IP addresses for. |
| `body` | [`V3IpsPoolsRequest1 \| undefined`](../../doc/models/v3-ips-pools-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IPPoolsPoolResp`](../../doc/models/ip-pools-pool-resp.md)

## Example Usage

```ts
const poolName = 'pool_name2';
const contentType = null;
const body: V3IpsPoolsRequest1 = {};
body.name = 'new_pool_name';

try {
  const { result, ...httpResponse } = await iPPoolsController.pUTIpsPoolsPoolName(poolName, body);
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
  "name": "new_pool_name"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | [`V3IpsPools404Error3Error`](../../doc/models/v3-ips-pools-404-error-3-error.md) |


# DELETE Ips-Pools-Pool Name

**This endpoint allows you to delete an IP pool.**

```ts
async dELETEIpsPoolsPoolName(
  poolName: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `poolName` | `string` | Template, Required | The name of the IP pool that you want to retrieve the IP addresses for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const poolName = 'pool_name2';
try {
  const { result, ...httpResponse } = await iPPoolsController.dELETEIpsPoolsPoolName(poolName);
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
| 404 | - | [`V3IpsPools404Error4Error`](../../doc/models/v3-ips-pools-404-error-4-error.md) |


# DELETE Ips-Pools-Pool Name-Ips-Ip

**This endpoint allows you to remove an IP address from an IP pool.**

```ts
async dELETEIpsPoolsPoolNameIpsIp(
  poolName: string,
  ip: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `poolName` | `string` | Template, Required | The name of the IP pool that you are removing the IP address from. |
| `ip` | `string` | Template, Required | The IP address that you wish to remove. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const poolName = 'pool_name2';
const ip = 'ip4';
try {
  const { result, ...httpResponse } = await iPPoolsController.dELETEIpsPoolsPoolNameIpsIp(poolName, ip);
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
| 404 | - | [`V3IpsPoolsIps404Error3Error`](../../doc/models/v3-ips-pools-ips-404-error-3-error.md) |

