/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';
import { Type1Enum, type1EnumSchema } from './type1Enum';

/** The DNS record generated to verify who created the link branding. */
export interface OwnerCname {
  /** Indicates if the DNS record is valid. */
  valid: boolean;
  type?: Type1Enum;
  /** Used to verify the link branding. The subdomain of this domain is the ID of the user who created the link branding. */
  host: string;
  /** The domain that the DNS record points to. */
  data: string;
}

export const ownerCnameSchema: Schema<OwnerCname> = object({
  valid: ['valid', boolean()],
  type: ['type', optional(type1EnumSchema)],
  host: ['host', string()],
  data: ['data', string()],
});
