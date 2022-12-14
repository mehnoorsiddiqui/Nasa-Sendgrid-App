/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Country1Enum
 */
export enum Country1Enum {
  US = 'US',
  CA = 'CA',
}

/**
 * Schema for Country1Enum
 */
export const country1EnumSchema: Schema<Country1Enum> = stringEnum(Country1Enum);
