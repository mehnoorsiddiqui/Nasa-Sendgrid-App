/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Errors72 {
  message?: string;
  errorId?: string;
}

export const errors72Schema: Schema<Errors72> = object({
  message: ['message', optional(string())],
  errorId: ['error_id', optional(string())],
});
