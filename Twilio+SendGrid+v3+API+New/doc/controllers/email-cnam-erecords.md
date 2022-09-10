# Email CNAM Erecords

```ts
const emailCNAMErecordsController = new EmailCNAMErecordsController(client);
```

## Class Name

`EmailCNAMErecordsController`


# POST Whitelabel-Dns-Email

**This endpoint is used to share DNS records with a colleagues**

Use this endpoint to send SendGrid-generated DNS record information to a co-worker so they can enter it into your DNS provider to validate your domain and link branding.

What type of records are sent will depend on whether you have chosen Automated Security or not. When using Automated Security, SendGrid provides you with three CNAME records. If you turn Automated Security off, you are instead given TXT and MX records.

If you pass a `link_id` to this endpoint, the generated email will supply the DNS records necessary to complete [Link Branding](https://sendgrid.com/docs/ui/account-and-settings/how-to-set-up-link-branding/) setup. If you pass a `domain_id` to this endpoint, the generated email will supply the DNS records needed to complete [Domain Authentication](https://sendgrid.com/docs/ui/account-and-settings/how-to-set-up-domain-authentication/). Passing both IDs will generate an email with the records needed to complete both setup steps.

You can retrieve all your domain IDs from the returned `id` fields for each domain using the "List all authenticated domains" endpoint. You can retrieve all of your link IDs using the "Retrieve all branded links" endpoint.

```ts
async pOSTWhitelabelDnsEmail(
  body?: V3WhitelabelDnsEmailRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3WhitelabelDnsEmailRequest \| undefined`](../../doc/models/v3-whitelabel-dns-email-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = null;
const body: V3WhitelabelDnsEmailRequest = {
  linkId: 29719392,
  domainId: 46873408,
  email: 'my_colleague@example.com',
};
body.message = 'DNS Record for verification';

try {
  const { result, ...httpResponse } = await emailCNAMERecordsController.pOSTWhitelabelDnsEmail(body);
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
| 400 | - | [`V3WhitelabelDnsEmail400Error1Error`](../../doc/models/v3-whitelabel-dns-email-400-error-1-error.md) |

