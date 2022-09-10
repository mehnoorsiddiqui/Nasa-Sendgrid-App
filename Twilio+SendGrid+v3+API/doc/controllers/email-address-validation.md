# Email Address Validation

```ts
const emailAddressValidationController = new EmailAddressValidationController(client);
```

## Class Name

`EmailAddressValidationController`


# POST Validations-Email

**This endpoint allows you to validate an email address.**

```ts
async pOSTValidationsEmail(
  body?: V3ValidationsEmailRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3ValidationsEmailResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3ValidationsEmailRequest \| undefined`](../../doc/models/v3-validations-email-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3ValidationsEmailResponse`](../../doc/models/v3-validations-email-response.md)

## Example Usage

```ts
const contentType = null;
const body: V3ValidationsEmailRequest = {
  email: 'example@example.com',
};
body.source = 'signup';

try {
  const { result, ...httpResponse } = await emailAddressValidationController.pOSTValidationsEmail(body);
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
  "result": {
    "email": "cedric@fogowl.com",
    "verdict": "Valid",
    "score": 0.85021,
    "local": "cedric",
    "host": "fogowl.com",
    "checks": {
      "domain": {
        "has_valid_address_syntax": true,
        "has_mx_or_a_record": true,
        "is_suspected_disposable_address": false
      },
      "local_part": {
        "is_suspected_role_address": false
      },
      "additional": {
        "has_known_bounces": false,
        "has_suspected_bounces": false
      }
    },
    "ip_address": "192.168.1.1"
  }
}
```

