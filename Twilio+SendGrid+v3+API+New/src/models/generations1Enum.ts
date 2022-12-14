/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Generations1Enum
 */
export enum Generations1Enum {
  Legacy = 'legacy',
  Dynamic = 'dynamic',
  EnumLegacydynamic = 'legacy,dynamic',
}

/**
 * Schema for Generations1Enum
 */
export const generations1EnumSchema: Schema<Generations1Enum> = stringEnum(Generations1Enum);
