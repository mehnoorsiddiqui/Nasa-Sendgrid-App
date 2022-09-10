/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, nullable, object, optional, Schema, string } from '../schema';

export interface MailCname2 {
  /** Indicates if this DNS record is valid. */
  valid?: boolean;
  /** The reason this record is invalid. */
  reason?: string | null;
}

export const mailCname2Schema: Schema<MailCname2> = object({
  valid: ['valid', optional(boolean())],
  reason: ['reason', optional(nullable(string()))],
});
