# Send Test Email

```ts
const sendTestEmailController = new SendTestEmailController(client);
```

## Class Name

`SendTestEmailController`


# POST Marketing-Test-Send Email

**This endpoint allows you to send a test marketing email to a list of email addresses**.

Before sending a marketing message, you can test it using this endpoint. You may specify up to **10 contacts** in the `emails` request body field. You must also specify a `template_id` and include either a `from_address` or `sender_id`. You can manage your templates with the [Twilio SendGrid App](https://mc.sendgrid.com/dynamic-templates) or the [Transactional Templates API](https://sendgrid.api-docs.io/v3.0/transactional-templates).

> Please note that this endpoint works with Dynamic Transactional Templates only. Legacy Transactional Templates will not be delivered.

For more information about managing Dynamic Transactional Templates, see [How to Send Email with Dynamic Transactional Templates](https://sendgrid.com/docs/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/).

You can also test your Single Sends in the [Twilio SendGrid Marketing Campaigns UI](https://mc.sendgrid.com/single-sends).

```ts
async pOSTMarketingTestSendEmail(
  body?: V3MarketingTestSendEmailRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3MarketingTestSendEmailRequest \| undefined`](../../doc/models/v3-marketing-test-send-email-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const contentType = null;
const bodyEmails: string[] = ['janedoe@example.com', 'tiramisu@example.com', 'bundt@example.com'];
const body: V3MarketingTestSendEmailRequest = {
  templateId: 'f8f77db8-b9fa-4b3c-9ee8-de3d582016b8',
  emails: bodyEmails,
};
body.versionIdOverride = '7734f757-8eb8-4d22-b7f0-779a72f32986';
body.senderId = 6060664;
body.customUnsubscribeUrl = 'https://example.com/unsubscribe';
body.suppressionGroupId = 21865513;

try {
  const { result, ...httpResponse } = await sendTestEmailController.pOSTMarketingTestSendEmail(body);
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
| 400 | - | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |

