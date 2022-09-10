# IP Addresses

```ts
const iPAddressesController = new IPAddressesController(client);
```

## Class Name

`IPAddressesController`

## Methods

* [POST Ips](../../doc/controllers/ip-addresses.md#post-ips)
* [GET Ips](../../doc/controllers/ip-addresses.md#get-ips)
* [GET Ips-Remaining](../../doc/controllers/ip-addresses.md#get-ips-remaining)
* [GET Ips-Assigned](../../doc/controllers/ip-addresses.md#get-ips-assigned)
* [GET Ips-Ip Address](../../doc/controllers/ip-addresses.md#get-ips-ip-address)


# POST Ips

**This endpoint is for adding a(n) IP Address(es) to your account.**

```ts
async pOSTIps(
  body?: V3IpsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3IpsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3IpsRequest \| undefined`](../../doc/models/v3-ips-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3IpsResponse`](../../doc/models/v3-ips-response.md)

## Example Usage

```ts
const contentType = null;
const bodySubusers: string[] = ['subuser1', 'subuser2'];
const body: V3IpsRequest = {
  count: 90323478,
};
body.subusers = bodySubusers;
body.warmup = true;

try {
  const { result, ...httpResponse } = await iPAddressesController.pOSTIps(body);
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
  "ips": [
    {
      "ip": "1.2.3.4",
      "subusers": [
        "user",
        "subuser1"
      ]
    },
    {
      "ip": "1.2.3.5",
      "subusers": [
        "user",
        "subuser1"
      ]
    }
  ],
  "remaining_ips": 1,
  "warmup": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Ips

**This endpoint allows you to retrieve a list of all assigned and unassigned IPs.**

Response includes warm up status, pools, assigned subusers, and reverse DNS info. The start_date field corresponds to when warmup started for that IP.

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.

```ts
async gETIps(
  ip?: string,
  excludeWhitelabels?: boolean,
  limit?: number,
  offset?: number,
  subuser?: string,
  sortByDirection?: SortByDirection4Enum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3IpsResponse1[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ip` | `string \| undefined` | Query, Optional | The IP address to get |
| `excludeWhitelabels` | `boolean \| undefined` | Query, Optional | Should we exclude reverse DNS records (whitelabels)? |
| `limit` | `number \| undefined` | Query, Optional | The number of IPs you want returned at the same time.<br>**Default**: `10` |
| `offset` | `number \| undefined` | Query, Optional | The offset for the number of IPs that you are requesting.<br>**Default**: `0` |
| `subuser` | `string \| undefined` | Query, Optional | The subuser you are requesting for. |
| `sortByDirection` | [`SortByDirection4Enum \| undefined`](../../doc/models/sort-by-direction-4-enum.md) | Query, Optional | The direction to sort the results. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3IpsResponse1[]`](../../doc/models/v3-ips-response-1.md)

## Example Usage

```ts
const limit = 10;
const offset = 0;
try {
  const { result, ...httpResponse } = await iPAddressesController.gETIps(None, None, limit, offset);
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
    "ip": "192.168.1.1",
    "pools": [
      "pool1",
      "pool2"
    ],
    "whitelabeled": false,
    "start_date": 1409616000,
    "subusers": [
      "tim@sendgrid.net"
    ],
    "warmup": false,
    "assigned_at": 1482883200
  },
  {
    "ip": "208.115.214.22",
    "pools": [],
    "whitelabeled": true,
    "rdns": "o1.email.burgermail.com",
    "start_date": 1409616000,
    "subusers": [],
    "warmup": false,
    "assigned_at": 1482883200
  }
]
```


# GET Ips-Remaining

**This endpoint gets amount of IP Addresses that can still be created during a given period and the price of those IPs.**

```ts
async gETIpsRemaining(
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3IpsRemainingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3IpsRemainingResponse`](../../doc/models/v3-ips-remaining-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await iPAddressesController.gETIpsRemaining();
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
  "results": [
    {
      "remaining": 2,
      "period": "month",
      "price_per_ip": 20
    }
  ]
}
```


# GET Ips-Assigned

**This endpoint allows you to retrieve only assigned IP addresses.**

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.

```ts
async gETIpsAssigned(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListallassignedIPsresponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListallassignedIPsresponse[]`](../../doc/models/listallassigned-i-psresponse.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await iPAddressesController.gETIpsAssigned();
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
    "ip": "167.89.21.3",
    "pools": [
      "new_test5"
    ],
    "warmup": true,
    "start_date": 1409616000
  }
]
```


# GET Ips-Ip Address

**This endpoint allows you to see which IP pools a particular IP address has been added to.**

The same IP address can be added to multiple IP pools.

A single IP address or a range of IP addresses may be dedicated to an account in order to send email for multiple domains. The reputation of this IP is based on the aggregate performance of all the senders who use it.

```ts
async gETIpsIpAddress(
  ipAddress: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3IpsResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ipAddress` | `string` | Template, Required | The IP address you are retrieving the IP pools for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3IpsResponse2`](../../doc/models/v3-ips-response-2.md)

## Example Usage

```ts
const ipAddress = 'ip_address0';
try {
  const { result, ...httpResponse } = await iPAddressesController.gETIpsIpAddress(ipAddress);
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
  "subusers": [
    "subuser1",
    "subuser2"
  ],
  "rdns": "o1.em.example.com",
  "pools": [
    "test1"
  ],
  "warmup": false,
  "start_date": null,
  "whitelabeled": true
}
```

