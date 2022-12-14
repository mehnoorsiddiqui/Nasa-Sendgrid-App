/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ReservedField {
  name?: string;
  type?: string;
}

export const reservedFieldSchema: Schema<ReservedField> = object({
  name: ['name', optional(string())],
  type: ['type', optional(string())],
});
