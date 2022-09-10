# Settings-Partner

```ts
const settingsPartnerController = new SettingsPartnerController(client);
```

## Class Name

`SettingsPartnerController`

## Methods

* [PATCH Partner Settings-New Relic](../../doc/controllers/settings-partner.md#patch-partner-settings-new-relic)
* [GET Partner Settings-New Relic](../../doc/controllers/settings-partner.md#get-partner-settings-new-relic)
* [GET Partner Settings](../../doc/controllers/settings-partner.md#get-partner-settings)


# PATCH Partner Settings-New Relic

**This endpoint allows you to update or change your New Relic partner settings.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [Partners documentation](https://sendgrid.com/docs/ui/account-and-settings/partners/).

By integrating with New Relic, you can send your SendGrid email statistics to your New Relic Dashboard. If you enable this setting, your stats will be sent to New Relic every 5 minutes. You will need your New Relic License Key to enable this setting. For more information, please see our [SendGrid for New Relic documentation](https://sendgrid.com/docs/ui/analytics-and-reporting/tracking-stats-using-new-relic/).

```ts
async pATCHPartnerSettingsNewRelic(
  onBehalfOf?: string,
  body?: V3PartnerSettingsNewRelicRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PartnerSettingsNewRelic>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3PartnerSettingsNewRelicRequest \| undefined`](../../doc/models/v3-partner-settings-new-relic-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PartnerSettingsNewRelic`](../../doc/models/partner-settings-new-relic.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3PartnerSettingsNewRelicRequest = {};
body.licenseKey = '';
body.enabled = true;
body.enableSubuserStatistics = true;

try {
  const { result, ...httpResponse } = await settingsPartnerController.pATCHPartnerSettingsNewRelic(onBehalfOf, body);
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
  "enable_subuser_statistics": true,
  "enabled": true,
  "license_key": ""
}
```


# GET Partner Settings-New Relic

**This endpoint allows you to retrieve your current New Relic partner settings.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [Partners documentation](https://sendgrid.com/docs/ui/account-and-settings/partners/).

By integrating with New Relic, you can send your SendGrid email statistics to your New Relic Dashboard. If you enable this setting, your stats will be sent to New Relic every 5 minutes. You will need your New Relic License Key to enable this setting. For more information, please see our [SendGrid for New Relic documentation](https://sendgrid.com/docs/ui/analytics-and-reporting/tracking-stats-using-new-relic/).

```ts
async gETPartnerSettingsNewRelic(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PartnerSettingsNewRelic>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PartnerSettingsNewRelic`](../../doc/models/partner-settings-new-relic.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsPartnerController.gETPartnerSettingsNewRelic(onBehalfOf);
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
  "enable_subuser_statistics": false,
  "enabled": true,
  "license_key": ""
}
```


# GET Partner Settings

**This endpoint allows you to retrieve a list of all partner settings that you can enable.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [Partners documentation](https://sendgrid.com/docs/ui/account-and-settings/partners/).

```ts
async gETPartnerSettings(
  limit?: number,
  offset?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3PartnerSettingsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | The number of settings to return per page. |
| `offset` | `number \| undefined` | Query, Optional | The paging offset. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3PartnerSettingsResponse`](../../doc/models/v3-partner-settings-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsPartnerController.gETPartnerSettings(None, None, onBehalfOf);
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
      "title": "Partner title",
      "enabled": true,
      "name": "partner_name",
      "description": "A description of a partner."
    }
  ]
}
```

