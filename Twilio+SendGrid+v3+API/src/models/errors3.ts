/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

export interface Errors3 {
  field?: string | null;
  /** A message explaining why the name of your IP pool could not be updated. */
  message?: string;
}

export const errors3Schema: Schema<Errors3> = object({
  field: ['field', optional(nullable(string()))],
  message: ['message', optional(string())],
});
