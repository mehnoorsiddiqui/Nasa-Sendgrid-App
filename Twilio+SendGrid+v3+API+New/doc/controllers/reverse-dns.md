# Reverse DNS

```ts
const reverseDNSController = new ReverseDNSController(client);
```

## Class Name

`ReverseDNSController`

## Methods

* [POST Whitelabel-Ips](../../doc/controllers/reverse-dns.md#post-whitelabel-ips)
* [GET Whitelabel-Ips](../../doc/controllers/reverse-dns.md#get-whitelabel-ips)
* [POST Whitelabel-Ips-Id-Validate](../../doc/controllers/reverse-dns.md#post-whitelabel-ips-id-validate)
* [GET Whitelabel-Ips-Id](../../doc/controllers/reverse-dns.md#get-whitelabel-ips-id)
* [DELETE Whitelabel-Ips-Id](../../doc/controllers/reverse-dns.md#delete-whitelabel-ips-id)


# POST Whitelabel-Ips

**This endpoint allows you to set up reverse DNS.**

```ts
async pOSTWhitelabelIps(
  onBehalfOf?: string,
  body?: V3WhitelabelIpsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReverseDNS>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3WhitelabelIpsRequest \| undefined`](../../doc/models/v3-whitelabel-ips-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReverseDNS`](../../doc/models/reverse-dns.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3WhitelabelIpsRequest = {
  ip: '192.168.1.1',
  domain: 'example.com',
};
body.subdomain = 'email';

try {
  const { result, ...httpResponse } = await reverseDNSController.pOSTWhitelabelIps(onBehalfOf, body);
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
  "id": 123,
  "ip": "192.168.1.2",
  "rdns": "o1.email.example.com",
  "users": [],
  "subdomain": "email",
  "domain": "example.com",
  "valid": true,
  "legacy": false,
  "a_record": {
    "valid": true,
    "type": "a",
    "host": "o1.email.example.com",
    "data": "192.168.1.2"
  }
}
```


# GET Whitelabel-Ips

**This endpoint allows you to retrieve all of the Reverse DNS records created by this account.**

You may include a search key by using the `ip` query string parameter. This enables you to perform a prefix search for a given IP segment (e.g., `?ip="192."`).

Use the `limit` query string parameter to reduce the number of records returned. All records will be returned if you have fewer records than the specified limit.

The `offset` query string parameter allows you to specify a non-zero index from which records will be returned. For example, if you have ten records, `?offset=5` will return the last five records (at indexes 5 through 9). The list starts at index zero.

```ts
async gETWhitelabelIps(
  limit?: number,
  offset?: number,
  ip?: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReverseDNS[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | The maximum number of results to retrieve. |
| `offset` | `number \| undefined` | Query, Optional | The point in the list of results to begin retrieving IP addresses from. |
| `ip` | `string \| undefined` | Query, Optional | The IP address segment that you'd like to use in a prefix search. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReverseDNS[]`](../../doc/models/reverse-dns.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await reverseDNSController.gETWhitelabelIps(None, None, None, onBehalfOf);
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
    "id": 1,
    "ip": "192.168.1.1",
    "rdns": "o1.email.example.com",
    "users": [
      {
        "username": "john@example.com",
        "user_id": 7
      },
      {
        "username": "jane@example.com",
        "user_id": 8
      }
    ],
    "subdomain": "email",
    "domain": "example.com",
    "valid": true,
    "legacy": false,
    "a_record": {
      "valid": true,
      "type": "a",
      "host": "o1.email.example.com",
      "data": "192.168.1.1"
    }
  },
  {
    "id": 2,
    "ip": "192.168.1.2",
    "rdns": "o2.email.example.com",
    "users": [
      {
        "username": "john@example.com",
        "user_id": 7
      },
      {
        "username": "jane@example2.com",
        "user_id": 9
      }
    ],
    "subdomain": "email",
    "domain": "example.com",
    "valid": true,
    "legacy": false,
    "a_record": {
      "valid": true,
      "type": "a",
      "host": "o2.email.example.com",
      "data": "192.168.1.2"
    }
  }
]
```


# POST Whitelabel-Ips-Id-Validate

**This endpoint allows you to validate a reverse DNS record.**

Always check the `valid` property of the response’s `validation_results.a_record` object. This field will indicate whether it was possible to validate the reverse DNS record. If the `validation_results.a_record.valid` is `false`, this indicates only that Twilio SendGrid could not determine the validity your reverse DNS record — it may still be valid.

If validity couldn’t be determined, you can check the value of `validation_results.a_record.reason` to find out why.

You can retrieve the IDs associated with all your reverse DNS records using the "Retrieve all reverse DNS records" endpoint.

```ts
async pOSTWhitelabelIpsIdValidate(
  id: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3WhitelabelIpsValidateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the reverse DNS record that you would like to validate. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3WhitelabelIpsValidateResponse`](../../doc/models/v3-whitelabel-ips-validate-response.md)

## Example Usage

```ts
const id = 'id0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await reverseDNSController.pOSTWhitelabelIpsIdValidate(id, onBehalfOf);
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
  "id": 123456,
  "valid": false,
  "validation_results": {
    "a_record": {
      "valid": false,
      "reason": "Failed to resolve A Record at o1.ptr4283.example.com: lookup o1.ptr4283.example.com on 192.168.0.10:53: no such host"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Unexpected error in API call. See HTTP response body for details. | [`V3WhitelabelIpsValidate404Error`](../../doc/models/v3-whitelabel-ips-validate-404-error.md) |
| 500 | - | [`V3WhitelabelIpsValidate500Error`](../../doc/models/v3-whitelabel-ips-validate-500-error.md) |


# GET Whitelabel-Ips-Id

**This endpoint allows you to retrieve a reverse DNS record.**

You can retrieve the IDs associated with all your reverse DNS records using the "Retrieve all reverse DNS records" endpoint.

```ts
async gETWhitelabelIpsId(
  id: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReverseDNS>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the reverse DNS record that you would like to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReverseDNS`](../../doc/models/reverse-dns.md)

## Example Usage

```ts
const id = 'id0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await reverseDNSController.gETWhitelabelIpsId(id, onBehalfOf);
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
  "id": 123,
  "ip": "192.168.1.1",
  "rdns": "o1.email.example.com",
  "users": [
    {
      "username": "john@example.com",
      "user_id": 7
    }
  ],
  "subdomain": "email",
  "domain": "example.com",
  "valid": true,
  "legacy": false,
  "a_record": {
    "valid": true,
    "type": "a",
    "host": "o1.email.example.com",
    "data": "192.168.1.1"
  }
}
```


# DELETE Whitelabel-Ips-Id

**This endpoint allows you to delete a reverse DNS record.**

A call to this endpoint will respond with a 204 status code if the deletion was successful.

You can retrieve the IDs associated with all your reverse DNS records using the "Retrieve all reverse DNS records" endpoint.

```ts
async dELETEWhitelabelIpsId(
  id: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The ID of the reverse DNS record that you would like to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const id = 'id0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await reverseDNSController.dELETEWhitelabelIpsId(id, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

