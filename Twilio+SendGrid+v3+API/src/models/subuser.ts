/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface Subuser {
  /** The ID of the subuser that this authenticated domain will be associated with. */
  userId?: number;
  /** The username of the subuser that this authenticated domain is associated with. */
  username?: string;
}

export const subuserSchema: Schema<Subuser> = object({
  userId: ['user_id', optional(number())],
  username: ['username', optional(string())],
});
