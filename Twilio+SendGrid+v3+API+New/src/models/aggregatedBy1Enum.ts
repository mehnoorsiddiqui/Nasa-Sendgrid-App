/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AggregatedBy1Enum
 */
export enum AggregatedBy1Enum {
  Day = 'day',
  Total = 'total',
}

/**
 * Schema for AggregatedBy1Enum
 */
export const aggregatedBy1EnumSchema: Schema<AggregatedBy1Enum> = stringEnum(AggregatedBy1Enum);
