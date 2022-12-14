/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SortByDirection4Enum
 */
export enum SortByDirection4Enum {
  Desc = 'desc',
  Asc = 'asc',
}

/**
 * Schema for SortByDirection4Enum
 */
export const sortByDirection4EnumSchema: Schema<SortByDirection4Enum> = stringEnum(SortByDirection4Enum);
