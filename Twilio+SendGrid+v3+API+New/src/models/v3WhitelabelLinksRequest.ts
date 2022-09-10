/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface V3WhitelabelLinksRequest {
  /** The root domain for the subdomain that you are creating the link branding for. This should match your FROM email address. */
  domain: string;
  /** The subdomain to create the link branding for. Must be different from the subdomain you used for authenticating your domain. */
  subdomain?: string;
  /** Indicates if you want to use this link branding as the default or fallback. When setting a new default, the existing default link branding will have its default status removed automatically. */
  mDefault?: boolean;
}

export const v3WhitelabelLinksRequestSchema: Schema<V3WhitelabelLinksRequest> = object(
  {
    domain: ['domain', string()],
    subdomain: ['subdomain', optional(string())],
    mDefault: ['default', optional(boolean())],
  }
);
