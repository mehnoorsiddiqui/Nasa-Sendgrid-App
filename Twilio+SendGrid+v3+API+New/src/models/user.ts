/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface User {
  /** The username of a user who can send mail from the IP address. */
  username: string;
  /** The ID of a user who can send mail from the IP address. */
  userId: number;
}

export const userSchema: Schema<User> = object({
  username: ['username', string()],
  userId: ['user_id', number()],
});
