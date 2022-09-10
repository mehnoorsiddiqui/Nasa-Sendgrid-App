
# V3 Mail Send Request

## Structure

`V3MailSendRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `personalizations` | [`Personalization[]`](../../doc/models/personalization.md) | Required | An array of messages and their metadata. Each object within personalizations can be thought of as an envelope - it defines who should receive an individual message and how that message should be handled. See our [Personalizations documentation](https://sendgrid.com/docs/for-developers/sending-email/personalizations/) for examples.<br>**Constraints**: *Maximum Items*: `1000` |
| `from` | [`FromEmailObject`](../../doc/models/from-email-object.md) | Required | - |
| `replyTo` | [`ReplyToEmailObject \| undefined`](../../doc/models/reply-to-email-object.md) | Optional | - |
| `replyToList` | [`ReplyToList[] \| undefined`](../../doc/models/reply-to-list.md) | Optional | An array of recipients who will receive replies and/or bounces. Each object in this array must contain the recipient's email address. Each object in the array may optionally contain the recipient's name. You can either choose to use “reply_to” field or “reply_to_list” but not both.<br>**Constraints**: *Maximum Items*: `1000`, *Unique Items Required* |
| `subject` | `string` | Required | The global or 'message level' subject of your email. This may be overridden by subject lines set in personalizations.<br>**Constraints**: *Minimum Length*: `1` |
| `content` | [`Content[]`](../../doc/models/content.md) | Required | An array where you can specify the content of your email. You can include multiple [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of content, but you must specify at least one MIME type. To include more than one MIME type, add another object to the array containing the `type` and `value` parameters. |
| `attachments` | [`Attachment[] \| undefined`](../../doc/models/attachment.md) | Optional | An array of objects where you can specify any attachments you want to include. |
| `templateId` | `string \| undefined` | Optional | An email template ID. A template that contains a subject and content — either text or html — will override any subject and content values specified at the personalizations or message level. |
| `headers` | `unknown \| undefined` | Optional | An object containing key/value pairs of header names and the value to substitute for them. The key/value pairs must be strings. You must ensure these are properly encoded if they contain unicode characters. These headers cannot be one of the reserved headers. |
| `categories` | `string[] \| undefined` | Optional | An array of category names for this message. Each category name may not exceed 255 characters.<br>**Constraints**: *Maximum Items*: `10`, *Unique Items Required*, *Maximum Length*: `255` |
| `customArgs` | `string \| undefined` | Optional | Values that are specific to the entire send that will be carried along with the email and its activity data.  Key/value pairs must be strings. Substitutions will not be made on custom arguments, so any string that is entered into this parameter will be assumed to be the custom argument that you would like to be used. This parameter is overridden by `custom_args` set at the personalizations level. Total `custom_args` size may not exceed 10,000 bytes. |
| `sendAt` | `number \| undefined` | Optional | A unix timestamp allowing you to specify when you want your email to be delivered. This may be overridden by the `send_at` parameter set at the personalizations level. Delivery cannot be scheduled more than 72 hours in advance. If you have the flexibility, it's better to schedule mail for off-peak times. Most emails are scheduled and sent at the top of the hour or half hour. Scheduling email to avoid peak times — for example, scheduling at 10:53 — can result in lower deferral rates due to the reduced traffic during off-peak times. |
| `batchId` | `string \| undefined` | Optional | An ID representing a batch of emails to be sent at the same time. Including a `batch_id` in your request allows you include this email in that batch. It also enables you to cancel or pause the delivery of that batch. For more information, see the [Cancel Scheduled Sends API](https://sendgrid.com/docs/api-reference/). |
| `asm` | [`Asm2 \| undefined`](../../doc/models/asm-2.md) | Optional | - |
| `ipPoolName` | `string \| undefined` | Optional | The IP Pool that you would like to send this email from.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `64` |
| `mailSettings` | [`MailSettings2 \| undefined`](../../doc/models/mail-settings-2.md) | Optional | - |
| `trackingSettings` | [`TrackingSettings2 \| undefined`](../../doc/models/tracking-settings-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "personalizations": [
    {
      "to": [
        {
          "email": "john_doe@example.com",
          "name": "John Doe"
        },
        {
          "email": "julia_doe@example.com",
          "name": "Julia Doe"
        }
      ],
      "cc": [
        {
          "email": "jane_doe@example.com",
          "name": "Jane Doe"
        }
      ],
      "bcc": [
        {
          "email": "james_doe@example.com",
          "name": "Jim Doe"
        }
      ]
    },
    {
      "from": {
        "email": "sales@example.com",
        "name": "Example Sales Team"
      },
      "to": [
        {
          "email": "janice_doe@example.com",
          "name": "Janice Doe"
        }
      ],
      "bcc": [
        {
          "email": "jordan_doe@example.com",
          "name": "Jordan Doe"
        }
      ]
    }
  ],
  "from": {
    "email": "orders@example.com",
    "name": "Example Order Confirmation"
  },
  "reply_to": {
    "email": "customer_service@example.com",
    "name": "Example Customer Service Team"
  },
  "subject": "Your Example Order Confirmation",
  "content": [
    {
      "type": "text/html",
      "value": "<p>Hello from Twilio SendGrid!</p><p>Sending with the email service trusted by developers and marketers for <strong>time-savings</strong>, <strong>scalability</strong>, and <strong>delivery expertise</strong>.</p><p>%open-track%</p>"
    }
  ],
  "attachments": [
    {
      "content": "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==",
      "filename": "index.html",
      "type": "text/html",
      "disposition": "attachment"
    }
  ],
  "categories": [
    "cake",
    "pie",
    "baking"
  ],
  "send_at": 1617260400,
  "batch_id": "AsdFgHjklQweRTYuIopzXcVBNm0aSDfGHjklmZcVbNMqWert1znmOP2asDFjkl",
  "asm": {
    "group_id": 12345,
    "groups_to_display": [
      12345
    ]
  },
  "ip_pool_name": "transactional email",
  "mail_settings": {
    "bypass_list_management": {
      "enable": false
    },
    "footer": {
      "enable": false
    },
    "sandbox_mode": {
      "enable": false
    }
  },
  "tracking_settings": {
    "click_tracking": {
      "enable": true,
      "enable_text": false
    },
    "open_tracking": {
      "enable": true,
      "substitution_tag": "%open-track%"
    },
    "subscription_tracking": {
      "enable": false
    }
  }
}
```

