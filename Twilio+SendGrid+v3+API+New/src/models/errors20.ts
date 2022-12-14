/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Errors20 {
  field?: string;
  message: string;
  errorId: string;
}

export const errors20Schema: Schema<Errors20> = object({
  field: ['field', optional(string())],
  message: ['message', string()],
  errorId: ['error_id', string()],
});
