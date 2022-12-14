/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface Result {
  /** The ID of the allowed IP. */
  id?: number;
  /** The allowed IP. */
  ip?: string;
  /** A Unix timestamp indicating when the IP was added to the allow list. */
  createdAt?: number;
  /** A Unix timestamp indicating when the IPs allow status was most recently updated. */
  updatedAt?: number;
}

export const resultSchema: Schema<Result> = object({
  id: ['id', optional(number())],
  ip: ['ip', optional(string())],
  createdAt: ['created_at', optional(number())],
  updatedAt: ['updated_at', optional(number())],
});
