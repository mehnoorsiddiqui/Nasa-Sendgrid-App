/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, nullable, object, Schema, string } from '../schema';

export interface OwnerCname2 {
  /** Indicates if the DNS record is valid. */
  valid: boolean;
  /** Null if valid. If the DNS record is invalid, this will explain why. */
  reason: string | null;
}

export const ownerCname2Schema: Schema<OwnerCname2> = object({
  valid: ['valid', boolean()],
  reason: ['reason', nullable(string())],
});
