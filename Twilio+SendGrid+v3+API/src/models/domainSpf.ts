/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, Schema, string } from '../schema';

/** The SPF record for the root domain. */
export interface DomainSpf {
  /** The root domain that this SPF record will be used to authenticate. */
  host: string;
  /** The type of data in the SPF record. */
  type: string;
  /** The SPF record. */
  data: string;
  /** Indicates if the SPF record is valid. */
  valid: boolean;
}

export const domainSpfSchema: Schema<DomainSpf> = object({
  host: ['host', string()],
  type: ['type', string()],
  data: ['data', string()],
  valid: ['valid', boolean()],
});
