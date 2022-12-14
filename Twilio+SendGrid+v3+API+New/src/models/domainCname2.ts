/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, nullable, object, Schema, string } from '../schema';

export interface DomainCname2 {
  /** Indicates if this DNS record is valid. */
  valid: boolean;
  /** Null if the DNS record is valid. If the DNS record is invalid, this will explain why. */
  reason: string | null;
}

export const domainCname2Schema: Schema<DomainCname2> = object({
  valid: ['valid', boolean()],
  reason: ['reason', nullable(string())],
});
