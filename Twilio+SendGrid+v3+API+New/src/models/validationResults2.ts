/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Dkim12, dkim12Schema } from './dkim12';
import { MailCname2, mailCname2Schema } from './mailCname2';
import { Spf2, spf2Schema } from './spf2';

/** The individual DNS records that are checked when validating, including the reason for any invalid DNS records. */
export interface ValidationResults2 {
  mailCname?: MailCname2;
  dkim1?: Dkim12;
  dkim2?: Dkim12;
  spf?: Spf2;
}

export const validationResults2Schema: Schema<ValidationResults2> = object({
  mailCname: ['mail_cname', optional(lazy(() => mailCname2Schema))],
  dkim1: ['dkim1', optional(lazy(() => dkim12Schema))],
  dkim2: ['dkim2', optional(lazy(() => dkim12Schema))],
  spf: ['spf', optional(lazy(() => spf2Schema))],
});
