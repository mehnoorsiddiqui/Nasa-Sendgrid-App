/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface V3UserUsernameResponse1 {
  /** The current username on file for your account. */
  username: string;
}

export const v3UserUsernameResponse1Schema: Schema<V3UserUsernameResponse1> = object(
  { username: ['username', string()] }
);
