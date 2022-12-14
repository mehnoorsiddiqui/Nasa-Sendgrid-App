/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';
import { UserType1Enum, userType1EnumSchema } from './userType1Enum';

export interface Result6 {
  /** Teammate's username */
  username?: string;
  /** Teammate's email */
  email?: string;
  /** Teammate's first name */
  firstName?: string;
  /** Teammate's last name */
  lastName?: string;
  userType?: UserType1Enum;
  /** Set to true if teammate has admin privileges */
  isAdmin?: boolean;
  /** (optional) Teammate's phone number */
  phone?: string;
  /** (optional) Teammate's website */
  website?: string;
  /** (optional) Teammate's address */
  address?: string;
  /** (optional) Teammate's address */
  address2?: string;
  /** (optional) Teammate's city */
  city?: string;
  /** (optional) Teammate's state */
  state?: string;
  /** (optional) Teammate's zip */
  zip?: string;
  /** (optional) Teammate's country */
  country?: string;
}

export const result6Schema: Schema<Result6> = object({
  username: ['username', optional(string())],
  email: ['email', optional(string())],
  firstName: ['first_name', optional(string())],
  lastName: ['last_name', optional(string())],
  userType: ['user_type', optional(userType1EnumSchema)],
  isAdmin: ['is_admin', optional(boolean())],
  phone: ['phone', optional(string())],
  website: ['website', optional(string())],
  address: ['address', optional(string())],
  address2: ['address2', optional(string())],
  city: ['city', optional(string())],
  state: ['state', optional(string())],
  zip: ['zip', optional(string())],
  country: ['country', optional(string())],
});
