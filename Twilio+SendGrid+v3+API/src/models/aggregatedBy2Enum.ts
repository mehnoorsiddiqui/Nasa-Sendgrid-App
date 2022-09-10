/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AggregatedBy2Enum
 */
export enum AggregatedBy2Enum {
  Day = 'day',
  Week = 'week',
  Month = 'month',
}

/**
 * Schema for AggregatedBy2Enum
 */
export const aggregatedBy2EnumSchema: Schema<AggregatedBy2Enum> = stringEnum(AggregatedBy2Enum);
