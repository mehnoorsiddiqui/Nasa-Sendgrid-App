# IP Access Management

```ts
const iPAccessManagementController = new IPAccessManagementController(client);
```

## Class Name

`IPAccessManagementController`

## Methods

* [POST Access Settings-Whitelist](../../doc/controllers/ip-access-management.md#post-access-settings-whitelist)
* [GET Access Settings-Whitelist](../../doc/controllers/ip-access-management.md#get-access-settings-whitelist)
* [DELETE Access Settings-Whitelist](../../doc/controllers/ip-access-management.md#delete-access-settings-whitelist)
* [GET Access Settings-Activity](../../doc/controllers/ip-access-management.md#get-access-settings-activity)
* [GET Access Settings-Whitelist-Rule Id](../../doc/controllers/ip-access-management.md#get-access-settings-whitelist-rule-id)
* [DELETE Access Settings-Whitelist-Rule Id](../../doc/controllers/ip-access-management.md#delete-access-settings-whitelist-rule-id)


# POST Access Settings-Whitelist

**This endpoint allows you to add one or more allowed IP addresses.**

To allow one or more IP addresses, pass them to this endpoint in an array. Once an IP address is added to your allow list, it will be assigned an `id` that can be used to remove the address. You can retrieve the ID associated with an IP using the "Retrieve a list of currently allowed IPs" endpoint.

```ts
async pOSTAccessSettingsWhitelist(
  onBehalfOf?: string,
  body?: V3AccessSettingsWhitelistRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IPAccessResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3AccessSettingsWhitelistRequest \| undefined`](../../doc/models/v3-access-settings-whitelist-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IPAccessResponse`](../../doc/models/ip-access-response.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyIps: Ip[] = [];

const bodyips0: Ip = {
  ip: '192.168.1.1',
};

bodyIps[0] = bodyips0;

const bodyips1: Ip = {
  ip: '192.*.*.*',
};

bodyIps[1] = bodyips1;

const bodyips2: Ip = {
  ip: '192.168.1.3/32',
};

bodyIps[2] = bodyips2;

const body: V3AccessSettingsWhitelistRequest = {
  ips: bodyIps,
};

try {
  const { result, ...httpResponse } = await iPAccessManagementController.pOSTAccessSettingsWhitelist(onBehalfOf, body);
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
      "id": 1,
      "ip": "192.168.1.1/32",
      "created_at": 1441824715,
      "updated_at": 1441824715
    },
    {
      "id": 2,
      "ip": "192.0.0.0/8",
      "created_at": 1441824715,
      "updated_at": 1441824715
    },
    {
      "id": 3,
      "ip": "192.168.1.3/32",
      "created_at": 1441824715,
      "updated_at": 1441824715
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


# GET Access Settings-Whitelist

**This endpoint allows you to retrieve a list of IP addresses that are currently allowed to access your account.**

Each IP address returned to you will have `created_at` and `updated_at` dates. Each IP will also be associated with an `id` that can be used to remove the address from your allow list.

```ts
async gETAccessSettingsWhitelist(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IPAccessResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IPAccessResponse`](../../doc/models/ip-access-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await iPAccessManagementController.gETAccessSettingsWhitelist(onBehalfOf);
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
      "id": 1,
      "ip": "192.168.1.1/32",
      "created_at": 1441824715,
      "updated_at": 1441824715
    },
    {
      "id": 2,
      "ip": "192.168.1.2/32",
      "created_at": 1441824715,
      "updated_at": 1441824715
    },
    {
      "id": 3,
      "ip": "192.168.1.3/32",
      "created_at": 1441824715,
      "updated_at": 1441824715
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


# DELETE Access Settings-Whitelist

**This endpoint allows you to remove one or more IP addresses from your list of allowed addresses.**

To remove one or more IP addresses, pass this endpoint an array containing the ID(s) associated with the IP(s) you intend to remove. You can retrieve the IDs associated with your allowed IP addresses using the "Retrieve a list of currently allowed IPs" endpoint.

It is possible to remove your own IP address, which will block access to your account. You will need to submit a [support ticket](https://sendgrid.com/docs/ui/account-and-settings/support/) if this happens. For this reason, it is important to double check that you are removing only the IPs you intend to remove when using this endpoint.

```ts
async dELETEAccessSettingsWhitelist(
  contentType: ContentTypeEnum,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentTypeEnum`](../../doc/models/content-type-enum.md) | Header, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const contentType = 'application/json';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await iPAccessManagementController.dELETEAccessSettingsWhitelist(contentType, onBehalfOf);
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
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET Access Settings-Activity

**This endpoint allows you to retrieve a list of all of the IP addresses that recently attempted to access your account either through the User Interface or the API.**

```ts
async gETAccessSettingsActivity(
  limit?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3AccessSettingsActivityResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | Limits the number of IPs to return.<br>**Default**: `20` |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3AccessSettingsActivityResponse`](../../doc/models/v3-access-settings-activity-response.md)

## Example Usage

```ts
const limit = 20;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await iPAccessManagementController.gETAccessSettingsActivity(limit, onBehalfOf);
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
      "allowed": false,
      "auth_method": "Web",
      "first_at": 1444087966,
      "ip": "1.1.1.1",
      "last_at": 1444406672,
      "location": "Australia"
    },
    {
      "allowed": false,
      "auth_method": "Web",
      "first_at": 1444087505,
      "ip": "1.2.3.48",
      "last_at": 1444087505,
      "location": "Mukilteo, Washington"
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


# GET Access Settings-Whitelist-Rule Id

**This endpoint allows you to retreive a specific IP address that has been allowed to access your account.**

You must include the ID for the specific IP address you want to retrieve in your call. You can retrieve the IDs associated with your allowed IP addresses using the "Retrieve a  list of currently allowed IPs" endpoint.

```ts
async gETAccessSettingsWhitelistRuleId(
  ruleId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IPAccessResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ruleId` | `string` | Template, Required | The ID of the allowed IP address that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IPAccessResponse`](../../doc/models/ip-access-response.md)

## Example Usage

```ts
const ruleId = 'rule_id2';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await iPAccessManagementController.gETAccessSettingsWhitelistRuleId(ruleId, onBehalfOf);
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
  "id": 1,
  "ip": "192.168.1.1",
  "created_at": 1441824715,
  "updated_at": 1441824715
}
```


# DELETE Access Settings-Whitelist-Rule Id

**This endpoint allows you to remove a specific IP address from your list of allowed addresses.**

When removing a specific IP address from your list, you must include the ID in your call.  You can retrieve the IDs associated with your allowed IP addresses using the "Retrieve a list of currently allowed IPs" endpoint.

```ts
async dELETEAccessSettingsWhitelistRuleId(
  ruleId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ruleId` | `string` | Template, Required | The ID of the allowed IP address that you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const ruleId = 'rule_id2';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await iPAccessManagementController.dELETEAccessSettingsWhitelistRuleId(ruleId, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

