/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string, unknown } from '../schema';

export interface Error {
  /** the error message */
  message: string;
  /** the field that generated the error */
  field?: string | null;
  /** helper text or docs for troubleshooting */
  help?: unknown;
}

export const errorSchema: Schema<Error> = object({
  message: ['message', string()],
  field: ['field', optional(nullable(string()))],
  help: ['help', optional(unknown())],
});
