# Domain Authentication

```ts
const domainAuthenticationController = new DomainAuthenticationController(client);
```

## Class Name

`DomainAuthenticationController`

## Methods

* [GET Whitelabel-Domains](../../doc/controllers/domain-authentication.md#get-whitelabel-domains)
* [POST Whitelabel-Domains](../../doc/controllers/domain-authentication.md#post-whitelabel-domains)
* [GET Whitelabel-Domains-Domain Id](../../doc/controllers/domain-authentication.md#get-whitelabel-domains-domain-id)
* [PATCH Whitelabel-Domains-Domain Id](../../doc/controllers/domain-authentication.md#patch-whitelabel-domains-domain-id)
* [DELETE Whitelabel-Domains-Domain Id](../../doc/controllers/domain-authentication.md#delete-whitelabel-domains-domain-id)
* [GET Whitelabel-Domains-Default](../../doc/controllers/domain-authentication.md#get-whitelabel-domains-default)
* [POST Whitelabel-Domains-Id-Ips](../../doc/controllers/domain-authentication.md#post-whitelabel-domains-id-ips)
* [DELETE Whitelabel-Domains-Id-Ips-Ip](../../doc/controllers/domain-authentication.md#delete-whitelabel-domains-id-ips-ip)
* [POST Whitelabel-Domains-Id-Validate](../../doc/controllers/domain-authentication.md#post-whitelabel-domains-id-validate)
* [GET Whitelabel-Domains-Subuser](../../doc/controllers/domain-authentication.md#get-whitelabel-domains-subuser)
* [DELETE Whitelabel-Domains-Subuser](../../doc/controllers/domain-authentication.md#delete-whitelabel-domains-subuser)
* [POST Whitelabel-Domains-Domain Id-Subuser](../../doc/controllers/domain-authentication.md#post-whitelabel-domains-domain-id-subuser)


# GET Whitelabel-Domains

**This endpoint allows you to retrieve a list of all domains you have authenticated.**

```ts
async gETWhitelabelDomains(
  limit?: number,
  offset?: number,
  excludeSubusers?: boolean,
  username?: string,
  domain?: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DomainAuthentication200Response[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | Number of domains to return. |
| `offset` | `number \| undefined` | Query, Optional | Paging offset. |
| `excludeSubusers` | `boolean \| undefined` | Query, Optional | Exclude subuser domains from the result. |
| `username` | `string \| undefined` | Query, Optional | The username associated with an authenticated domain. |
| `domain` | `string \| undefined` | Query, Optional | Search for authenticated domains. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DomainAuthentication200Response[]`](../../doc/models/domain-authentication-200-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await domainAuthenticationController.gETWhitelabelDomains(None, None, None, None, None, onBehalfOf);
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
    "user_id": 7,
    "subdomain": "mail",
    "domain": "example.com",
    "username": "jane@example.com",
    "ips": [
      "192.168.1.1",
      "192.168.1.2"
    ],
    "custom_spf": true,
    "default": true,
    "legacy": false,
    "automatic_security": true,
    "valid": true,
    "dns": {
      "mail_cname": {
        "valid": true,
        "type": "cname",
        "host": "mail.example.com",
        "data": "u7.wl.sendgrid.net"
      },
      "dkim1": {
        "valid": true,
        "type": "cname",
        "host": "s1._domainkey.example.com",
        "data": "s1._domainkey.u7.wl.sendgrid.net"
      },
      "dkim2": {
        "valid": true,
        "type": "cname",
        "host": "s2._domainkey.example.com",
        "data": "s2._domainkey.u7.wl.sendgrid.net"
      }
    }
  },
  {
    "id": 2,
    "user_id": 8,
    "subdomain": "new",
    "domain": "example2.com",
    "username": "john@example2.com",
    "ips": [],
    "custom_spf": false,
    "default": true,
    "legacy": false,
    "automatic_security": true,
    "valid": false,
    "dns": {
      "mail_cname": {
        "valid": false,
        "type": "mx",
        "host": "news.example2.com",
        "data": "sendgrid.net"
      },
      "dkim1": {
        "valid": false,
        "type": "txt",
        "host": "example2.com",
        "data": "k=rsa; t=s; p=publicKey"
      },
      "dkim2": {
        "valid": false,
        "type": "txt",
        "host": "example2.com",
        "data": "k=rsa; t=s p=publicKey"
      }
    }
  }
]
```


# POST Whitelabel-Domains

**This endpoint allows you to authenticate a domain.**

If you are authenticating a domain for a subuser, you have two options:

1. Use the "username" parameter. This allows you to authenticate a domain on behalf of your subuser. This means the subuser is able to see and modify the authenticated domain.
2. Use the Association workflow (see Associate Domain section). This allows you to authenticate a domain created by the parent to a subuser. This means the subuser will default to the assigned domain, but will not be able to see or modify that authenticated domain. However, if the subuser authenticates their own domain it will overwrite the assigned domain.

```ts
async pOSTWhitelabelDomains(
  onBehalfOf?: string,
  body?: V3WhitelabelDomainsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DomainAuthenticationMandatorySubdomain>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3WhitelabelDomainsRequest \| undefined`](../../doc/models/v3-whitelabel-domains-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DomainAuthenticationMandatorySubdomain`](../../doc/models/domain-authentication-mandatory-subdomain.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyIps: string[] = ['192.168.1.1', '192.168.1.2'];
const body: V3WhitelabelDomainsRequest = {
  domain: 'example.com',
};
body.subdomain = 'news';
body.username = 'john@example.com';
body.ips = bodyIps;
body.customSpf = true;
body.mDefault = true;
body.automaticSecurity = false;

try {
  const { result, ...httpResponse } = await domainAuthenticationController.pOSTWhitelabelDomains(onBehalfOf, body);
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
  "id": 302183,
  "user_id": 1446226,
  "subdomain": "example",
  "domain": "example.com",
  "username": "mbernier",
  "ips": [],
  "custom_spf": false,
  "default": true,
  "legacy": false,
  "automatic_security": true,
  "valid": false,
  "dns": {
    "mail_cname": {
      "valid": false,
      "type": "cname",
      "host": "example.example.com",
      "data": "u1446226.wl.sendgrid.net"
    },
    "dkim1": {
      "valid": false,
      "type": "cname",
      "host": "s1._domainkey.example.com",
      "data": "s1.domainkey.u1446226.wl.sendgrid.net"
    },
    "dkim2": {
      "valid": false,
      "type": "cname",
      "host": "s2._domainkey.example.com",
      "data": "s2.domainkey.u1446226.wl.sendgrid.net"
    }
  }
}
```


# GET Whitelabel-Domains-Domain Id

**This endpoint allows you to retrieve a specific authenticated domain.**

```ts
async gETWhitelabelDomainsDomainId(
  domainId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DomainAuthenticationMandatorySubdomain>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domainId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DomainAuthenticationMandatorySubdomain`](../../doc/models/domain-authentication-mandatory-subdomain.md)

## Example Usage

```ts
const domainId = 'domain_id2';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await domainAuthenticationController.gETWhitelabelDomainsDomainId(domainId, onBehalfOf);
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
  "id": 45373692,
  "user_id": 66036447,
  "subdomain": "sub",
  "domain": "example.com",
  "username": "jdoe",
  "ips": [
    "127.0.0.1"
  ],
  "custom_spf": false,
  "default": true,
  "legacy": false,
  "automatic_security": true,
  "valid": true,
  "dns": {
    "mail_cname": {
      "valid": true,
      "type": "cname",
      "host": "mail.example.com",
      "data": "u7.wl.sendgrid.net"
    },
    "dkim1": {
      "valid": true,
      "type": "cname",
      "host": "s1._domainkey.example.com",
      "data": "s1._domainkey.u7.wl.sendgrid.net"
    },
    "dkim2": {
      "valid": true,
      "type": "cname",
      "host": "s2._domainkey.example.com",
      "data": "s2._domainkey.u7.wl.sendgrid.net"
    }
  }
}
```


# PATCH Whitelabel-Domains-Domain Id

**This endpoint allows you to update the settings for an authenticated domain.**

```ts
async pATCHWhitelabelDomainsDomainId(
  domainId: string,
  onBehalfOf?: string,
  body?: V3WhitelabelDomainsRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DomainAuthentication200Response[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domainId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3WhitelabelDomainsRequest1 \| undefined`](../../doc/models/v3-whitelabel-domains-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DomainAuthentication200Response[]`](../../doc/models/domain-authentication-200-response.md)

## Example Usage

```ts
const domainId = 'domain_id2';
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3WhitelabelDomainsRequest1 = {};
body.mDefault = false;
body.customSpf = true;

try {
  const { result, ...httpResponse } = await domainAuthenticationController.pATCHWhitelabelDomainsDomainId(domainId, onBehalfOf, body);
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
    "user_id": 7,
    "subdomain": "mail",
    "domain": "example.com",
    "username": "jane@example.com",
    "ips": [
      "192.168.1.1",
      "192.168.1.2"
    ],
    "custom_spf": true,
    "default": true,
    "legacy": false,
    "automatic_security": true,
    "valid": true,
    "dns": {
      "mail_cname": {
        "valid": true,
        "type": "cname",
        "host": "mail.example.com",
        "data": "u7.wl.sendgrid.net"
      },
      "dkim1": {
        "valid": true,
        "type": "cname",
        "host": "s1._domainkey.example.com",
        "data": "s1._domainkey.u7.wl.sendgrid.net"
      },
      "dkim2": {
        "valid": true,
        "type": "cname",
        "host": "s2._domainkey.example.com",
        "data": "s2._domainkey.u7.wl.sendgrid.net"
      }
    }
  },
  {
    "id": 2,
    "user_id": 8,
    "subdomain": "new",
    "domain": "example2.com",
    "username": "john@example2.com",
    "ips": [],
    "custom_spf": false,
    "default": true,
    "legacy": false,
    "automatic_security": true,
    "valid": false,
    "dns": {
      "mail_cname": {
        "valid": false,
        "type": "mx",
        "host": "news.example2.com",
        "data": "sendgrid.net"
      },
      "dkim1": {
        "valid": false,
        "type": "txt",
        "host": "example2.com",
        "data": "k=rsa; t=s; p=publicKey"
      },
      "dkim2": {
        "valid": false,
        "type": "txt",
        "host": "example2.com",
        "data": "k=rsa; t=s p=publicKey"
      }
    }
  }
]
```


# DELETE Whitelabel-Domains-Domain Id

**This endpoint allows you to delete an authenticated domain.**

```ts
async dELETEWhitelabelDomainsDomainId(
  domainId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domainId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const domainId = 'domain_id2';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await domainAuthenticationController.dELETEWhitelabelDomainsDomainId(domainId, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# GET Whitelabel-Domains-Default

**This endpoint allows you to retrieve the default authentication for a domain.**

When creating or updating a domain authentication, you can set the domain as a default. The default domain will be used to send all mail. If you have multiple authenticated domains, the authenticated domain matching the domain of the From address will be used, and the default will be overridden.

This endpoint will return a default domain and its details only if a default is set. You are not required to set a default. If you do not set a default domain, this endpoint will return general information about your domain authentication status.

```ts
async gETWhitelabelDomainsDefault(
  domain?: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DomainAuthentication200Response[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domain` | `string \| undefined` | Query, Optional | The domain to find a default authentication. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DomainAuthentication200Response[]`](../../doc/models/domain-authentication-200-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await domainAuthenticationController.gETWhitelabelDomainsDefault(None, onBehalfOf);
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
    "user_id": 7,
    "subdomain": "mail",
    "domain": "example.com",
    "username": "jane@example.com",
    "ips": [
      "192.168.1.1",
      "192.168.1.2"
    ],
    "custom_spf": true,
    "default": true,
    "legacy": false,
    "automatic_security": true,
    "valid": true,
    "dns": {
      "mail_cname": {
        "valid": true,
        "type": "cname",
        "host": "mail.example.com",
        "data": "u7.wl.sendgrid.net"
      },
      "dkim1": {
        "valid": true,
        "type": "cname",
        "host": "s1._domainkey.example.com",
        "data": "s1._domainkey.u7.wl.sendgrid.net"
      },
      "dkim2": {
        "valid": true,
        "type": "cname",
        "host": "s2._domainkey.example.com",
        "data": "s2._domainkey.u7.wl.sendgrid.net"
      }
    }
  },
  {
    "id": 2,
    "user_id": 8,
    "subdomain": "new",
    "domain": "example2.com",
    "username": "john@example2.com",
    "ips": [],
    "custom_spf": false,
    "default": true,
    "legacy": false,
    "automatic_security": true,
    "valid": false,
    "dns": {
      "mail_cname": {
        "valid": false,
        "type": "mx",
        "host": "news.example2.com",
        "data": "sendgrid.net"
      },
      "dkim1": {
        "valid": false,
        "type": "txt",
        "host": "example2.com",
        "data": "k=rsa; t=s; p=publicKey"
      },
      "dkim2": {
        "valid": false,
        "type": "txt",
        "host": "example2.com",
        "data": "k=rsa; t=s p=publicKey"
      }
    }
  }
]
```


# POST Whitelabel-Domains-Id-Ips

**This endpoint allows you to add an IP address to an authenticated domain.**

```ts
async pOSTWhitelabelDomainsIdIps(
  id: number,
  onBehalfOf?: string,
  body?: V3WhitelabelDomainsIpsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DomainAuthentication>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | ID of the domain to which you are adding an IP |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3WhitelabelDomainsIpsRequest \| undefined`](../../doc/models/v3-whitelabel-domains-ips-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DomainAuthentication`](../../doc/models/domain-authentication.md)

## Example Usage

```ts
const id = 112;
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3WhitelabelDomainsIpsRequest = {
  ip: '192.168.0.1',
};

try {
  const { result, ...httpResponse } = await domainAuthenticationController.pOSTWhitelabelDomainsIdIps(id, onBehalfOf, body);
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
  "ips": [],
  "custom_spf": true,
  "default": false,
  "legacy": false,
  "automatic_security": false,
  "valid": false,
  "dns": {
    "mail_server": {
      "host": "mail.example.com",
      "type": "mx",
      "data": "sendgrid.net",
      "valid": false
    },
    "subdomain_spf": {
      "host": "mail.example.com",
      "type": "txt",
      "data": "v=spf1 ip4:192.168.1.1 ip4:192.168.0.1 -all",
      "valid": false
    },
    "domain_spf": {
      "host": "example.com",
      "type": "txt",
      "data": "v=spf1 include:mail.example.com -all",
      "valid": false
    },
    "dkim": {
      "host": "s1._domainkey.example.com",
      "type": "txt",
      "data": "k=rsa; t=s; p=publicKey",
      "valid": false
    }
  }
}
```


# DELETE Whitelabel-Domains-Id-Ips-Ip

**This endpoint allows you to remove an IP address from that domain's authentication.**

```ts
async dELETEWhitelabelDomainsIdIpsIp(
  id: number,
  ip: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DomainAuthentication>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | ID of the domain to delete the IP from. |
| `ip` | `string` | Template, Required | IP to remove from the domain. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DomainAuthentication`](../../doc/models/domain-authentication.md)

## Example Usage

```ts
const id = 112;
const ip = 'ip4';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await domainAuthenticationController.dELETEWhitelabelDomainsIdIpsIp(id, ip, onBehalfOf);
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
  "username": "mail@example.com",
  "user_id": 7,
  "ips": [],
  "custom_spf": true,
  "default": false,
  "legacy": false,
  "automatic_security": false,
  "valid": false,
  "dns": {
    "mail_server": {
      "host": "mail.example.com",
      "type": "mx",
      "data": "sendgrid.net",
      "valid": false
    },
    "subdomain_spf": {
      "host": "mail.example.com",
      "type": "txt",
      "data": "v=spf1 ip4:192.168.1.1 ip4:192.168.0.1 -all",
      "valid": false
    },
    "domain_spf": {
      "host": "example.com",
      "type": "txt",
      "data": "v=spf1 include:mail.example.com -all",
      "valid": false
    },
    "dkim": {
      "host": "s1._domainkey.example.com",
      "type": "txt",
      "data": "k=rsa; t=s; p=publicKey",
      "valid": false
    }
  }
}
```


# POST Whitelabel-Domains-Id-Validate

**This endpoint allows you to validate an authenticated domain. If it fails, it will return an error message describing why the domain could not be validated.**

```ts
async pOSTWhitelabelDomainsIdValidate(
  id: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3WhitelabelDomainsValidateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | ID of the domain to validate. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3WhitelabelDomainsValidateResponse`](../../doc/models/v3-whitelabel-domains-validate-response.md)

## Example Usage

```ts
const id = 112;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await domainAuthenticationController.pOSTWhitelabelDomainsIdValidate(id, onBehalfOf);
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
  "validation_resuts": {
    "mail_cname": {
      "valid": false,
      "reason": "Expected your MX record to be \"mx.sendgrid.net\" but found \"example.com\"."
    },
    "dkim1": {
      "valid": true,
      "reason": null
    },
    "dkim2": {
      "valid": true,
      "reason": null
    },
    "spf": {
      "valid": true,
      "reason": null
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 500 | - | [`V3WhitelabelDomainsValidate500Error`](../../doc/models/v3-whitelabel-domains-validate-500-error.md) |


# GET Whitelabel-Domains-Subuser

**This endpoint allows you to retrieve all of the authenticated domains that have been assigned to a specific subuser.**

Authenticated domains can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's domain authentication. To associate an authenticated domain with a subuser, the parent account must first authenticate and validate the domain. The parent may then associate the authenticated domain via the subuser management tools.

```ts
async gETWhitelabelDomainsSubuser(
  username: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DomainAuthentication>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Query, Required | Username for the subuser to find associated authenticated domain. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DomainAuthentication`](../../doc/models/domain-authentication.md)

## Example Usage

```ts
const username = 'username0';
try {
  const { result, ...httpResponse } = await domainAuthenticationController.gETWhitelabelDomainsSubuser(username);
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
  "username": "mail@example.com",
  "user_id": 7,
  "ips": [],
  "custom_spf": true,
  "default": false,
  "legacy": false,
  "automatic_security": false,
  "valid": false,
  "dns": {
    "mail_server": {
      "host": "mail.example.com",
      "type": "mx",
      "data": "sendgrid.net",
      "valid": false
    },
    "subdomain_spf": {
      "host": "mail.example.com",
      "type": "txt",
      "data": "v=spf1 ip4:192.168.1.1 ip4:192.168.0.1 -all",
      "valid": false
    },
    "domain_spf": {
      "host": "example.com",
      "type": "txt",
      "data": "v=spf1 include:mail.example.com -all",
      "valid": false
    },
    "dkim": {
      "host": "s1._domainkey.example.com",
      "type": "txt",
      "data": "k=rsa; t=s; p=publicKey",
      "valid": false
    }
  }
}
```


# DELETE Whitelabel-Domains-Subuser

**This endpoint allows you to disassociate a specific authenticated domain from a subuser.**

Authenticated domains can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's domain authentication. To associate an authenticated domain with a subuser, the parent account must first authenticate and validate the domain. The parent may then associate the authenticated domain via the subuser management tools.

```ts
async dELETEWhitelabelDomainsSubuser(
  username?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string \| undefined` | Query, Optional | Username for the subuser to find associated authenticated domain. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await domainAuthenticationController.dELETEWhitelabelDomainsSubuser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# POST Whitelabel-Domains-Domain Id-Subuser

**This endpoint allows you to associate a specific authenticated domain with a subuser.**

Authenticated domains can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's domain authentication. To associate an authenticated domain with a subuser, the parent account must first authenticate and validate the domain. The parent may then associate the authenticated domain via the subuser management tools.

```ts
async pOSTWhitelabelDomainsDomainIdSubuser(
  domainId: number,
  body?: V3WhitelabelDomainsSubuserRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DomainAuthentication>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domainId` | `number` | Template, Required | ID of the authenticated domain to associate with the subuser |
| `body` | [`V3WhitelabelDomainsSubuserRequest \| undefined`](../../doc/models/v3-whitelabel-domains-subuser-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DomainAuthentication`](../../doc/models/domain-authentication.md)

## Example Usage

```ts
const domainId = 204;
const contentType = null;
const body: V3WhitelabelDomainsSubuserRequest = {
  username: 'jdoe',
};

try {
  const { result, ...httpResponse } = await domainAuthenticationController.pOSTWhitelabelDomainsDomainIdSubuser(domainId, body);
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
  "username": "mail@example.com",
  "user_id": 7,
  "ips": [],
  "custom_spf": true,
  "default": false,
  "legacy": false,
  "automatic_security": false,
  "valid": false,
  "dns": {
    "mail_server": {
      "host": "mail.example.com",
      "type": "mx",
      "data": "sendgrid.net",
      "valid": false
    },
    "subdomain_spf": {
      "host": "mail.example.com",
      "type": "txt",
      "data": "v=spf1 ip4:192.168.1.1 ip4:192.168.0.1 -all",
      "valid": false
    },
    "domain_spf": {
      "host": "example.com",
      "type": "txt",
      "data": "v=spf1 include:mail.example.com -all",
      "valid": false
    },
    "dkim": {
      "host": "s1._domainkey.example.com",
      "type": "txt",
      "data": "k=rsa; t=s; p=publicKey",
      "valid": false
    }
  }
}
```

