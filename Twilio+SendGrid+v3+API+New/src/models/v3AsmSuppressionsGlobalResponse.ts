/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

export interface V3AsmSuppressionsGlobalResponse {
  /** The email addresses that are globally suppressed */
  recipientEmails: string[];
}

export const v3AsmSuppressionsGlobalResponseSchema: Schema<V3AsmSuppressionsGlobalResponse> = object(
  { recipientEmails: ['recipient_emails', array(string())] }
);
