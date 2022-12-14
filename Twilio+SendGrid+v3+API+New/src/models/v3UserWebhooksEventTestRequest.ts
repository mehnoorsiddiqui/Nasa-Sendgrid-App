/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface V3UserWebhooksEventTestRequest {
  /** The URL where you would like the test notification to be sent. */
  url?: string;
  /** The client ID Twilio SendGrid sends to your OAuth server or service provider to generate an OAuth access token. When passing data in this field, you must also include the oauth_client_secret and oauth_token_url fields. */
  oauthClientId?: string;
  /** This secret is needed only once to create an access token. SendGrid will store this secret, allowing you to update your Client ID and Token URL without passing the secret to SendGrid again.  When passing data in this field, you must also include the oauth_client_id and oauth_token_url fields. */
  oauthClientSecret?: string;
  /** The URL where Twilio SendGrid sends the Client ID and Client Secret to generate an access token. This should be your OAuth server or service provider.  When passing data in this field, you must also include the oauth_client_id and oauth_client_secret fields. */
  oauthTokenUrl?: string;
}

export const v3UserWebhooksEventTestRequestSchema: Schema<V3UserWebhooksEventTestRequest> = object(
  {
    url: ['url', optional(string())],
    oauthClientId: ['oauth_client_id', optional(string())],
    oauthClientSecret: ['oauth_client_secret', optional(string())],
    oauthTokenUrl: ['oauth_token_url', optional(string())],
  }
);
