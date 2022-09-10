# Senders

```ts
const sendersController = new SendersController(client);
```

## Class Name

`SendersController`


# POST Marketing-Senders

**This endpoint allows you to create a new sender identity.**

*You may create up to 100 unique sender identities.*

Sender identities are required to be verified before use. If your domain has been authenticated, a new sender identity will auto verify on creation. Otherwise an email will be sent to the `from.email`.

```ts
async pOSTMarketingSenders(
  onBehalfOf?: string,
  body?: V3MarketingSendersRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SenderID>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3MarketingSendersRequest \| undefined`](../../doc/models/v3-marketing-senders-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SenderID`](../../doc/models/sender-id.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyFrom: From = {
  email: 'orders@example.com',
  name: 'Example Orders',
};

const bodyReplyTo: ReplyTo = {
  email: 'support@example.com',
};
bodyReplyTo.name = 'Example Support';

const body: V3MarketingSendersRequest = {
  nickname: 'Example Orders',
  from: bodyFrom,
  address: '1234 Fake St.',
  city: 'San Francisco',
  country: 'United States',
};
body.replyTo = bodyReplyTo;
body.address2 = '';
body.state = 'CA';
body.zip = '94105';

try {
  const { result, ...httpResponse } = await sendersController.pOSTMarketingSenders(onBehalfOf, body);
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

