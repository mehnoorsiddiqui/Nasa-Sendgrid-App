/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface GETUserProfileresponse {
  /** The user's address. */
  address: string;
  /** The second line of the user's address. */
  address2?: string;
  /** The user's city. */
  city: string;
  /** The name of the user's company. */
  company: string;
  /** The user's country. */
  country: string;
  /** The user's first name. */
  firstName: string;
  /** The user's last name. */
  lastName: string;
  /** The user's phone number. */
  phone: string;
  /** The user's state. */
  state: string;
  /** The user's website URL. */
  website: string;
  /** The user's zip code. */
  zip: string;
}

export const gETUserProfileresponseSchema: Schema<GETUserProfileresponse> = object(
  {
    address: ['address', string()],
    address2: ['address2', optional(string())],
    city: ['city', string()],
    company: ['company', string()],
    country: ['country', string()],
    firstName: ['first_name', string()],
    lastName: ['last_name', string()],
    phone: ['phone', string()],
    state: ['state', string()],
    website: ['website', string()],
    zip: ['zip', string()],
  }
);
