# Campaigns API

```ts
const campaignsAPIController = new CampaignsAPIController(client);
```

## Class Name

`CampaignsAPIController`

## Methods

* [POST Campaigns](../../doc/controllers/campaigns-api.md#post-campaigns)
* [GET Campaigns](../../doc/controllers/campaigns-api.md#get-campaigns)
* [GET Campaigns-Campaign Id](../../doc/controllers/campaigns-api.md#get-campaigns-campaign-id)
* [DELETE Campaigns-Campaign Id](../../doc/controllers/campaigns-api.md#delete-campaigns-campaign-id)
* [PATCH Campaigns-Campaign Id](../../doc/controllers/campaigns-api.md#patch-campaigns-campaign-id)
* [POST Campaigns-Campaign Id-Schedules-Now](../../doc/controllers/campaigns-api.md#post-campaigns-campaign-id-schedules-now)
* [POST Campaigns-Campaign Id-Schedules](../../doc/controllers/campaigns-api.md#post-campaigns-campaign-id-schedules)
* [PATCH Campaigns-Campaign Id-Schedules](../../doc/controllers/campaigns-api.md#patch-campaigns-campaign-id-schedules)
* [GET Campaigns-Campaign Id-Schedules](../../doc/controllers/campaigns-api.md#get-campaigns-campaign-id-schedules)
* [DELETE Campaigns-Campaign Id-Schedules](../../doc/controllers/campaigns-api.md#delete-campaigns-campaign-id-schedules)
* [POST Campaigns-Campaign Id-Schedules-Test](../../doc/controllers/campaigns-api.md#post-campaigns-campaign-id-schedules-test)


# POST Campaigns

**This endpoint allows you to create a campaign.**

In order to send or schedule the campaign, you will be required to provide a subject, sender ID, content (we suggest both html and plain text), and at least one list or segment ID. This information is not required when you create a campaign.

```ts
async pOSTCampaigns(
  onBehalfOf?: string,
  body?: CampaignsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CampaignsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`CampaignsRequest \| undefined`](../../doc/models/campaigns-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CampaignsResponse`](../../doc/models/campaigns-response.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyListIds: number[] = [110, 124];
const bodySegmentIds: number[] = [110];
const bodyCategories: string[] = ['summer line'];
const body: CampaignsRequest = {
  title: 'May Newsletter',
};
body.subject = 'New Products for Summer!';
body.senderId = 124451;
body.listIds = bodyListIds;
body.segmentIds = bodySegmentIds;
body.categories = bodyCategories;
body.suppressionGroupId = 42;
body.customUnsubscribeUrl = '';
body.ipPool = 'marketing';
body.htmlContent = '<html><head><title></title></head><body><p>Check out our summer line!</p></body></html>';
body.plainContent = 'Check out our summer line!';

try {
  const { result, ...httpResponse } = await campaignsAPIController.pOSTCampaigns(onBehalfOf, body);
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
  "id": 986724,
  "title": "March Newsletter",
  "subject": "New Products for Spring!",
  "sender_id": 124451,
  "list_ids": [
    110,
    124
  ],
  "segment_ids": [
    110
  ],
  "categories": [
    "spring line"
  ],
  "suppression_group_id": 42,
  "custom_unsubscribe_url": "",
  "ip_pool": "marketing",
  "html_content": "<html><head><title></title></head><body><p>Check out our spring line!</p></body></html>",
  "plain_content": "Check out our spring line!",
  "status": "Draft"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | "title": "title can't be blank"<br>"title": "title is too long (maximum is 100 characters)"<br>"categories": "categories exceeds 10 category limit"<br>"html_content": "html_content exceeds the 1MB limit"<br>"plain_content": "plain_content exceeds the 1MB limit"<br>"sender_id": "sender_id does not exist"<br>"sender_id": "sender_id is not a verified sender identity"<br>"list_ids": "list_ids do not all exist"<br>"segment_ids": "segment_ids do not all exist"<br>"ip_pool": "The ip pool you provided is invalid"<br>"suppression_group_id": "suppression_group_id does not exist"<br>"unsubscribes": "Either suppression_group_id or custom_unsubscribe_url may be set/used, but not both. Please remove one before setting the other."<br>"": "The JSON you have submitted cannot be parsed."<br>"": "You've reached your limit of 250 campaigns. Please delete one or more and try again." | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | `ApiError` |


# GET Campaigns

**This endpoint allows you to retrieve a list of all of your campaigns.**

Returns campaigns in reverse order they were created (newest first).

Returns an empty array if no campaigns exist.

```ts
async gETCampaigns(
  limit?: number,
  offset?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3CampaignsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | The number of results you would like to receive at a time.<br>**Default**: `10` |
| `offset` | `number \| undefined` | Query, Optional | The index of the first campaign to return, where 0 is the first campaign.<br>**Default**: `0` |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3CampaignsResponse`](../../doc/models/v3-campaigns-response.md)

## Example Usage

```ts
const limit = 10;
const offset = 0;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await campaignsAPIController.gETCampaigns(limit, offset, onBehalfOf);
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
      "id": 986724,
      "title": "March Newsletter",
      "subject": "New Products for Spring!",
      "sender_id": 124451,
      "list_ids": [
        110,
        124
      ],
      "segment_ids": [
        110
      ],
      "categories": [
        "spring line"
      ],
      "suppression_group_id": 42,
      "custom_unsubscribe_url": "",
      "ip_pool": "marketing",
      "html_content": "<html><head><title></title></head><body><p>Check out our spring line!</p></body></html>",
      "plain_content": "Check out our spring line!",
      "status": "Draft"
    },
    {
      "id": 986723,
      "title": "February Newsletter",
      "subject": "Final Winter Product Sale!",
      "sender_id": 124451,
      "list_ids": [
        110,
        124
      ],
      "segment_ids": [
        110
      ],
      "categories": [
        "winter line"
      ],
      "suppression_group_id": 42,
      "custom_unsubscribe_url": "",
      "ip_pool": "marketing",
      "html_content": "<html><head><title></title></head><body><p>Last call for winter clothes!</p></body></html>",
      "plain_content": "Last call for winter clothes!",
      "status": "Sent"
    }
  ]
}
```


# GET Campaigns-Campaign Id

**This endpoint allows you to retrieve a specific campaign.**

```ts
async gETCampaignsCampaignId(
  campaignId: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3CampaignsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignId` | `number` | Template, Required | The id of the campaign you would like to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3CampaignsResponse1`](../../doc/models/v3-campaigns-response-1.md)

## Example Usage

```ts
const campaignId = 226;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await campaignsAPIController.gETCampaignsCampaignId(campaignId, onBehalfOf);
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
  "categories": [
    "spring line"
  ],
  "custom_unsubscribe_url": "",
  "html_content": "<html><head><title></title></head><body><p>Check out our spring line!</p></body></html>",
  "id": 986724,
  "ip_pool": "marketing",
  "list_ids": [
    110
  ],
  "plain_content": "Check out our spring line!",
  "segment_ids": [
    110
  ],
  "sender_id": 124451,
  "status": "Draft",
  "subject": "New Products for Spring!",
  "suppression_group_id": 42,
  "title": "March Newsletter"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | - | `ApiError` |
| 404 | "": "not found" | `ApiError` |


# DELETE Campaigns-Campaign Id

**This endpoint allows you to delete a specific campaign.**

```ts
async dELETECampaignsCampaignId(
  campaignId: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignId` | `number` | Template, Required | The id of the campaign you would like to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const campaignId = 226;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await campaignsAPIController.dELETECampaignsCampaignId(campaignId, onBehalfOf);
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
| 401 | - | `ApiError` |
| 404 | "": "not found" | `ApiError` |


# PATCH Campaigns-Campaign Id

**This endpoint allows you to update a specific campaign.**

This is especially useful if you only set up the campaign using POST /campaigns, but didn't set many of the parameters.

```ts
async pATCHCampaignsCampaignId(
  campaignId: number,
  onBehalfOf?: string,
  body?: UpdateaCampaignrequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CampaignsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignId` | `number` | Template, Required | The id of the campaign you would like to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`UpdateaCampaignrequest \| undefined`](../../doc/models/updatea-campaignrequest.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CampaignsResponse`](../../doc/models/campaigns-response.md)

## Example Usage

```ts
const campaignId = 226;
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyCategories: string[] = ['summer line'];
const body: UpdateaCampaignrequest = {
  title: 'May Newsletter',
  subject: 'New Products for Summer!',
  categories: bodyCategories,
  htmlContent: '<html><head><title></title></head><body><p>Check out our summer line!</p></body></html>',
  plainContent: 'Check out our summer line!',
};

try {
  const { result, ...httpResponse } = await campaignsAPIController.pATCHCampaignsCampaignId(campaignId, onBehalfOf, body);
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
  "id": 986724,
  "title": "May Newsletter",
  "subject": "New Products for Summer!",
  "sender_id": 124451,
  "list_ids": [
    110,
    124
  ],
  "segment_ids": [
    110
  ],
  "categories": [
    "summer line"
  ],
  "suppression_group_id": 42,
  "custom_unsubscribe_url": "",
  "ip_pool": "marketing",
  "html_content": "<html><head><title></title></head><body><p>Check out our summer line!</p></body></html>",
  "plain_content": "Check out our summer line!",
  "status": "Draft"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | "title": "title can't be blank"<br>"title": "title is too long (maximum is 100 characters)"<br>"categories": "categories exceeds 10 category limit"<br>"html_content": "html_content exceeds the 1MB limit"<br>"plain_content": "plain_content exceeds the 1MB limit"<br>"sender_id": "sender_id does not exist"<br>"sender_id": "sender_id is not a verified sender identity"<br>"list_ids": "list_ids do not all exist"<br>"segment_ids": "segment_ids do not all exist"<br>"ip_pool": "The ip pool you provided is invalid"<br>"suppression_group_id": "suppression_group_id does not exist"<br>"unsubscribes": "Either suppression_group_id or custom_unsubscribe_url may be set/used, but not both. Please remove one before setting the other."<br>"": "The JSON you have submitted cannot be parsed." | `ApiError` |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | "": "You may only update a campaign when it is in draft mode." | `ApiError` |
| 404 | "": "not found" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# POST Campaigns-Campaign Id-Schedules-Now

**This endpoint allows you to immediately send an existing campaign.**

Normally a POST request would have a body, but since this endpoint is telling us to send a resource that is already created, a request body is not needed.

```ts
async pOSTCampaignsCampaignIdSchedulesNow(
  campaignId: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SendaCampaignresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignId` | `number` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SendaCampaignresponse`](../../doc/models/senda-campaignresponse.md)

## Example Usage

```ts
const campaignId = 226;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await campaignsAPIController.pOSTCampaignsCampaignIdSchedulesNow(campaignId, onBehalfOf);
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
  "id": 1234,
  "status": "Scheduled"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | "subject": "subject can't be blank"<br>"sender_id": "sender_id can't be blank"<br>"plain_content": "plain_content can't be blank, please provide plain text or html content"<br>"list_ids": "You must select at least 1 segment or 1 list to send to."<br>"unsubscribe_tag": "An [unsubscribe] tag in both your html and plain content is required to send a campaign."<br>"suppression_group_id": "Either a suppression_group_id or custom_unsubscribe_url is required to send a campaign."<br>"": "You do not have enough credits to send this campaign. Upgrade your plan to send more: https://app.sendgrid.com/settings/billing" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | "": "You may only send a campaign when it is in draft mode." | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "": "not found" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# POST Campaigns-Campaign Id-Schedules

**This endpoint allows you to schedule a specific date and time for your campaign to be sent.**

If you have the flexibility, it's better to schedule mail for off-peak times. Most emails are scheduled and sent at the top of the hour or half hour. Scheduling email to avoid those times (for example, scheduling at 10:53) can result in lower deferral rates because it won't be going through our servers at the same times as everyone else's mail.

```ts
async pOSTCampaignsCampaignIdSchedules(
  campaignId: number,
  onBehalfOf?: string,
  body?: ScheduleaCampaignrequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ScheduleaCampaignresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignId` | `number` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`ScheduleaCampaignrequest \| undefined`](../../doc/models/schedulea-campaignrequest.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ScheduleaCampaignresponse`](../../doc/models/schedulea-campaignresponse.md)

## Example Usage

```ts
const campaignId = 226;
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: ScheduleaCampaignrequest = {
  sendAt: 1489771528,
};

try {
  const { result, ...httpResponse } = await campaignsAPIController.pOSTCampaignsCampaignIdSchedules(campaignId, onBehalfOf, body);
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
  "id": 1234,
  "send_at": 1489771528,
  "status": "Scheduled"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | "subject": "subject can't be blank"<br>"sender_id": "sender_id can't be blank"<br>"plain_content": "plain_content can't be blank, please provide plain text or html content"<br>"list_ids": "You must select at least 1 segment or 1 list to send to."<br>"send_at": "Please choose a future time for sending your campaign."<br>"unsubscribe_tag": "An [unsubscribe] tag in both your html and plain content is required to send a campaign."<br>"suppression_group_id": "Either a suppression_group_id or custom_unsubscribe_url is required to send a campaign."<br>"": "The JSON you have submitted cannot be parsed."<br>"":"You do not have enough credits to send this campaign. Upgrade your plan to send more: https://app.sendgrid.com/settings/billing" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | "": "You cannot POST to a campaign that has already sent or scheduled. However you can update a scheduled campaign with a PATCH." | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "": "not found" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# PATCH Campaigns-Campaign Id-Schedules

**This endpoint allows to you change the scheduled time and date for a campaign to be sent.**

```ts
async pATCHCampaignsCampaignIdSchedules(
  campaignId: number,
  onBehalfOf?: string,
  body?: UpdateaScheduledCampaignrequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateaScheduledCampaignresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignId` | `number` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`UpdateaScheduledCampaignrequest \| undefined`](../../doc/models/updatea-scheduled-campaignrequest.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateaScheduledCampaignresponse`](../../doc/models/updatea-scheduled-campaignresponse.md)

## Example Usage

```ts
const campaignId = 226;
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: UpdateaScheduledCampaignrequest = {
  sendAt: BigInt(1489451436),
};

try {
  const { result, ...httpResponse } = await campaignsAPIController.pATCHCampaignsCampaignIdSchedules(campaignId, onBehalfOf, body);
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
| 400 | "": "The JSON you have submitted cannot be parsed."<br>"send_at": "Please choose a future time for sending your campaign."<br>"":"You do not have enough credits to send this campaign. Upgrade your plan to send more: https://app.sendgrid.com/settings/billing" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | "send_at": "You cannot update the send_at value of non-scheduled campaign." | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "": "not found" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# GET Campaigns-Campaign Id-Schedules

**This endpoint allows you to retrieve the date and time that a campaign has been scheduled to be sent.**

```ts
async gETCampaignsCampaignIdSchedules(
  campaignId: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateaScheduledCampaignrequest>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignId` | `number` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UpdateaScheduledCampaignrequest`](../../doc/models/updatea-scheduled-campaignrequest.md)

## Example Usage

```ts
const campaignId = 226;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await campaignsAPIController.gETCampaignsCampaignIdSchedules(campaignId, onBehalfOf);
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
  "send_at": 1490778528
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | "": "not found" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# DELETE Campaigns-Campaign Id-Schedules

**This endpoint allows you to unschedule a campaign that has already been scheduled to be sent.**

A successful unschedule will return a 204.
If the specified campaign is in the process of being sent, the only option is to cancel (a different method).

```ts
async dELETECampaignsCampaignIdSchedules(
  campaignId: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignId` | `number` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const campaignId = 226;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await campaignsAPIController.dELETECampaignsCampaignIdSchedules(campaignId, onBehalfOf);
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
| 403 | "": "This campaign is already In Progress."<br>"": "This campaign is already Sent."<br>"": "This campaign is already Paused."<br>"": "This campaign is already Canceled." | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "": "not found" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |


# POST Campaigns-Campaign Id-Schedules-Test

**This endpoint allows you to send a test campaign.**

To send to multiple addresses, use an array for the JSON "to" value ["one@address","two@address"]

```ts
async pOSTCampaignsCampaignIdSchedulesTest(
  campaignId: number,
  onBehalfOf?: string,
  body?: V3CampaignsSchedulesTestRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SendaTestCampaignrequest>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignId` | `number` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3CampaignsSchedulesTestRequest \| undefined`](../../doc/models/v3-campaigns-schedules-test-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SendaTestCampaignrequest`](../../doc/models/senda-test-campaignrequest.md)

## Example Usage

```ts
const campaignId = 226;
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3CampaignsSchedulesTestRequest = {
  to: 'your.email@example.com',
};

try {
  const { result, ...httpResponse } = await campaignsAPIController.pOSTCampaignsCampaignIdSchedulesTest(campaignId, onBehalfOf, body);
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
| 400 | "": "The JSON you have submitted cannot be parsed."<br>"to": "Please provide an email address to which the test should be sent."<br>"to": "You can only send tests to 10 addresses at a time."<br>"subject": "Please add a subject to your campaign before sending a test."<br>"plain_content": "Plain content and html content can't both be blank. Please set one of these values before sending a test."<br>"sender_id": "Please assign a sender identity to your campaign before sending a test." | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | "": "not found" | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |

