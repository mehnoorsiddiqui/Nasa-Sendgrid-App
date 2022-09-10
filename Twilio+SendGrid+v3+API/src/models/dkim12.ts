/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, nullable, object, optional, Schema, string } from '../schema';

export interface Dkim12 {
  /** Indicates if the DNS record is valid. */
  valid?: boolean;
  reason?: string | null;
}

export const dkim12Schema: Schema<Dkim12> = object({
  valid: ['valid', optional(boolean())],
  reason: ['reason', optional(nullable(string()))],
});
