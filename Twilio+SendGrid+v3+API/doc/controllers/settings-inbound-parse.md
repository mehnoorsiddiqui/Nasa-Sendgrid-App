# Settings-Inbound Parse

```ts
const settingsInboundParseController = new SettingsInboundParseController(client);
```

## Class Name

`SettingsInboundParseController`

## Methods

* [POST User-Webhooks-Parse-Settings](../../doc/controllers/settings-inbound-parse.md#post-user-webhooks-parse-settings)
* [GET User-Webhooks-Parse-Settings-Hostname](../../doc/controllers/settings-inbound-parse.md#get-user-webhooks-parse-settings-hostname)
* [PATCH User-Webhooks-Parse-Settings-Hostname](../../doc/controllers/settings-inbound-parse.md#patch-user-webhooks-parse-settings-hostname)
* [DELETE User-Webhooks-Parse-Settings-Hostname](../../doc/controllers/settings-inbound-parse.md#delete-user-webhooks-parse-settings-hostname)


# POST User-Webhooks-Parse-Settings

**This endpoint allows you to create a new inbound parse setting.**

Creating an Inbound Parse setting requires two pieces of information: a `url` and a `hostname`.

The `hostname` must correspond to a domain authenticated by Twilio SendGrid on your account. If you need to complete domain authentication, you can use the [Twilio SendGrid App](https://app.sendgrid.com/settings/sender_auth) or the "Authenticate a domain" endpoint. See "[How to Set Up Domain Authentication](https://sendgrid.com/docs/ui/account-and-settings/how-to-set-up-domain-authentication/)" for instructions.

Any email received by the `hostname` will be parsed when you complete this setup. You must also add a Twilio SendGrid MX record to this domain's DNS records. See "[Setting up the Inbound Parse Webhook](https://sendgrid.com/docs/for-developers/parsing-email/setting-up-the-inbound-parse-webhook/)" for full instructions.

The `url` represents a location where the parsed message data will be delivered. Twilio SendGrid will make an HTTP POST request to this `url` with the message data. The `url` must be publicly reachable, and your application must return a `200` status code to signal that the message data has been received.

```ts
async pOSTUserWebhooksParseSettings(
  onBehalfOf?: string,
  body?: ParseSetting,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ParseSetting>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`ParseSetting \| undefined`](../../doc/models/parse-setting.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ParseSetting`](../../doc/models/parse-setting.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: ParseSetting = {};
body.url = 'http://email.myhostname.com';
body.hostname = 'myhostname.com';
body.spamCheck = false;
body.sendRaw = true;

try {
  const { result, ...httpResponse } = await settingsInboundParseController.pOSTUserWebhooksParseSettings(onBehalfOf, body);
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
  "url": "http://email.myhostname.com",
  "hostname": "myhostname.com",
  "spam_check": false,
  "send_raw": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# GET User-Webhooks-Parse-Settings-Hostname

**This endpoint allows you to retrieve a specific inbound parse setting by hostname.**

You can retrieve all your Inbound Parse settings and their associated host names with the "Retrieve all parse settings" endpoint.

```ts
async gETUserWebhooksParseSettingsHostname(
  hostname: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ParseSetting>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hostname` | `string` | Template, Required | The hostname associated with the inbound parse setting that you would like to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ParseSetting`](../../doc/models/parse-setting.md)

## Example Usage

```ts
const hostname = 'hostname4';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsInboundParseController.gETUserWebhooksParseSettingsHostname(hostname, onBehalfOf);
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
  "url": "http://mydomain.com/parse",
  "hostname": "mail.mydomain.com",
  "spam_check": true,
  "send_raw": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# PATCH User-Webhooks-Parse-Settings-Hostname

**This endpoint allows you to update a specific inbound parse setting by hostname.**

You can retrieve all your Inbound Parse settings and their associated host names with the "Retrieve all parse settings" endpoint.

```ts
async pATCHUserWebhooksParseSettingsHostname(
  hostname: string,
  onBehalfOf?: string,
  body?: ParseSetting,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ParseSetting>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hostname` | `string` | Template, Required | The hostname associated with the inbound parse setting that you would like to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`ParseSetting \| undefined`](../../doc/models/parse-setting.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ParseSetting`](../../doc/models/parse-setting.md)

## Example Usage

```ts
const hostname = 'hostname4';
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: ParseSetting = {};
body.url = 'http://email.myhostname.com';
body.hostname = 'myhostname.com';
body.spamCheck = false;
body.sendRaw = true;

try {
  const { result, ...httpResponse } = await settingsInboundParseController.pATCHUserWebhooksParseSettingsHostname(hostname, onBehalfOf, body);
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
  "url": "http://mydomain.com/parse",
  "hostname": "mail.mydomain.com",
  "spam_check": true,
  "send_raw": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | - | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |


# DELETE User-Webhooks-Parse-Settings-Hostname

**This endpoint allows you to delete a specific inbound parse setting by hostname.**

You can retrieve all your Inbound Parse settings and their associated host names with the "Retrieve all parse settings" endpoint.

```ts
async dELETEUserWebhooksParseSettingsHostname(
  hostname: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hostname` | `string` | Template, Required | The hostname associated with the inbound parse setting that you would like to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const hostname = 'hostname4';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsInboundParseController.dELETEUserWebhooksParseSettingsHostname(hostname, onBehalfOf);
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

