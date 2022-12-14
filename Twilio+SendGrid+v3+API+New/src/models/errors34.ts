/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Errors34 {
  message: string;
}

export const errors34Schema: Schema<Errors34> = object({
  message: ['message', string()],
});
