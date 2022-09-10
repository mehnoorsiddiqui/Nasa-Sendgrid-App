/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, Schema } from '../schema';

export interface Domain2 {
  /** Whether the email address syntax is valid. */
  hasValidAddressSyntax: boolean;
  /** Whether the email has appropriate DNS records to deliver a message. */
  hasMxOrARecord: boolean;
  /** Whether the domain appears to be from a disposable email address service. */
  isSuspectedDisposableAddress: boolean;
}

export const domain2Schema: Schema<Domain2> = object({
  hasValidAddressSyntax: ['has_valid_address_syntax', boolean()],
  hasMxOrARecord: ['has_mx_or_a_record', boolean()],
  isSuspectedDisposableAddress: ['is_suspected_disposable_address', boolean()],
});
