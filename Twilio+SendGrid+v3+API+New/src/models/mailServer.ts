/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, Schema, string } from '../schema';

/** Designates which mail server is responsible for accepting messages from a domain. */
export interface MailServer {
  /** The domain sending the messages. */
  host: string;
  /** They type of DNS record. */
  type: string;
  /** The mail server responsible for accepting messages from the sending domain. */
  data: string;
  /** Indicates if this is a valid DNS record. */
  valid: boolean;
}

export const mailServerSchema: Schema<MailServer> = object({
  host: ['host', string()],
  type: ['type', string()],
  data: ['data', string()],
  valid: ['valid', boolean()],
});
