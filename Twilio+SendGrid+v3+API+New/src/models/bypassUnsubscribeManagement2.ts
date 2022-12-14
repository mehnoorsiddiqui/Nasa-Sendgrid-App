/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface BypassUnsubscribeManagement2 {
  /** Indicates if this setting is enabled. */
  enable?: boolean;
}

export const bypassUnsubscribeManagement2Schema: Schema<BypassUnsubscribeManagement2> = object(
  { enable: ['enable', optional(boolean())] }
);
