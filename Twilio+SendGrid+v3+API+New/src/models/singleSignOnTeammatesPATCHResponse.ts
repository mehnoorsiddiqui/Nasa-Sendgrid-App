/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, object, optional, Schema, string } from '../schema';
import { UserTypeEnum, userTypeEnumSchema } from './userTypeEnum';

export interface SingleSignOnTeammatesPATCHResponse {
  /** The Teammate’s first name. */
  firstName: string;
  /** The Teammate’s last name. */
  lastName: string;
  /** The Teammate’s email address. This email address will also function as the Teammate’s username and must match the address assigned to the user in your IdP. This address cannot be changed after the Teammate is created. */
  email: string;
  /** Indicates if the Teammate has admin permissions. */
  isAdmin?: boolean;
  /** Indicates if the Teammate has read_only permissions. */
  isReadOnly?: boolean;
  /** This should be set to the Teammate's email address. */
  username?: string;
  /** Indicates if the Teammate authenticates with SendGrid using SSO or with a username and password. */
  isSso?: boolean;
  /** The Teammate’s street address. */
  address?: string;
  /** The Teammate’s apartment number, suite number, or other secondary address information that is not part of the physical street address. */
  address2?: string;
  /** The Teammate's city. */
  city?: string;
  /** The Teammate’s company name. */
  company?: string;
  /** The Teammate’s country of residence. */
  country?: string;
  /** The Teammate’s stored phone number. */
  phone?: string;
  /** The permission scopes assigned to the Teammate. */
  scopes?: string[];
  /** The Teammate’s state or province. */
  state?: string;
  userType?: UserTypeEnum;
  /** A website associated with the Teammate */
  website?: string;
  /** The Teammate’s zip code. */
  zip?: string;
}

export const singleSignOnTeammatesPATCHResponseSchema: Schema<SingleSignOnTeammatesPATCHResponse> = object(
  {
    firstName: ['first_name', string()],
    lastName: ['last_name', string()],
    email: ['email', string()],
    isAdmin: ['is_admin', optional(boolean())],
    isReadOnly: ['is_read_only', optional(boolean())],
    username: ['username', optional(string())],
    isSso: ['is_sso', optional(boolean())],
    address: ['address', optional(string())],
    address2: ['address2', optional(string())],
    city: ['city', optional(string())],
    company: ['company', optional(string())],
    country: ['country', optional(string())],
    phone: ['phone', optional(string())],
    scopes: ['scopes', optional(array(string()))],
    state: ['state', optional(string())],
    userType: ['user_type', optional(userTypeEnumSchema)],
    website: ['website', optional(string())],
    zip: ['zip', optional(string())],
  }
);
