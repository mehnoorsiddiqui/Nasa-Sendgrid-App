# Mail Send

```ts
const mailSendController = new MailSendController(client);
```

## Class Name

`MailSendController`


# POST Mail-Send

The Mail Send endpoint allows you to send email over SendGrid’s v3 Web API, the most recent version of our API. If you are looking for documentation about the v2 Mail Send endpoint, see our [v2 API Reference](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

## Helper Libraries

Twilio SendGrid provides libraries to help you quickly and easily integrate with the v3 Web API in 7 different languages:

* [C#](https://github.com/sendgrid/sendgrid-csharp)
* [Go](https://github.com/sendgrid/sendgrid-go)
* [Java](https://github.com/sendgrid/sendgrid-java)
* [Node JS](https://github.com/sendgrid/sendgrid-nodejs)
* [PHP](https://github.com/sendgrid/sendgrid-php)
* [Python](https://github.com/sendgrid/sendgrid-python)
* [Ruby](https://github.com/sendgrid/sendgrid-ruby)

## Dynamic Transactional Templates and Handlebars

In order to send a dynamic template, specify the template ID with the `template_id` parameter.

To specify handlebar substitutions, define your substitutions in the request JSON with this syntax:

```
"dynamic_template_data": {
      "guest": "Jane Doe",
      "partysize": "4",
      "english": true,
      "date": "April 1st, 2021"
    }
```

For more information about Dynamic Transactional Templates and Handlebars, see our documentation and reference pages.

* [How to send an email with Dynamic Transactional Templates
  ](https://sendgrid.com/docs/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/)
* [Using Handlebars](https://sendgrid.com/docs/for-developers/sending-email/using-handlebars/)

## Mail Body Compression

Mail body compression is available to some high volume accounts. Talk to your CSM if you are interested in this functionality. Mail body compression works by setting up a JSON payload as defined on this page, then compressing it with gzip (the gzip file can be no more than 30mb).

To use mail body compression:

1. Add a `Content-Encoding` header, with a value of `gzip`.  
   a. `Content-Encoding: gzip`
2. Send the gzip as a data-binary.  
   a. `--data-binary '@data.json.gz'`

## Multiple Reply-To Emails

Using `reply_to_list` allows senders to include more than one recipient email address to receive reply and/or bounce messages from the recipient of the email.

### Usage Considerations

* `reply_to` is mutually exclusive with `reply_to_list`. If both are used, then the API call will be rejected.
* The `reply_to_list` object, when used, must at least have an email parameter and may also contain a name parameter.
* Each email address in the `reply_to_list` should be unique.
* There is a limit of 1000 `reply_to_list` emails per mail/send request.
* In SMTP calls, we will omit any invalid emails.

### Possible 400 Error Messages

* `reply_to` is mutually exclusive with `reply_to_list`.
* The `reply_to_list` object, when used, must at least have an email parameter and may also contain a name parameter.
* Each email address in the `reply_to_list` should be unique.
* There is a limit of X `reply_to` emails per mail/send request.
* The `reply_to_list` email does not contain a valid address.
* The `reply_to_list` email exceeds the maximum total length of X characters.
* The `reply_to_list` email parameter is required.

```ts
async pOSTMailSend(
  body?: V3MailSendRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3MailSendRequest \| undefined`](../../doc/models/v3-mail-send-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = null;
const bodyPersonalizations: Personalization[] = [];

const bodypersonalizations0To: ToEmailArray[] = [];

const bodypersonalizations0to0: ToEmailArray = {
  email: 'john_doe@example.com',
};
bodypersonalizations0to0.name = 'John Doe';

bodypersonalizations0To[0] = bodypersonalizations0to0;

const bodypersonalizations0to1: ToEmailArray = {
  email: 'julia_doe@example.com',
};
bodypersonalizations0to1.name = 'Julia Doe';

bodypersonalizations0To[1] = bodypersonalizations0to1;

const bodypersonalizations0Cc: CCBCCEmailObject[] = [];

const bodypersonalizations0cc0: CCBCCEmailObject = {
  email: 'jane_doe@example.com',
};
bodypersonalizations0cc0.name = 'Jane Doe';

bodypersonalizations0Cc[0] = bodypersonalizations0cc0;

const bodypersonalizations0Bcc: CCBCCEmailObject[] = [];

const bodypersonalizations0bcc0: CCBCCEmailObject = {
  email: 'james_doe@example.com',
};
bodypersonalizations0bcc0.name = 'Jim Doe';

bodypersonalizations0Bcc[0] = bodypersonalizations0bcc0;

const bodypersonalizations0: Personalization = {
  to: bodypersonalizations0To,
};
bodypersonalizations0.cc = bodypersonalizations0Cc;
bodypersonalizations0.bcc = bodypersonalizations0Bcc;

bodyPersonalizations[0] = bodypersonalizations0;

const bodypersonalizations1To: ToEmailArray[] = [];

const bodypersonalizations1to0: ToEmailArray = {
  email: 'janice_doe@example.com',
};
bodypersonalizations1to0.name = 'Janice Doe';

bodypersonalizations1To[0] = bodypersonalizations1to0;

const bodypersonalizations1From: FromEmailObject = {
  email: 'sales@example.com',
};
bodypersonalizations1From.name = 'Example Sales Team';

const bodypersonalizations1Bcc: CCBCCEmailObject[] = [];

const bodypersonalizations1bcc0: CCBCCEmailObject = {
  email: 'jordan_doe@example.com',
};
bodypersonalizations1bcc0.name = 'Jordan Doe';

bodypersonalizations1Bcc[0] = bodypersonalizations1bcc0;

const bodypersonalizations1: Personalization = {
  to: bodypersonalizations1To,
};
bodypersonalizations1.from = bodypersonalizations1From;
bodypersonalizations1.bcc = bodypersonalizations1Bcc;

bodyPersonalizations[1] = bodypersonalizations1;

const bodyFrom: FromEmailObject = {
  email: 'orders@example.com',
};
bodyFrom.name = 'Example Order Confirmation';

const bodyContent: Content[] = [];

const bodycontent0: Content = {
  type: 'text/html',
  value: '<p>Hello from Twilio SendGrid!</p><p>Sending with the email service trusted by developers and marketers for <strong>time-savings</strong>, <strong>scalability</strong>, and <strong>delivery expertise</strong>.</p><p>%open-track%</p>',
};

bodyContent[0] = bodycontent0;

const bodyReplyTo: ReplyToEmailObject = {
  email: 'customer_service@example.com',
};
bodyReplyTo.name = 'Example Customer Service Team';

const bodyAttachments: Attachment[] = [];

const bodyattachments0: Attachment = {
  content: 'PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==',
  filename: 'index.html',
};
bodyattachments0.type = 'text/html';
bodyattachments0.disposition = 'attachment';

bodyAttachments[0] = bodyattachments0;

const bodyCategories: string[] = ['cake', 'pie', 'baking'];
const bodyAsmGroupsToDisplay: number[] = [12345];
const bodyAsm: Asm2 = {
  groupId: 12345,
};
bodyAsm.groupsToDisplay = bodyAsmGroupsToDisplay;

const bodyMailSettingsBypassListManagement: BypassListManagement2 = {};
bodyMailSettingsBypassListManagement.enable = false;

const bodyMailSettingsFooter: Footer2 = {};
bodyMailSettingsFooter.enable = false;

const bodyMailSettingsSandboxMode: SandboxMode2 = {};
bodyMailSettingsSandboxMode.enable = false;

const bodyMailSettings: MailSettings2 = {};
bodyMailSettings.bypassListManagement = bodyMailSettingsBypassListManagement;
bodyMailSettings.footer = bodyMailSettingsFooter;
bodyMailSettings.sandboxMode = bodyMailSettingsSandboxMode;

const bodyTrackingSettingsClickTracking: ClickTracking2 = {};
bodyTrackingSettingsClickTracking.enable = true;
bodyTrackingSettingsClickTracking.enableText = false;

const bodyTrackingSettingsOpenTracking: OpenTracking2 = {};
bodyTrackingSettingsOpenTracking.enable = true;
bodyTrackingSettingsOpenTracking.substitutionTag = '%open-track%';

const bodyTrackingSettingsSubscriptionTracking: SubscriptionTracking2 = {};
bodyTrackingSettingsSubscriptionTracking.enable = false;

const bodyTrackingSettings: TrackingSettings2 = {};
bodyTrackingSettings.clickTracking = bodyTrackingSettingsClickTracking;
bodyTrackingSettings.openTracking = bodyTrackingSettingsOpenTracking;
bodyTrackingSettings.subscriptionTracking = bodyTrackingSettingsSubscriptionTracking;

const body: V3MailSendRequest = {
  personalizations: bodyPersonalizations,
  from: bodyFrom,
  subject: 'Your Example Order Confirmation',
  content: bodyContent,
};
body.replyTo = bodyReplyTo;
body.attachments = bodyAttachments;
body.categories = bodyCategories;
body.sendAt = 1617260400;
body.batchId = 'AsdFgHjklQweRTYuIopzXcVBNm0aSDfGHjklmZcVbNMqWert1znmOP2asDFjkl';
body.asm = bodyAsm;
body.ipPoolName = 'transactional email';
body.mailSettings = bodyMailSettings;
body.trackingSettings = bodyTrackingSettings;

try {
  const { result, ...httpResponse } = await mailSendController.pOSTMailSend(body);
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
| 400 | not found | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 401 | unauthorized | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 403 | forbidden | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 404 | error | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 413 | error | [`GlobalErrorResponseSchema1Error`](../../doc/models/global-error-response-schema-1-error.md) |
| 500 | error | [`V3MailSend500Error1Error`](../../doc/models/v3-mail-send-500-error-1-error.md) |

