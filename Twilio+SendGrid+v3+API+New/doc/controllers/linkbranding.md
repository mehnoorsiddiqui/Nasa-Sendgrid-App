# Linkbranding

```ts
const linkbrandingController = new LinkbrandingController(client);
```

## Class Name

`LinkbrandingController`

## Methods

* [POST Whitelabel-Links](../../doc/controllers/linkbranding.md#post-whitelabel-links)
* [GET Whitelabel-Links](../../doc/controllers/linkbranding.md#get-whitelabel-links)
* [POST Whitelabel-Links-Id-Validate](../../doc/controllers/linkbranding.md#post-whitelabel-links-id-validate)
* [POST Whitelabel-Links-Link Id-Subuser](../../doc/controllers/linkbranding.md#post-whitelabel-links-link-id-subuser)
* [GET Whitelabel-Links-Id](../../doc/controllers/linkbranding.md#get-whitelabel-links-id)
* [PATCH Whitelabel-Links-Id](../../doc/controllers/linkbranding.md#patch-whitelabel-links-id)
* [DELETE Whitelabel-Links-Id](../../doc/controllers/linkbranding.md#delete-whitelabel-links-id)
* [GET Whitelabel-Links-Default](../../doc/controllers/linkbranding.md#get-whitelabel-links-default)
* [GET Whitelabel-Links-Subuser](../../doc/controllers/linkbranding.md#get-whitelabel-links-subuser)
* [DELETE Whitelabel-Links-Subuser](../../doc/controllers/linkbranding.md#delete-whitelabel-links-subuser)


# POST Whitelabel-Links

**This endpoint allows you to create a new branded link.**

To create the link branding, supply the root domain and, optionally, the subdomain — these go into separate fields in your request body. The root domain should match your FROM email address. If you provide a  subdomain, it must be different from the subdomain you used for authenticating your domain.

You can submit this request as one of your subusers if you include their ID in the `on-behalf-of` header in the request.

```ts
async pOSTWhitelabelLinks(
  onBehalfOf?: string,
  body?: V3WhitelabelLinksRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LinkBranding200Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3WhitelabelLinksRequest \| undefined`](../../doc/models/v3-whitelabel-links-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LinkBranding200Response`](../../doc/models/link-branding-200-response.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3WhitelabelLinksRequest = {
  domain: 'example.com',
};
body.subdomain = 'mail';
body.mDefault = true;

try {
  const { result, ...httpResponse } = await linkBrandingController.pOSTWhitelabelLinks(onBehalfOf, body);
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
  "domain": "example.com",
  "subdomain": "mail",
  "username": "john@example.com",
  "user_id": 7,
  "default": false,
  "valid": true,
  "legacy": false,
  "dns": {
    "domain_cname": {
      "valid": true,
      "type": "cname",
      "host": "mail.example.com",
      "data": "sendgrid.net"
    },
    "owner_cname": {
      "valid": true,
      "type": "cname",
      "host": "7.example.com",
      "data": "sendgrid.net"
    }
  }
}
```


# GET Whitelabel-Links

**This endpoint allows you to retrieve all branded links**.

You can submit this request as one of your subusers if you include their ID in the `on-behalf-of` header in the request.

```ts
async gETWhitelabelLinks(
  limit?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LinkBranding200Response[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | Limits the number of results returned per page. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LinkBranding200Response[]`](../../doc/models/link-branding-200-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await linkBrandingController.gETWhitelabelLinks(None, onBehalfOf);
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
[
  {
    "id": 1,
    "domain": "example.com",
    "subdomain": "mail",
    "username": "john@example.com",
    "user_id": 7,
    "default": true,
    "valid": true,
    "legacy": false,
    "dns": {
      "domain_cname": {
        "valid": true,
        "type": "cname",
        "host": "mail.example.com",
        "data": "sendgrid.net"
      },
      "owner_cname": {
        "valid": true,
        "type": "cname",
        "host": "7.example.com",
        "data": "sendgrid.net"
      }
    }
  },
  {
    "id": 2,
    "domain": "example2.com",
    "subdomain": "news",
    "username": "john@example.com",
    "user_id": 8,
    "default": false,
    "valid": false,
    "legacy": false,
    "dns": {
      "domain_cname": {
        "valid": true,
        "type": "cname",
        "host": "news.example2.com",
        "data": "sendgrid.net"
      },
      "owner_cname": {
        "valid": false,
        "type": "cname",
        "host": "8.example2.com",
        "data": "sendgrid.net"
      }
    }
  }
]
```


# POST Whitelabel-Links-Id-Validate

**This endpoint allows you to validate a branded link.**

You can submit this request as one of your subusers if you include their ID in the `on-behalf-of` header in the request.

```ts
async pOSTWhitelabelLinksIdValidate(
  id: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3WhitelabelLinksValidateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | The ID of the branded link that you want to validate. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3WhitelabelLinksValidateResponse`](../../doc/models/v3-whitelabel-links-validate-response.md)

## Example Usage

```ts
const id = 112;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await linkBrandingController.pOSTWhitelabelLinksIdValidate(id, onBehalfOf);
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
  "valid": true,
  "validation_results": {
    "domain_cname": {
      "valid": false,
      "reason": "Expected CNAME to match \"sendgrid.net.\" but found \"example.com.\"."
    },
    "owner_cname": {
      "valid": true,
      "reason": null
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 500 | - | [`V3WhitelabelLinksValidate500Error`](../../doc/models/v3-whitelabel-links-validate-500-error.md) |


# POST Whitelabel-Links-Link Id-Subuser

**This endpoint allows you to associate a branded link with a subuser account.**

Link branding can be associated with subusers from the parent account. This functionality allows subusers to send mail using their parent's link branding. To associate link branding, the parent account must first create a branded link and validate it. The parent may then associate that branded link with a subuser via the API or the [Subuser Management page of the Twilio SendGrid App](https://app.sendgrid.com/settings/subusers).

```ts
async pOSTWhitelabelLinksLinkIdSubuser(
  linkId: number,
  body?: V3WhitelabelLinksSubuserRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LinkBranding200Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkId` | `number` | Template, Required | The ID of the branded link you want to associate. |
| `body` | [`V3WhitelabelLinksSubuserRequest \| undefined`](../../doc/models/v3-whitelabel-links-subuser-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LinkBranding200Response`](../../doc/models/link-branding-200-response.md)

## Example Usage

```ts
const linkId = 164;
const contentType = null;
const body: V3WhitelabelLinksSubuserRequest = {};
body.username = 'jane@example.com';

try {
  const { result, ...httpResponse } = await linkBrandingController.pOSTWhitelabelLinksLinkIdSubuser(linkId, body);
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
  "domain": "example.com",
  "subdomain": "mail",
  "username": "john@example.com",
  "user_id": 7,
  "default": false,
  "valid": true,
  "legacy": false,
  "dns": {
    "domain_cname": {
      "valid": true,
      "type": "cname",
      "host": "mail.example.com",
      "data": "sendgrid.net"
    },
    "owner_cname": {
      "valid": true,
      "type": "cname",
      "host": "7.example.com",
      "data": "sendgrid.net"
    }
  }
}
```


# GET Whitelabel-Links-Id

**This endpoint allows you to retrieve a specific branded link by providing its ID.**

You can submit this request as one of your subusers if you include their ID in the `on-behalf-of` header in the request.

```ts
async gETWhitelabelLinksId(
  id: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LinkBranding200Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | The ID of the branded link you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LinkBranding200Response`](../../doc/models/link-branding-200-response.md)

## Example Usage

```ts
const id = 112;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await linkBrandingController.gETWhitelabelLinksId(id, onBehalfOf);
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
  "domain": "example.com",
  "subdomain": "mail",
  "username": "john@example.com",
  "user_id": 7,
  "default": false,
  "valid": true,
  "legacy": false,
  "dns": {
    "domain_cname": {
      "valid": true,
      "type": "cname",
      "host": "mail.example.com",
      "data": "sendgrid.net"
    },
    "owner_cname": {
      "valid": true,
      "type": "cname",
      "host": "7.example.com",
      "data": "sendgrid.net"
    }
  }
}
```


# PATCH Whitelabel-Links-Id

**This endpoint allows you to update a specific branded link. You can use this endpoint to change a branded link's default status.**

You can submit this request as one of your subusers if you include their ID in the `on-behalf-of` header in the request.

```ts
async pATCHWhitelabelLinksId(
  id: number,
  onBehalfOf?: string,
  body?: V3WhitelabelLinksRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LinkBranding200Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | The ID of the branded link you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3WhitelabelLinksRequest1 \| undefined`](../../doc/models/v3-whitelabel-links-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LinkBranding200Response`](../../doc/models/link-branding-200-response.md)

## Example Usage

```ts
const id = 112;
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3WhitelabelLinksRequest1 = {};
body.mDefault = true;

try {
  const { result, ...httpResponse } = await linkBrandingController.pATCHWhitelabelLinksId(id, onBehalfOf, body);
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
  "domain": "example.com",
  "subdomain": "mail",
  "username": "john@example.com",
  "user_id": 7,
  "default": true,
  "valid": true,
  "legacy": false,
  "dns": {
    "domain_cname": {
      "valid": true,
      "type": "cname",
      "host": "mail.example.com",
      "data": "sendgrid.net"
    },
    "owner_cname": {
      "valid": true,
      "type": "cname",
      "host": "7.example.com",
      "data": "sendgrid.net"
    }
  }
}
```


# DELETE Whitelabel-Links-Id

**This endpoint allows you to delete a branded link.**

Your request will receive a response with a 204 status code if the deletion was successful. The call does not return the link's details, so if you wish to record these make sure you call the  "Retrieve a branded link" endpoint *before* you request its deletion.

You can submit this request as one of your subusers if you include their ID in the `on-behalf-of` header in the request.

```ts
async dELETEWhitelabelLinksId(
  id: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | The ID of the branded link you want to retrieve. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const id = 112;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await linkBrandingController.dELETEWhitelabelLinksId(id, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# GET Whitelabel-Links-Default

**This endpoint allows you to retrieve the default branded link.**

The default branded link is the actual URL to be used when sending messages. If you have more than one branded link, the default is determined by the following order:

* The validated branded link marked as `default` (set when you call the "Create a branded link" endpoint or by calling the "Update a branded link" endpoint on an existing link)
* Legacy branded links (migrated from the whitelabel wizard)
* Default SendGrid-branded links (i.e., `100.ct.sendgrid.net`)

You can submit this request as one of your subusers if you include their ID in the `on-behalf-of` header in the request.

```ts
async gETWhitelabelLinksDefault(
  domain?: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LinkBranding200Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domain` | `string \| undefined` | Query, Optional | The domain to match against when finding the default branded link. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LinkBranding200Response`](../../doc/models/link-branding-200-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await linkBrandingController.gETWhitelabelLinksDefault(None, onBehalfOf);
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
  "domain": "example.com",
  "subdomain": "mail",
  "username": "john@example.com",
  "user_id": 7,
  "default": false,
  "valid": true,
  "legacy": false,
  "dns": {
    "domain_cname": {
      "valid": true,
      "type": "cname",
      "host": "mail.example.com",
      "data": "sendgrid.net"
    },
    "owner_cname": {
      "valid": true,
      "type": "cname",
      "host": "7.example.com",
      "data": "sendgrid.net"
    }
  }
}
```


# GET Whitelabel-Links-Subuser

**This endpoint allows you to retrieve the branded link associated with a subuser.**

Link branding can be associated with subusers from the parent account. This functionality allows subusers to send mail using their parent's link branding. To associate link branding, the parent account must first create a branded link and then validate it. The parent may then associate that branded link with a subuser via the API or the [Subuser Management page of the Twilio SendGrid App](https://app.sendgrid.com/settings/subusers).

```ts
async gETWhitelabelLinksSubuser(
  username: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LinkBranding200Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Query, Required | The username of the subuser to retrieve associated branded links for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LinkBranding200Response`](../../doc/models/link-branding-200-response.md)

## Example Usage

```ts
const username = 'username0';
try {
  const { result, ...httpResponse } = await linkBrandingController.gETWhitelabelLinksSubuser(username);
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
  "domain": "example.com",
  "subdomain": "mail",
  "username": "john@example.com",
  "user_id": 7,
  "default": false,
  "valid": true,
  "legacy": false,
  "dns": {
    "domain_cname": {
      "valid": true,
      "type": "cname",
      "host": "mail.example.com",
      "data": "sendgrid.net"
    },
    "owner_cname": {
      "valid": true,
      "type": "cname",
      "host": "7.example.com",
      "data": "sendgrid.net"
    }
  }
}
```


# DELETE Whitelabel-Links-Subuser

**This endpoint allows you to take a branded link away from a subuser.**

Link branding can be associated with subusers from the parent account. This functionality allows subusers to send mail using their parent's link branding. To associate link branding, the parent account must first create a branded link and validate it. The parent may then associate that branded link with a subuser via the API or the [Subuser Management page of the Twilio SendGrid App](https://app.sendgrid.com/settings/subusers).

Your request will receive a response with a 204 status code if the disassociation was successful.

```ts
async dELETEWhitelabelLinksSubuser(
  username: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Query, Required | The username of the subuser account that you want to disassociate a branded link from. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const username = 'username0';
try {
  const { result, ...httpResponse } = await linkBrandingController.dELETEWhitelabelLinksSubuser(username);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

