/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Type8Enum
 */
export enum Type8Enum {
  Date = 'date',
  Text = 'text',
  Number = 'number',
}

/**
 * Schema for Type8Enum
 */
export const type8EnumSchema: Schema<Type8Enum> = stringEnum(Type8Enum);
