
# V3 User Webhooks Event Test Request

## Structure

`V3UserWebhooksEventTestRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | The URL where you would like the test notification to be sent. |
| `oauthClientId` | `string \| undefined` | Optional | The client ID Twilio SendGrid sends to your OAuth server or service provider to generate an OAuth access token. When passing data in this field, you must also include the oauth_client_secret and oauth_token_url fields. |
| `oauthClientSecret` | `string \| undefined` | Optional | This secret is needed only once to create an access token. SendGrid will store this secret, allowing you to update your Client ID and Token URL without passing the secret to SendGrid again.  When passing data in this field, you must also include the oauth_client_id and oauth_token_url fields. |
| `oauthTokenUrl` | `string \| undefined` | Optional | The URL where Twilio SendGrid sends the Client ID and Client Secret to generate an access token. This should be your OAuth server or service provider.  When passing data in this field, you must also include the oauth_client_id and oauth_client_secret fields. |

## Example (as JSON)

```json
{
  "url": "mollit non ipsum magna",
  "oauth_client_id": "nisi",
  "oauth_client_secret": "veniam commodo ex sunt",
  "oauth_token_url": "dolor Duis"
}
```

