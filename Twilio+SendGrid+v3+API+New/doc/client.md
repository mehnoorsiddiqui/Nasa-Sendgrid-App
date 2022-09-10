
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `accessToken` | `string` | The OAuth 2.0 Access Token to use for API requests. |

## HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

## RetryConfiguration

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

## Twilio SendGrid v3 API Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| subuserMonitorSettings | Gets SubuserMonitorSettingsController |
| singleSignOnSettings | Gets SingleSignOnSettingsController |
| settingsPartner | Gets SettingsPartnerController |
| contactsAPIRecipients | Gets ContactsAPIRecipientsController |
| settingsInboundParse | Gets SettingsInboundParseController |
| iPAccessManagement | Gets IPAccessManagementController |
| suppressionsUnsubscribeGroups | Gets SuppressionsUnsubscribeGroupsController |
| cSVUIOnly | Gets CSVUIOnlyController |
| bouncesAPI | Gets BouncesAPIController |
| designsAPI | Gets DesignsAPIController |
| customFields | Gets CustomFieldsController |
| segmentingContactsV2 | Gets SegmentingContactsV2Controller |
| subuserStatistics | Gets SubuserStatisticsController |
| sendTestEmail | Gets SendTestEmailController |
| iPAddresses | Gets IPAddressesController |
| query | Gets QueryController |
| invalidEmailsAPI | Gets InvalidEmailsAPIController |
| webhooks | Gets WebhooksController |
| suppressionsGlobalSuppressions | Gets SuppressionsGlobalSuppressionsController |
| settingsTracking | Gets SettingsTrackingController |
| contactsAPILists | Gets ContactsAPIListsController |
| marketingCampaignsStats | Gets MarketingCampaignsStatsController |
| aPIKeyPermissions | Gets APIKeyPermissionsController |
| domainAuthentication | Gets DomainAuthenticationController |
| senderIdentitiesAPI | Gets SenderIdentitiesAPIController |
| singleSignOnTeammates | Gets SingleSignOnTeammatesController |
| mailSend | Gets MailSendController |
| settingsEnforcedTLS | Gets SettingsEnforcedTLSController |
| iPWarmup | Gets IPWarmupController |
| categories | Gets CategoriesController |
| campaignsAPI | Gets CampaignsAPIController |
| teammates | Gets TeammatesController |
| senderVerification | Gets SenderVerificationController |
| singleSends | Gets SingleSendsController |
| blocksAPI | Gets BlocksAPIController |
| contacts | Gets ContactsController |
| certificates | Gets CertificatesController |
| contactsAPISegments | Gets ContactsAPISegmentsController |
| senders | Gets SendersController |
| contactsAPICustomFields | Gets ContactsAPICustomFieldsController |
| spamReportsAPI | Gets SpamReportsAPIController |
| subusersAPI | Gets SubusersAPIController |
| linkBranding | Gets LinkBrandingController |
| suppressionsSuppressions | Gets SuppressionsSuppressionsController |
| usersAPI | Gets UsersAPIController |
| settingsMail | Gets SettingsMailController |
| aPIKeys | Gets APIKeysController |
| transactionalTemplates | Gets TransactionalTemplatesController |
| reverseDNS | Gets ReverseDNSController |
| emailAddressValidation | Gets EmailAddressValidationController |
| transactionalTemplatesVersions | Gets TransactionalTemplatesVersionsController |
| lists | Gets ListsController |
| cancelScheduledSends | Gets CancelScheduledSendsController |
| stats | Gets StatsController |
| alerts | Gets AlertsController |
| iPPools | Gets IPPoolsController |
| emailCNAMERecords | Gets EmailCNAMERecordsController |
| segmentingContacts | Gets SegmentingContactsController |

