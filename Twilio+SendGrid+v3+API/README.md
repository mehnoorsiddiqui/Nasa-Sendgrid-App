
# Getting Started with Twilio SendGrid v3 API

## Introduction

The Twilio SendGrid v3 API provides a simple, intuitive RESTful-like interface for sending email at scale, monitoring email engagement data programmatically, managing account settings, and more. This OpenAPI representation of the Twilio SendGrid v3 API allows you to generate helper libraries (in addition to the libraries officially released by Twilio SendGrid) and build mock servers for testing.

The Official Twilio SendGrid Documentation.: [https://docs.sengrid.com](https://docs.sengrid.com)

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=TwilioSendGridV3API&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=TwilioSendGridV3API&workspaceName=twilio-sendgrid-v-3-apilib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *Twilio SendGrid v3 APILib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add TwilioSendgridV3Apilib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=TwilioSendGridV3API&workspaceName=twilio-sendgrid-v-3-apilib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install TwilioSendgridV3Apilib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `accessToken` | `string` | The OAuth 2.0 Access Token to use for API requests. |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  accessToken: 'AccessToken',
})
```

## Authorization

This API uses `OAuth 2 Bearer token`.

## List of APIs

* [Subuser Monitor Settings](doc/controllers/subuser-monitor-settings.md)
* [Single Sign-On Settings](doc/controllers/single-sign-on-settings.md)
* [Settings-Partner](doc/controllers/settings-partner.md)
* [Contacts API-Recipients](doc/controllers/contacts-api-recipients.md)
* [Settings-Inbound Parse](doc/controllers/settings-inbound-parse.md)
* [IP Access Management](doc/controllers/ip-access-management.md)
* [Suppressions-Unsubscribe Groups](doc/controllers/suppressions-unsubscribe-groups.md)
* [CSV U Ionly](doc/controllers/csv-u-ionly.md)
* [Bounces API](doc/controllers/bounces-api.md)
* [Designs API](doc/controllers/designs-api.md)
* [Custom Fields](doc/controllers/custom-fields.md)
* [Segmenting Contacts V2](doc/controllers/segmenting-contacts-v2.md)
* [Subuser Statistics](doc/controllers/subuser-statistics.md)
* [Send Test Email](doc/controllers/send-test-email.md)
* [IP Addresses](doc/controllers/ip-addresses.md)
* [Invalid Emails API](doc/controllers/invalid-emails-api.md)
* [Suppressions-Global Suppressions](doc/controllers/suppressions-global-suppressions.md)
* [Settings-Tracking](doc/controllers/settings-tracking.md)
* [Contacts API-Lists](doc/controllers/contacts-api-lists.md)
* [Marketing Campaigns Stats](doc/controllers/marketing-campaigns-stats.md)
* [API Key Permissions](doc/controllers/api-key-permissions.md)
* [Domain Authentication](doc/controllers/domain-authentication.md)
* [Sender Identities API](doc/controllers/sender-identities-api.md)
* [Single Sign-On Teammates](doc/controllers/single-sign-on-teammates.md)
* [Mail Send](doc/controllers/mail-send.md)
* [Settings-Enforced TLS](doc/controllers/settings-enforced-tls.md)
* [IP Warmup](doc/controllers/ip-warmup.md)
* [Campaigns API](doc/controllers/campaigns-api.md)
* [Sender Verification](doc/controllers/sender-verification.md)
* [Single Sends](doc/controllers/single-sends.md)
* [Blocks API](doc/controllers/blocks-api.md)
* [Contacts API-Segments](doc/controllers/contacts-api-segments.md)
* [Contacts API-Custom Fields](doc/controllers/contacts-api-custom-fields.md)
* [Spam Reports API](doc/controllers/spam-reports-api.md)
* [Subusers API](doc/controllers/subusers-api.md)
* [Linkbranding](doc/controllers/linkbranding.md)
* [Suppressions-Suppressions](doc/controllers/suppressions-suppressions.md)
* [Users API](doc/controllers/users-api.md)
* [Settings-Mail](doc/controllers/settings-mail.md)
* [API Keys](doc/controllers/api-keys.md)
* [Transactional Templates](doc/controllers/transactional-templates.md)
* [Reverse DNS](doc/controllers/reverse-dns.md)
* [Email Address Validation](doc/controllers/email-address-validation.md)
* [Transactional Templates Versions](doc/controllers/transactional-templates-versions.md)
* [Cancel Scheduled Sends](doc/controllers/cancel-scheduled-sends.md)
* [IP Pools](doc/controllers/ip-pools.md)
* [Email CNAM Erecords](doc/controllers/email-cnam-erecords.md)
* [Segmentingcontacts](doc/controllers/segmentingcontacts.md)
* [Query](doc/controllers/query.md)
* [Webhooks](doc/controllers/webhooks.md)
* [Categories](doc/controllers/categories.md)
* [Teammates](doc/controllers/teammates.md)
* [Contacts](doc/controllers/contacts.md)
* [Certificates](doc/controllers/certificates.md)
* [Senders](doc/controllers/senders.md)
* [Lists](doc/controllers/lists.md)
* [Stats](doc/controllers/stats.md)
* [Alerts](doc/controllers/alerts.md)

## Classes Documentation

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

