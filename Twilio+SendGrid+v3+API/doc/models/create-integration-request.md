
# Create Integration Request

## Structure

`CreateIntegrationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of your integration. This name can be anything that makes sense for your organization (eg. Twilio SendGrid) |
| `enabled` | `boolean` | Required | Indicates if the integration is enabled. |
| `signinUrl` | `string` | Required | The IdP's SAML POST endpoint. This endpoint should receive requests and initiate an SSO login flow. This is called the "Embed Link" in the Twilio SendGrid UI. |
| `signoutUrl` | `string` | Required | This URL is relevant only for an IdP-initiated authentication flow. If a user authenticates from their IdP, this URL will return them to their IdP when logging out. |
| `entityId` | `string` | Required | An identifier provided by your IdP to identify Twilio SendGrid in the SAML interaction. This is called the "SAML Issuer ID" in the Twilio SendGrid UI. |
| `completedIntegration` | `boolean \| undefined` | Optional | Indicates if the integration is complete. |

## Example (as JSON)

```json
{
  "name": "name0",
  "enabled": false,
  "signin_url": "signin_url6",
  "signout_url": "signout_url4",
  "entity_id": "entity_id2",
  "completed_integration": null
}
```

