/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, object, optional, Schema, string } from '../schema';

export interface V3WhitelabelDomainsRequest {
  /** Domain being authenticated. */
  domain: string;
  /** The subdomain to use for this authenticated domain. */
  subdomain?: string;
  /** The username associated with this domain. */
  username?: string;
  /** The IP addresses that will be included in the custom SPF record for this authenticated domain. */
  ips?: string[];
  /** Specify whether to use a custom SPF or allow SendGrid to manage your SPF. This option is only available to authenticated domains set up for manual security. */
  customSpf?: boolean;
  /** Whether to use this authenticated domain as the fallback if no authenticated domains match the sender's domain. */
  mDefault?: boolean;
  /** Whether to allow SendGrid to manage your SPF records, DKIM keys, and DKIM key rotation. */
  automaticSecurity?: boolean;
  /** Add a custom DKIM selector. Accepts three letters or numbers. */
  customDkimSelector?: string;
}

export const v3WhitelabelDomainsRequestSchema: Schema<V3WhitelabelDomainsRequest> = object(
  {
    domain: ['domain', string()],
    subdomain: ['subdomain', optional(string())],
    username: ['username', optional(string())],
    ips: ['ips', optional(array(string()))],
    customSpf: ['custom_spf', optional(boolean())],
    mDefault: ['default', optional(boolean())],
    automaticSecurity: ['automatic_security', optional(boolean())],
    customDkimSelector: ['custom_dkim_selector', optional(string())],
  }
);
