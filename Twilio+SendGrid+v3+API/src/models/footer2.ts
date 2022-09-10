/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface Footer2 {
  /** Indicates if this setting is enabled. */
  enable?: boolean;
  /** The plain text content of your footer. */
  text?: string;
  /** The HTML content of your footer. */
  html?: string;
}

export const footer2Schema: Schema<Footer2> = object({
  enable: ['enable', optional(boolean())],
  text: ['text', optional(string())],
  html: ['html', optional(string())],
});
